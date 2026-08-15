using System.Text;
using Microsoft.Graphics.Imaging;
using Microsoft.Windows.AI;
using Microsoft.Windows.AI.Imaging;
using Windows.Data.Pdf;
using Windows.Globalization;
using Windows.Graphics.Imaging;
using Windows.Media.Ocr;
using Windows.Storage;
using Windows.Storage.Streams;

// Usage:
//   OcrPdf <input.pdf> <output.txt> [startPage] [endPage] [targetWidthPx]
// Pages are 1-based and inclusive. Defaults: all pages, 2000px wide raster.

string input = args.Length > 0 ? args[0] : throw new ArgumentException("Missing input PDF path.");
string output = args.Length > 1 ? args[1] : Path.ChangeExtension(input, ".txt");
int startPage = args.Length > 2 ? int.Parse(args[2]) : 1;
int endPageArg = args.Length > 3 ? int.Parse(args[3]) : int.MaxValue;
uint targetWidth = args.Length > 4 ? uint.Parse(args[4]) : 2000;

input = Path.GetFullPath(input);
output = Path.GetFullPath(output);
Console.WriteLine($"Input : {input}");
Console.WriteLine($"Output: {output}");

StorageFile pdfFile = await StorageFile.GetFileFromPathAsync(input);
PdfDocument pdf = await PdfDocument.LoadFromFileAsync(pdfFile);
int pageCount = (int)pdf.PageCount;
int from = Math.Max(1, startPage);
int to = Math.Min(pageCount, endPageArg);
Console.WriteLine($"PDF has {pageCount} pages. OCR pages {from}..{to} at width {targetWidth}px.");

// Prefer the Windows App SDK on-device AI Text Recognition (NPU). Fall back to
// the legacy Windows.Media.Ocr engine if the AI model is unavailable.
TextRecognizer? aiRecognizer = await TryCreateAiRecognizerAsync();
OcrEngine? legacyEngine = null;
if (aiRecognizer is null)
{
    legacyEngine = OcrEngine.TryCreateFromLanguage(new Language("en-US"))
                   ?? OcrEngine.TryCreateFromUserProfileLanguages();
    Console.WriteLine(legacyEngine is null
        ? "ERROR: No OCR engine available."
        : "Using legacy Windows.Media.Ocr engine.");
    if (legacyEngine is null) return 1;
}
else
{
    Console.WriteLine("Using Windows App SDK AI TextRecognizer (NPU).");
}

Directory.CreateDirectory(Path.GetDirectoryName(output)!);
await using var writer = new StreamWriter(output, append: false, Encoding.UTF8);

for (int p = from; p <= to; p++)
{
    using PdfPage page = pdf.GetPage((uint)(p - 1));
    double scale = targetWidth / page.Size.Width;
    var renderOpts = new PdfPageRenderOptions
    {
        DestinationWidth = targetWidth,
        DestinationHeight = (uint)Math.Round(page.Size.Height * scale),
    };

    using var stream = new InMemoryRandomAccessStream();
    await page.RenderToStreamAsync(stream, renderOpts);
    stream.Seek(0);

    BitmapDecoder decoder = await BitmapDecoder.CreateAsync(stream);
    using SoftwareBitmap raw = await decoder.GetSoftwareBitmapAsync();
    using SoftwareBitmap bmp = SoftwareBitmap.Convert(raw, BitmapPixelFormat.Bgra8, BitmapAlphaMode.Premultiplied);

    string pageText;
    if (aiRecognizer is not null)
    {
        ImageBuffer imageBuffer = ImageBuffer.CreateForSoftwareBitmap(bmp);
        RecognizedText recognized = aiRecognizer.RecognizeTextFromImage(imageBuffer);
        var sb = new StringBuilder();
        foreach (var line in recognized.Lines)
            sb.AppendLine(line.Text);
        pageText = sb.ToString();
    }
    else
    {
        OcrResult result = await legacyEngine!.RecognizeAsync(bmp);
        pageText = result.Text;
    }

    await writer.WriteLineAsync($"\n===== PAGE {p} =====");
    await writer.WriteLineAsync(pageText.TrimEnd());
    await writer.FlushAsync();
    Console.WriteLine($"  page {p}/{to} -> {pageText.Length} chars");
}

Console.WriteLine("Done.");
return 0;

static async Task<TextRecognizer?> TryCreateAiRecognizerAsync()
{
    try
    {
        AIFeatureReadyState state = TextRecognizer.GetReadyState();
        if (state == AIFeatureReadyState.NotSupportedOnCurrentSystem
            || state == AIFeatureReadyState.DisabledByUser)
        {
            Console.WriteLine($"AI TextRecognizer not available: {state}.");
            return null;
        }
        if (state == AIFeatureReadyState.NotReady)
        {
            Console.WriteLine("Downloading AI text-recognition model…");
            var load = await TextRecognizer.EnsureReadyAsync();
            if (load.Status != AIFeatureReadyResultState.Success)
            {
                Console.WriteLine($"EnsureReadyAsync failed: {load.Status}.");
                return null;
            }
        }
        return await TextRecognizer.CreateAsync();
    }
    catch (Exception ex)
    {
        Console.WriteLine($"AI TextRecognizer unavailable ({ex.GetType().Name}: {ex.Message}). Falling back.");
        return null;
    }
}
