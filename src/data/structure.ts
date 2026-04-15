import { Category } from '../types';

export const STRUCTURE_CATEGORY: Category = {
  id: 'structure',
  title: 'Structure',
  icon: 'edit-3',
  lessons: [
    {
      id: 's-1',
      title: 'Subject-Verb Agreement',
      description: 'Ensuring the subject and verb match in number.',
      tips: [
        "Singular subjects take singular verbs. (The dog barks.)",
        "Plural subjects take plural verbs. (The dogs bark.)",
        "Be careful with collective nouns (team, family).",
        "Ignore phrases between the subject and the verb. (The box of chocolates is on the table.)",
        "Words like 'everyone', 'someone', 'each' are always singular."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Subject-Verb Agreement</h3>
          <p class="text-on-surface-variant leading-relaxed">
            The <strong>subject</strong> and the <strong>verb</strong> must always agree in number.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Example: "The <strong>quality</strong> of the products <strong>is</strong> excellent." (Not 'are')</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 's1',
          text: 'The list of items _______ on the desk.',
          options: ['is', 'are', 'be', 'being'],
          correctAnswer: 0,
          explanation: 'The subject is "list" (singular), not "items". For example: "A group of students is waiting."'
        },
        {
          id: 's2',
          text: 'Neither the teacher nor the students _______ the answer.',
          options: ['know', 'knows', 'knowing', 'has known'],
          correctAnswer: 0,
          explanation: 'When using "neither... nor", the verb agrees with the closer subject ("students"). For example: "Neither John nor his friends are coming."'
        },
        {
          id: 's3',
          text: 'Every one of the participants _______ a certificate.',
          options: ['receive', 'receives', 'receiving', 'have received'],
          correctAnswer: 1,
          explanation: '"Every one" is always singular. For example: "Each of the players has a uniform."'
        },
        {
          id: 's4',
          text: 'The team _______ practicing for the championship.',
          options: ['is', 'are', 'be', 'were'],
          correctAnswer: 0,
          explanation: 'Collective nouns like "team" are usually singular in American English. For example: "The family is going on vacation."'
        },
        {
          id: 's5',
          text: 'There _______ many reasons for the delay.',
          options: ['is', 'are', 'was', 'has been'],
          correctAnswer: 1,
          explanation: 'In "there is/are" sentences, the verb agrees with the noun that follows it ("reasons"). For example: "There are three apples on the table."'
        },
        {
          id: 's1-6',
          text: 'The quality of these products _______ improved significantly.',
          options: ['has', 'have', 'is', 'are'],
          correctAnswer: 0,
          explanation: 'The subject is "quality" (singular). "The quality... has improved."'
        },
        {
          id: 's1-7',
          text: 'Economics _______ a difficult subject for many students.',
          options: ['is', 'are', 'be', 'were'],
          correctAnswer: 0,
          explanation: 'Subjects ending in -ics (like economics, physics) are singular. "Economics is..." '
        },
        {
          id: 's1-8',
          text: 'Ten dollars _______ too much to pay for a cup of coffee.',
          options: ['is', 'are', 'be', 'were'],
          correctAnswer: 0,
          explanation: 'Amounts of money, time, and distance are usually singular. "Ten dollars is..."'
        },
        {
          id: 's1-9',
          text: 'The scissors _______ on the table.',
          options: ['is', 'are', 'was', 'has been'],
          correctAnswer: 1,
          explanation: 'Nouns that come in pairs (scissors, pants, glasses) are plural. "The scissors are..."'
        },
        {
          id: 's1-10',
          text: 'One of my friends _______ coming to visit me tomorrow.',
          options: ['is', 'are', 'be', 'were'],
          correctAnswer: 0,
          explanation: 'The subject is "One", which is singular. "One... is coming."'
        }
      ]
    },
    {
      id: 's-2',
      title: 'Parallel Structure',
      description: 'Using the same grammatical form for items in a list.',
      tips: [
        "Use the same form for all items in a series. (Correct: 'I like hiking, swimming, and biking.')",
        "Check verbs, nouns, and adjectives for consistency.",
        "Parallelism applies to comparisons as well. (Correct: 'Driving is faster than walking.')",
        "Use parallel structure after correlative conjunctions (either... or, not only... but also).",
        "Parallelism makes your writing clearer and more professional."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Parallelism</h3>
          <p class="text-on-surface-variant leading-relaxed">
            <strong>Parallel structure</strong> means using the same pattern of words to show that two or more ideas have the same level of importance.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Incorrect: "He likes to swim, hiking, and to run."</p>
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Correct: "He likes <strong>swimming</strong>, <strong>hiking</strong>, and <strong>running</strong>."</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 's6',
          text: 'She is talented, hardworking, and _______ .',
          options: ['has kindness', 'kind', 'is kind', 'kindly'],
          correctAnswer: 1,
          explanation: '"Talented" and "hardworking" are adjectives, so the third item must also be an adjective ("kind").'
        },
        {
          id: 's7',
          text: 'The job requires typing, filing, and _______ the phone.',
          options: ['to answer', 'answering', 'answer', 'answers'],
          correctAnswer: 1,
          explanation: 'The list uses gerunds ("typing", "filing"), so "answering" is the parallel form.'
        },
        {
          id: 's8',
          text: 'It is better to give than _______ .',
          options: ['receiving', 'to receive', 'receive', 'receives'],
          correctAnswer: 1,
          explanation: 'The comparison is between "to give" and "to receive".'
        },
        {
          id: 's9',
          text: 'Not only did he lose his keys, but he also _______ his wallet.',
          options: ['losing', 'lost', 'to lose', 'has lost'],
          correctAnswer: 1,
          explanation: 'The first part uses the past tense ("did... lose"), so the second part should also be in the past tense ("lost").'
        },
        {
          id: 's10',
          text: 'The teacher told the students to sit down, to open their books, and _______ .',
          options: ['starting to read', 'to start reading', 'start reading', 'started reading'],
          correctAnswer: 1,
          explanation: 'The list uses "to + verb" ("to sit", "to open"), so "to start" is the parallel form.'
        },
        {
          id: 's2-6',
          text: 'The activities include singing, dancing, and _______ .',
          options: ['to play games', 'playing games', 'play games', 'played games'],
          correctAnswer: 1,
          explanation: 'The list uses gerunds ("singing", "dancing"), so "playing" is parallel.'
        },
        {
          id: 's2-7',
          text: 'He is not only a great athlete but also _______ .',
          options: ['a brilliant student', 'is a brilliant student', 'brilliant student', 'he is a brilliant student'],
          correctAnswer: 0,
          explanation: 'Parallelism with "not only... but also" requires matching noun phrases.'
        },
        {
          id: 's2-8',
          text: 'To succeed is to work hard and _______ .',
          options: ['persevering', 'to persevere', 'persevere', 'persevered'],
          correctAnswer: 1,
          explanation: 'Matches "to work". "To succeed is to work... and to persevere."'
        },
        {
          id: 's2-9',
          text: 'The movie was both exciting and _______ .',
          options: ['it was educational', 'educational', 'education', 'educationally'],
          correctAnswer: 1,
          explanation: 'Matches the adjective "exciting".'
        },
        {
          id: 's2-10',
          text: 'She likes either to stay at home or _______ .',
          options: ['going out', 'to go out', 'go out', 'goes out'],
          correctAnswer: 1,
          explanation: 'Matches "to stay". "Either to stay... or to go out."'
        }
      ]
    },
    {
      id: 's-3',
      title: 'Inversion and Subjunctive',
      description: 'Advanced structures for emphasis and hypothetical situations.',
      tips: [
        "Inversion: Put the auxiliary before the subject after negative adverbs (Never have I...).",
        "Subjunctive: Use the base form after verbs of suggestion (I suggest that he go...).",
        "Use 'were' instead of 'was' in 'if' clauses (If I were you...).",
        "Inversion is common with 'only then', 'rarely', 'seldom'.",
        "The subjunctive is used for importance or urgency."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Advanced Structures</h3>
          <p class="text-on-surface-variant leading-relaxed">
            <strong>Inversion</strong> and the <strong>subjunctive mood</strong> are used in formal English to add emphasis or express hypothetical ideas.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Inversion: "Rarely <strong>does he</strong> arrive on time."</p>
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Subjunctive: "I suggest that she <strong>be</strong> informed."</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 's11',
          text: 'Never _______ such a beautiful sunset.',
          options: ['I have seen', 'have I seen', 'I saw', 'did I saw'],
          correctAnswer: 1,
          explanation: 'After "never", we use inversion (auxiliary + subject). For example: "Never had I felt so happy."'
        },
        {
          id: 's12',
          text: 'The doctor recommended that he _______ more exercise.',
          options: ['get', 'gets', 'got', 'getting'],
          correctAnswer: 0,
          explanation: 'After "recommended that", we use the subjunctive (base form). For example: "I suggest that she stay here."'
        },
        {
          id: 's13',
          text: 'Only later _______ the truth.',
          options: ['did he find out', 'he found out', 'he finds out', 'does he find out'],
          correctAnswer: 0,
          explanation: 'Inversion follows "only later". For example: "Only then did I realize my mistake."'
        },
        {
          id: 's14',
          text: 'If I _______ you, I would take the opportunity.',
          options: ['am', 'was', 'were', 'be'],
          correctAnswer: 2,
          explanation: '"Were" is the subjunctive form used for hypothetical conditions. For example: "If he were taller, he would play basketball."'
        },
        {
          id: 's15',
          text: 'It is essential that the meeting _______ on time.',
          options: ['start', 'starts', 'started', 'starting'],
          correctAnswer: 0,
          explanation: 'After "essential that", we use the base form (subjunctive). For example: "It is vital that he be present."'
        },
        {
          id: 's3-6',
          text: 'Seldom _______ such a talented musician.',
          options: ['we see', 'do we see', 'we do see', 'saw we'],
          correctAnswer: 1,
          explanation: 'Inversion after "seldom". "Seldom do we see..."'
        },
        {
          id: 's3-7',
          text: 'The committee insisted that the report _______ submitted by Friday.',
          options: ['is', 'be', 'was', 'being'],
          correctAnswer: 1,
          explanation: 'Subjunctive after "insisted that". "Insisted that the report be submitted."'
        },
        {
          id: 's3-8',
          text: 'Hardly _______ the house when it started to rain.',
          options: ['I had left', 'had I left', 'did I left', 'I left'],
          correctAnswer: 1,
          explanation: 'Inversion after "hardly". "Hardly had I left..."'
        },
        {
          id: 's3-9',
          text: 'I suggest that he _______ the offer.',
          options: ['accept', 'accepts', 'accepted', 'accepting'],
          correctAnswer: 0,
          explanation: 'Subjunctive after "suggest that". "Suggest that he accept..."'
        },
        {
          id: 's3-10',
          text: 'Were he _______ , he would help us.',
          options: ['here', 'be here', 'is here', 'was here'],
          correctAnswer: 0,
          explanation: 'Inverted conditional (If he were here -> Were he here).'
        }
      ]
    },
    {
      id: 's-4',
      title: 'Conditionals and Modals',
      description: 'Mastering "if" sentences and auxiliary verbs.',
      tips: [
        "Type 1: Real possibility (If it rains, I will stay).",
        "Type 2: Imaginary (If I were you, I would go).",
        "Type 3: Past regret (If I had known, I would have helped).",
        "Use 'must have' for past certainty.",
        "Use 'should have' for past advice/regret."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Conditionals & Modals</h3>
          <p class="text-on-surface-variant leading-relaxed">
            These structures allow you to talk about possibilities, obligations, and hypothetical situations in the past, present, and future.
          </p>
        </div>
      `,
      questions: [
        {
          id: 's16',
          text: 'If I _______ more time, I would have finished the project.',
          options: ['have', 'had', 'had had', 'would have'],
          correctAnswer: 2,
          explanation: 'This is a third conditional (past regret), so we use the past perfect "had had".'
        },
        {
          id: 's17',
          text: 'He _______ his keys. He can\'t find them anywhere.',
          options: ['must lose', 'must have lost', 'should lose', 'should have lost'],
          correctAnswer: 1,
          explanation: '"Must have + past participle" is used for a logical conclusion about the past.'
        },
        {
          id: 's18',
          text: 'If it _______ tomorrow, we will go to the beach.',
          options: ['is sunny', 'will be sunny', 'was sunny', 'would be sunny'],
          correctAnswer: 0,
          explanation: 'Type 1 conditional uses present simple in the "if" clause.'
        },
        {
          id: 's19',
          text: 'You _______ that. It was a secret!',
          options: ['shouldn\'t say', 'shouldn\'t have said', 'mustn\'t say', 'mustn\'t have said'],
          correctAnswer: 1,
          explanation: '"Shouldn\'t have + past participle" expresses regret about a past action.'
        },
        {
          id: 's20',
          text: 'If I _______ a bird, I would fly away.',
          options: ['am', 'was', 'were', 'be'],
          correctAnswer: 2,
          explanation: 'Type 2 conditional uses "were" for hypothetical situations.'
        },
        {
          id: 's4-6',
          text: 'If she _______ harder, she would have passed the exam.',
          options: ['studied', 'had studied', 'would study', 'studies'],
          correctAnswer: 1,
          explanation: 'Third conditional (If + past perfect, would have + past participle).'
        },
        {
          id: 's4-7',
          text: 'You _______ the doctor if you feel sick.',
          options: ['should see', 'should have seen', 'must see', 'must have seen'],
          correctAnswer: 0,
          explanation: 'Advice for the present/future.'
        },
        {
          id: 's4-8',
          text: 'If I _______ rich, I would travel the world.',
          options: ['am', 'was', 'were', 'be'],
          correctAnswer: 2,
          explanation: 'Second conditional (If + past simple, would + base verb).'
        },
        {
          id: 's4-9',
          text: 'He _______ the train. He is usually very punctual.',
          options: ['might miss', 'might have missed', 'should miss', 'should have missed'],
          correctAnswer: 1,
          explanation: 'Speculation about the past.'
        },
        {
          id: 's4-10',
          text: 'If you _______ help, just ask me.',
          options: ['need', 'needed', 'will need', 'would need'],
          correctAnswer: 0,
          explanation: 'First conditional (If + present simple, imperative/will).'
        }
      ]
    },
    {
      id: 's-5',
      title: 'Relative and Reduced Clauses',
      description: 'Combining sentences and making them more concise.',
      tips: [
        "Use 'who' for people and 'which' for things.",
        "Reduced clauses: 'The man (who is) standing there...'",
        "Use 'whose' for possession.",
        "Non-defining clauses (extra info) need commas.",
        "Defining clauses (essential info) do not need commas."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Relative Clauses</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Relative clauses add information about a noun. <strong>Reduced clauses</strong> make the sentence shorter by removing the relative pronoun and the verb 'to be'.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Full: "The book which was written by him is famous."</p>
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Reduced: "The book <strong>written by him</strong> is famous."</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 's21',
          text: 'The man _______ next to me is my uncle.',
          options: ['sitting', 'sits', 'is sitting', 'who sit'],
          correctAnswer: 0,
          explanation: 'This is a reduced relative clause (who is sitting -> sitting).'
        },
        {
          id: 's22',
          text: 'The car _______ I bought is very reliable.',
          options: ['who', 'which', 'whose', 'where'],
          correctAnswer: 1,
          explanation: '"Which" (or "that") is used for things.'
        },
        {
          id: 's23',
          text: 'The students _______ names are on the list should wait here.',
          options: ['who', 'which', 'whose', 'whom'],
          correctAnswer: 2,
          explanation: '"Whose" shows possession.'
        },
        {
          id: 's24',
          text: 'The city _______ I grew up is very small.',
          options: ['which', 'that', 'where', 'who'],
          correctAnswer: 2,
          explanation: '"Where" is used for places.'
        },
        {
          id: 's25',
          text: 'The paintings _______ in this gallery are for sale.',
          options: ['displaying', 'displayed', 'which display', 'are displayed'],
          correctAnswer: 1,
          explanation: 'This is a reduced passive relative clause (which are displayed -> displayed).'
        },
        {
          id: 's5-6',
          text: 'The woman _______ spoke to us was very helpful.',
          options: ['who', 'which', 'whose', 'whom'],
          correctAnswer: 0,
          explanation: '"Who" is used for people.'
        },
        {
          id: 's5-7',
          text: 'The house _______ on the hill belongs to my grandfather.',
          options: ['standing', 'stands', 'is standing', 'which stand'],
          correctAnswer: 0,
          explanation: 'Reduced relative clause (which stands -> standing).'
        },
        {
          id: 's5-8',
          text: 'I know a boy _______ father is a famous actor.',
          options: ['who', 'which', 'whose', 'whom'],
          correctAnswer: 2,
          explanation: '"Whose" shows possession.'
        },
        {
          id: 's5-9',
          text: 'The reason _______ he left is still a mystery.',
          options: ['why', 'which', 'where', 'when'],
          correctAnswer: 0,
          explanation: '"Why" is used for reasons.'
        },
        {
          id: 's5-10',
          text: 'The task _______ to us was quite difficult.',
          options: ['assigning', 'assigned', 'which assign', 'was assigned'],
          correctAnswer: 1,
          explanation: 'Reduced passive clause (which was assigned -> assigned).'
        }
      ]
    },
    {
      id: 's-6',
      title: 'Word Choice and Diction',
      description: 'Avoiding common errors with similar-sounding words.',
      tips: [
        "Affect (verb) vs. Effect (noun).",
        "Accept (receive) vs. Except (exclude).",
        "Their (possession) vs. There (place) vs. They're (they are).",
        "Its (possession) vs. It's (it is).",
        "Complement (complete) vs. Compliment (praise)."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Commonly Confused Words</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Choosing the right word is essential for clear and accurate communication.
          </p>
        </div>
      `,
      questions: [
        {
          id: 's26',
          text: 'The medicine had a strange _______ on him.',
          options: ['affect', 'effect', 'affects', 'effects'],
          correctAnswer: 1,
          explanation: '"Effect" is a noun meaning result. "Affect" is usually a verb.'
        },
        {
          id: 's27',
          text: 'Everyone was invited _______ John.',
          options: ['accept', 'except', 'expect', 'aspect'],
          correctAnswer: 1,
          explanation: '"Except" means "excluding". "Accept" means "to receive".'
        },
        {
          id: 's28',
          text: 'The cat licked _______ paw.',
          options: ['its', 'it\'s', 'his', 'her'],
          correctAnswer: 0,
          explanation: '"Its" is the possessive form. "It\'s" is a contraction of "it is".'
        },
        {
          id: 's29',
          text: 'I _______ your apology.',
          options: ['accept', 'except', 'expect', 'aspect'],
          correctAnswer: 0,
          explanation: '"Accept" means to receive or agree to something.'
        },
        {
          id: 's30',
          text: 'The weather will _______ our travel plans.',
          options: ['affect', 'effect', 'affects', 'effects'],
          correctAnswer: 0,
          explanation: '"Affect" is a verb meaning to influence.'
        },
        {
          id: 's6-6',
          text: 'They left _______ bags in the hallway.',
          options: ['there', 'their', 'they\'re', 'theirs'],
          correctAnswer: 1,
          explanation: '"Their" is possessive.'
        },
        {
          id: 's6-7',
          text: 'This wine _______ the meal perfectly.',
          options: ['complements', 'compliments', 'completes', 'complex'],
          correctAnswer: 0,
          explanation: '"Complement" means to complete or go well with.'
        },
        {
          id: 's6-8',
          text: 'I _______ you to finish the work by noon.',
          options: ['accept', 'except', 'expect', 'aspect'],
          correctAnswer: 2,
          explanation: '"Expect" means to anticipate or require.'
        },
        {
          id: 's6-9',
          text: '_______ going to be a long day.',
          options: ['Its', 'It\'s', 'Is', 'It'],
          correctAnswer: 1,
          explanation: '"It\'s" is a contraction of "It is".'
        },
        {
          id: 's6-10',
          text: 'She gave him a nice _______ on his new suit.',
          options: ['complement', 'compliment', 'complete', 'complex'],
          correctAnswer: 1,
          explanation: '"Compliment" means praise.'
        }
      ]
    },
    {
      id: 's-7',
      title: 'Gerunds and Infinitives',
      description: 'Advanced usage of -ing and "to" forms.',
      tips: [
        "Use gerunds after prepositions (interested in going).",
        "Some verbs change meaning (stop to smoke vs. stop smoking).",
        "Use infinitives after adjectives (happy to help).",
        "Use gerunds as subjects (Swimming is fun).",
        "Verbs like 'avoid', 'consider', 'mind' take gerunds."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Gerunds & Infinitives</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Understanding when to use the <strong>-ing</strong> form or the <strong>to + verb</strong> form is a key part of advanced English grammar.
          </p>
        </div>
      `,
      questions: [
        {
          id: 's31',
          text: 'I look forward to _______ you soon.',
          options: ['see', 'seeing', 'to see', 'seen'],
          correctAnswer: 1,
          explanation: '"To" in "look forward to" is a preposition, so it must be followed by a gerund.'
        },
        {
          id: 's32',
          text: 'He stopped _______ a cigarette because he was tired.',
          options: ['smoke', 'to smoke', 'smoking', 'smoked'],
          correctAnswer: 1,
          explanation: '"Stopped to smoke" means he paused his activity in order to smoke.'
        },
        {
          id: 's33',
          text: 'She is good at _______ languages.',
          options: ['learn', 'to learn', 'learning', 'learned'],
          correctAnswer: 2,
          explanation: 'Use a gerund after a preposition ("at").'
        },
        {
          id: 's34',
          text: 'I can\'t help _______ when I see that movie.',
          options: ['cry', 'to cry', 'crying', 'cried'],
          correctAnswer: 2,
          explanation: '"Can\'t help" is followed by a gerund.'
        },
        {
          id: 's35',
          text: 'It is important _______ the rules.',
          options: ['follow', 'to follow', 'following', 'followed'],
          correctAnswer: 1,
          explanation: 'Use an infinitive after an adjective ("important").'
        },
        {
          id: 's7-6',
          text: 'He decided _______ a new car.',
          options: ['buy', 'to buy', 'buying', 'bought'],
          correctAnswer: 1,
          explanation: '"Decide" is followed by an infinitive.'
        },
        {
          id: 's7-7',
          text: '_______ is my favorite hobby.',
          options: ['Read', 'To read', 'Reading', 'Reads'],
          correctAnswer: 2,
          explanation: 'Gerund as a subject.'
        },
        {
          id: 's7-8',
          text: 'I avoid _______ in the rush hour.',
          options: ['drive', 'to drive', 'driving', 'driven'],
          correctAnswer: 2,
          explanation: '"Avoid" is followed by a gerund.'
        },
        {
          id: 's7-9',
          text: 'He is afraid of _______ .',
          options: ['fly', 'to fly', 'flying', 'flown'],
          correctAnswer: 2,
          explanation: 'Gerund after a preposition ("of").'
        },
        {
          id: 's7-10',
          text: 'She promised _______ me back.',
          options: ['call', 'to call', 'calling', 'called'],
          correctAnswer: 1,
          explanation: '"Promise" is followed by an infinitive.'
        }
      ]
    },
    {
      id: 's-8',
      title: 'Passive Voice and Causatives',
      description: 'Arranging for actions to be done.',
      tips: [
        "Causative: Have/Get something done (I had my car fixed).",
        "Passive: Focus on the object (The car was fixed).",
        "Use 'have someone do' vs. 'get someone to do'.",
        "Passive is used when the doer is unknown or unimportant.",
        "Causatives show that the subject arranged the action."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Passive & Causative</h3>
          <p class="text-on-surface-variant leading-relaxed">
            These structures are used to describe actions where the subject is not the one performing the task.
          </p>
        </div>
      `,
      questions: [
        {
          id: 's36',
          text: 'I need to have my hair _______ .',
          options: ['cut', 'cutting', 'to cut', 'cuts'],
          correctAnswer: 0,
          explanation: 'Causative structure: have + object + past participle ("cut" is the past participle).'
        },
        {
          id: 's37',
          text: 'The report _______ by the end of the day.',
          options: ['will finish', 'will be finished', 'is finishing', 'finished'],
          correctAnswer: 1,
          explanation: 'Passive voice for a future action.'
        },
        {
          id: 's38',
          text: 'She got her brother _______ her with the move.',
          options: ['help', 'to help', 'helped', 'helping'],
          correctAnswer: 1,
          explanation: 'Causative structure: get + person + to-infinitive.'
        },
        {
          id: 's39',
          text: 'He had the mechanic _______ the brakes.',
          options: ['check', 'to check', 'checked', 'checking'],
          correctAnswer: 0,
          explanation: 'Causative structure: have + person + base verb.'
        },
        {
          id: 's40',
          text: 'The house _______ last year.',
          options: ['built', 'was built', 'is built', 'has been built'],
          correctAnswer: 1,
          explanation: 'Passive voice for a past action.'
        },
        {
          id: 's8-6',
          text: 'The window _______ by the storm.',
          options: ['broke', 'was broken', 'is broken', 'has broken'],
          correctAnswer: 1,
          explanation: 'Passive voice.'
        },
        {
          id: 's8-7',
          text: 'I will get the documents _______ .',
          options: ['print', 'to print', 'printed', 'printing'],
          correctAnswer: 2,
          explanation: 'Causative: get + object + past participle.'
        },
        {
          id: 's8-8',
          text: 'The letter _______ yesterday.',
          options: ['mailed', 'was mailed', 'is mailed', 'has mailed'],
          correctAnswer: 1,
          explanation: 'Passive voice.'
        },
        {
          id: 's8-9',
          text: 'She had her assistant _______ the emails.',
          options: ['send', 'to send', 'sent', 'sending'],
          correctAnswer: 0,
          explanation: 'Causative: have + person + base verb.'
        },
        {
          id: 's8-10',
          text: 'The cake _______ by my mother.',
          options: ['made', 'was made', 'is made', 'has made'],
          correctAnswer: 1,
          explanation: 'Passive voice.'
        }
      ]
    },
    {
      id: 's-9',
      title: 'Advanced Grammar',
      description: 'Final review of complex structures.',
      tips: [
        "Check for dangling modifiers.",
        "Ensure consistent verb tenses in a paragraph.",
        "Use formal language (avoid contractions).",
        "Vary sentence length and structure.",
        "Proofread for punctuation errors."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Advanced Review</h3>
          <p class="text-on-surface-variant leading-relaxed">
            A final look at the most challenging aspects of English structure and expression.
          </p>
        </div>
      `,
      questions: [
        {
          id: 's41',
          text: 'Identify the error: "Walking down the street, the trees were beautiful."',
          options: [
            'Walking down the street',
            'the trees',
            'were beautiful',
            'No error'
          ],
          correctAnswer: 0,
          explanation: 'This is a dangling modifier. The trees were not walking down the street.'
        },
        {
          id: 's42',
          text: 'Which sentence is more formal?',
          options: [
            'He\'s going to the store.',
            'He is going to the store.',
            'He gonna go to the store.',
            'He is going to go to the store.'
          ],
          correctAnswer: 1,
          explanation: 'Avoiding contractions ("He is" instead of "He\'s") is a hallmark of formal writing.'
        },
        {
          id: 's43',
          text: 'Choose the correct form: "The data _______ collected over two years."',
          options: ['was', 'were', 'is', 'are'],
          correctAnswer: 1,
          explanation: 'In formal/scientific English, "data" is the plural of "datum", so it takes a plural verb ("were").'
        },
        {
          id: 's44',
          text: 'Identify the error: "He is one of the students who is always late."',
          options: ['He is', 'one of the students', 'who is', 'always late'],
          correctAnswer: 2,
          explanation: 'The relative pronoun "who" refers to "students" (plural), so the verb should be "are".'
        },
        {
          id: 's45',
          text: 'Which sentence uses a semicolon correctly?',
          options: [
            'I like tea; but he likes coffee.',
            'I like tea; he likes coffee.',
            'Because I like tea; he likes coffee.',
            'I like tea,; he likes coffee.'
          ],
          correctAnswer: 1,
          explanation: 'A semicolon connects two independent clauses without a conjunction.'
        },
        {
          id: 's9-6',
          text: 'Identify the error: "Having finished the book, the TV was turned on."',
          options: ['Having finished the book', 'the TV', 'was turned on', 'No error'],
          correctAnswer: 0,
          explanation: 'Dangling modifier. The TV didn\'t finish the book.'
        },
        {
          id: 's9-7',
          text: 'Choose the correct form: "None of the information _______ correct."',
          options: ['is', 'are', 'be', 'were'],
          correctAnswer: 0,
          explanation: '"None" with an uncountable noun ("information") takes a singular verb.'
        },
        {
          id: 's9-8',
          text: 'Identify the error: "I will call you when I will arrive."',
          options: ['I will call you', 'when', 'I will arrive', 'No error'],
          correctAnswer: 2,
          explanation: 'In time clauses, we use the present simple for future meaning. "When I arrive."'
        },
        {
          id: 's9-9',
          text: 'Which is correct?',
          options: [
            'I look forward to meeting you.',
            'I look forward to meet you.',
            'I look forward meeting you.',
            'I look forward meet you.'
          ],
          correctAnswer: 0,
          explanation: '"Look forward to" is followed by a gerund.'
        },
        {
          id: 's9-10',
          text: 'Identify the error: "The reason why I am late is because of the traffic."',
          options: ['The reason why', 'I am late', 'is because of', 'the traffic'],
          correctAnswer: 2,
          explanation: 'Redundant. Use "is that" or "is the traffic".'
        }
      ]
    },
    {
      id: 's-10',
      title: 'Conjunctions and Connectors',
      description: 'Linking ideas logically and smoothly.',
      tips: [
        "Use 'however', 'nevertheless' for contrast.",
        "Use 'furthermore', 'moreover' for addition.",
        "Use 'therefore', 'consequently' for result.",
        "Check if the connector requires a semicolon or a comma.",
        "Ensure the connector matches the logical relationship between sentences."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Conjunctions & Connectors</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Connectors help create a logical flow in your writing by showing the relationship between different ideas.
          </p>
        </div>
      `,
      questions: [
         {
          id: 's10-1',
          text: 'The weather was terrible; _______ , the match was cancelled.',
          options: ['however', 'consequently', 'furthermore', 'otherwise'],
          correctAnswer: 1,
          explanation: '"Consequently" shows a result. The terrible weather resulted in the cancellation.'
        },
        {
          id: 's10-2',
          text: 'She is very talented; _______ , she is very humble.',
          options: ['moreover', 'nevertheless', 'therefore', 'because'],
          correctAnswer: 1,
          explanation: '"Nevertheless" shows contrast. Despite being talented, she is humble.'
        },
        {
          id: 's10-3',
          text: 'He didn\'t study for the exam; _______ , he failed.',
          options: ['as a result', 'on the other hand', 'in addition', 'similarly'],
          correctAnswer: 0,
          explanation: '"As a result" shows the consequence of not studying.'
        },
        {
          id: 's10-4',
          text: 'The hotel was expensive; _______ , the service was poor.',
          options: ['furthermore', 'however', 'consequently', 'therefore'],
          correctAnswer: 0,
          explanation: '"Furthermore" adds more negative information about the hotel.'
        },
        {
          id: 's10-5',
          text: 'You should leave now; _______ , you will miss the train.',
          options: ['otherwise', 'therefore', 'moreover', 'instead'],
          correctAnswer: 0,
          explanation: '"Otherwise" shows what will happen if the first action is not taken.'
        },
        {
          id: 's10-6',
          text: 'I like coffee, _______ my sister prefers tea.',
          options: ['whereas', 'furthermore', 'consequently', 'therefore'],
          correctAnswer: 0,
          explanation: '"Whereas" is used to show a direct contrast between two things.'
        },
        {
          id: 's10-7',
          text: 'He is a great singer; _______ , he plays the piano beautifully.',
          options: ['in addition', 'however', 'otherwise', 'nevertheless'],
          correctAnswer: 0,
          explanation: '"In addition" adds more positive information.'
        },
        {
          id: 's10-8',
          text: 'The car is old; _______ , it is still very reliable.',
          options: ['however', 'furthermore', 'therefore', 'consequently'],
          correctAnswer: 0,
          explanation: '"However" shows contrast between the age and reliability.'
        },
        {
          id: 's10-9',
          text: 'It was raining; _______ , we decided to stay home.',
          options: ['therefore', 'nevertheless', 'otherwise', 'moreover'],
          correctAnswer: 0,
          explanation: '"Therefore" shows the logical result of the rain.'
        },
        {
          id: 's10-10',
          text: 'She worked hard; _______ , she won the award.',
          options: ['consequently', 'however', 'otherwise', 'instead'],
          correctAnswer: 0,
          explanation: '"Consequently" shows the result of her hard work.'
        }
      ]
    }
  ]
};
