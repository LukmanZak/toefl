import { Category } from '../types';

export const VOCABULARY_CATEGORY: Category = {
  id: 'vocabulary',
  title: 'Vocabulary Mastery',
  icon: 'languages',
  lessons: [
    {
      id: 'v-1',
      title: 'Academic Vocabulary',
      description: 'Learning words commonly used in university settings.',
      tips: [
        "Learn words in context, not just from a list.",
        "Pay attention to word families (e.g., analyze, analysis, analytical).",
        "Use a dictionary to check for multiple meanings.",
        "Practice using new words in your own writing.",
        "Identify common prefixes and suffixes."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Academic Word List</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Academic vocabulary consists of words that are frequently used in academic texts and lectures across many different subjects.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <ul class="list-disc pl-6 space-y-2 text-sm">
              <li><strong>Analyze:</strong> To examine something in detail.</li>
              <li><strong>Significant:</strong> Important or noticeable.</li>
              <li><strong>Theory:</strong> A formal idea or explanation.</li>
            </ul>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'v1',
          text: 'The results of the study were _______ , leading to a change in policy.',
          options: ['insignificant', 'significant', 'signify', 'significantly'],
          correctAnswer: 1,
          explanation: '"Significant" is an adjective meaning important. For example: "There has been a significant increase in sales."'
        },
        {
          id: 'v2',
          text: 'Researchers need to _______ the data before drawing a conclusion.',
          options: ['analysis', 'analyze', 'analytical', 'analyzed'],
          correctAnswer: 1,
          explanation: '"Analyze" is the verb form. For example: "We need to analyze the problem carefully."'
        },
        {
          id: 'v3',
          text: 'The scientist proposed a new _______ to explain the phenomenon.',
          options: ['theory', 'theoretical', 'theorize', 'theories'],
          correctAnswer: 0,
          explanation: '"Theory" is a noun meaning a formal explanation. For example: "The theory of relativity."'
        },
        {
          id: 'v4',
          text: 'There is a strong _______ between poverty and crime.',
          options: ['correlate', 'correlation', 'correlated', 'correlating'],
          correctAnswer: 1,
          explanation: '"Correlation" is a noun meaning a relationship or connection. For example: "A correlation between two variables."'
        },
        {
          id: 'v5',
          text: 'The government implemented a new _______ to reduce pollution.',
          options: ['policy', 'politic', 'political', 'politician'],
          correctAnswer: 0,
          explanation: '"Policy" is a noun meaning a plan or course of action. For example: "The company\'s privacy policy."'
        },
        {
          id: 'v1-6',
          text: 'Which word is a synonym for "Analyze"?',
          options: ['Ignore', 'Examine', 'Create', 'Forget'],
          correctAnswer: 1,
          explanation: '"Examine" is a synonym for "Analyze". Both mean to look at something closely.'
        },
        {
          id: 'v1-7',
          text: 'The word "Significant" is closest in meaning to:',
          options: ['Small', 'Important', 'Hidden', 'Fast'],
          correctAnswer: 1,
          explanation: '"Important" is a synonym for "Significant".'
        },
        {
          id: 'v1-8',
          text: 'A _______ is a set of ideas intended to explain something.',
          options: ['Fact', 'Theory', 'Result', 'Method'],
          correctAnswer: 1,
          explanation: 'A theory is a formal explanation or set of ideas.'
        },
        {
          id: 'v1-9',
          text: 'What is the noun form of the verb "Analyze"?',
          options: ['Analyzed', 'Analysis', 'Analytical', 'Analyzes'],
          correctAnswer: 1,
          explanation: '"Analysis" is the noun form.'
        },
        {
          id: 'v1-10',
          text: 'Which word describes something that is "important or large enough to be noticed"?',
          options: ['Insignificant', 'Significant', 'Minor', 'Trivial'],
          correctAnswer: 1,
          explanation: '"Significant" fits this definition.'
        }
      ]
    },
    {
      id: 'v-2',
      title: 'Context Clues',
      description: 'Using surrounding words to figure out unknown meanings.',
      tips: [
        "Look for synonyms or definitions in the same sentence.",
        "Look for antonyms or words that show contrast.",
        "Use examples provided in the text to infer the meaning.",
        "Consider the overall tone and topic of the passage.",
        "Check if the word is a noun, verb, or adjective."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Using Context</h3>
          <p class="text-on-surface-variant leading-relaxed">
            You don't always need a dictionary to understand a new word. The words around it often provide <strong>clues</strong> to its meaning.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Example: "The mountain was <strong>immense</strong>; it was so large that it took three days to climb." (Clue: "so large")</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'v6',
          text: 'The student was very <strong>diligent</strong>; he studied for five hours every night and never missed a class.',
          options: ['Lazy', 'Hardworking', 'Intelligent', 'Funny'],
          correctAnswer: 1,
          explanation: 'The context ("studied for five hours every night") suggests that "diligent" means hardworking.'
        },
        {
          id: 'v7',
          text: 'The weather was <strong>volatile</strong>, changing from sunny to rainy in just a few minutes.',
          options: ['Stable', 'Unpredictable', 'Beautiful', 'Cold'],
          correctAnswer: 1,
          explanation: 'The context ("changing... in just a few minutes") suggests that "volatile" means unpredictable or likely to change.'
        },
        {
          id: 'v8',
          text: 'The room was <strong>cluttered</strong> with old newspapers, empty boxes, and dirty clothes.',
          options: ['Clean', 'Empty', 'Messy', 'Large'],
          correctAnswer: 2,
          explanation: 'The list of items ("old newspapers, empty boxes, and dirty clothes") suggests that "cluttered" means messy or full of things.'
        },
        {
          id: 'v9',
          text: 'He is a <strong>gregarious</strong> person who loves going to parties and meeting new people.',
          options: ['Shy', 'Quiet', 'Sociable', 'Angry'],
          correctAnswer: 2,
          explanation: 'The context ("loves going to parties and meeting new people") suggests that "gregarious" means sociable.'
        },
        {
          id: 'v10',
          text: 'The instructions were <strong>ambiguous</strong>, so no one knew exactly what to do.',
          options: ['Clear', 'Unclear', 'Simple', 'Long'],
          correctAnswer: 1,
          explanation: 'The context ("no one knew exactly what to do") suggests that "ambiguous" means unclear or having more than one meaning.'
        },
        {
          id: 'v2-6',
          text: 'The <strong>immense</strong> mountain took three days to climb.',
          options: ['Small', 'Huge', 'Beautiful', 'Steep'],
          correctAnswer: 1,
          explanation: 'The context ("took three days to climb") suggests that "immense" means huge.'
        },
        {
          id: 'v2-7',
          text: 'The <strong>scarcity</strong> of water made it difficult for the plants to grow.',
          options: ['Abundance', 'Lack', 'Quality', 'Flow'],
          correctAnswer: 1,
          explanation: 'The context ("difficult for the plants to grow") suggests that "scarcity" means a lack of something.'
        },
        {
          id: 'v2-8',
          text: 'He was <strong>elated</strong> when he heard the good news.',
          options: ['Sad', 'Angry', 'Very happy', 'Confused'],
          correctAnswer: 2,
          explanation: 'The context ("good news") suggests that "elated" means very happy.'
        },
        {
          id: 'v2-9',
          text: 'The <strong>meticulous</strong> scientist checked every detail of the experiment.',
          options: ['Careless', 'Fast', 'Careful', 'Bored'],
          correctAnswer: 2,
          explanation: 'The context ("checked every detail") suggests that "meticulous" means very careful.'
        },
        {
          id: 'v2-10',
          text: 'The <strong>monotonous</strong> lecture made the students feel sleepy.',
          options: ['Exciting', 'Loud', 'Boring and repetitive', 'Short'],
          correctAnswer: 2,
          explanation: 'The context ("made the students feel sleepy") suggests that "monotonous" means boring and repetitive.'
        }
      ]
    },
    {
      id: 'v-3',
      title: 'Academic Idioms & Phrasal Verbs',
      description: 'Understanding common expressions in an academic context.',
      tips: [
        "Learn phrasal verbs as single units of meaning.",
        "Pay attention to the preposition (e.g., look up, look into, look after).",
        "Identify idioms that are common in lectures (e.g., 'on the same page').",
        "Practice using these expressions in conversation.",
        "Keep a list of idioms you encounter in your reading."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Idioms and Phrasal Verbs</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Academic English often uses specific <strong>phrasal verbs</strong> and <strong>idioms</strong> that might not be obvious from the individual words.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <ul class="list-disc pl-6 space-y-2 text-sm">
              <li><strong>Look into:</strong> To investigate.</li>
              <li><strong>Break down:</strong> To analyze or explain in detail.</li>
              <li><strong>On the same page:</strong> To have the same understanding.</li>
            </ul>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'v11',
          text: 'The professor asked us to _______ the main causes of the war.',
          options: ['look into', 'look up', 'look after', 'look for'],
          correctAnswer: 0,
          explanation: '"Look into" means to investigate or research. For example: "The police are looking into the crime."'
        },
        {
          id: 'v12',
          text: 'Can you _______ this complex theory for me?',
          options: ['break up', 'break down', 'break out', 'break in'],
          correctAnswer: 1,
          explanation: '"Break down" means to explain something complicated in simpler parts. For example: "Let me break down the costs for you."'
        },
        {
          id: 'v13',
          text: 'Before we start the project, we need to make sure everyone is _______ .',
          options: ['on the same book', 'on the same page', 'on the same line', 'on the same paper'],
          correctAnswer: 1,
          explanation: '"On the same page" is an idiom meaning to have the same understanding or agreement.'
        },
        {
          id: 'v14',
          text: 'I need to _______ some information for my essay.',
          options: ['look into', 'look up', 'look after', 'look for'],
          correctAnswer: 1,
          explanation: '"Look up" means to search for information in a book or online. For example: "I looked up the word in the dictionary."'
        },
        {
          id: 'v15',
          text: 'The experiment didn\'t _______ as we expected.',
          options: ['turn up', 'turn out', 'turn off', 'turn in'],
          correctAnswer: 1,
          explanation: '"Turn out" means to happen or result in a particular way. For example: "The party turned out to be a great success."'
        },
        {
          id: 'v3-6',
          text: 'What does "look into" mean?',
          options: ['To ignore', 'To investigate', 'To watch', 'To find'],
          correctAnswer: 1,
          explanation: '"Look into" is a synonym for "investigate".'
        },
        {
          id: 'v3-7',
          text: 'What does "break down" mean in an academic context?',
          options: ['To stop working', 'To analyze in detail', 'To cry', 'To separate'],
          correctAnswer: 1,
          explanation: '"Break down" means to analyze or explain in detail.'
        },
        {
          id: 'v3-8',
          text: 'Being "on the same page" means:',
          options: ['Reading the same book', 'Having the same understanding', 'Writing on the same paper', 'Being in the same class'],
          correctAnswer: 1,
          explanation: 'It means having the same understanding.'
        },
        {
          id: 'v3-9',
          text: 'Which phrasal verb means "to search for information"?',
          options: ['Look after', 'Look up', 'Look into', 'Look for'],
          correctAnswer: 1,
          explanation: '"Look up" is used for searching information.'
        },
        {
          id: 'v3-10',
          text: 'Which phrasal verb means "to result in a particular way"?',
          options: ['Turn on', 'Turn off', 'Turn out', 'Turn up'],
          correctAnswer: 2,
          explanation: '"Turn out" describes the result of something.'
        }
      ]
    },
    {
      id: 'v-4',
      title: 'Advanced Connectors',
      description: 'Using sophisticated words to link your ideas.',
      tips: [
        "Use 'furthermore' and 'moreover' to add information.",
        "Use 'nevertheless' and 'nonetheless' for contrast.",
        "Use 'consequently' and 'accordingly' for results.",
        "Use 'subsequently' to show a sequence in time.",
        "Use 'conversely' to show an opposite idea."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Connectors</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Advanced connectors help you create a more cohesive and professional piece of writing or speech.
          </p>
        </div>
      `,
      questions: [
        {
          id: 'v16',
          text: 'The research was expensive; _______, it took much longer than planned.',
          options: ['furthermore', 'nevertheless', 'consequently', 'conversely'],
          correctAnswer: 0,
          explanation: '"Furthermore" is used to add another point. For example: "The house is old; furthermore, it needs many repairs."'
        },
        {
          id: 'v17',
          text: 'The team played well; _______, they lost the match.',
          options: ['furthermore', 'nevertheless', 'consequently', 'conversely'],
          correctAnswer: 1,
          explanation: '"Nevertheless" means "however" or "in spite of that". For example: "It was raining; nevertheless, we went for a walk."'
        },
        {
          id: 'v18',
          text: 'He failed to follow the instructions; _______, the experiment failed.',
          options: ['furthermore', 'nevertheless', 'consequently', 'conversely'],
          correctAnswer: 2,
          explanation: '"Consequently" means "as a result". For example: "He was late; consequently, he missed the bus."'
        },
        {
          id: 'v19',
          text: 'Some people prefer city life; _______, others enjoy the peace of the countryside.',
          options: ['furthermore', 'nevertheless', 'consequently', 'conversely'],
          correctAnswer: 3,
          explanation: '"Conversely" is used to introduce an opposite or contrasting idea. For example: "Poor health can lead to stress; conversely, stress can lead to poor health."'
        },
        {
          id: 'v20',
          text: 'The initial results were promising; _______, the project was given more funding.',
          options: ['accordingly', 'nevertheless', 'conversely', 'furthermore'],
          correctAnswer: 0,
          explanation: '"Accordingly" means "in a way that is appropriate to the situation" or "therefore". For example: "He was found guilty and sentenced accordingly."'
        },
        {
          id: 'v4-6',
          text: 'Which connector is a synonym for "Moreover"?',
          options: ['Nevertheless', 'Furthermore', 'Consequently', 'Conversely'],
          correctAnswer: 1,
          explanation: '"Furthermore" and "Moreover" are synonyms used to add information.'
        },
        {
          id: 'v4-7',
          text: 'Which connector is a synonym for "However"?',
          options: ['Furthermore', 'Nevertheless', 'Consequently', 'Accordingly'],
          correctAnswer: 1,
          explanation: '"Nevertheless" is a synonym for "However".'
        },
        {
          id: 'v4-8',
          text: 'Which connector is a synonym for "Therefore"?',
          options: ['Furthermore', 'Nevertheless', 'Consequently', 'Conversely'],
          correctAnswer: 2,
          explanation: '"Consequently" is a synonym for "Therefore".'
        },
        {
          id: 'v4-9',
          text: 'Which connector is used to show an opposite idea?',
          options: ['Furthermore', 'Moreover', 'Conversely', 'Accordingly'],
          correctAnswer: 2,
          explanation: '"Conversely" shows an opposite idea.'
        },
        {
          id: 'v4-10',
          text: 'Which connector means "in a way that is appropriate to the situation"?',
          options: ['Furthermore', 'Accordingly', 'Nevertheless', 'Conversely'],
          correctAnswer: 1,
          explanation: '"Accordingly" fits this definition.'
        }
      ]
    },
    {
      id: 'v-5',
      title: 'Word Forms & Derivatives',
      description: 'Understanding how words change between noun, verb, and adjective.',
      tips: [
        "Identify common suffixes for nouns (-tion, -ity, -ness).",
        "Identify common suffixes for adjectives (-able, -ive, -al).",
        "Identify common suffixes for verbs (-ize, -ate, -ify).",
        "Pay attention to how the meaning changes slightly between forms.",
        "Practice transforming words into different parts of speech."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Word Families</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Most academic words belong to a family of related forms. Understanding these forms helps you expand your vocabulary quickly.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Example: Create (verb) -> Creation (noun) -> Creative (adjective) -> Creatively (adverb)</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'v21',
          text: 'The _______ of the new technology was a major breakthrough.',
          options: ['develop', 'development', 'developing', 'developed'],
          correctAnswer: 1,
          explanation: 'We need a noun here. "Development" is the noun form of "develop".'
        },
        {
          id: 'v22',
          text: 'She is a very _______ person who always has new ideas.',
          options: ['create', 'creation', 'creative', 'creatively'],
          correctAnswer: 2,
          explanation: 'We need an adjective to describe "person". "Creative" is the adjective form.'
        },
        {
          id: 'v23',
          text: 'The company plans to _______ its operations next year.',
          options: ['expand', 'expansion', 'expansive', 'expansively'],
          correctAnswer: 0,
          explanation: 'We need a verb after "plans to". "Expand" is the verb form.'
        },
        {
          id: 'v24',
          text: 'The results were _______ accurate.',
          options: ['surprise', 'surprising', 'surprisingly', 'surprised'],
          correctAnswer: 2,
          explanation: 'We need an adverb to describe the adjective "accurate". "Surprisingly" is the adverb form.'
        },
        {
          id: 'v25',
          text: 'It is important to _______ between facts and opinions.',
          options: ['distinction', 'distinct', 'distinguish', 'distinctly'],
          correctAnswer: 2,
          explanation: 'We need a verb after "important to". "Distinguish" is the verb form.'
        },
        {
          id: 'v5-6',
          text: 'What is the noun form of "Analyze"?',
          options: ['Analyzed', 'Analysis', 'Analytical', 'Analyzes'],
          correctAnswer: 1,
          explanation: '"Analysis" is the noun form.'
        },
        {
          id: 'v5-7',
          text: 'What is the adjective form of "Significance"?',
          options: ['Signify', 'Significant', 'Significantly', 'Signified'],
          correctAnswer: 1,
          explanation: '"Significant" is the adjective form.'
        },
        {
          id: 'v5-8',
          text: 'What is the verb form of "Creation"?',
          options: ['Creative', 'Creatively', 'Create', 'Creator'],
          correctAnswer: 2,
          explanation: '"Create" is the verb form.'
        },
        {
          id: 'v5-9',
          text: 'What is the adverb form of "Precise"?',
          options: ['Precision', 'Precisely', 'Preciseness', 'Precising'],
          correctAnswer: 1,
          explanation: '"Precisely" is the adverb form.'
        },
        {
          id: 'v5-10',
          text: 'What is the noun form of "Maintain"?',
          options: ['Maintained', 'Maintenance', 'Maintaining', 'Maintains'],
          correctAnswer: 1,
          explanation: '"Maintenance" is the noun form.'
        }
      ]
    },
    {
      id: 'v-6',
      title: 'Collocations in Academic English',
      description: 'Learning which words naturally go together.',
      tips: [
        "Learn words in pairs or groups (e.g., 'conduct research', 'draw a conclusion').",
        "Pay attention to which prepositions follow certain verbs or nouns.",
        "Use a collocation dictionary to check for natural-sounding combinations.",
        "Identify common academic phrases (e.g., 'in terms of', 'with respect to').",
        "Practice using collocations in your own writing."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Collocations</h3>
          <p class="text-on-surface-variant leading-relaxed">
            <strong>Collocations</strong> are words that are habitually placed together. Using them makes your English sound more natural and fluent.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <ul class="list-disc pl-6 space-y-2 text-sm">
              <li><strong>Conduct</strong> an experiment / research</li>
              <li><strong>Draw</strong> a conclusion</li>
              <li><strong>Provide</strong> evidence</li>
            </ul>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'v26',
          text: 'The scientists _______ a series of experiments to test their theory.',
          options: ['did', 'made', 'conducted', 'performed'],
          correctAnswer: 2,
          explanation: '"Conduct an experiment" is a very common academic collocation.'
        },
        {
          id: 'v27',
          text: 'Based on the evidence, we can _______ the following conclusion.',
          options: ['make', 'draw', 'get', 'take'],
          correctAnswer: 1,
          explanation: '"Draw a conclusion" is the standard collocation in academic writing.'
        },
        {
          id: 'v28',
          text: 'The author _______ several examples to support his argument.',
          options: ['gave', 'provided', 'showed', 'put'],
          correctAnswer: 1,
          explanation: '"Provide an example" or "provide evidence" are common collocations.'
        },
        {
          id: 'v29',
          text: 'There is a _______ need for more research in this area.',
          options: ['big', 'large', 'pressing', 'heavy'],
          correctAnswer: 2,
          explanation: '"Pressing need" is a common collocation meaning an urgent need.'
        },
        {
          id: 'v30',
          text: 'The study _______ a significant contribution to the field of medicine.',
          options: ['did', 'made', 'gave', 'took'],
          correctAnswer: 1,
          explanation: '"Make a contribution" is the correct collocation.'
        },
        {
          id: 'v6-6',
          text: 'Which verb collocates with "research"?',
          options: ['Make', 'Do', 'Conduct', 'Give'],
          correctAnswer: 2,
          explanation: '"Conduct research" is the preferred academic collocation.'
        },
        {
          id: 'v6-7',
          text: 'Which verb collocates with "evidence"?',
          options: ['Provide', 'Make', 'Take', 'Do'],
          correctAnswer: 0,
          explanation: '"Provide evidence" is a common collocation.'
        },
        {
          id: 'v6-8',
          text: 'Which verb collocates with "a decision"?',
          options: ['Make', 'Do', 'Draw', 'Perform'],
          correctAnswer: 0,
          explanation: '"Make a decision" is the standard collocation.'
        },
        {
          id: 'v6-9',
          text: 'Which adjective collocates with "impact"?',
          options: ['Big', 'Large', 'Significant', 'Heavy'],
          correctAnswer: 2,
          explanation: '"Significant impact" is a common academic phrase.'
        },
        {
          id: 'v6-10',
          text: 'Which verb collocates with "a role"?',
          options: ['Do', 'Make', 'Play', 'Take'],
          correctAnswer: 2,
          explanation: '"Play a role" is the correct collocation.'
        }
      ]
    },
    {
      id: 'v-7',
      title: 'Synonyms & Antonyms',
      description: 'Expanding vocabulary by learning related words.',
      tips: [
        "Use a thesaurus to find synonyms.",
        "Pay attention to subtle differences in meaning (nuance).",
        "Learn antonyms to understand contrast.",
        "Practice replacing common words with more academic synonyms.",
        "Identify words with multiple synonyms."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Synonyms and Antonyms</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Learning synonyms (words with similar meanings) and antonyms (words with opposite meanings) is a great way to build a rich vocabulary.
          </p>
        </div>
      `,
      questions: [
        {
          id: 'v7-1',
          text: 'Which word is a synonym for "Abundant"?',
          options: ['Scarce', 'Plentiful', 'Rare', 'Small'],
          correctAnswer: 1,
          explanation: '"Plentiful" is a synonym for "Abundant".'
        },
        {
          id: 'v7-2',
          text: 'Which word is an antonym for "Ambiguous"?',
          options: ['Unclear', 'Vague', 'Clear', 'Doubtful'],
          correctAnswer: 2,
          explanation: '"Clear" is the opposite of "Ambiguous".'
        },
        {
          id: 'v7-3',
          text: 'Which word is a synonym for "Meticulous"?',
          options: ['Careless', 'Careful', 'Fast', 'Lazy'],
          correctAnswer: 1,
          explanation: '"Careful" is a synonym for "Meticulous".'
        },
        {
          id: 'v7-4',
          text: 'Which word is an antonym for "Inherent"?',
          options: ['Intrinsic', 'Innate', 'Acquired', 'Natural'],
          correctAnswer: 2,
          explanation: '"Acquired" is the opposite of "Inherent" (which is natural/innate).'
        },
        {
          id: 'v7-5',
          text: 'Which word is a synonym for "Facilitate"?',
          options: ['Hinder', 'Assist', 'Block', 'Stop'],
          correctAnswer: 1,
          explanation: '"Assist" is a synonym for "Facilitate".'
        },
        {
          id: 'v7-6',
          text: 'Which word is a synonym for "Analyze"?',
          options: ['Examine', 'Ignore', 'Create', 'Forget'],
          correctAnswer: 0,
          explanation: '"Examine" is a synonym for "Analyze".'
        },
        {
          id: 'v7-7',
          text: 'Which word is an antonym for "Significant"?',
          options: ['Important', 'Notable', 'Insignificant', 'Substantial'],
          correctAnswer: 2,
          explanation: '"Insignificant" is the antonym.'
        },
        {
          id: 'v7-8',
          text: 'Which word is a synonym for "Theory"?',
          options: ['Fact', 'Hypothesis', 'Proof', 'Result'],
          correctAnswer: 1,
          explanation: '"Hypothesis" is often used as a synonym for "Theory" in early stages.'
        },
        {
          id: 'v7-9',
          text: 'Which word is an antonym for "Rational"?',
          options: ['Logical', 'Reasonable', 'Irrational', 'Sane'],
          correctAnswer: 2,
          explanation: '"Irrational" is the antonym.'
        },
        {
          id: 'v7-10',
          text: 'Which word is a synonym for "Precise"?',
          options: ['Vague', 'Exact', 'General', 'Rough'],
          correctAnswer: 1,
          explanation: '"Exact" is a synonym for "Precise".'
        }
      ]
    },
    {
      id: 'v-8',
      title: 'Prefixes & Suffixes',
      description: 'Breaking down words to understand their roots.',
      tips: [
        "Learn common prefixes (un-, re-, pre-, mis-).",
        "Learn common suffixes (-tion, -less, -ful, -able).",
        "Identify how prefixes change the meaning (e.g., 'un-' means 'not').",
        "Identify how suffixes change the part of speech.",
        "Practice breaking down long words."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Word Parts</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Many English words are made of smaller parts: prefixes, roots, and suffixes.
          </p>
        </div>
      `,
      questions: [
        {
          id: 'v8-1',
          text: 'What does the prefix "un-" usually mean?',
          options: ['Again', 'Not', 'Before', 'Wrongly'],
          correctAnswer: 1,
          explanation: '"un-" means not (e.g., unhappy, unclear).'
        },
        {
          id: 'v8-2',
          text: 'Which suffix usually indicates a noun?',
          options: ['-ly', '-able', '-tion', '-ive'],
          correctAnswer: 2,
          explanation: '"-tion" is a common noun suffix (e.g., education, creation).'
        },
        {
          id: 'v8-3',
          text: 'What does the prefix "re-" usually mean?',
          options: ['Not', 'Again', 'Before', 'After'],
          correctAnswer: 1,
          explanation: '"re-" means again (e.g., redo, rewrite).'
        },
        {
          id: 'v8-4',
          text: 'Which suffix usually indicates an adjective?',
          options: ['-ness', '-ity', '-able', '-ment'],
          correctAnswer: 2,
          explanation: '"-able" is a common adjective suffix (e.g., comfortable, reliable).'
        },
        {
          id: 'v8-5',
          text: 'What does the prefix "pre-" usually mean?',
          options: ['After', 'Before', 'Not', 'Again'],
          correctAnswer: 1,
          explanation: '"pre-" means before (e.g., prefix, prehistoric).'
        },
        {
          id: 'v8-6',
          text: 'What does the suffix "-less" mean?',
          options: ['Full of', 'Without', 'Able to', 'State of'],
          correctAnswer: 1,
          explanation: '"-less" means without (e.g., hopeless, fearless).'
        },
        {
          id: 'v8-7',
          text: 'What does the suffix "-ful" mean?',
          options: ['Without', 'Full of', 'Able to', 'State of'],
          correctAnswer: 1,
          explanation: '"-ful" means full of (e.g., beautiful, helpful).'
        },
        {
          id: 'v8-8',
          text: 'What does the prefix "mis-" usually mean?',
          options: ['Not', 'Again', 'Wrongly', 'Before'],
          correctAnswer: 2,
          explanation: '"mis-" means wrongly (e.g., mistake, misunderstand).'
        },
        {
          id: 'v8-9',
          text: 'Which suffix usually indicates an adverb?',
          options: ['-ness', '-ly', '-tion', '-ity'],
          correctAnswer: 1,
          explanation: '"-ly" is a common adverb suffix (e.g., quickly, slowly).'
        },
        {
          id: 'v8-10',
          text: 'What does the suffix "-ness" indicate?',
          options: ['A verb', 'An adjective', 'A noun (state or quality)', 'An adverb'],
          correctAnswer: 2,
          explanation: '"-ness" forms nouns from adjectives (e.g., happiness, kindness).'
        }
      ]
    },
    {
      id: 'v-9',
      title: 'Scientific Vocabulary',
      description: 'Words used in biology, chemistry, and physics.',
      tips: [
        "Learn words related to the scientific method.",
        "Identify common Greek and Latin roots.",
        "Pay attention to units of measurement.",
        "Understand the difference between a law and a theory.",
        "Practice reading scientific abstracts."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Science Words</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Scientific texts use specific vocabulary to describe observations, experiments, and theories.
          </p>
        </div>
      `,
      questions: [
        {
          id: 'v9-1',
          text: 'A _______ is a testable explanation for an observation.',
          options: ['Law', 'Theory', 'Hypothesis', 'Result'],
          correctAnswer: 2,
          explanation: 'A hypothesis is a testable explanation.'
        },
        {
          id: 'v9-2',
          text: 'The _______ variable is the one that is changed in an experiment.',
          options: ['Dependent', 'Independent', 'Constant', 'Control'],
          correctAnswer: 1,
          explanation: 'The independent variable is changed by the researcher.'
        },
        {
          id: 'v9-3',
          text: 'To _______ is to watch something carefully to gain information.',
          options: ['Analyze', 'Observe', 'Predict', 'Conclude'],
          correctAnswer: 1,
          explanation: 'To observe is to watch carefully.'
        },
        {
          id: 'v9-4',
          text: 'A _______ is a substance that speeds up a chemical reaction.',
          options: ['Reactant', 'Product', 'Catalyst', 'Solvent'],
          correctAnswer: 2,
          explanation: 'A catalyst speeds up a reaction.'
        },
        {
          id: 'v9-5',
          text: '_______ is the study of living organisms.',
          options: ['Physics', 'Chemistry', 'Biology', 'Geology'],
          correctAnswer: 2,
          explanation: 'Biology is the study of life.'
        },
        {
          id: 'v9-6',
          text: 'What is the "control group" in an experiment?',
          options: ['The group that gets the treatment', 'The group that does not get the treatment', 'The group that records the data', 'The group that funds the study'],
          correctAnswer: 1,
          explanation: 'The control group is used for comparison and does not receive the treatment.'
        },
        {
          id: 'v9-7',
          text: 'Which word means "the result or effect of an action"?',
          options: ['Cause', 'Consequence', 'Variable', 'Method'],
          correctAnswer: 1,
          explanation: '"Consequence" is the result or effect.'
        },
        {
          id: 'v9-8',
          text: 'To _______ is to suggest a possible explanation based on evidence.',
          options: ['Prove', 'Infer', 'Ignore', 'Forget'],
          correctAnswer: 1,
          explanation: 'To infer is to suggest based on evidence.'
        },
        {
          id: 'v9-9',
          text: 'What is "empirical" evidence?',
          options: ['Evidence based on theory', 'Evidence based on observation or experience', 'Evidence based on rumors', 'Evidence based on feelings'],
          correctAnswer: 1,
          explanation: 'Empirical evidence is based on direct observation or experience.'
        },
        {
          id: 'v9-10',
          text: 'Which word means "to repeat an experiment to verify results"?',
          options: ['Replicate', 'Analyze', 'Observe', 'Conclude'],
          correctAnswer: 0,
          explanation: 'To replicate is to repeat.'
        }
      ]
    },
    {
      id: 'v-10',
      title: 'Business & Economics Vocabulary',
      description: 'Words used in finance, trade, and management.',
      tips: [
        "Learn words related to supply and demand.",
        "Identify common business idioms.",
        "Pay attention to financial terms (e.g., profit, loss, revenue).",
        "Understand the difference between micro and macroeconomics.",
        "Practice reading business news."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Business English</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Business and economics use specific terms to describe markets, companies, and financial systems.
          </p>
        </div>
      `,
      questions: [
        {
          id: 'v10-1',
          text: '_______ is the total amount of money a company receives from sales.',
          options: ['Profit', 'Revenue', 'Loss', 'Expense'],
          correctAnswer: 1,
          explanation: 'Revenue is the total income before expenses.'
        },
        {
          id: 'v10-2',
          text: 'A _______ is a person who buys goods or services.',
          options: ['Producer', 'Consumer', 'Manager', 'Employee'],
          correctAnswer: 1,
          explanation: 'A consumer is a buyer.'
        },
        {
          id: 'v10-3',
          text: '_______ is the desire of people to buy a particular product.',
          options: ['Supply', 'Demand', 'Market', 'Trade'],
          correctAnswer: 1,
          explanation: 'Demand is the desire to buy.'
        },
        {
          id: 'v10-4',
          text: 'To _______ is to put money into a project to make a profit.',
          options: ['Spend', 'Save', 'Invest', 'Borrow'],
          correctAnswer: 2,
          explanation: 'To invest is to put money in for future gain.'
        },
        {
          id: 'v10-5',
          text: 'A _______ is a plan for how to spend money.',
          options: ['Budget', 'Report', 'Contract', 'Invoice'],
          correctAnswer: 0,
          explanation: 'A budget is a financial plan.'
        },
        {
          id: 'v10-6',
          text: 'What is "inflation"?',
          options: ['A decrease in prices', 'An increase in prices', 'A stable market', 'A type of tax'],
          correctAnswer: 1,
          explanation: 'Inflation is the general increase in prices.'
        },
        {
          id: 'v10-7',
          text: 'Which word means "the money left over after all expenses are paid"?',
          options: ['Revenue', 'Profit', 'Loss', 'Debt'],
          correctAnswer: 1,
          explanation: 'Profit is the remaining money after expenses.'
        },
        {
          id: 'v10-8',
          text: 'A _______ is a formal agreement between two or more parties.',
          options: ['Budget', 'Contract', 'Invoice', 'Receipt'],
          correctAnswer: 1,
          explanation: 'A contract is a formal agreement.'
        },
        {
          id: 'v10-9',
          text: 'Which word means "to send goods to another country for sale"?',
          options: ['Import', 'Export', 'Trade', 'Barter'],
          correctAnswer: 1,
          explanation: 'To export is to send goods out.'
        },
        {
          id: 'v10-10',
          text: 'What is "monopoly"?',
          options: ['A market with many competitors', 'A market with only one seller', 'A type of game', 'A financial report'],
          correctAnswer: 1,
          explanation: 'A monopoly is when one company controls the entire market.'
        }
      ]
    }
  ]
};
