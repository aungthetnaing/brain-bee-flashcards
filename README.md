# Brain Bee Flashcards

A neuroscience study app for the [International Brain Bee](https://www.thebrainbee.org/),
built with Expo / React Native. Cards are grounded in the Society for Neuroscience
**Brain Facts: A Primer on the Brain and Nervous System (2018)**.

## Features

- **Study mode** — tap-to-reveal flip cards with answers and short explanations.
- **Quiz mode** — multiple-choice questions with instant feedback and scoring.
- **Browse mode** — all questions grouped by chapter.
- **Chapter filters** — focus on any chapter (Brain Basics, Senses & Perception,
  Movement, Learning & Memory, Disorders, Neurodegenerative Diseases, and more).

## Run it

```powershell
npm install
npm start
```

Then open the project in **Expo Go** on your iPhone/Android, or press `i` / `a`.

## How the content was built

The card content was extracted from the Brain Facts PDF using on-device OCR on
Windows (see `tools/OcrPdf`). The tool:

1. Rasterizes each PDF page with the built-in `Windows.Data.Pdf` API.
2. Recognizes text with the Windows App SDK **`Microsoft.Windows.AI.Imaging.TextRecognizer`**
   (NPU-accelerated), falling back to the on-device `Windows.Media.Ocr` engine when
   a packaged app identity isn't available.

Run the OCR tool:

```powershell
cd tools/OcrPdf
dotnet run -c Release -- "..\..\source\brainfacts.pdf" "..\..\source\brainfacts.txt"
```

The OCR text in `source/brainfacts.txt` was then condensed into the
question/answer/distractor sets in `src/data/brainFacts.ts`.

## Project structure

```
App.tsx                     Tab shell (Study / Quiz / Browse)
src/
  components/
    ChapterBar.tsx          Horizontal chapter filter chips
    FlipCard.tsx            Tap-to-reveal study card
  data/brainFacts.ts        The flashcard dataset (by chapter)
  screens/
    StudyScreen.tsx
    QuizScreen.tsx
    BrowseScreen.tsx
  theme.ts                  Colors / spacing / radius tokens
  types.ts                  BrainCard type
  utils.ts                  Chapter + shuffle helpers
tools/OcrPdf/               C# OCR tool (Windows App SDK + Windows.Data.Pdf)
.github/workflows/ios-ipa.yml  Builds an unsigned iOS IPA for sideloading
```

## Free iOS install (no Mac, no paid Apple account)

Push to GitHub and let the workflow build an unsigned `.ipa`, then sign + install
it with [Sideloadly](https://sideloadly.io) using a free Apple ID.

> Content adapted from *Brain Facts* © Society for Neuroscience, for personal study use.
