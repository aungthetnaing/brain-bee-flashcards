import { BrainCard } from "../types";

/**
 * Brain Bee–style flashcards derived from the Society for Neuroscience
 * "Brain Facts: A Primer on the Brain and Nervous System" (2018 edition).
 * Content was OCR-extracted from the source PDF and condensed into
 * question / answer / distractor sets for study and quizzing.
 *
 * Chapters follow the book's table of contents.
 */
export const BRAIN_FACTS: BrainCard[] = [
  // ────────────────────────── Brain Basics ──────────────────────────
  {
    id: "bb-1",
    chapter: "Brain Basics",
    question: "What is the largest part of the human brain?",
    answer: "The cerebrum",
    distractors: ["The cerebellum", "The brainstem", "The thalamus"],
    explanation:
      "The cerebrum is divided into left and right hemispheres connected by the corpus callosum.",
  },
  {
    id: "bb-2",
    chapter: "Brain Basics",
    question:
      "Which large bundle of nerve fibers connects the two cerebral hemispheres?",
    answer: "The corpus callosum",
    distractors: ["The brainstem", "The fornix", "The internal capsule"],
    explanation:
      "It carries information from one side of the brain to the other.",
  },
  {
    id: "bb-3",
    chapter: "Brain Basics",
    question:
      "The deeply folded outer layer of the cerebrum is called the…",
    answer: "Cerebral cortex",
    distractors: ["Corpus callosum", "Meninges", "White matter"],
    explanation:
      "Its folds increase surface area, packing in more neurons and processing power.",
  },
  {
    id: "bb-4",
    chapter: "Brain Basics",
    question: "Which lobe is primarily responsible for processing vision?",
    answer: "The occipital lobe",
    distractors: ["The frontal lobe", "The temporal lobe", "The parietal lobe"],
    explanation:
      "The occipital lobes at the back of the brain recognize colors and shapes.",
  },
  {
    id: "bb-5",
    chapter: "Brain Basics",
    question:
      "Which lobe coordinates voluntary movement, planning, and problem-solving?",
    answer: "The frontal lobe",
    distractors: [
      "The occipital lobe",
      "The parietal lobe",
      "The temporal lobe",
    ],
    explanation:
      "Frontal lobes handle higher cognitive skills, personality, and speech production.",
  },
  {
    id: "bb-6",
    chapter: "Brain Basics",
    question:
      "Which temporal-lobe structure is essential for encoding new memories?",
    answer: "The hippocampus",
    distractors: ["The amygdala", "The thalamus", "The hypothalamus"],
    explanation:
      "The amygdala nearby integrates memory with emotion; both are part of the limbic system.",
  },
  {
    id: "bb-7",
    chapter: "Brain Basics",
    question:
      "Which structure relays sensory information to the rest of the brain?",
    answer: "The thalamus",
    distractors: ["The cerebellum", "The pituitary gland", "The pons"],
    explanation:
      "The hypothalamus, by contrast, sends hormonal signals via the pituitary gland.",
  },
  {
    id: "bb-8",
    chapter: "Brain Basics",
    question:
      "Which brain region fine-tunes movement, balance, and coordination?",
    answer: "The cerebellum",
    distractors: ["The occipital lobe", "The amygdala", "The corpus callosum"],
    explanation:
      "The cerebellum ('little brain') sits at the back beneath the cerebrum.",
  },
  {
    id: "bb-9",
    chapter: "Brain Basics",
    question:
      "The midbrain, pons, and medulla together make up the…",
    answer: "Brainstem",
    distractors: ["Limbic system", "Forebrain", "Basal ganglia"],
    explanation:
      "The brainstem controls vital functions like breathing, heart rate, and blood pressure.",
  },
  {
    id: "bb-10",
    chapter: "Brain Basics",
    question: "What is the basic signaling cell of the nervous system?",
    answer: "The neuron",
    distractors: [
      "The glial cell",
      "The Schwann cell",
      "The astrocyte",
    ],
    explanation:
      "The brain contains billions of neurons that transmit information as electrical and chemical signals.",
  },
  {
    id: "bb-11",
    chapter: "Brain Basics",
    question:
      "Across which tiny gap do neurons communicate using neurotransmitters?",
    answer: "The synapse",
    distractors: ["The node of Ranvier", "The axon hillock", "The dendrite"],
    explanation:
      "An electrical impulse triggers chemical neurotransmitter release across the synaptic cleft.",
  },
  {
    id: "bb-12",
    chapter: "Brain Basics",
    question:
      "What fatty insulating sheath speeds electrical signals along axons?",
    answer: "Myelin",
    distractors: ["Collagen", "Keratin", "Fibrin"],
    explanation:
      "Myelin is produced by oligodendrocytes in the CNS and Schwann cells in the PNS.",
  },

  // ─────────────────────── Senses & Perception ───────────────────────
  {
    id: "sp-1",
    chapter: "Senses & Perception",
    question:
      "Which light-sensitive layer at the back of the eye contains rods and cones?",
    answer: "The retina",
    distractors: ["The cornea", "The iris", "The sclera"],
    explanation:
      "Rods handle dim light and motion; cones handle color and detail.",
  },
  {
    id: "sp-2",
    chapter: "Senses & Perception",
    question: "Which photoreceptors are responsible for color vision?",
    answer: "Cones",
    distractors: ["Rods", "Ganglion cells", "Bipolar cells"],
    explanation:
      "Humans have three cone types tuned to red, green, and blue wavelengths.",
  },
  {
    id: "sp-3",
    chapter: "Senses & Perception",
    question: "Which cranial nerve carries visual information to the brain?",
    answer: "The optic nerve",
    distractors: [
      "The auditory nerve",
      "The vagus nerve",
      "The trigeminal nerve",
    ],
    explanation: "Visual signals are ultimately processed in the occipital lobe.",
  },
  {
    id: "sp-4",
    chapter: "Senses & Perception",
    question:
      "Which spiral, fluid-filled structure of the inner ear transduces sound?",
    answer: "The cochlea",
    distractors: [
      "The eardrum",
      "The semicircular canals",
      "The eustachian tube",
    ],
    explanation:
      "Hair cells in the cochlea convert vibrations into electrical signals.",
  },
  {
    id: "sp-5",
    chapter: "Senses & Perception",
    question: "Which sense is most directly linked to memory and emotion?",
    answer: "Smell (olfaction)",
    distractors: ["Vision", "Hearing", "Touch"],
    explanation:
      "Olfactory signals reach the limbic system relatively directly, unlike other senses.",
  },
  {
    id: "sp-6",
    chapter: "Senses & Perception",
    question: "What are the five basic tastes detected by the tongue?",
    answer: "Sweet, sour, salty, bitter, umami",
    distractors: [
      "Sweet, sour, salty, bitter, spicy",
      "Sweet, salty, spicy, fatty, sour",
      "Sweet, bitter, minty, salty, umami",
    ],
    explanation:
      "Umami is the savory taste associated with glutamate.",
  },
  {
    id: "sp-7",
    chapter: "Senses & Perception",
    question:
      "The specialized nerve endings that detect painful stimuli are called…",
    answer: "Nociceptors",
    distractors: ["Proprioceptors", "Photoreceptors", "Baroreceptors"],
    explanation:
      "Nociceptors signal potential or actual tissue damage.",
  },
  {
    id: "sp-8",
    chapter: "Senses & Perception",
    question:
      "The sense of the position and movement of your own body is called…",
    answer: "Proprioception",
    distractors: ["Nociception", "Interoception", "Echolocation"],
    explanation:
      "Receptors in muscles and joints tell the brain where limbs are without looking.",
  },

  // ───────────────────────────── Movement ─────────────────────────────
  {
    id: "mv-1",
    chapter: "Movement",
    question:
      "Which cortical strip sends commands to initiate voluntary movement?",
    answer: "The primary motor cortex",
    distractors: [
      "The somatosensory cortex",
      "The visual cortex",
      "The auditory cortex",
    ],
    explanation:
      "It lies in the frontal lobe just in front of the central sulcus.",
  },
  {
    id: "mv-2",
    chapter: "Movement",
    question:
      "A group of deep-brain structures that help select and smooth movements is the…",
    answer: "Basal ganglia",
    distractors: [
      "The limbic system",
      "The reticular formation",
      "The choroid plexus",
    ],
    explanation:
      "Dysfunction here contributes to disorders like Parkinson's disease.",
  },
  {
    id: "mv-3",
    chapter: "Movement",
    question:
      "Which neurotransmitter is released at the neuromuscular junction to trigger muscle contraction?",
    answer: "Acetylcholine",
    distractors: ["Dopamine", "Serotonin", "GABA"],
    explanation:
      "Motor neurons release acetylcholine onto muscle fibers.",
  },
  {
    id: "mv-4",
    chapter: "Movement",
    question:
      "Rapid, automatic responses like the knee-jerk are coordinated mainly by the…",
    answer: "Spinal cord",
    distractors: ["Cerebellum", "Cerebral cortex", "Thalamus"],
    explanation:
      "Reflex arcs can act through the spinal cord before the brain is even aware.",
  },
  {
    id: "mv-5",
    chapter: "Movement",
    question:
      "Which brain structure is critical for balance and the timing of movements?",
    answer: "The cerebellum",
    distractors: ["The amygdala", "The hippocampus", "The pituitary"],
    explanation:
      "It compares intended with actual movement and makes corrections.",
  },

  // ───────────────── Learning, Memory & Emotions ─────────────────
  {
    id: "lm-1",
    chapter: "Learning, Memory & Emotions",
    question:
      "The strengthening of synapses thought to underlie learning is called…",
    answer: "Long-term potentiation (LTP)",
    distractors: [
      "Long-term depression",
      "Habituation",
      "Myelination",
    ],
    explanation:
      "LTP makes communication between neurons more efficient with repeated activity.",
  },
  {
    id: "lm-2",
    chapter: "Learning, Memory & Emotions",
    question:
      "Patient H.M., who lost the ability to form new memories, had which region removed?",
    answer: "The hippocampus (medial temporal lobes)",
    distractors: [
      "The prefrontal cortex",
      "The cerebellum",
      "The occipital lobe",
    ],
    explanation:
      "H.M. could still learn new motor skills, showing multiple memory systems exist.",
  },
  {
    id: "lm-3",
    chapter: "Learning, Memory & Emotions",
    question:
      "Memory for facts and events that you can consciously recall is called…",
    answer: "Declarative (explicit) memory",
    distractors: [
      "Procedural memory",
      "Working memory",
      "Sensory memory",
    ],
    explanation:
      "Procedural (implicit) memory covers skills like riding a bike.",
  },
  {
    id: "lm-4",
    chapter: "Learning, Memory & Emotions",
    question:
      "Which almond-shaped structure attaches emotional significance, especially fear, to events?",
    answer: "The amygdala",
    distractors: ["The hippocampus", "The thalamus", "The hypothalamus"],
    explanation:
      "It is central to processing fear and emotional memory.",
  },
  {
    id: "lm-5",
    chapter: "Learning, Memory & Emotions",
    question:
      "The temporary holding and manipulation of information 'in mind' is called…",
    answer: "Working memory",
    distractors: [
      "Long-term memory",
      "Procedural memory",
      "Flashbulb memory",
    ],
    explanation:
      "Working memory relies heavily on the prefrontal cortex.",
  },

  // ─────────────── Thinking, Planning & Language ───────────────
  {
    id: "tp-1",
    chapter: "Thinking, Planning & Language",
    question:
      "Higher-order skills like planning, inhibition, and working memory are collectively called…",
    answer: "Executive function",
    distractors: ["Proprioception", "Homeostasis", "Consolidation"],
    explanation:
      "Executive functions depend largely on the prefrontal cortex.",
  },
  {
    id: "tp-2",
    chapter: "Thinking, Planning & Language",
    question:
      "Damage to Broca's area typically impairs which ability?",
    answer: "Producing fluent speech",
    distractors: [
      "Understanding speech",
      "Seeing color",
      "Feeling pain",
    ],
    explanation:
      "Broca's area in the frontal lobe governs speech production.",
  },
  {
    id: "tp-3",
    chapter: "Thinking, Planning & Language",
    question:
      "Damage to Wernicke's area typically impairs which ability?",
    answer: "Understanding language",
    distractors: [
      "Producing speech",
      "Moving the legs",
      "Balancing",
    ],
    explanation:
      "Wernicke's area in the temporal lobe governs language comprehension.",
  },
  {
    id: "tp-4",
    chapter: "Thinking, Planning & Language",
    question:
      "Which lobe is the primary seat of executive function and decision-making?",
    answer: "The frontal lobe (prefrontal cortex)",
    distractors: [
      "The occipital lobe",
      "The temporal lobe",
      "The parietal lobe",
    ],
    explanation:
      "The prefrontal cortex is among the last brain regions to fully mature.",
  },

  // ──────────────────── The Developing Brain ────────────────────
  {
    id: "dv-1",
    chapter: "The Developing Brain",
    question:
      "The process by which a neuron's axon grows toward its target is guided by…",
    answer: "Chemical guidance cues (growth cones)",
    distractors: [
      "Random diffusion only",
      "Blood pressure",
      "Gravity",
    ],
    explanation:
      "Growth cones at the axon tip sense attractive and repulsive molecular signals.",
  },
  {
    id: "dv-2",
    chapter: "The Developing Brain",
    question:
      "In early development, the brain overproduces neurons and synapses, then removes extras through…",
    answer: "Apoptosis and synaptic pruning",
    distractors: [
      "Myelination",
      "Long-term potentiation",
      "Neurogenesis",
    ],
    explanation:
      "Pruning refines circuits based on activity — 'use it or lose it.'",
  },
  {
    id: "dv-3",
    chapter: "The Developing Brain",
    question:
      "The neural tube, which forms the brain and spinal cord, develops from which germ layer?",
    answer: "The ectoderm",
    distractors: ["The mesoderm", "The endoderm", "The blastoderm"],
    explanation:
      "The neural tube forms very early in embryonic development.",
  },
  {
    id: "dv-4",
    chapter: "The Developing Brain",
    question:
      "Windows of heightened sensitivity when experience strongly shapes circuits are called…",
    answer: "Critical (sensitive) periods",
    distractors: [
      "Refractory periods",
      "Latent periods",
      "Resting periods",
    ],
    explanation:
      "For example, early visual experience is crucial for normal sight.",
  },

  // ────────────── Infant, Child & Adolescent Brain ──────────────
  {
    id: "ic-1",
    chapter: "Infant, Child & Adolescent Brain",
    question:
      "Which brain region matures last, continuing into the mid-20s?",
    answer: "The prefrontal cortex",
    distractors: [
      "The brainstem",
      "The occipital lobe",
      "The cerebellum",
    ],
    explanation:
      "Its late maturation is linked to adolescent risk-taking and impulsivity.",
  },
  {
    id: "ic-2",
    chapter: "Infant, Child & Adolescent Brain",
    question:
      "The brain's ability to change and reorganize with experience is called…",
    answer: "Neuroplasticity",
    distractors: ["Homeostasis", "Myelination", "Apoptosis"],
    explanation:
      "Plasticity is greatest in childhood but continues throughout life.",
  },
  {
    id: "ic-3",
    chapter: "Infant, Child & Adolescent Brain",
    question:
      "During adolescence, which emotion-related structure develops earlier than the prefrontal cortex?",
    answer: "The amygdala (limbic system)",
    distractors: [
      "The medulla",
      "The corpus callosum",
      "The pituitary",
    ],
    explanation:
      "This imbalance may make teens more emotionally reactive and reward-seeking.",
  },

  // ─────────────────── Adult & Aging Brain ───────────────────
  {
    id: "ag-1",
    chapter: "Adult & Aging Brain",
    question:
      "In which region does neurogenesis continue in the adult human brain?",
    answer: "The hippocampus",
    distractors: [
      "The frontal cortex",
      "The cerebellum",
      "The brainstem",
    ],
    explanation:
      "New neurons in the hippocampus are linked to learning and memory.",
  },
  {
    id: "ag-2",
    chapter: "Adult & Aging Brain",
    question:
      "Which lifestyle factor is repeatedly linked to protecting the aging brain?",
    answer: "Regular physical exercise",
    distractors: [
      "High sugar intake",
      "Social isolation",
      "Chronic sleep loss",
    ],
    explanation:
      "Exercise, mental engagement, and social activity support cognitive health.",
  },
  {
    id: "ag-3",
    chapter: "Adult & Aging Brain",
    question:
      "Normal aging tends to slow which ability the most?",
    answer: "Processing speed and some memory retrieval",
    distractors: [
      "Vocabulary knowledge",
      "Basic reflex arcs",
      "Sense of smell only",
    ],
    explanation:
      "Well-learned knowledge (crystallized intelligence) is relatively preserved.",
  },

  // ───────────────────────── Brain States ─────────────────────────
  {
    id: "st-1",
    chapter: "Brain States",
    question:
      "During which sleep stage do most vivid dreams and rapid eye movements occur?",
    answer: "REM sleep",
    distractors: [
      "Stage 1 NREM",
      "Slow-wave (deep) sleep",
      "Wakefulness",
    ],
    explanation:
      "REM sleep is associated with vivid dreaming and memory consolidation.",
  },
  {
    id: "st-2",
    chapter: "Brain States",
    question:
      "Which hormone, released by the pineal gland, signals darkness and promotes sleep?",
    answer: "Melatonin",
    distractors: ["Cortisol", "Insulin", "Adrenaline"],
    explanation:
      "Melatonin rises in the evening as part of the sleep–wake cycle.",
  },
  {
    id: "st-3",
    chapter: "Brain States",
    question:
      "The roughly 24-hour internal clock governing sleep and wakefulness is the…",
    answer: "Circadian rhythm",
    distractors: [
      "Ultradian rhythm",
      "Reflex arc",
      "Refractory period",
    ],
    explanation:
      "The suprachiasmatic nucleus of the hypothalamus is the master clock.",
  },
  {
    id: "st-4",
    chapter: "Brain States",
    question:
      "Deep, slow-wave sleep is especially important for…",
    answer: "Physical restoration and memory consolidation",
    distractors: [
      "Vivid dreaming",
      "Rapid eye movements",
      "Muscle paralysis",
    ],
    explanation:
      "Slow-wave sleep dominates early in the night.",
  },

  // ──────────────────── The Body in Balance ────────────────────
  {
    id: "bl-1",
    chapter: "The Body in Balance",
    question:
      "The process of maintaining a stable internal environment is called…",
    answer: "Homeostasis",
    distractors: ["Metabolism", "Plasticity", "Apoptosis"],
    explanation:
      "The hypothalamus is a key regulator of homeostasis.",
  },
  {
    id: "bl-2",
    chapter: "The Body in Balance",
    question:
      "Which brain structure links the nervous system to the endocrine system via the pituitary gland?",
    answer: "The hypothalamus",
    distractors: ["The cerebellum", "The hippocampus", "The pons"],
    explanation:
      "It controls hunger, thirst, temperature, and hormone release.",
  },
  {
    id: "bl-3",
    chapter: "The Body in Balance",
    question:
      "Which division of the autonomic nervous system drives the 'fight-or-flight' response?",
    answer: "The sympathetic nervous system",
    distractors: [
      "The parasympathetic nervous system",
      "The somatic nervous system",
      "The enteric nervous system",
    ],
    explanation:
      "The parasympathetic system promotes 'rest-and-digest' functions.",
  },
  {
    id: "bl-4",
    chapter: "The Body in Balance",
    question:
      "Chronic stress keeps which hormone elevated, which can harm the brain over time?",
    answer: "Cortisol",
    distractors: ["Melatonin", "Dopamine", "Oxytocin"],
    explanation:
      "Prolonged high cortisol can impair the hippocampus and memory.",
  },

  // ───────────────────── Childhood Disorders ─────────────────────
  {
    id: "cd-1",
    chapter: "Childhood Disorders",
    question:
      "Autism spectrum disorder primarily affects which domains?",
    answer: "Social communication and repetitive behaviors",
    distractors: [
      "Vision and hearing loss",
      "Muscle wasting",
      "Blood clotting",
    ],
    explanation:
      "ASD is a neurodevelopmental condition with a wide range of severity.",
  },
  {
    id: "cd-2",
    chapter: "Childhood Disorders",
    question:
      "ADHD is characterized by a persistent pattern of…",
    answer: "Inattention and/or hyperactivity-impulsivity",
    distractors: [
      "Memory loss and tremor",
      "Loss of vision",
      "Progressive paralysis",
    ],
    explanation:
      "ADHD involves differences in attention and executive-function networks.",
  },
  {
    id: "cd-3",
    chapter: "Childhood Disorders",
    question:
      "Which disorder involves recurrent, unprovoked seizures?",
    answer: "Epilepsy",
    distractors: ["Autism", "Dyslexia", "ADHD"],
    explanation:
      "Seizures result from abnormal, excessive electrical activity in the brain.",
  },

  // ──────────────────── Psychiatric Disorders ────────────────────
  {
    id: "ps-1",
    chapter: "Psychiatric Disorders",
    question:
      "Major depression is associated with dysregulation of which neurotransmitters?",
    answer: "Serotonin, norepinephrine, and dopamine",
    distractors: [
      "Acetylcholine and histamine only",
      "Insulin and glucagon",
      "Melatonin and cortisol only",
    ],
    explanation:
      "Many antidepressants act on serotonin and norepinephrine systems.",
  },
  {
    id: "ps-2",
    chapter: "Psychiatric Disorders",
    question:
      "Schizophrenia is strongly linked to overactivity of which neurotransmitter system?",
    answer: "The dopamine system",
    distractors: [
      "The GABA system only",
      "The insulin system",
      "The melatonin system",
    ],
    explanation:
      "Antipsychotic drugs largely block dopamine receptors.",
  },
  {
    id: "ps-3",
    chapter: "Psychiatric Disorders",
    question:
      "Which disorder features alternating episodes of mania and depression?",
    answer: "Bipolar disorder",
    distractors: [
      "Generalized anxiety disorder",
      "OCD",
      "PTSD",
    ],
    explanation:
      "Mood stabilizers such as lithium are commonly used to treat it.",
  },
  {
    id: "ps-4",
    chapter: "Psychiatric Disorders",
    question:
      "Persistent, intrusive thoughts paired with repetitive rituals characterize…",
    answer: "Obsessive-compulsive disorder (OCD)",
    distractors: [
      "Schizophrenia",
      "Bipolar disorder",
      "Major depression",
    ],
    explanation:
      "OCD involves circuits linking the cortex, striatum, and thalamus.",
  },

  // ───────────────────────── Addiction ─────────────────────────
  {
    id: "ad-1",
    chapter: "Addiction",
    question:
      "Most addictive drugs increase which neurotransmitter in the brain's reward pathway?",
    answer: "Dopamine",
    distractors: ["GABA", "Acetylcholine", "Glutamate"],
    explanation:
      "The mesolimbic dopamine pathway signals reward and reinforcement.",
  },
  {
    id: "ad-2",
    chapter: "Addiction",
    question:
      "Which structure is a key hub of the brain's reward circuit?",
    answer: "The nucleus accumbens",
    distractors: [
      "The cerebellum",
      "The occipital cortex",
      "The medulla",
    ],
    explanation:
      "It receives dopamine from the ventral tegmental area (VTA).",
  },
  {
    id: "ad-3",
    chapter: "Addiction",
    question:
      "Needing more of a drug to get the same effect is called…",
    answer: "Tolerance",
    distractors: ["Withdrawal", "Sensitization", "Homeostasis"],
    explanation:
      "Tolerance reflects the brain adapting to repeated drug exposure.",
  },

  // ─────────────────────── Injury & Illness ───────────────────────
  {
    id: "in-1",
    chapter: "Injury & Illness",
    question:
      "A stroke occurs when what is disrupted to part of the brain?",
    answer: "Blood supply (and thus oxygen)",
    distractors: [
      "Cerebrospinal fluid only",
      "Electrical grounding",
      "Myelin production",
    ],
    explanation:
      "Ischemic strokes block a vessel; hemorrhagic strokes involve bleeding.",
  },
  {
    id: "in-2",
    chapter: "Injury & Illness",
    question:
      "A concussion is a form of which injury?",
    answer: "Traumatic brain injury (TBI)",
    distractors: [
      "Neurodegenerative disease",
      "Autoimmune disease",
      "Genetic disorder",
    ],
    explanation:
      "Concussions result from a blow or jolt that disrupts brain function.",
  },
  {
    id: "in-3",
    chapter: "Injury & Illness",
    question:
      "In multiple sclerosis, the immune system attacks what part of neurons?",
    answer: "The myelin sheath",
    distractors: [
      "The cell nucleus",
      "The synaptic vesicles",
      "The dendritic spines",
    ],
    explanation:
      "Loss of myelin slows or blocks nerve signal transmission.",
  },
  {
    id: "in-4",
    chapter: "Injury & Illness",
    question:
      "Which protective membranes surround the brain and spinal cord?",
    answer: "The meninges",
    distractors: [
      "The pleura",
      "The pericardium",
      "The peritoneum",
    ],
    explanation:
      "Inflammation of the meninges is called meningitis.",
  },

  // ─────────────── Neurodegenerative Diseases ───────────────
  {
    id: "nd-1",
    chapter: "Neurodegenerative Diseases",
    question:
      "Alzheimer's disease is associated with which two abnormal protein deposits?",
    answer: "Amyloid-beta plaques and tau tangles",
    distractors: [
      "Lewy bodies and prions",
      "Myelin plaques and clots",
      "Collagen and fibrin",
    ],
    explanation:
      "These deposits disrupt neuron function, especially in memory regions.",
  },
  {
    id: "nd-2",
    chapter: "Neurodegenerative Diseases",
    question:
      "Parkinson's disease results from the loss of neurons that produce…",
    answer: "Dopamine (in the substantia nigra)",
    distractors: [
      "Serotonin",
      "Acetylcholine",
      "GABA",
    ],
    explanation:
      "Dopamine loss causes tremor, rigidity, and slowed movement.",
  },
  {
    id: "nd-3",
    chapter: "Neurodegenerative Diseases",
    question:
      "Huntington's disease is caused by what kind of underlying defect?",
    answer: "A single inherited gene mutation",
    distractors: [
      "A viral infection",
      "A vitamin deficiency",
      "A head injury",
    ],
    explanation:
      "It is an autosomal dominant disorder caused by an expanded CAG repeat.",
  },
  {
    id: "nd-4",
    chapter: "Neurodegenerative Diseases",
    question:
      "ALS (Lou Gehrig's disease) primarily destroys which cells?",
    answer: "Motor neurons",
    distractors: [
      "Photoreceptors",
      "Astrocytes",
      "Hippocampal neurons",
    ],
    explanation:
      "Degeneration of motor neurons leads to progressive muscle weakness.",
  },

  // ─────────────────────── Kinds of Research ───────────────────────
  {
    id: "kr-1",
    chapter: "Kinds of Research",
    question:
      "Which imaging method measures brain activity via blood-oxygen changes?",
    answer: "Functional MRI (fMRI)",
    distractors: [
      "X-ray",
      "Ultrasound",
      "Electromyography",
    ],
    explanation:
      "fMRI uses the BOLD signal as an indirect indicator of neural activity.",
  },
  {
    id: "kr-2",
    chapter: "Kinds of Research",
    question:
      "Which technique records the brain's electrical activity from the scalp?",
    answer: "Electroencephalography (EEG)",
    distractors: [
      "CT scan",
      "PET scan",
      "MRI",
    ],
    explanation:
      "EEG has excellent time resolution, useful for studying sleep and seizures.",
  },
  {
    id: "kr-3",
    chapter: "Kinds of Research",
    question:
      "Using light to control genetically modified neurons is called…",
    answer: "Optogenetics",
    distractors: [
      "Electrophysiology",
      "Immunohistochemistry",
      "Microdialysis",
    ],
    explanation:
      "Optogenetics lets researchers turn specific neurons on or off with light.",
  },

  // ──────────────────── Solving Human Problems ────────────────────
  {
    id: "sh-1",
    chapter: "Solving Human Problems",
    question:
      "A device that lets the brain control a computer or prosthetic directly is a…",
    answer: "Brain-machine (brain-computer) interface",
    distractors: [
      "Pacemaker",
      "Cochlear amplifier",
      "Defibrillator",
    ],
    explanation:
      "BMIs can restore communication or movement for people with paralysis.",
  },
  {
    id: "sh-2",
    chapter: "Solving Human Problems",
    question:
      "Which implant can restore a sense of hearing by stimulating the auditory nerve?",
    answer: "A cochlear implant",
    distractors: [
      "A retinal implant",
      "A deep-brain stimulator",
      "A vagus nerve stimulator",
    ],
    explanation:
      "Cochlear implants bypass damaged hair cells to stimulate the nerve directly.",
  },
  {
    id: "sh-3",
    chapter: "Solving Human Problems",
    question:
      "Deep brain stimulation is an established treatment for the motor symptoms of…",
    answer: "Parkinson's disease",
    distractors: [
      "Multiple sclerosis",
      "Alzheimer's disease",
      "Stroke",
    ],
    explanation:
      "Electrodes deliver pulses to targets such as the subthalamic nucleus.",
  },

  // ─────────────────── Neuroscience in Society ───────────────────
  {
    id: "ns-1",
    chapter: "Neuroscience in Society",
    question:
      "The field examining ethical issues raised by neuroscience is called…",
    answer: "Neuroethics",
    distractors: [
      "Neuroeconomics",
      "Neurolinguistics",
      "Neuropathology",
    ],
    explanation:
      "Neuroethics addresses privacy, enhancement, and responsibility questions.",
  },
  {
    id: "ns-2",
    chapter: "Neuroscience in Society",
    question:
      "Which organization publishes the Brain Facts book?",
    answer: "The Society for Neuroscience (SfN)",
    distractors: [
      "The World Health Organization",
      "The National Rifle Association",
      "The American Medical Association",
    ],
    explanation:
      "SfN is the world's largest organization of brain researchers.",
  },

  // ───────────── Additional Brain Bee verbal Q&A (supplement) ─────────────
  {
    id: "xb-1",
    chapter: "Brain Basics",
    question:
      "Roughly how many neurons are in the adult human brain (order of magnitude)?",
    answer: "About 86 billion",
    distractors: ["About 1 million", "About 500 thousand", "About 10 trillion"],
    explanation:
      "Estimates put the human brain at roughly 86 billion neurons.",
  },
  {
    id: "xb-2",
    chapter: "Brain Basics",
    question:
      "What is the branch of a neuron that receives incoming signals called?",
    answer: "The dendrite",
    distractors: ["The axon", "The soma", "The synapse"],
    explanation:
      "Dendrites receive signals; the axon carries the output away from the cell body.",
  },
  {
    id: "xb-3",
    chapter: "Brain Basics",
    question:
      "What is the resting membrane potential of a typical neuron?",
    answer: "About −70 millivolts",
    distractors: ["About +40 millivolts", "0 millivolts", "About −20 millivolts"],
    explanation:
      "The inside of a resting neuron is negative relative to the outside.",
  },
  {
    id: "xb-4",
    chapter: "Brain Basics",
    question:
      "The principle that a neuron either fires a full action potential or none at all is called…",
    answer: "The all-or-none principle",
    distractors: [
      "The refractory principle",
      "Saltatory conduction",
      "Temporal summation",
    ],
    explanation:
      "Action potential amplitude does not vary with stimulus strength once threshold is reached.",
  },
  {
    id: "xb-5",
    chapter: "Brain Basics",
    question:
      "Rapid signal jumping between nodes of Ranvier on myelinated axons is called…",
    answer: "Saltatory conduction",
    distractors: [
      "Continuous conduction",
      "Retrograde transport",
      "Synaptic summation",
    ],
    explanation:
      "Myelin gaps (nodes of Ranvier) let the impulse 'leap' and travel faster.",
  },
  {
    id: "xb-6",
    chapter: "Brain Basics",
    question:
      "Which ion rushing into the neuron drives the rising (depolarization) phase of the action potential?",
    answer: "Sodium (Na⁺)",
    distractors: ["Potassium (K⁺)", "Chloride (Cl⁻)", "Calcium (Ca²⁺)"],
    explanation:
      "Potassium (K⁺) leaving the cell then drives repolarization.",
  },
  {
    id: "xb-7",
    chapter: "Brain Basics",
    question:
      "Which ion's influx into the axon terminal triggers neurotransmitter release?",
    answer: "Calcium (Ca²⁺)",
    distractors: ["Sodium (Na⁺)", "Potassium (K⁺)", "Magnesium (Mg²⁺)"],
    explanation:
      "Calcium entry causes synaptic vesicles to fuse and release neurotransmitter.",
  },
  {
    id: "xb-8",
    chapter: "Brain Basics",
    question:
      "What are the most abundant support cells of the nervous system called?",
    answer: "Glial cells (glia)",
    distractors: ["Neurons", "Myocytes", "Osteocytes"],
    explanation:
      "Types include astrocytes, oligodendrocytes, microglia, and Schwann cells.",
  },
  {
    id: "xb-9",
    chapter: "Brain Basics",
    question:
      "Which glial cells act as the brain's resident immune defense?",
    answer: "Microglia",
    distractors: ["Astrocytes", "Oligodendrocytes", "Ependymal cells"],
    explanation:
      "Microglia clear debris and pathogens in the central nervous system.",
  },
  {
    id: "xb-10",
    chapter: "Brain Basics",
    question:
      "Which glial cells myelinate axons in the central nervous system?",
    answer: "Oligodendrocytes",
    distractors: ["Schwann cells", "Astrocytes", "Microglia"],
    explanation:
      "In the peripheral nervous system, Schwann cells provide myelin instead.",
  },
  {
    id: "xb-11",
    chapter: "Brain Basics",
    question:
      "The selective barrier that shields the brain from many bloodborne substances is the…",
    answer: "Blood–brain barrier",
    distractors: ["Meninges", "Pia mater", "Choroid plexus"],
    explanation:
      "Tight junctions between capillary cells restrict what enters brain tissue.",
  },
  {
    id: "xb-12",
    chapter: "Brain Basics",
    question:
      "The clear fluid that cushions the brain and fills the ventricles is…",
    answer: "Cerebrospinal fluid (CSF)",
    distractors: ["Plasma", "Lymph", "Vitreous humor"],
    explanation:
      "CSF is produced largely by the choroid plexus and cushions the CNS.",
  },
  {
    id: "xb-13",
    chapter: "Brain Basics",
    question: "How many pairs of cranial nerves are there?",
    answer: "12 pairs",
    distractors: ["10 pairs", "31 pairs", "8 pairs"],
    explanation:
      "There are 12 pairs of cranial nerves and 31 pairs of spinal nerves.",
  },
  {
    id: "xb-14",
    chapter: "Brain Basics",
    question:
      "Which is the longest cranial nerve, controlling many organs and 'rest-and-digest' functions?",
    answer: "The vagus nerve (CN X)",
    distractors: [
      "The optic nerve (CN II)",
      "The trigeminal nerve (CN V)",
      "The facial nerve (CN VII)",
    ],
    explanation:
      "The vagus nerve is a major parasympathetic pathway to the heart and gut.",
  },
  {
    id: "xb-15",
    chapter: "Brain Basics",
    question:
      "The peripheral nervous system is divided into which two functional systems?",
    answer: "Somatic and autonomic",
    distractors: [
      "Sympathetic and parasympathetic",
      "Central and peripheral",
      "Sensory and motor only",
    ],
    explanation:
      "The autonomic system further divides into sympathetic and parasympathetic.",
  },
  {
    id: "xb-16",
    chapter: "Brain Basics",
    question:
      "The main excitatory neurotransmitter in the brain is…",
    answer: "Glutamate",
    distractors: ["GABA", "Dopamine", "Acetylcholine"],
    explanation:
      "Glutamate excites neurons; GABA is the main inhibitory neurotransmitter.",
  },
  {
    id: "xb-17",
    chapter: "Brain Basics",
    question:
      "The main inhibitory neurotransmitter in the adult brain is…",
    answer: "GABA",
    distractors: ["Glutamate", "Norepinephrine", "Serotonin"],
    explanation:
      "GABA reduces the likelihood that a neuron will fire; many sedatives enhance it.",
  },
  {
    id: "xb-18",
    chapter: "The Body in Balance",
    question:
      "Which neurotransmitter do most sympathetic 'fight-or-flight' target neurons release?",
    answer: "Norepinephrine",
    distractors: ["Acetylcholine", "GABA", "Serotonin"],
    explanation:
      "The adrenal medulla also releases epinephrine into the bloodstream.",
  },
  {
    id: "xb-19",
    chapter: "The Body in Balance",
    question:
      "Which hormone, linked to bonding and trust, is released during childbirth and nursing?",
    answer: "Oxytocin",
    distractors: ["Cortisol", "Insulin", "Melatonin"],
    explanation:
      "Oxytocin is produced in the hypothalamus and released via the pituitary.",
  },
  {
    id: "xb-20",
    chapter: "Senses & Perception",
    question:
      "The point where the optic nerve exits the eye, creating a natural blind spot, is the…",
    answer: "Optic disc",
    distractors: ["Fovea", "Macula", "Ora serrata"],
    explanation:
      "The optic disc has no photoreceptors, producing a blind spot.",
  },
  {
    id: "xb-21",
    chapter: "Senses & Perception",
    question:
      "The small central retinal region of sharpest, most detailed vision is the…",
    answer: "Fovea",
    distractors: ["Optic disc", "Sclera", "Ciliary body"],
    explanation:
      "The fovea is densely packed with cones for high-acuity vision.",
  },
  {
    id: "xb-22",
    chapter: "Senses & Perception",
    question:
      "Which inner-ear structures sense head rotation to help maintain balance?",
    answer: "The semicircular canals",
    distractors: ["The cochlea", "The eardrum", "The ossicles"],
    explanation:
      "The vestibular system includes the semicircular canals and otolith organs.",
  },
  {
    id: "xb-23",
    chapter: "Learning, Memory & Emotions",
    question:
      "The weakening of synaptic connections, complementary to LTP, is called…",
    answer: "Long-term depression (LTD)",
    distractors: [
      "Long-term potentiation",
      "Habituation",
      "Sensitization",
    ],
    explanation:
      "LTP and LTD together tune synaptic strength during learning.",
  },
  {
    id: "xb-24",
    chapter: "Learning, Memory & Emotions",
    question:
      "Neurons that fire both when performing an action and when watching it are called…",
    answer: "Mirror neurons",
    distractors: ["Place cells", "Pyramidal cells", "Purkinje cells"],
    explanation:
      "Mirror neurons are implicated in imitation and understanding others' actions.",
  },
  {
    id: "xb-25",
    chapter: "Learning, Memory & Emotions",
    question:
      "Stabilizing a new memory over time, partly during sleep, is called memory…",
    answer: "Consolidation",
    distractors: ["Encoding", "Retrieval", "Extinction"],
    explanation:
      "Consolidation gradually transfers memories toward long-term storage.",
  },
  {
    id: "xb-26",
    chapter: "Thinking, Planning & Language",
    question:
      "Loss of language ability due to brain damage is called…",
    answer: "Aphasia",
    distractors: ["Apraxia", "Agnosia", "Ataxia"],
    explanation:
      "Broca's (non-fluent) and Wernicke's (fluent) aphasias affect different areas.",
  },
  {
    id: "xb-27",
    chapter: "Movement",
    question:
      "The band of cortex just behind the frontal lobe that maps voluntary movement is organized as a…",
    answer: "Motor homunculus",
    distractors: [
      "Sensory homunculus",
      "Tonotopic map",
      "Retinotopic map",
    ],
    explanation:
      "Body parts needing fine control (hands, face) get disproportionately large map areas.",
  },
  {
    id: "xb-28",
    chapter: "Brain States",
    question:
      "Which small hypothalamic region acts as the body's master circadian clock?",
    answer: "The suprachiasmatic nucleus (SCN)",
    distractors: [
      "The pineal gland",
      "The pituitary gland",
      "The substantia nigra",
    ],
    explanation:
      "The SCN synchronizes body rhythms to the light–dark cycle.",
  },
  {
    id: "xb-29",
    chapter: "Injury & Illness",
    question:
      "The two broad categories of stroke are ischemic and…",
    answer: "Hemorrhagic",
    distractors: ["Traumatic", "Ischemic-lacunar only", "Metabolic"],
    explanation:
      "Ischemic strokes block blood flow; hemorrhagic strokes involve bleeding.",
  },
  {
    id: "xb-30",
    chapter: "Injury & Illness",
    question:
      "Inflammation of the protective membranes around the brain and spinal cord is called…",
    answer: "Meningitis",
    distractors: ["Encephalitis", "Myelitis", "Neuritis"],
    explanation:
      "Meningitis can be caused by bacterial or viral infection.",
  },
  {
    id: "xb-31",
    chapter: "Neurodegenerative Diseases",
    question:
      "The abnormal protein clumps found inside neurons in Parkinson's disease are called…",
    answer: "Lewy bodies",
    distractors: [
      "Amyloid plaques",
      "Neurofibrillary tangles",
      "Prion aggregates",
    ],
    explanation:
      "Lewy bodies contain aggregated alpha-synuclein protein.",
  },
  {
    id: "xb-32",
    chapter: "Kinds of Research",
    question:
      "Which non-invasive method uses magnetic pulses to stimulate or suppress cortical activity?",
    answer: "Transcranial magnetic stimulation (TMS)",
    distractors: [
      "Functional MRI",
      "Electroencephalography",
      "Positron emission tomography",
    ],
    explanation:
      "TMS can transiently activate or disrupt a targeted brain region.",
  },
  {
    id: "xb-33",
    chapter: "Kinds of Research",
    question:
      "The 'father of modern neuroscience,' who drew neurons and proposed the neuron doctrine, was…",
    answer: "Santiago Ramón y Cajal",
    distractors: [
      "Camillo Golgi",
      "Phineas Gage",
      "Charles Sherrington",
    ],
    explanation:
      "Cajal argued neurons are discrete cells; he shared the 1906 Nobel Prize with Golgi.",
  },
];

