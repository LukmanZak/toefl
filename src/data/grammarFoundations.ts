import { Category } from '../types';

export const GRAMMAR_FOUNDATIONS_CATEGORY: Category = {
  id: 'grammar-foundations',
  title: 'Grammar Foundations',
  icon: 'architecture',
  lessons: [
    {
      id: 'gf-1',
      title: 'Parts of Speech',
      description: 'Master the fundamental building blocks of the English language.',
      tips: [
        "Focus on the function: Nouns (naming), Verbs (acting), Adjectives (describing), Adverbs (modifying). (Correct: 'The **happy** dog **runs**.' | Incorrect: 'The **happily** dog **runs**.')",
        "Identify suffixes to help you guess the part of speech (e.g., -tion is usually a noun, -ly is usually an adverb). (Correct: 'He speaks **slowly**.' | Incorrect: 'He speaks **slow**.')",
        "Remember that some words can be multiple parts of speech depending on context (e.g., 'run' can be a noun or a verb). (Correct: 'I like to **run**.' | Incorrect: 'I like to **running**.')",
        "Pay attention to 'Function Words' like prepositions and conjunctions that glue the sentence together. (Correct: 'The book is **on** the table.' | Incorrect: 'The book is **at** the table (usually).')",
        "Practice by labeling every word in a simple sentence to see how they work as a team. (Correct: 'She **is** a teacher.' | Incorrect: 'She **be** a teacher.')"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">The 8 Parts of Speech</h3>
            <p class="text-on-surface-variant leading-relaxed">
              Understanding parts of speech is crucial for sentence analysis and correct grammar usage.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Noun</h4>
                <p class="text-sm">Person, place, thing, or idea.</p>
                <p class="text-xs italic mt-1">Example: The <strong>student</strong> went to the <strong>university</strong>.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Verb</h4>
                <p class="text-sm">Action or state of being.</p>
                <p class="text-xs italic mt-1">Example: They <strong>study</strong> hard and <strong>are</strong> successful.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Adjective</h4>
                <p class="text-sm">Describes a noun.</p>
                <p class="text-xs italic mt-1">Example: A <strong>diligent</strong> student reads <strong>complex</strong> books.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Adverb</h4>
                <p class="text-sm">Describes a verb, adjective, or adverb.</p>
                <p class="text-xs italic mt-1">Example: She spoke <strong>very clearly</strong> and <strong>quickly</strong>.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Pronoun</h4>
                <p class="text-sm">Replaces a noun.</p>
                <p class="text-xs italic mt-1">Example: <strong>He</strong> gave <strong>it</strong> to <strong>her</strong>.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Preposition</h4>
                <p class="text-sm">Shows relationship (time/place).</p>
                <p class="text-xs italic mt-1">Example: The book is <strong>on</strong> the table <strong>under</strong> the lamp.</p>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'gf1-1',
          text: 'Which word is an adjective?',
          options: ['Quickly', 'Success', 'Diligent', 'Study'],
          correctAnswer: 2,
          explanation: 'Diligent is an adjective used to describe a noun. For example: "He is a diligent student."'
        },
        {
          id: 'gf1-2',
          text: 'Identify the adverb: "She spoke very clearly."',
          options: ['She', 'spoke', 'very', 'clearly'],
          correctAnswer: 3,
          explanation: 'Clearly is an adverb describing how she spoke. For example: "She spoke very clearly."'
        },
        {
          id: 'gf1-3',
          text: 'Which part of speech is "university"?',
          options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
          correctAnswer: 0,
          explanation: 'University is a place, so it is a noun. For example: "The university is very large."'
        },
        {
          id: 'gf1-4',
          text: 'Identify the verb: "The students are learning English."',
          options: ['students', 'are learning', 'English', 'The'],
          correctAnswer: 1,
          explanation: 'Are learning is the verb phrase indicating action. For example: "The students are learning English."'
        },
        {
          id: 'gf1-5',
          text: 'Which word is a pronoun?',
          options: ['John', 'He', 'Teacher', 'School'],
          correctAnswer: 1,
          explanation: 'He is a pronoun used to replace a noun. For example: "He is my best friend."'
        },
        {
          id: 'gf1-6',
          text: 'Identify the preposition: "The book is on the table."',
          options: ['book', 'is', 'on', 'table'],
          correctAnswer: 2,
          explanation: 'On is a preposition showing location. For example: "The book is on the table."'
        },
        {
          id: 'gf1-7',
          text: 'Which word is a conjunction?',
          options: ['And', 'But', 'Or', 'All of the above'],
          correctAnswer: 3,
          explanation: 'And, but, and or are all common conjunctions. For example: "I like apples and oranges."'
        },
        {
          id: 'gf1-8',
          text: 'Identify the interjection: "Wow! That was amazing."',
          options: ['Wow', 'That', 'was', 'amazing'],
          correctAnswer: 0,
          explanation: 'Wow is an interjection expressing strong emotion. For example: "Wow! That was amazing."'
        },
        {
          id: 'gf1-9',
          text: 'Which word is an abstract noun?',
          options: ['Happiness', 'Apple', 'Car', 'Building'],
          correctAnswer: 0,
          explanation: 'Happiness is an idea/feeling, making it an abstract noun. For example: "Happiness is important for everyone."'
        },
        {
          id: 'gf1-10',
          text: 'Identify the proper noun: "Paris is beautiful."',
          options: ['Paris', 'is', 'beautiful', 'None'],
          correctAnswer: 0,
          explanation: 'Paris is a specific name of a city, so it is a proper noun. For example: "Paris is beautiful."'
        }
      ]
    },
    {
      id: 'gf-2',
      title: 'Sentence Structure (SVO)',
      description: 'Learn how to construct clear and grammatically correct sentences.',
      tips: [
        "Always identify the Subject first by asking 'Who or what is doing the action?' (Correct: '**The dog** barked.' | Incorrect: '**Barked** the dog.')",
        "Remember that the Object is not always present, especially with intransitive verbs like 'sleep' or 'arrive'. (Correct: 'I **slept**.' | Incorrect: 'I **slept** the bed.')",
        "Practice identifying SVO in simple news headlines to see how they convey information quickly. (Correct: '**Police** arrest **suspect**.' | Incorrect: '**Arrest** suspect police.')",
        "Be careful with word order when adding adverbs; they often go after the verb or at the end. (Correct: 'He runs **fast**.' | Incorrect: 'He **fast** runs.')",
        "Use the SVO pattern as your 'anchor' when building more complex sentences later on. (Correct: 'I **love** pizza.' | Incorrect: 'Pizza **love** I.')"
      ],
      content: `
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-primary">Subject-Verb-Object (SVO)</h3>
            <p class="text-on-surface-variant leading-relaxed">
              A basic English sentence follows the <strong>Subject + Verb + Object</strong> pattern. This is the foundation of sentence structure.
            </p>
            <div class="space-y-3">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p><strong>Subject:</strong> The person or thing performing the action.</p>
                <p class="text-sm italic">Example: <strong>The cat</strong> chased the mouse.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p><strong>Verb:</strong> The action or state.</p>
                <p class="text-sm italic">Example: The cat <strong>chased</strong> the mouse.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p><strong>Object:</strong> The person or thing receiving the action.</p>
                <p class="text-sm italic">Example: The cat chased <strong>the mouse</strong>.</p>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'gf2-1',
          text: 'Identify the subject: "The cat chased the mouse."',
          options: ['The cat', 'chased', 'the mouse', 'mouse'],
          correctAnswer: 0,
          explanation: 'The cat is performing the action. For example: "The cat chased the mouse."'
        },
        {
          id: 'gf2-2',
          text: 'Identify the object: "I ate an apple."',
          options: ['I', 'ate', 'an apple', 'apple'],
          correctAnswer: 2,
          explanation: 'An apple is receiving the action of being eaten. For example: "I ate an apple."'
        },
        {
          id: 'gf2-3',
          text: 'Which sentence follows the SVO pattern?',
          options: ['Ate I an apple.', 'I an apple ate.', 'I ate an apple.', 'An apple I ate.'],
          correctAnswer: 2,
          explanation: 'I (S) ate (V) an apple (O). For example: "I ate an apple."'
        },
        {
          id: 'gf2-4',
          text: 'Identify the verb: "She writes a letter."',
          options: ['She', 'writes', 'a letter', 'letter'],
          correctAnswer: 1,
          explanation: 'Writes is the action. For example: "She writes a letter."'
        },
        {
          id: 'gf2-5',
          text: 'Identify the subject: "They are playing football."',
          options: ['They', 'are playing', 'football', 'playing'],
          correctAnswer: 0,
          explanation: 'They are the ones performing the action. For example: "They are playing football."'
        },
        {
          id: 'gf2-6',
          text: 'Identify the object: "The teacher helped the students."',
          options: ['The teacher', 'helped', 'the students', 'students'],
          correctAnswer: 2,
          explanation: 'The students are receiving the help. For example: "The teacher helped the students."'
        },
        {
          id: 'gf2-7',
          text: 'Which word is the subject: "The sun shines brightly."',
          options: ['The sun', 'shines', 'brightly', 'sun'],
          correctAnswer: 0,
          explanation: 'The sun is the subject (though there is no object here). For example: "The sun shines brightly."'
        },
        {
          id: 'gf2-8',
          text: 'Identify the verb: "He is a doctor."',
          options: ['He', 'is', 'a doctor', 'doctor'],
          correctAnswer: 1,
          explanation: 'Is is the linking verb. For example: "He is a doctor."'
        },
        {
          id: 'gf2-9',
          text: 'Identify the object: "We watched a movie."',
          options: ['We', 'watched', 'a movie', 'movie'],
          correctAnswer: 2,
          explanation: 'A movie is what was watched. For example: "We watched a movie."'
        },
        {
          id: 'gf2-10',
          text: 'Which sentence is correct?',
          options: ['The dog barked.', 'Barked the dog.', 'Dog the barked.', 'The barked dog.'],
          correctAnswer: 0,
          explanation: 'Subject + Verb. For example: "The dog barked."'
        }
      ]
    },
    {
      id: 'gf-3',
      title: 'Tense Overview',
      description: 'Understand the different ways to express time in English.',
      tips: [
        "Master the 'Big Three' first: Simple Present (habits), Simple Past (finished), and Simple Future (will). (Correct: 'I **go** every day.' | Incorrect: 'I **going** every day.')",
        "Use time markers like 'yesterday', 'now', and 'tomorrow' to help you choose the right tense. (Correct: 'I went **yesterday**.' | Incorrect: 'I go **yesterday**.')",
        "Remember that 'Present Perfect' connects the past to the present (e.g., 'I have lived here for 5 years'). (Correct: 'I **have lived** here.' | Incorrect: 'I **lived** here (if you still do).')",
        "Don't confuse 'Past Continuous' (was doing) with 'Simple Past' (did); one is a background action, the other is the main event. (Correct: 'I **was eating** when he called.' | Incorrect: 'I **ate** when he called (if you mean during).')",
        "Create a timeline for yourself to visualize how different tenses relate to each other. (Correct: 'I **will go**.' | Incorrect: 'I **shall go** (less common).')"
      ],
      content: `
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-primary">The 12 English Tenses</h3>
            <p class="text-on-surface-variant leading-relaxed">
              English has 12 main tenses. Let's look at the most common ones used in daily communication.
            </p>
            <div class="space-y-3">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">1. Simple Present</h4>
                <p class="text-sm">For general truths, facts, or habits.</p>
                <p class="text-sm italic mt-1">Example: I <strong>study</strong> every day. / The sun <strong>rises</strong> in the east.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">2. Simple Past</h4>
                <p class="text-sm">For actions that were completed in the past.</p>
                <p class="text-sm italic mt-1">Example: I <strong>studied</strong> yesterday. / We <strong>watched</strong> a movie last night.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">3. Simple Future</h4>
                <p class="text-sm">For actions that will happen in the future.</p>
                <p class="text-sm italic mt-1">Example: I <strong>will study</strong> tomorrow. / They <strong>will arrive</strong> at 5 PM.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">4. Present Continuous</h4>
                <p class="text-sm">For actions happening right now.</p>
                <p class="text-sm italic mt-1">Example: I <strong>am studying</strong> right now. / She <strong>is writing</strong> a letter.</p>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'gf3-1',
          text: 'Which tense is used for general truths?',
          options: ['Simple Past', 'Simple Present', 'Simple Future', 'Present Continuous'],
          correctAnswer: 1,
          explanation: 'Simple present is used for facts and general truths. For example: "The sun rises in the east."'
        },
        {
          id: 'gf3-2',
          text: 'Identify the tense: "I have finished my homework."',
          options: ['Simple Past', 'Present Perfect', 'Past Perfect', 'Present Continuous'],
          correctAnswer: 1,
          explanation: 'Present perfect (have + V3) shows a completed action with present relevance. For example: "I have finished my homework."'
        },
        {
          id: 'gf3-3',
          text: 'Which sentence is in the past continuous?',
          options: ['I was reading.', 'I read.', 'I have read.', 'I will be reading.'],
          correctAnswer: 0,
          explanation: 'Past continuous is "was/were + -ing". For example: "I was reading."'
        },
        {
          id: 'gf3-4',
          text: 'Identify the tense: "She will arrive at 5 PM."',
          options: ['Simple Present', 'Simple Future', 'Future Continuous', 'Present Perfect'],
          correctAnswer: 1,
          explanation: 'Simple future uses "will + base verb". For example: "She will arrive at 5 PM."'
        },
        {
          id: 'gf3-5',
          text: 'Which tense shows an action in progress right now?',
          options: ['Simple Present', 'Present Continuous', 'Present Perfect', 'Past Continuous'],
          correctAnswer: 1,
          explanation: 'Present continuous is for actions happening now. For example: "I am studying right now."'
        },
        {
          id: 'gf3-6',
          text: 'Identify the tense: "They had left before I arrived."',
          options: ['Simple Past', 'Past Perfect', 'Present Perfect', 'Past Continuous'],
          correctAnswer: 1,
          explanation: 'Past perfect (had + V3) shows an action before another past action. For example: "They had left before I arrived."'
        },
        {
          id: 'gf3-7',
          text: 'Which sentence is in the future perfect?',
          options: ['I will have finished.', 'I will finish.', 'I am going to finish.', 'I will be finishing.'],
          correctAnswer: 0,
          explanation: 'Future perfect is "will have + V3". For example: "I will have finished."'
        },
        {
          id: 'gf3-8',
          text: 'Identify the tense: "We are going to the park."',
          options: ['Simple Present', 'Present Continuous', 'Simple Future', 'Present Perfect'],
          correctAnswer: 1,
          explanation: 'Present continuous can also show future plans. For example: "We are going to the park."'
        },
        {
          id: 'gf3-9',
          text: 'Which tense is used for a habit in the past?',
          options: ['Simple Past', 'Used to', 'Past Continuous', 'Both A and B'],
          correctAnswer: 3,
          explanation: 'Both simple past and "used to" can describe past habits. For example: "I used to play tennis."'
        },
        {
          id: 'gf3-10',
          text: 'Identify the tense: "I have been working here for three years."',
          options: ['Present Perfect', 'Present Perfect Continuous', 'Present Continuous', 'Past Perfect Continuous'],
          correctAnswer: 1,
          explanation: 'Present perfect continuous is "have/has been + -ing". For example: "I have been working here for three years."'
        }
      ]
    },
    {
      id: 'gf-4',
      title: 'Modals',
      description: 'Expressing possibility, necessity, and permission.',
      tips: [
        "Always use the base form of the verb after a modal (e.g., 'I can swim', NOT 'I can to swim'). (Correct: 'I **can swim**.' | Incorrect: 'I **can to swim**.')",
        "Remember that modals never change their ending; 'he can', 'she can', 'it can' are all the same. (Correct: 'He **can**.' | Incorrect: 'He **cans**.')",
        "Use 'Must' for internal obligation and 'Have to' for external rules or laws. (Correct: 'I **must** study.' | Incorrect: 'I **must to** study.')",
        "Use 'Could' or 'May' to make your requests sound more polite and formal. (Correct: '**Could** I...?' | Incorrect: '**Can** I...? (less polite).')",
        "Practice by listing your daily 'musts' and 'shoulds' to see the difference in necessity. (Correct: 'I **should** eat.' | Incorrect: 'I **should to** eat.')"
      ],
      content: `
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-primary">Modal Verbs</h3>
            <p class="text-on-surface-variant leading-relaxed">
              Modals are auxiliary verbs that provide additional meaning to the main verb, such as ability, necessity, or advice.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Can / Could</h4>
                <p class="text-sm">Ability or permission.</p>
                <p class="text-xs italic mt-1">Example: I <strong>can</strong> speak English. / <strong>Could</strong> I come in?</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Must / Have to</h4>
                <p class="text-sm">Necessity or obligation.</p>
                <p class="text-xs italic mt-1">Example: You <strong>must</strong> stop at red lights.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Should</h4>
                <p class="text-sm">Advice or suggestion.</p>
                <p class="text-xs italic mt-1">Example: You <strong>should</strong> see a doctor.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">May / Might</h4>
                <p class="text-sm">Possibility.</p>
                <p class="text-xs italic mt-1">Example: It <strong>may</strong> rain later.</p>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'gf4-1',
          text: 'Which modal expresses strong obligation?',
          options: ['Can', 'Should', 'Must', 'Might'],
          correctAnswer: 2,
          explanation: 'Must is used for strong necessity or obligation. For example: "You must stop at red lights."'
        },
        {
          id: 'gf4-2',
          text: 'Identify the modal for advice: "You ____ see a doctor."',
          options: ['can', 'should', 'must', 'might'],
          correctAnswer: 1,
          explanation: 'Should is used for giving advice. For example: "You should see a doctor."'
        },
        {
          id: 'gf4-3',
          text: 'Which modal expresses past ability?',
          options: ['Can', 'Could', 'May', 'Might'],
          correctAnswer: 1,
          explanation: 'Could is the past form of can for ability. For example: "I could swim when I was five."'
        },
        {
          id: 'gf4-4',
          text: 'Identify the modal for permission: "____ I come in?"',
          options: ['May', 'Must', 'Should', 'Will'],
          correctAnswer: 0,
          explanation: 'May is a formal way to ask for permission. For example: "May I come in?"'
        },
        {
          id: 'gf4-5',
          text: 'Which modal expresses low possibility?',
          options: ['Must', 'Can', 'Might', 'Should'],
          correctAnswer: 2,
          explanation: 'Might expresses a weak possibility. For example: "It might rain later."'
        },
        {
          id: 'gf4-6',
          text: 'Identify the modal: "I ____ speak three languages."',
          options: ['can', 'must', 'should', 'might'],
          correctAnswer: 0,
          explanation: 'Can expresses ability. For example: "I can speak three languages."'
        },
        {
          id: 'gf4-7',
          text: 'Which modal is used for prohibition?',
          options: ['Must not', 'Should not', 'Cannot', 'All of the above'],
          correctAnswer: 3,
          explanation: 'All these can express that something is not allowed. For example: "You must not smoke here."'
        },
        {
          id: 'gf4-8',
          text: 'Identify the modal: "It ____ rain later."',
          options: ['must', 'may', 'should', 'can'],
          correctAnswer: 1,
          explanation: 'May expresses possibility. For example: "It may rain later."'
        },
        {
          id: 'gf4-9',
          text: 'Which modal is used for a logical deduction?',
          options: ['Can', 'Must', 'Should', 'Might'],
          correctAnswer: 1,
          explanation: 'Must can be used when you are almost certain. For example: "It must be him."'
        },
        {
          id: 'gf4-10',
          text: 'Identify the modal: "You ____ not smoke here."',
          options: ['must', 'can', 'should', 'might'],
          correctAnswer: 0,
          explanation: 'Must not is used for prohibition. For example: "You must not smoke here."'
        }
      ]
    },
    {
      id: 'gf-5',
      title: 'Conditionals',
      description: 'Describing hypothetical situations and their results.',
      tips: [
        "Zero Conditional: Use Present Simple in both parts for facts that are always true. (Correct: 'If you heat ice, it **melts**.' | Incorrect: 'If you heat ice, it **will melt**.')",
        "First Conditional: Use 'If + Present' and 'Will + Base' for likely future events. (Correct: 'If it rains, I **will stay**.' | Incorrect: 'If it rains, I **stay**.')",
        "Second Conditional: Use 'If + Past' and 'Would + Base' for imaginary or unlikely situations. (Correct: 'If I won, I **would travel**.' | Incorrect: 'If I won, I **will travel**.')",
        "Third Conditional: Use 'If + Past Perfect' and 'Would have + V3' for regrets about the past. (Correct: 'If I **had known**, I **would have come**.' | Incorrect: 'If I **knew**, I **would have come**.')",
        "Remember: Never use 'will' or 'would' in the 'if' part of the sentence! (Correct: 'If I **go**...' | Incorrect: 'If I **will go**...') "
      ],
      content: `
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-primary">The Four Conditionals</h3>
            <p class="text-on-surface-variant leading-relaxed">
              Conditionals describe hypothetical situations and their results.
            </p>
            <div class="space-y-3">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Zero Conditional (Facts)</h4>
                <p class="text-sm"><em>If + Present, Present</em></p>
                <p class="text-sm italic mt-1">Example: If you <strong>heat</strong> ice, it <strong>melts</strong>.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">First Conditional (Possibilities)</h4>
                <p class="text-sm"><em>If + Present, Will + Base</em></p>
                <p class="text-sm italic mt-1">Example: If it <strong>rains</strong>, I <strong>will stay</strong> home.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Second Conditional (Imaginary)</h4>
                <p class="text-sm"><em>If + Past, Would + Base</em></p>
                <p class="text-sm italic mt-1">Example: If I <strong>won</strong> the lottery, I <strong>would travel</strong> the world.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Third Conditional (Past Regrets)</h4>
                <p class="text-sm"><em>If + Past Perfect, Would have + V3</em></p>
                <p class="text-sm italic mt-1">Example: If I <strong>had studied</strong>, I <strong>would have passed</strong> the exam.</p>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'gf5-1',
          text: 'Which conditional is used for general truths?',
          options: ['Zero', 'First', 'Second', 'Third'],
          correctAnswer: 0,
          explanation: 'Zero conditional is for facts. For example: "If you heat ice, it melts."'
        },
        {
          id: 'gf5-2',
          text: 'Identify the conditional: "If I were you, I would go."',
          options: ['Zero', 'First', 'Second', 'Third'],
          correctAnswer: 2,
          explanation: 'Second conditional (If + past, would + base). For example: "If I were you, I would go."'
        },
        {
          id: 'gf5-3',
          text: 'Which conditional is used for a real future possibility?',
          options: ['Zero', 'First', 'Second', 'Third'],
          correctAnswer: 1,
          explanation: 'First conditional (If + present, will + base). For example: "If it rains, I will stay home."'
        },
        {
          id: 'gf5-4',
          text: 'Identify the conditional: "If it had rained, we would have stayed."',
          options: ['Zero', 'First', 'Second', 'Third'],
          correctAnswer: 3,
          explanation: 'Third conditional (If + past perfect, would have + V3). For example: "If it had rained, we would have stayed."'
        },
        {
          id: 'gf5-5',
          text: 'Which sentence is a zero conditional?',
          options: ['If I study, I pass.', 'If I studied, I would pass.', 'If I had studied, I would have passed.', 'If I will study, I will pass.'],
          correctAnswer: 0,
          explanation: 'Zero conditional uses present simple in both clauses. For example: "If I study, I pass."'
        },
        {
          id: 'gf5-6',
          text: 'Identify the error: "If I will see him, I will tell him."',
          options: ['If', 'will see', 'I', 'will tell'],
          correctAnswer: 1,
          explanation: 'In the if-clause of the first conditional, use simple present (see). For example: "If I see him, I will tell him."'
        },
        {
          id: 'gf5-7',
          text: 'Which conditional uses "would have + past participle"?',
          options: ['Zero', 'First', 'Second', 'Third'],
          correctAnswer: 3,
          explanation: 'Third conditional. For example: "If I had studied, I would have passed."'
        },
        {
          id: 'gf5-8',
          text: 'Identify the conditional: "If you touch fire, you get burned."',
          options: ['Zero', 'First', 'Second', 'Third'],
          correctAnswer: 0,
          explanation: 'Zero conditional (general truth). For example: "If you touch fire, you get burned."'
        },
        {
          id: 'gf5-9',
          text: 'Which conditional uses "were" for all subjects?',
          options: ['Zero', 'First', 'Second', 'Third'],
          correctAnswer: 2,
          explanation: 'Second conditional often uses "were" instead of "was". For example: "If I were you, I would go."'
        },
        {
          id: 'gf5-10',
          text: 'Identify the conditional: "If she studies hard, she will pass the exam."',
          options: ['Zero', 'First', 'Second', 'Third'],
          correctAnswer: 1,
          explanation: 'First conditional. For example: "If she studies hard, she will pass the exam."'
        }
      ]
    },
    {
      id: 'gf-6',
      title: 'Passive Voice',
      description: 'Focusing on the action rather than the doer.',
      tips: [
        "The passive voice is your best friend when you don't know who did the action or it's not important. (Correct: 'The window **was broken**.' | Incorrect: 'The window **broke** (if you mean someone did it).')",
        "Always include a form of 'be' (am, is, are, was, were, been) followed by the Past Participle (V3). (Correct: 'The cake **is made**.' | Incorrect: 'The cake **is make**.')",
        "Use 'by' only if you need to mention the person who did the action at the end. (Correct: 'It was done **by** John.' | Incorrect: 'It was done **from** John.')",
        "Practice converting active sentences to passive to see how the focus shifts to the object. (Correct: 'The meal **was prepared**.' | Incorrect: 'The meal **prepared**.')",
        "Common in news: 'A man was arrested...' instead of 'The police arrested a man...'. (Correct: 'The suspect **was caught**.' | Incorrect: 'The suspect **caught**.')"
      ],
      content: `
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-primary">Passive Voice</h3>
            <p class="text-on-surface-variant leading-relaxed">
              The passive voice is used when the focus is on the action or the receiver of the action, rather than the person doing it.
            </p>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 class="font-bold text-primary mb-2">Structure:</h4>
              <p class="text-sm font-mono bg-white p-2 rounded border border-slate-100">Subject + Be (am/is/are/was/were) + Past Participle (V3)</p>
            </div>
            <div class="space-y-3">
              <div class="p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                <p class="text-sm font-bold text-slate-500 uppercase tracking-wider">Active Voice</p>
                <p>The chef (S) prepared (V) the meal (O).</p>
              </div>
              <div class="p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                <p class="text-sm font-bold text-slate-500 uppercase tracking-wider">Passive Voice</p>
                <p>The meal (S) <strong>was prepared</strong> (V) by the chef.</p>
              </div>
              <div class="p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                <p class="text-sm font-bold text-slate-500 uppercase tracking-wider">Another Example</p>
                <p>Active: They built the house. <br/> Passive: The house <strong>was built</strong>.</p>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'gf6-1',
          text: 'Which sentence is in the passive voice?',
          options: ['I wrote a letter.', 'The letter was written by me.', 'I am writing a letter.', 'I will write a letter.'],
          correctAnswer: 1,
          explanation: 'The subject is receiving the action. For example: "The letter was written by me."'
        },
        {
          id: 'gf6-2',
          text: 'Identify the passive verb: "The house is being painted."',
          options: ['house', 'is', 'being', 'is being painted'],
          correctAnswer: 3,
          explanation: 'The entire phrase is the passive verb in present continuous. For example: "The house is being painted."'
        },
        {
          id: 'gf6-3',
          text: 'Change to passive: "They built the bridge in 1990."',
          options: ['The bridge was built in 1990.', 'The bridge built in 1990.', 'The bridge is built in 1990.', 'The bridge has been built in 1990.'],
          correctAnswer: 0,
          explanation: 'Past simple active becomes past simple passive (was/were + V3). For example: "The bridge was built in 1990."'
        },
        {
          id: 'gf6-4',
          text: 'Identify the doer in: "The book was read by the student."',
          options: ['The book', 'was read', 'by', 'the student'],
          correctAnswer: 3,
          explanation: 'The student is the one who performed the action. For example: "The book was read by the student."'
        },
        {
          id: 'gf6-5',
          text: 'Which tense is "The work will be finished"?',
          options: ['Simple Present', 'Simple Future', 'Present Perfect', 'Future Continuous'],
          correctAnswer: 1,
          explanation: 'Future simple passive. For example: "The work will be finished."'
        },
        {
          id: 'gf6-6',
          text: 'Identify the error: "The car was steal yesterday."',
          options: ['The car', 'was', 'steal', 'yesterday'],
          correctAnswer: 2,
          explanation: 'Passive requires the past participle "stolen". For example: "The car was stolen yesterday."'
        },
        {
          id: 'gf6-7',
          text: 'Change to passive: "She has invited us."',
          options: ['We have invited by her.', 'We have been invited by her.', 'We were invited by her.', 'We are invited by her.'],
          correctAnswer: 1,
          explanation: 'Present perfect active becomes present perfect passive (have/has been + V3). For example: "We have been invited by her."'
        },
        {
          id: 'gf6-8',
          text: 'Identify the passive verb: "The results were announced."',
          options: ['The results', 'were', 'announced', 'were announced'],
          correctAnswer: 3,
          explanation: 'Past simple passive. For example: "The results were announced."'
        },
        {
          id: 'gf6-9',
          text: 'Which sentence is NOT passive?',
          options: ['The cake was eaten.', 'The window was broken.', 'The boy was crying.', 'The room was cleaned.'],
          correctAnswer: 2,
          explanation: '"Was crying" is past continuous active. For example: "The boy was crying."'
        },
        {
          id: 'gf6-10',
          text: 'Identify the passive verb: "The decision is made."',
          options: ['decision', 'is', 'made', 'is made'],
          correctAnswer: 3,
          explanation: 'Present simple passive. For example: "The decision is made."'
        }
      ]
    },
    {
      id: 'gf-7',
      title: 'Relative Clauses',
      description: 'Adding information to nouns using who, which, that, and whose.',
      tips: [
        "Defining relative clauses are essential for identifying which person or thing you mean. (Correct: 'The man **who** is here.' | Incorrect: 'The man **which** is here.')",
        "Non-defining relative clauses add extra info and MUST be separated by commas. (Correct: 'My car, **which** is blue, is fast.' | Incorrect: 'My car **which** is blue is fast.')",
        "Remember: 'Who' is for people, 'Which' is for things, and 'That' can often replace both in defining clauses. (Correct: 'The book **that** I like.' | Incorrect: 'The book **who** I like.')",
        "Use 'Whose' to show that something belongs to someone (e.g., 'The man whose car was stolen'). (Correct: 'The boy **whose** dog died.' | Incorrect: 'The boy **who** dog died.')",
        "Try combining two short sentences into one using a relative pronoun to sound more fluent. (Correct: 'I know a girl **who** speaks French.' | Incorrect: 'I know a girl. She speaks French (less fluent).')"
      ],
      content: `
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-primary">Relative Clauses</h3>
            <p class="text-on-surface-variant leading-relaxed">
              Relative clauses add extra information about a noun. We use relative pronouns to connect these clauses.
            </p>
            <div class="grid grid-cols-1 gap-3">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p><strong>Who:</strong> For people.</p>
                <p class="text-sm italic">Example: The man <strong>who</strong> is standing there is my teacher.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p><strong>Which / That:</strong> For things.</p>
                <p class="text-sm italic">Example: The book <strong>which</strong> I read was very interesting.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p><strong>Whose:</strong> For possession (belonging to).</p>
                <p class="text-sm italic">Example: The girl <strong>whose</strong> father is a doctor is my friend.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p><strong>Where:</strong> For places.</p>
                <p class="text-sm italic">Example: The city <strong>where</strong> I live is beautiful.</p>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'gf7-1',
          text: 'Which relative pronoun is used for people?',
          options: ['Which', 'Who', 'Where', 'When'],
          correctAnswer: 1,
          explanation: 'Who is used for people. For example: "The man who is standing there is my teacher."'
        },
        {
          id: 'gf7-2',
          text: 'Identify the relative clause: "The car that I bought is red."',
          options: ['The car', 'that I bought', 'is red', 'bought'],
          correctAnswer: 1,
          explanation: 'The clause "that I bought" describes the car. For example: "The car that I bought is red."'
        },
        {
          id: 'gf7-3',
          text: 'Which pronoun is used for possession?',
          options: ['Who', 'Whom', 'Whose', 'Which'],
          correctAnswer: 2,
          explanation: 'Whose shows possession. For example: "The girl whose father is a doctor is my friend."'
        },
        {
          id: 'gf7-4',
          text: 'Identify the relative pronoun: "The city where I live is beautiful."',
          options: ['The city', 'where', 'I live', 'beautiful'],
          correctAnswer: 1,
          explanation: 'Where is a relative adverb/pronoun used for places. For example: "The city where I live is beautiful."'
        },
        {
          id: 'gf7-5',
          text: 'Which sentence is correct?',
          options: ['The man which I saw...', 'The man who I saw...', 'The man whose I saw...', 'The man where I saw...'],
          correctAnswer: 1,
          explanation: 'Who is used for people. For example: "The man who I saw was very tall."'
        },
        {
          id: 'gf7-6',
          text: 'Identify the relative clause: "The book, which was expensive, is very good."',
          options: ['The book', 'which was expensive', 'is very good', 'expensive'],
          correctAnswer: 1,
          explanation: 'This is a non-defining relative clause. For example: "The book, which was expensive, is very good."'
        },
        {
          id: 'gf7-7',
          text: 'Which pronoun can replace both who and which in defining clauses?',
          options: ['That', 'Whom', 'Whose', 'Where'],
          correctAnswer: 0,
          explanation: 'That is versatile in defining relative clauses. For example: "The car that I bought is red."'
        },
        {
          id: 'gf7-8',
          text: 'Identify the relative pronoun: "The reason why I came..."',
          options: ['The reason', 'why', 'I came', 'came'],
          correctAnswer: 1,
          explanation: 'Why is used for reasons. For example: "The reason why I came is to see you."'
        },
        {
          id: 'gf7-9',
          text: 'Which sentence uses "whose" correctly?',
          options: ['The boy whose is tall...', 'The boy whose father is tall...', 'The boy whose I know...', 'The boy whose lives here...'],
          correctAnswer: 1,
          explanation: 'Whose must be followed by a noun. For example: "The boy whose father is tall is my friend."'
        },
        {
          id: 'gf7-10',
          text: 'Identify the relative clause: "The time when we met..."',
          options: ['The time', 'when we met', 'met', 'when'],
          correctAnswer: 1,
          explanation: 'When is used for time. For example: "The time when we met was very special."'
        }
      ]
    },
    {
      id: 'gf-8',
      title: 'Gerunds and Infinitives',
      description: 'Using -ing forms and to-verbs correctly.',
      tips: [
        "There is no magic rule; you must memorize which verbs are followed by -ing and which by 'to'. (Correct: 'I enjoy **swimming**.' | Incorrect: 'I enjoy **to swim**.')",
        "Verbs of preference like 'like', 'love', and 'hate' can often take both with little change in meaning. (Correct: 'I like **to dance**.' | Incorrect: 'I like **dancing** (both are fine).')",
        "Watch out for 'Stop', 'Remember', and 'Forget'; their meaning changes completely depending on the form used. (Correct: 'I stopped **smoking** (quit).' | Incorrect: 'I stopped **to smoke** (paused to smoke).')",
        "Always use a gerund (-ing) after a preposition (e.g., 'I am thinking of moving'). (Correct: 'I\\'m afraid of **flying**.' | Incorrect: 'I\\'m afraid of **to fly**.')",
        "Keep a list of common 'verb + gerund' and 'verb + infinitive' pairs on your wall. (Correct: 'I want **to go**.' | Incorrect: 'I want **going**.')"
      ],
      content: `
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-primary">Gerunds vs. Infinitives</h3>
            <p class="text-on-surface-variant leading-relaxed">
              Some verbs are followed by the <strong>-ing form (Gerund)</strong>, while others are followed by <strong>"to + verb" (Infinitive)</strong>.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">1. Gerund (-ing)</h4>
                <p class="text-sm">Used after verbs like <em>enjoy, avoid, finish</em>.</p>
                <p class="text-sm italic mt-1">Example: I enjoy <strong>swimming</strong>.</p>
                <p class="text-sm italic">Example: She finished <strong>reading</strong> the book.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">2. Infinitive (to + verb)</h4>
                <p class="text-sm">Used after verbs like <em>want, hope, decide</em>.</p>
                <p class="text-sm italic mt-1">Example: I want <strong>to swim</strong>.</p>
                <p class="text-sm italic">Example: They decided <strong>to go</strong> home.</p>
              </div>
            </div>
            <p class="text-sm bg-amber-50 p-3 rounded-lg border border-amber-100 text-amber-800">
              <strong>Tip:</strong> Always use a Gerund after prepositions (e.g., <em>I am afraid <strong>of flying</strong></em>).
            </p>
          </div>
        `,
      questions: [
        {
          id: 'gf8-1',
          text: 'Which verb is followed by a gerund?',
          options: ['Want', 'Enjoy', 'Hope', 'Decide'],
          correctAnswer: 1,
          explanation: 'Enjoy is followed by the -ing form. For example: "I enjoy swimming."'
        },
        {
          id: 'gf8-2',
          text: 'Identify the infinitive: "I hope to see you soon."',
          options: ['I', 'hope', 'to see', 'soon'],
          correctAnswer: 2,
          explanation: 'To see is the infinitive. For example: "I hope to see you soon."'
        },
        {
          id: 'gf8-3',
          text: 'Which sentence is correct?',
          options: ['I enjoy to read.', 'I enjoy reading.', 'I enjoy read.', 'I enjoy for reading.'],
          correctAnswer: 1,
          explanation: 'Enjoy + gerund. For example: "I enjoy reading."'
        },
        {
          id: 'gf8-4',
          text: 'Identify the gerund: "Swimming is my favorite sport."',
          options: ['Swimming', 'is', 'favorite', 'sport'],
          correctAnswer: 0,
          explanation: 'Swimming is the subject and a gerund. For example: "Swimming is my favorite sport."'
        },
        {
          id: 'gf8-5',
          text: 'Which verb is followed by an infinitive?',
          options: ['Avoid', 'Finish', 'Decide', 'Suggest'],
          correctAnswer: 2,
          explanation: 'Decide is followed by to-infinitive. For example: "They decided to go home."'
        },
        {
          id: 'gf8-6',
          text: 'Identify the error: "I want going home."',
          options: ['I', 'want', 'going', 'home'],
          correctAnswer: 2,
          explanation: 'Want + to-infinitive (to go). For example: "I want to go home."'
        },
        {
          id: 'gf8-7',
          text: 'Which sentence uses a gerund as an object?',
          options: ['I like dancing.', 'Dancing is fun.', 'I want to dance.', 'She is dancing.'],
          correctAnswer: 0,
          explanation: 'Dancing is the object of the verb like. For example: "I like dancing."'
        },
        {
          id: 'gf8-8',
          text: 'Identify the infinitive: "It is important to study."',
          options: ['It', 'is', 'important', 'to study'],
          correctAnswer: 3,
          explanation: 'To study is the infinitive. For example: "It is important to study."'
        },
        {
          id: 'gf8-9',
          text: 'Which verb can be followed by both with a change in meaning?',
          options: ['Stop', 'Want', 'Enjoy', 'Decide'],
          correctAnswer: 0,
          explanation: '"Stop doing" vs "Stop to do" have different meanings. For example: "I stopped smoking" means I quit, while "I stopped to smoke" means I paused my action to have a cigarette.'
        },
        {
          id: 'gf8-10',
          text: 'Identify the gerund: "She is afraid of flying."',
          options: ['She', 'is', 'afraid', 'flying'],
          correctAnswer: 3,
          explanation: 'Flying is a gerund after the preposition of. For example: "She is afraid of flying."'
        }
      ]
    },
    {
      id: 'gf-9',
      title: 'Articles and Quantifiers',
      description: 'Using a, an, the, some, any, much, and many.',
      tips: [
        "Use 'The' when both you and the listener know exactly which thing you are talking about. (Correct: 'Pass me **the** salt.' | Incorrect: 'Pass me **a** salt (if there\\'s only one).')",
        "Use 'A/An' when introducing something for the first time or talking about any one of a group. (Correct: 'I saw **a** movie.' | Incorrect: 'I saw **the** movie (if not mentioned before).')",
        "Remember: 'Many' and 'Few' are for countable things; 'Much' and 'Little' are for uncountable things. (Correct: '**Many** people.' | Incorrect: '**Much** people.')",
        "Use 'Some' for positive statements and 'Any' for questions and negative sentences. (Correct: 'I have **some** money.' | Incorrect: 'I have **any** money.')",
        "Be careful with 'An' before words starting with a vowel sound (e.g., 'An hour') even if they start with a consonant. (Correct: '**An** hour.' | Incorrect: '**A** hour.')"
      ],
      content: `
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-primary">Articles and Quantifiers</h3>
            <p class="text-on-surface-variant leading-relaxed">
              Articles (a, an, the) and quantifiers (much, many, some, any) help us specify the amount or identity of a noun.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Articles</h4>
                <ul class="text-sm space-y-2">
                  <li><strong>A / An:</strong> For any one thing (singular). <br/> <em>Example: I have <strong>an</strong> apple.</em></li>
                  <li><strong>The:</strong> For a specific thing. <br/> <em>Example: <strong>The</strong> apple on the table is red.</em></li>
                </ul>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Quantifiers</h4>
                <ul class="text-sm space-y-2">
                  <li><strong>Much:</strong> For uncountable things. <br/> <em>Example: How <strong>much</strong> water do you need?</em></li>
                  <li><strong>Many:</strong> For countable things. <br/> <em>Example: How <strong>many</strong> books do you have?</em></li>
                </ul>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'gf9-1',
          text: 'Which article is used for a specific thing?',
          options: ['A', 'An', 'The', 'None'],
          correctAnswer: 2,
          explanation: 'The is the definite article. For example: "The apple on the table is red."'
        },
        {
          id: 'gf9-2',
          text: 'Identify the quantifier for uncountable nouns:',
          options: ['Many', 'Much', 'Few', 'Several'],
          correctAnswer: 1,
          explanation: 'Much is used for uncountable nouns. For example: "How much water do you need?"'
        },
        {
          id: 'gf9-3',
          text: 'Which sentence is correct?',
          options: ['I have a apple.', 'I have an apple.', 'I have apple.', 'I have the apple (first mention).'],
          correctAnswer: 1,
          explanation: 'An is used before vowel sounds. For example: "I have an apple."'
        },
        {
          id: 'gf9-4',
          text: 'Identify the quantifier: "I have some friends."',
          options: ['I', 'have', 'some', 'friends'],
          correctAnswer: 2,
          explanation: 'Some is a quantifier. For example: "I have some friends."'
        },
        {
          id: 'gf9-5',
          text: 'Which quantifier is used in negative sentences?',
          options: ['Some', 'Any', 'Much', 'Both B and C'],
          correctAnswer: 3,
          explanation: 'Any and much are common in negative sentences. For example: "I don\'t have any money."'
        },
        {
          id: 'gf9-6',
          text: 'Identify the error: "How many water do you want?"',
          options: ['How', 'many', 'water', 'want'],
          correctAnswer: 1,
          explanation: 'Water is uncountable, so use "much". For example: "How much water do you want?"'
        },
        {
          id: 'gf9-7',
          text: 'Which article is used before "university"?',
          options: ['A', 'An', 'The', 'None'],
          correctAnswer: 0,
          explanation: 'A is used because university starts with a consonant sound /j/. For example: "I study at a university."'
        },
        {
          id: 'gf9-8',
          text: 'Identify the quantifier: "There are few people here."',
          options: ['There', 'are', 'few', 'people'],
          correctAnswer: 2,
          explanation: 'Few is a quantifier for countable nouns. For example: "There are few people here."'
        },
        {
          id: 'gf9-9',
          text: 'Which sentence uses "the" correctly?',
          options: ['I like the music.', 'The music I heard was great.', 'The music is good for you.', 'I play the guitar.'],
          correctAnswer: 1,
          explanation: 'Used for a specific music heard. For example: "The music I heard was great."'
        },
        {
          id: 'gf9-10',
          text: 'Identify the quantifier: "I don\'t have any money."',
          options: ['I', 'don\'t', 'have', 'any'],
          correctAnswer: 3,
          explanation: 'Any is used in negative sentences. For example: "I don\'t have any money."'
        }
      ]
    },
    {
      id: 'gf-10',
      title: 'Prepositions',
      description: 'Using in, on, at, and other direction/location words.',
      tips: [
        "Think of 'At' as a specific point, 'On' as a surface or a day, and 'In' as an enclosed space or a long period. (Correct: '**At** 5 PM.' | Incorrect: '**In** 5 PM.')",
        "Master the 'In the morning', 'At night', 'On Monday' patterns to avoid basic errors. (Correct: '**On** Monday.' | Incorrect: '**In** Monday.')",
        "Use 'Between' for two things and 'Among' for three or more. (Correct: '**Between** you and me.' | Incorrect: '**Among** you and me.')",
        "Remember that some verbs are 'married' to their prepositions (e.g., 'depend on', 'listen to'). (Correct: 'Listen **to** me.' | Incorrect: 'Listen **at** me.')",
        "Visualize prepositions using a box: 'in the box', 'on the box', 'next to the box'. (Correct: '**In** the room.' | Incorrect: '**On** the room (unless you mean the roof).')"
      ],
      content: `
          <div class="space-y-4">
            <h3 class="text-2xl font-bold text-primary">Prepositions of Time and Place</h3>
            <p class="text-on-surface-variant leading-relaxed">
              Prepositions show the relationship between words in terms of space or time.
            </p>
            <div class="space-y-3">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">In</h4>
                <p class="text-sm">For months, years, or large areas.</p>
                <p class="text-sm italic mt-1">Example: <strong>In</strong> 2024 / <strong>In</strong> London / <strong>In</strong> the morning.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">On</h4>
                <p class="text-sm">For days, dates, or surfaces.</p>
                <p class="text-sm italic mt-1">Example: <strong>On</strong> Monday / <strong>On</strong> the table / <strong>On</strong> June 1st.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">At</h4>
                <p class="text-sm">For specific times or points.</p>
                <p class="text-sm italic mt-1">Example: <strong>At</strong> 5 PM / <strong>At</strong> the door / <strong>At</strong> night.</p>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'gf10-1',
          text: 'Which preposition is used for specific times?',
          options: ['In', 'On', 'At', 'By'],
          correctAnswer: 2,
          explanation: 'At is used for specific clock times. For example: "I will meet you at 5 PM."'
        },
        {
          id: 'gf10-2',
          text: 'Identify the preposition: "I was born in 1995."',
          options: ['I', 'was', 'born', 'in'],
          correctAnswer: 3,
          explanation: 'In is used for years. For example: "I was born in 1995."'
        },
        {
          id: 'gf10-3',
          text: 'Which sentence is correct?',
          options: ['I am at the bus.', 'I am in the bus.', 'I am on the bus.', 'I am by the bus.'],
          correctAnswer: 2,
          explanation: 'On is used for public transport. For example: "I am on the bus."'
        },
        {
          id: 'gf10-4',
          text: 'Identify the preposition: "The keys are on the counter."',
          options: ['The', 'keys', 'on', 'counter'],
          correctAnswer: 2,
          explanation: 'On shows location on a surface. For example: "The keys are on the counter."'
        },
        {
          id: 'gf10-5',
          text: 'Which preposition is used for days of the week?',
          options: ['In', 'On', 'At', 'For'],
          correctAnswer: 1,
          explanation: 'On is used for days. For example: "I will see you on Monday."'
        },
        {
          id: 'gf10-6',
          text: 'Identify the error: "I will see you in Monday."',
          options: ['I', 'will', 'in', 'Monday'],
          correctAnswer: 2,
          explanation: 'Use "on" for days. For example: "I will see you on Monday."'
        },
        {
          id: 'gf10-7',
          text: 'Which preposition is used for months?',
          options: ['In', 'On', 'At', 'Since'],
          correctAnswer: 0,
          explanation: 'In is used for months. For example: "I was born in June."'
        },
        {
          id: 'gf10-8',
          text: 'Identify the preposition: "He is sitting at his desk."',
          options: ['He', 'is', 'at', 'desk'],
          correctAnswer: 2,
          explanation: 'At shows a specific point. For example: "He is sitting at his desk."'
        },
        {
          id: 'gf10-9',
          text: 'Which sentence uses "for" correctly?',
          options: ['I have lived here for 5 years.', 'I have lived here for 2010.', 'I have lived here for Monday.', 'I have lived here for morning.'],
          correctAnswer: 0,
          explanation: 'For is used for a duration of time. For example: "I have lived here for 5 years."'
        },
        {
          id: 'gf10-10',
          text: 'Identify the preposition: "The plane flew over the mountains."',
          options: ['plane', 'flew', 'over', 'mountains'],
          correctAnswer: 2,
          explanation: 'Over is a preposition of direction/location. For example: "The plane flew over the mountains."'
        }
      ]
    }
  ]
};
