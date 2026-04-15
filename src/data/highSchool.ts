import { Category } from '../types';

export const HIGH_SCHOOL_CATEGORY: Category = {
  id: 'high-school',
  title: 'High School',
  icon: 'school',
  lessons: [
    {
      id: 'hs-1',
      title: 'Conditional Sentences: Type 1',
      description: 'Real possibilities in the present or future.',
      tips: [
        "Gunakan 'if + present simple' untuk kondisi dan 'will + base verb' untuk hasilnya. (Correct: 'If it rains, I will stay.' | Incorrect: 'If it will rain, I stay.')",
        "Klausa 'if' bisa diletakkan di awal atau di akhir kalimat. (Correct: 'I will stay if it rains.' | Incorrect: 'If it rains will I stay.')",
        "Tipe 1 digunakan untuk hal-hal yang kemungkinan besar akan terjadi. (Correct: 'If I study, I will pass.' | Incorrect: 'If I studied, I will pass.')",
        "Anda bisa menggunakan 'can' atau 'may' sebagai pengganti 'will'. (Correct: 'If you finish, you can go.' | Incorrect: 'If you finish, you will can go.')",
        "Jangan gunakan 'will' di dalam klausa 'if'. (Correct: 'If he calls...' | Incorrect: 'If he will call...') "
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">First Conditional</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Kita menggunakan <strong>First Conditional</strong> untuk membicarakan kemungkinan nyata di masa sekarang atau masa depan. We use the <strong>First Conditional</strong> to talk about real possibilities in the present or future.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="font-mono text-sm"><strong>Structure:</strong> If + Present Simple, Will + Verb</p>
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Example: "If I have time, I will help you."</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'h1',
          text: 'If it _______ tomorrow, we will cancel the picnic.',
          options: ['will rain', 'rains', 'rained', 'is raining'],
          correctAnswer: 1,
          explanation: 'Dalam pengandaian Tipe 1, klausa "if" menggunakan present simple tense. In Type 1 conditionals, the "if" clause uses the present simple tense. For example: "If she arrives on time, we can start the meeting."'
        },
        {
          id: 'h2',
          text: 'I _______ you if I find your keys.',
          options: ['call', 'called', 'will call', 'would call'],
          correctAnswer: 2,
          explanation: 'Klausa hasil dalam pengandaian Tipe 1 menggunakan "will + base verb". The result clause in Type 1 conditionals uses "will + base verb". For example: "I will call you if I find your keys."'
        },
        {
          id: 'h3',
          text: 'If you _______ hard, you will pass the exam.',
          options: ['will study', 'study', 'studied', 'are studying'],
          correctAnswer: 1,
          explanation: 'Kondisi dinyatakan dalam present simple. The condition is expressed in the present simple. For example: "If you study hard, you will pass the exam."'
        },
        {
          id: 'h4',
          text: 'What _______ if he doesn\'t come?',
          options: ['you do', 'do you do', 'will you do', 'did you do'],
          correctAnswer: 2,
          explanation: 'Pertanyaan dalam klausa hasil mengikuti struktur "will + subject + verb". Questions in the result clause follow the "will + subject + verb" structure. For example: "What will you do if he doesn\'t come?"'
        },
        {
          id: 'h5',
          text: 'If she _______ free, she will join us for lunch.',
          options: ['will be', 'was', 'be', 'is'],
          correctAnswer: 3,
          explanation: 'Kata kerja "to be" dalam present simple untuk "she" adalah "is". The verb "to be" in the present simple for "she" is "is". For example: "If she is free, she will join us for lunch."'
        },
        {
          id: 'h5-1',
          text: 'If we _______ now, we will arrive on time.',
          options: ['leave', 'will leave', 'left', 'are leaving'],
          correctAnswer: 0,
          explanation: 'Klausa "if" menggunakan present simple. The "if" clause uses the present simple. For example: "If we leave now, we will arrive on time."'
        },
        {
          id: 'h5-2',
          text: 'He _______ very happy if he gets the job.',
          options: ['is', 'was', 'will be', 'would be'],
          correctAnswer: 2,
          explanation: 'Klausa hasil menggunakan "will + be". The result clause uses "will + be". For example: "He will be very happy if he gets the job."'
        },
        {
          id: 'h5-3',
          text: 'If you _______ me, I will help you.',
          options: ['asked', 'ask', 'asks', 'asking'],
          correctAnswer: 1,
          explanation: 'Klausa "if" menggunakan present simple. The "if" clause uses the present simple. For example: "If you ask me, I will help you."'
        },
        {
          id: 'h5-4',
          text: 'They _______ to the party if they are invited.',
          options: ['go', 'went', 'will go', 'would go'],
          correctAnswer: 2,
          explanation: 'Klausa hasil menggunakan "will + verb". The result clause uses "will + verb". For example: "They will go to the party if they are invited."'
        },
        {
          id: 'h5-5',
          text: 'If the weather _______ nice, we will go for a walk.',
          options: ['is', 'will be', 'was', 'be'],
          correctAnswer: 0,
          explanation: 'Klausa "if" menggunakan present simple. The "if" clause uses the present simple. For example: "If the weather is nice, we will go for a walk."'
        }
      ]
    },
    {
      id: 'hs-2',
      title: 'Conditional Sentences: Type 2',
      description: 'Hypothetical or unlikely situations in the present or future.',
      tips: [
        "Gunakan 'if + past simple' untuk kondisi dan 'would + base verb' untuk hasilnya. (Correct: 'If I won, I would travel.' | Incorrect: 'If I win, I would travel.')",
        "Gunakan 'were' sebagai pengganti 'was' untuk semua subjek dalam klausa 'if'. (Correct: 'If I were you...' | Incorrect: 'If I was you...')",
        "Tipe 2 digunakan untuk hal-hal yang bersifat imajiner atau sangat tidak mungkin terjadi. (Correct: 'If I were a bird, I would fly.' | Incorrect: 'If I am a bird, I will fly.')",
        "Anda bisa menggunakan 'could' atau 'might' sebagai pengganti 'would'. (Correct: 'If I had money, I could buy it.' | Incorrect: 'If I had money, I will buy it.')",
        "Jangan gunakan 'would' di dalam klausa 'if'. (Correct: 'If I knew...' | Incorrect: 'If I would know...') "
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Second Conditional</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Kita menggunakan <strong>Second Conditional</strong> untuk situasi hipotetis, imajiner, atau tidak mungkin terjadi. We use the <strong>Second Conditional</strong> for hypothetical, imaginary, or unlikely situations.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="font-mono text-sm"><strong>Structure:</strong> If + Past Simple, Would + Verb</p>
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Example: "If I were rich, I would travel the world."</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'h6',
          text: 'If I _______ you, I would take that job.',
          options: ['am', 'was', 'be', 'were'],
          correctAnswer: 3,
          explanation: 'Dalam pengandaian Tipe 2, "were" lebih disukai untuk semua subjek, terutama dalam bahasa Inggris formal. In Type 2 conditionals, "were" is preferred for all subjects, especially in formal English. For example: "If I were you, I would take that job."'
        },
        {
          id: 'h7',
          text: 'If she _______ more time, she would learn to play the piano.',
          options: ['has', 'will have', 'had', 'would have'],
          correctAnswer: 2,
          explanation: 'Klausa "if" menggunakan past simple untuk menunjukkan bahwa situasinya bersifat hipotetis. The "if" clause uses the past simple to show the situation is hypothetical. For example: "If she had more time, she would learn to play the piano."'
        },
        {
          id: 'h8',
          text: 'What _______ if you won the lottery?',
          options: ['you would do', 'did you do', 'will you do', 'would you do'],
          correctAnswer: 3,
          explanation: 'Klausa hasil menggunakan "would + base verb". The result clause uses "would + base verb". For example: "What would you do if you won the lottery?"'
        },
        {
          id: 'h9',
          text: 'If they _______ here, they would help us.',
          options: ['are', 'will be', 'would be', 'were'],
          correctAnswer: 3,
          explanation: 'Past simple "were" digunakan untuk kondisi hipotetis. The past simple "were" is used for the hypothetical condition. For example: "If they were here, they would help us."'
        },
        {
          id: 'h10',
          text: 'I _______ that if I were you.',
          options: ['don\'t do', 'won\'t do', 'didn\'t do', 'wouldn\'t do'],
          correctAnswer: 3,
          explanation: 'Klausa hasil menggunakan "wouldn\'t + base verb" untuk hasil hipotetis negatif. The result clause uses "wouldn\'t + base verb" for a negative hypothetical result. For example: "I wouldn\'t do that if I were you."'
        },
        {
          id: 'h10-1',
          text: 'If I _______ wings, I would fly.',
          options: ['have', 'had', 'has', 'having'],
          correctAnswer: 1,
          explanation: 'Ini adalah pengandaian Tipe 2: "If + past, would + base". This is Type 2 conditional: "If + past, would + base". For example: "If I had wings, I would fly."'
        },
        {
          id: 'h10-2',
          text: 'If he _______ harder, he would pass.',
          options: ['study', 'studies', 'studied', 'will study'],
          correctAnswer: 2,
          explanation: 'Klausa "if" menggunakan past simple. The "if" clause uses the past simple. For example: "If he studied harder, he would pass."'
        },
        {
          id: 'h10-3',
          text: 'We _______ more often if we lived closer.',
          options: ['visit', 'will visit', 'would visit', 'visited'],
          correctAnswer: 2,
          explanation: 'Klausa hasil menggunakan "would + verb". The result clause uses "would + verb". For example: "We would visit more often if we lived closer."'
        },
        {
          id: 'h10-4',
          text: 'If it _______, I would stay at home.',
          options: ['snows', 'snowed', 'will snow', 'is snowing'],
          correctAnswer: 1,
          explanation: 'Klausa "if" menggunakan past simple. The "if" clause uses the past simple. For example: "If it snowed, I would stay at home."'
        },
        {
          id: 'h10-5',
          text: 'She _______ happy if she won the prize.',
          options: ['is', 'was', 'will be', 'would be'],
          correctAnswer: 3,
          explanation: 'Klausa hasil menggunakan "would + be". The result clause uses "would + be". For example: "She would be happy if she won the prize."'
        }
      ]
    },
    {
      id: 'hs-3',
      title: 'Conditional Sentences: Type 3',
      description: 'Imaginary situations in the past (regrets or missed opportunities).',
      tips: [
        "Gunakan 'if + past perfect' untuk kondisi dan 'would have + past participle' untuk hasilnya. (Correct: 'If I had studied, I would have passed.' | Incorrect: 'If I studied, I would have passed.')",
        "Tipe 3 digunakan untuk hal-hal yang tidak terjadi di masa lalu (penyesalan). (Correct: 'If I had seen him, I would have said hello.' | Incorrect: 'If I saw him, I would say hello.')",
        "Anda bisa menggunakan 'could have' atau 'might have' sebagai pengganti 'would have'. (Correct: 'If I had known, I could have helped.' | Incorrect: 'If I had known, I can help.')",
        "Jangan gunakan 'would have' di dalam klausa 'if'. (Correct: 'If I had gone...' | Incorrect: 'If I would have gone...')",
        "Tipe ini sering digunakan untuk menyatakan penyesalan. (Correct: 'If I hadn't missed the bus, I wouldn't have been late.' | Incorrect: 'If I didn't miss the bus...') "
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Third Conditional</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Kita menggunakan <strong>Third Conditional</strong> untuk membicarakan situasi imajiner di masa lalu. We use the <strong>Third Conditional</strong> to talk about imaginary situations in the past.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="font-mono text-sm"><strong>Structure:</strong> If + Past Perfect, Would Have + Past Participle</p>
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Example: "If I had studied harder, I would have passed the exam."</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'h11',
          text: 'If we _______ earlier, we wouldn\'t have missed the train.',
          options: ['left', 'would leave', 'had left', 'would have left'],
          correctAnswer: 2,
          explanation: 'Pengandaian Tipe 3 menggunakan past perfect dalam klausa "if". Type 3 conditionals use the past perfect in the "if" clause. For example: "If we had left earlier, we wouldn\'t have missed the train."'
        },
        {
          id: 'h12',
          text: 'She _______ the job if she had performed better in the interview.',
          options: ['got', 'would get', 'had got', 'would have got'],
          correctAnswer: 3,
          explanation: 'Klausa hasil menggunakan "would have + past participle". The result clause uses "would have + past participle". For example: "She would have got the job if she had performed better."'
        },
        {
          id: 'h13',
          text: 'If I _______ your number, I would have called you.',
          options: ['have', 'had', 'would have', 'had had'],
          correctAnswer: 3,
          explanation: 'Past perfect dari "have" adalah "had had". The past perfect of "have" is "had had". For example: "If I had had your number, I would have called you."'
        },
        {
          id: 'h14',
          text: 'What _______ if you hadn\'t found your passport?',
          options: ['would you do', 'did you do', 'had you done', 'would you have done'],
          correctAnswer: 3,
          explanation: 'Pertanyaan dalam klausa hasil mengikuti struktur "would + subject + have + past participle". Questions in the result clause follow the "would + subject + have + past participle" structure. For example: "What would you have done if you hadn\'t found your passport?"'
        },
        {
          id: 'h15',
          text: 'If they _______ the truth, they wouldn\'t have been so angry.',
          options: ['know', 'knew', 'would know', 'had known'],
          correctAnswer: 3,
          explanation: 'Past perfect "had known" digunakan untuk kondisi masa lalu. The past perfect "had known" is used for the past condition. For example: "If they had known the truth, they wouldn\'t have been so angry."'
        },
        {
          id: 'h15-1',
          text: 'If she _______ harder, she would have passed.',
          options: ['study', 'studies', 'studied', 'had studied'],
          correctAnswer: 3,
          explanation: 'Ini adalah pengandaian Tipe 3 (penyesalan masa lalu): "If + had + V3, would have + V3". This is Type 3 conditional (past regret): "If + had + V3, would have + V3". For example: "If she had studied harder, she would have passed."'
        },
        {
          id: 'h15-2',
          text: 'If they _______ earlier, they wouldn\'t have missed it.',
          options: ['leave', 'left', 'had left', 'leaving'],
          correctAnswer: 2,
          explanation: 'Klausa "if" menggunakan past perfect. The "if" clause uses the past perfect. For example: "If they had left earlier, they wouldn\'t have missed it."'
        },
        {
          id: 'h15-3',
          text: 'I _______ you if I had seen you.',
          options: ['greet', 'will greet', 'would greet', 'would have greeted'],
          correctAnswer: 3,
          explanation: 'Klausa hasil menggunakan "would have + V3". The result clause uses "would have + V3". For example: "I would have greeted you if I had seen you."'
        },
        {
          id: 'h15-4',
          text: 'If we _______ a map, we wouldn\'t have got lost.',
          options: ['have', 'had', 'had had', 'having'],
          correctAnswer: 2,
          explanation: 'Klausa "if" menggunakan past perfect. The "if" clause uses the past perfect. For example: "If we had had a map, we wouldn\'t have got lost."'
        },
        {
          id: 'h15-5',
          text: 'She _______ the cake if she had had the ingredients.',
          options: ['makes', 'made', 'will make', 'would have made'],
          correctAnswer: 3,
          explanation: 'Klausa hasil menggunakan "would have + V3". The result clause uses "would have + V3". For example: "She would have made the cake if she had had the ingredients."'
        }
      ]
    },
    {
      id: 'hs-4',
      title: 'Relative Clauses: Who, Which, That',
      description: 'Adding information to sentences using relative pronouns.',
      tips: [
        "Gunakan 'who' untuk orang sebagai subjek. (Correct: 'The man who lives here.' | Incorrect: 'The man which lives here.')",
        "Gunakan 'which' untuk benda atau hewan. (Correct: 'The car which is red.' | Incorrect: 'The car who is red.')",
        "Gunakan 'that' untuk orang atau benda dalam klausa penjelas (defining clause). (Correct: 'The book that I read.' | Incorrect: 'The book whom I read.')",
        "Jangan gunakan koma dalam 'defining relative clause'. (Correct: 'The boy who won is my friend.' | Incorrect: 'The boy, who won, is my friend.')",
        "Anda bisa menghilangkan 'who/which/that' jika berfungsi sebagai objek. (Correct: 'The book I read...' | Incorrect: 'The book who I read...') "
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Relative Clauses (Subject)</h3>
          <p class="text-on-surface-variant leading-relaxed">
            <strong>Relative clauses</strong> memberikan informasi tambahan tentang kata benda. <strong>Relative clauses</strong> provide extra information about a noun.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <p class="font-bold text-primary">Who</p>
              <p class="text-xs">Untuk orang / For people</p>
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <p class="font-bold text-primary">Which</p>
              <p class="text-xs">Untuk benda / For things</p>
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <p class="font-bold text-primary">That</p>
              <p class="text-xs">Keduanya / For both</p>
            </div>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'h16',
          text: 'The woman _______ lives next door is a doctor.',
          options: ['which', 'whom', 'whose', 'who'],
          correctAnswer: 3,
          explanation: '"Who" digunakan untuk orang. "Who" is used for people. For example: "The boy who won the race is my cousin."'
        },
        {
          id: 'h17',
          text: 'This is the book _______ I told you about.',
          options: ['who', 'which', 'whom', 'whose'],
          correctAnswer: 1,
          explanation: '"Which" (atau "that") digunakan untuk benda. "Which" (or "that") is used for things. For example: "The movie which we saw last night was very exciting."'
        },
        {
          id: 'h18',
          text: 'The car _______ was stolen has been found.',
          options: ['who', 'that', 'whom', 'whose'],
          correctAnswer: 1,
          explanation: '"That" dapat digunakan untuk benda dalam klausa penjelas. "That" can be used for things in defining clauses. For example: "The house that they bought is very old."'
        },
        {
          id: 'h19',
          text: 'The people _______ work in that office are very friendly.',
          options: ['who', 'which', 'whose', 'whom'],
          correctAnswer: 0,
          explanation: '"Who" digunakan untuk subjek orang. "Who" is used for the subject of the relative clause when it refers to people. For example: "The students who study hard get good grades."'
        },
        {
          id: 'h20',
          text: 'I lost the pen _______ you gave me.',
          options: ['who', 'whom', 'which', 'whose'],
          correctAnswer: 2,
          explanation: '"Which" digunakan untuk benda. "Which" is used for things. For example: "The cake which she made was delicious."'
        },
        {
          id: 'h20-1',
          text: 'The girl _______ won the race is my sister.',
          options: ['which', 'who', 'whose', 'whom'],
          correctAnswer: 1,
          explanation: 'Kita menggunakan "who" untuk orang. We use "who" for people. For example: "The girl who won the race is my sister."'
        },
        {
          id: 'h20-2',
          text: 'The book _______ I am reading is very interesting.',
          options: ['who', 'which', 'whose', 'whom'],
          correctAnswer: 1,
          explanation: 'Kita menggunakan "which" (atau "that") untuk benda. We use "which" (or "that") for things. For example: "The book which I am reading is very interesting."'
        },
        {
          id: 'h20-3',
          text: 'The house _______ they live in is very old.',
          options: ['who', 'which', 'whose', 'whom'],
          correctAnswer: 1,
          explanation: 'Kita menggunakan "which" untuk benda/tempat. We use "which" for things/places. For example: "The house which they live in is very old."'
        },
        {
          id: 'h20-4',
          text: 'The students _______ study hard usually pass.',
          options: ['who', 'which', 'whose', 'whom'],
          correctAnswer: 0,
          explanation: 'Kita menggunakan "who" untuk orang. We use "who" for people. For example: "The students who study hard usually pass."'
        },
        {
          id: 'h20-5',
          text: 'The computer _______ I bought is very fast.',
          options: ['who', 'which', 'whose', 'whom'],
          correctAnswer: 1,
          explanation: 'Kita menggunakan "which" atau "that" untuk benda. We use "which" or "that" for things. For example: "The computer which I bought is very fast."'
        }
      ]
    },
    {
      id: 'hs-5',
      title: 'Relative Clauses: Whom, Whose',
      description: 'Advanced relative pronouns for possession and objects.',
      tips: [
        "Gunakan 'whose' untuk kepemilikan (menggantikan 'his', 'her', 'their'). (Correct: 'The girl whose cat is lost.' | Incorrect: 'The girl who cat is lost.')",
        "Gunakan 'whom' sebagai objek dari kata kerja atau kata depan (terutama dalam bahasa Inggris formal). (Correct: 'The person to whom I spoke.' | Incorrect: 'The person to who I spoke.')",
        "'Whose' dapat digunakan untuk orang maupun benda. (Correct: 'The house whose roof is red.' | Incorrect: 'The house who roof is red.')",
        "Dalam bahasa Inggris modern, 'who' sering digunakan sebagai pengganti 'whom'. (Example: 'The person who I spoke to.')",
        "Selalu gunakan 'whom' setelah kata depan. (Correct: 'With whom', 'For whom'.) "
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Whose and Whom</h3>
          <p class="text-on-surface-variant leading-relaxed">
            <strong>Whose</strong> menunjukkan kepemilikan, dan <strong>whom</strong> digunakan untuk objek. <strong>Whose</strong> shows possession, and <strong>whom</strong> is used for objects.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Example (Whose): "The man whose car was stolen is at the police station."</p>
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Example (Whom): "The person whom I invited is my best friend."</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'h21',
          text: 'The boy _______ father is a pilot is in my class.',
          options: ['who', 'whom', 'whose', 'which'],
          correctAnswer: 2,
          explanation: '"Whose" digunakan untuk menunjukkan kepemilikan. "Whose" is used to show possession. For example: "The girl whose brother is famous is very modest."'
        },
        {
          id: 'h22',
          text: 'The person to _______ I sent the email hasn\'t replied.',
          options: ['who', 'whom', 'whose', 'which'],
          correctAnswer: 1,
          explanation: '"Whom" digunakan setelah kata depan. "Whom" is used after a preposition. For example: "The man with whom I was talking is my boss."'
        },
        {
          id: 'h23',
          text: 'That is the house _______ roof was damaged in the storm.',
          options: ['who', 'whom', 'whose', 'which'],
          correctAnswer: 2,
          explanation: '"Whose" juga dapat digunakan untuk benda. "Whose" can also be used for things. For example: "The tree whose leaves are falling is an oak."'
        },
        {
          id: 'h24',
          text: 'The woman _______ I met yesterday was very kind.',
          options: ['who', 'whom', 'whose', 'which'],
          correctAnswer: 1,
          explanation: '"Whom" adalah objek dari kata kerja "met". "Whom" is the object of the verb "met". For example: "The actor whom she admires is very talented."'
        },
        {
          id: 'h25',
          text: 'The students _______ names are on the list should go to the office.',
          options: ['who', 'whom', 'whose', 'which'],
          correctAnswer: 2,
          explanation: '"Whose" menunjukkan bahwa nama-nama tersebut milik para siswa. "Whose" indicates that the names belong to the students. For example: "The authors whose books are popular are often rich."'
        },
        {
          id: 'h25-1',
          text: 'The girl _______ I met yesterday was very kind.',
          options: ['who', 'which', 'whose', 'whom'],
          correctAnswer: 3,
          explanation: 'Kita menggunakan "whom" untuk orang sebagai objek (formal). We use "whom" for people as the object (formal). For example: "The girl whom I met yesterday was very kind."'
        },
        {
          id: 'h25-2',
          text: 'The boy _______ father is a doctor is my friend.',
          options: ['who', 'which', 'whose', 'whom'],
          correctAnswer: 2,
          explanation: 'Kita menggunakan "whose" untuk menunjukkan kepemilikan. We use "whose" to show possession. For example: "The boy whose father is a doctor is my friend."'
        },
        {
          id: 'h25-3',
          text: 'The man _______ car was stolen is very sad.',
          options: ['who', 'whom', 'which', 'whose'],
          correctAnswer: 3,
          explanation: 'Kita menggunakan "whose" untuk kepemilikan. We use "whose" for possession. For example: "The man whose car was stolen is very sad."'
        },
        {
          id: 'h25-4',
          text: 'The woman _______ you were talking to is my teacher.',
          options: ['who', 'which', 'whose', 'whom'],
          correctAnswer: 3,
          explanation: 'Kita menggunakan "whom" sebagai objek dari kata depan "to" (formal). We use "whom" as the object of the preposition "to" (formal). For example: "The woman whom you were talking to is my teacher."'
        },
        {
          id: 'h25-5',
          text: 'The tree _______ leaves are falling is an oak.',
          options: ['who', 'whom', 'which', 'whose'],
          correctAnswer: 3,
          explanation: 'Kita menggunakan "whose" untuk kepemilikan benda. We use "whose" for possession of things. For example: "The tree whose leaves are falling is an oak."'
        }
      ]
    },
    {
      id: 'hs-6',
      title: 'Reported Speech',
      description: 'How to report what someone else has said.',
      tips: [
        "Ubah tenses mundur satu langkah (Present -> Past, Past -> Past Perfect). (Correct: 'He said he was tired.' | Incorrect: 'He said he is tired.')",
        "Ubah kata ganti (pronouns) agar sesuai dengan perspektif pelapor. (Correct: 'She said she liked it.' | Incorrect: 'She said I liked it.')",
        "Ubah keterangan waktu dan tempat (today -> that day, here -> there). (Correct: 'He said he would come the next day.' | Incorrect: 'He said he will come tomorrow.')",
        "Gunakan 'that' untuk menghubungkan kata kerja pelapor dan klausa yang dilaporkan (opsional). (Example: 'He said (that) he was busy.')",
        "Untuk pertanyaan, gunakan 'if' atau 'whether' untuk yes/no questions, dan tetap gunakan kata tanya untuk wh-questions. (Correct: 'He asked if I was okay.') "
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Reported Speech</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Saat kita melaporkan apa yang dikatakan orang lain, kita biasanya mengubah <strong>tenses</strong> dan <strong>kata ganti</strong>. When we report what someone said, we usually change the <strong>tense</strong> and <strong>pronouns</strong>.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Direct: "I am happy," said John.</p>
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Reported: John said that he was happy.</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'h26',
          text: 'Direct: "I am hungry." -> Reported: He said that he _______ hungry.',
          options: ['is', 'has been', 'will be', 'was'],
          correctAnswer: 3,
          explanation: 'Present simple "am" berubah menjadi past simple "was" dalam kalimat tidak langsung. Present simple "am" changes to past simple "was" in reported speech. For example: "She said she was tired."'
        },
        {
          id: 'h27',
          text: 'Direct: "I will call you tomorrow." -> Reported: She said she _______ me the next day.',
          options: ['will call', 'called', 'had called', 'would call'],
          correctAnswer: 3,
          explanation: '"Will" berubah menjadi "would" dan "tomorrow" menjadi "the next day". "Will" changes to "would" and "tomorrow" changes to "the next day". For example: "He said he would help me later."'
        },
        {
          id: 'h28',
          text: 'Direct: "I have finished my work." -> Reported: He said that he _______ his work.',
          options: ['finished', 'has finished', 'was finishing', 'had finished'],
          correctAnswer: 3,
          explanation: 'Present perfect "have finished" berubah menjadi past perfect "had finished". Present perfect "have finished" changes to past perfect "had finished". For example: "She said she had already seen the movie."'
        },
        {
          id: 'h29',
          text: 'Direct: "Where do you live?" -> Reported: She asked me where I _______.',
          options: ['live', 'did live', 'had lived', 'lived'],
          correctAnswer: 3,
          explanation: 'Dalam pertanyaan tidak langsung, tenses berubah dan susunan kata menjadi seperti pernyataan. In reported questions, the tense changes and the word order becomes like a statement. For example: "He asked me what my name was."'
        },
        {
          id: 'h30',
          text: 'Direct: "Did you see the movie?" -> Reported: He asked me _______ I had seen the movie.',
          options: ['that', 'what', 'when', 'if'],
          correctAnswer: 3,
          explanation: 'Pertanyaan yes/no menggunakan "if" atau "whether" dalam kalimat tidak langsung. Yes/no questions use "if" or "whether" in reported speech. For example: "She asked whether I was coming to the party."'
        },
        {
          id: 'h30-1',
          text: 'Change to reported speech: "I like pizza," said Tom.',
          options: ['Tom said that he likes pizza.', 'Tom said that he liked pizza.', 'Tom says that he likes pizza.', 'Tom said he like pizza.'],
          correctAnswer: 1,
          explanation: 'Dalam kalimat tidak langsung, "like" (present) menjadi "liked" (past). In reported speech, "like" (present) becomes "liked" (past). For example: "Tom said that he liked pizza."'
        },
        {
          id: 'h30-2',
          text: 'Change to reported speech: "I am going to the park," said Mary.',
          options: ['Mary said that she is going to the park.', 'Mary said that she was going to the park.', 'Mary said that she will go to the park.', 'Mary said she goes to the park.'],
          correctAnswer: 1,
          explanation: '"am going" (present continuous) menjadi "was going" (past continuous). "am going" (present continuous) becomes "was going" (past continuous). For example: "Mary said that she was going to the park."'
        },
        {
          id: 'h30-3',
          text: 'Change to reported speech: "I can swim," said David.',
          options: ['David said that he can swim.', 'David said that he could swim.', 'David said that he swims.', 'David said he will swim.'],
          correctAnswer: 1,
          explanation: '"can" menjadi "could" dalam kalimat tidak langsung. "can" becomes "could" in reported speech. For example: "David said that he could swim."'
        },
        {
          id: 'h30-4',
          text: 'Change to reported speech: "Open the door," said the teacher.',
          options: ['The teacher said to open the door.', 'The teacher said that open the door.', 'The teacher said opening the door.', 'The teacher said opened the door.'],
          correctAnswer: 0,
          explanation: 'Untuk kalimat perintah, kita menggunakan "to + infinitive". For imperatives (commands), we use "to + infinitive". For example: "The teacher said to open the door."'
        },
        {
          id: 'h30-5',
          text: 'Change to reported speech: "Don\'t shout," said my mother.',
          options: ['My mother said not to shout.', 'My mother said to not shout.', 'My mother said that don\'t shout.', 'My mother said no shouting.'],
          correctAnswer: 0,
          explanation: 'Untuk perintah negatif, kita menggunakan "not to + infinitive". For negative imperatives, we use "not to + infinitive". For example: "My mother said not to shout."'
        }
      ]
    },
    {
      id: 'hs-7',
      title: 'Causative Verbs: Have & Get',
      description: 'Talking about things we arrange for other people to do for us.',
      tips: [
        "Gunakan 'have + object + past participle' untuk jasa/layanan. (Correct: 'I had my hair cut.' | Incorrect: 'I had cut my hair.')",
        "Gunakan 'get + object + past participle' (mirip dengan 'have', tapi lebih informal). (Correct: 'I got my car fixed.' | Incorrect: 'I got fix my car.')",
        "Gunakan 'have + person + base verb' untuk menyebutkan siapa yang melakukan aksi. (Correct: 'I had the mechanic fix my car.')",
        "Gunakan 'get + person + to-infinitive' untuk menyebutkan siapa yang melakukan aksi. (Correct: 'I got the mechanic to fix my car.')",
        "Causative menunjukkan bahwa subjek tidak melakukan aksi itu sendiri. (Correct: 'She had her house painted.' berarti orang lain yang mengecatnya.) "
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Causative Have and Get</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Kita menggunakan <strong>causatives</strong> saat kita mengatur orang lain untuk melakukan sesuatu bagi kita. We use <strong>causatives</strong> when we arrange for someone else to do something for us.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="font-mono text-sm"><strong>Structure:</strong> Have/Get + Object + Past Participle</p>
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Example: "I had my car repaired." (The mechanic did it.)</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'h31',
          text: 'I need to have my watch _______. It stopped working.',
          options: ['repair', 'repairing', 'to repair', 'repaired'],
          correctAnswer: 3,
          explanation: 'Strukturnya adalah "have + object + past participle". The structure is "have + object + past participle". For example: "She had her eyes tested yesterday."'
        },
        {
          id: 'h32',
          text: 'She got her brother _______ her with the homework.',
          options: ['help', 'helped', 'helping', 'to help'],
          correctAnswer: 3,
          explanation: 'Struktur "get + person + to-infinitive" digunakan untuk menunjukkan siapa yang melakukan aksi. The structure "get + person + to-infinitive" is used to show who did the action. For example: "I got my friend to lend me some money."'
        },
        {
          id: 'h33',
          text: 'He had the waiter _______ him some water.',
          options: ['to bring', 'brought', 'bringing', 'bring'],
          correctAnswer: 3,
          explanation: 'Struktur "have + person + base verb" digunakan untuk menunjukkan siapa yang melakukan aksi. The structure "have + person + base verb" is used to show who did the action. For example: "I had the assistant check the price."'
        },
        {
          id: 'h34',
          text: 'We are going to _______ our house painted next week.',
          options: ['have', 'get', 'both are correct', 'none are correct'],
          correctAnswer: 2,
          explanation: 'Baik "have" maupun "get" dapat digunakan dalam struktur causative "have/get + object + past participle". Both "have" and "get" can be used in the causative structure "have/get + object + past participle". For example: "I\'m going to get my hair cut."'
        },
        {
          id: 'h35',
          text: 'I _______ my hair cut every two months.',
          options: ['have', 'get', 'both are correct', 'none are correct'],
          correctAnswer: 2,
          explanation: 'Baik "have" maupun "get" umum digunakan dalam konteks ini. Both "have" and "get" are common in this context. For example: "He has his car washed every Saturday."'
        },
        {
          id: 'h35-1',
          text: 'Complete the sentence: "I had my sister ____ the dishes."',
          options: ['wash', 'to wash', 'washing', 'washed'],
          correctAnswer: 0,
          explanation: '"Have" diikuti oleh bentuk dasar kata kerja. "Have" is followed by the base form of the verb. For example: "I had my sister wash the dishes."'
        },
        {
          id: 'h35-2',
          text: 'Complete the sentence: "I got the mechanic ____ my car."',
          options: ['fix', 'to fix', 'fixing', 'fixed'],
          correctAnswer: 1,
          explanation: '"Get" diikuti oleh "to + infinitive". "Get" is followed by "to + infinitive". For example: "I got the mechanic to fix my car."'
        },
        {
          id: 'h35-3',
          text: 'Complete the sentence: "She had her hair ____."',
          options: ['cut', 'to cut', 'cutting', 'cuts'],
          correctAnswer: 0,
          explanation: 'Causative passive: have + object + V3 (cut adalah V3). Causative passive: have + object + V3 (cut is V3). For example: "She had her hair cut."'
        },
        {
          id: 'h35-4',
          text: 'Complete the sentence: "He got his house ____ last month."',
          options: ['paint', 'to paint', 'painting', 'painted'],
          correctAnswer: 3,
          explanation: 'Causative passive: get + object + V3. Causative passive: get + object + V3. For example: "He got his house painted last month."'
        },
        {
          id: 'h35-5',
          text: 'Complete the sentence: "She got her friend ____ her with the project."',
          options: ['help', 'to help', 'helping', 'helped'],
          correctAnswer: 1,
          explanation: 'Get + person + to + infinitive. For example: "She got her friend to help her with the project."'
        }
      ]
    },
    {
      id: 'hs-8',
      title: 'Subjunctive Mood',
      description: 'Expressing wishes, suggestions, or hypothetical situations.',
      tips: [
        "Gunakan bentuk dasar kata kerja setelah kata kerja tertentu (suggest, recommend, insist). (Correct: 'I suggest that he be on time.' | Incorrect: 'I suggest that he is on time.')",
        "Subjunctive 'be' digunakan untuk semua subjek. (Correct: 'It is important that she be informed.')",
        "Gunakan 'were' sebagai pengganti 'was' dalam klausa 'if' dan setelah 'wish'. (Correct: 'I wish I were taller.' | Incorrect: 'I wish I was taller.')",
        "Subjunctive sering digunakan dalam konteks formal atau hukum. (Example: 'The judge ordered that the prisoner be released.')",
        "Subjunctive negatif menggunakan 'not + base verb'. (Correct: 'I recommend that you not go.') "
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">The Subjunctive</h3>
          <p class="text-on-surface-variant leading-relaxed">
            <strong>Subjunctive mood</strong> digunakan untuk situasi hipotetis atau untuk menyatakan kepentingan/urgensi. The <strong>subjunctive mood</strong> is used for hypothetical situations or to express importance/urgency.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Example: "The doctor recommended that he <strong>rest</strong>." (Not 'rests')</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'h36',
          text: 'It is essential that every student _______ the rules.',
          options: ['follows', 'followed', 'following', 'follow'],
          correctAnswer: 3,
          explanation: 'Setelah "essential that", kita menggunakan bentuk dasar kata kerja. After "essential that", we use the base form of the verb. For example: "It is vital that she arrive on time."'
        },
        {
          id: 'h37',
          text: 'I suggest that he _______ a doctor.',
          options: ['sees', 'saw', 'seeing', 'see'],
          correctAnswer: 3,
          explanation: 'Setelah "suggest that", subjunctive (bentuk dasar) digunakan. After "suggest that", the subjunctive (base form) is used. For example: "I suggest that we start now."'
        },
        {
          id: 'h38',
          text: 'If I _______ you, I wouldn\'t do that.',
          options: ['am', 'was', 'be', 'were'],
          correctAnswer: 3,
          explanation: '"Were" adalah bentuk subjunctive yang digunakan untuk kondisi hipotetis. "Were" is the subjunctive form used for hypothetical conditions. For example: "If he were here, he would know what to do."'
        },
        {
          id: 'h39',
          text: 'The manager insisted that the report _______ finished by Friday.',
          options: ['is', 'was', 'being', 'be'],
          correctAnswer: 3,
          explanation: 'Setelah "insist that", kita menggunakan "be" sebagai bentuk subjunctive. After "insist that", we use "be" as the subjunctive form. For example: "I insist that he be told the truth."'
        },
        {
          id: 'h40',
          text: 'I wish it _______ summer now.',
          options: ['is', 'was', 'be', 'were'],
          correctAnswer: 3,
          explanation: 'Setelah "wish", kita menggunakan "were" untuk menunjukkan situasi hipotetis saat ini. After "wish", we use "were" to show a hypothetical present situation. For example: "I wish I were on holiday."'
        },
        {
          id: 'h40-1',
          text: 'Choose the correct form: "I wish I ____ a bird."',
          options: ['am', 'was', 'were', 'be'],
          correctAnswer: 2,
          explanation: 'Dalam subjunctive mood untuk keinginan, kita menggunakan "were" untuk semua subjek. In the subjunctive mood for wishes, we use "were" for all subjects. For example: "I wish I were a bird."'
        },
        {
          id: 'h40-2',
          text: 'Choose the correct form: "I suggest that he ____ harder."',
          options: ['study', 'studies', 'studied', 'studying'],
          correctAnswer: 0,
          explanation: 'Dalam subjunctive mood setelah "suggest", kita menggunakan bentuk dasar kata kerja. In the subjunctive mood after "suggest", we use the base form of the verb. For example: "I suggest that he study harder."'
        },
        {
          id: 'h40-3',
          text: 'Choose the correct form: "It is important that she ____ on time."',
          options: ['is', 'was', 'be', 'been'],
          correctAnswer: 2,
          explanation: 'Dalam subjunctive mood setelah "important that", kita menggunakan "be". In the subjunctive mood after "important that", we use "be". For example: "It is important that she be on time."'
        },
        {
          id: 'h40-4',
          text: 'Choose the correct form: "The doctor recommended that he ____ smoking."',
          options: ['stop', 'stops', 'stopped', 'stopping'],
          correctAnswer: 0,
          explanation: 'Subjunctive setelah "recommend": bentuk dasar. Subjunctive after "recommend": base form. For example: "The doctor recommended that he stop smoking."'
        },
        {
          id: 'h40-5',
          text: 'Choose the correct form: "He acts as if he ____ the boss."',
          options: ['is', 'was', 'were', 'be'],
          correctAnswer: 2,
          explanation: 'Subjunctive setelah "as if" untuk situasi imajiner: "were". Subjunctive after "as if" for imaginary situations: "were". For example: "He acts as if he were the boss."'
        }
      ]
    },
    {
      id: 'hs-9',
      title: 'Inversion for Emphasis',
      description: 'Changing word order to make a sentence stronger or more formal.',
      tips: [
        "Gunakan inversi setelah kata keterangan negatif (never, rarely, seldom) di awal kalimat. (Correct: 'Never have I seen such a thing.' | Incorrect: 'Never I have seen such a thing.')",
        "Susunan kata menjadi seperti pertanyaan (Auxiliary + Subject + Verb). (Correct: 'Rarely does he go out.' | Incorrect: 'Rarely he goes out.')",
        "Gunakan inversi dengan 'not only... but also'. (Correct: 'Not only did he win, but he also broke the record.')",
        "Gunakan inversi setelah 'only then', 'only later', 'no sooner'. (Correct: 'No sooner had I arrived than it started to rain.')",
        "Inversi membuat tulisan Anda terdengar lebih formal dan dramatis. (Example: 'Hardly had I started when the phone rang.') "
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Inversion</h3>
          <p class="text-on-surface-variant leading-relaxed">
            <strong>Inversion</strong> terjadi saat kita meletakkan kata kerja bantu sebelum subjek untuk penekanan. <strong>Inversion</strong> happens when we put the auxiliary verb before the subject for emphasis.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Normal: I have never seen such a beautiful sunset.</p>
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Inverted: <strong>Never have I</strong> seen such a beautiful sunset.</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'h41',
          text: 'Seldom _______ such a talented musician.',
          options: ['I have heard', 'I heard', 'did I heard', 'have I heard'],
          correctAnswer: 3,
          explanation: 'Setelah kata keterangan negatif seperti "seldom", kita menggunakan inversi (auxiliary + subject). After negative adverbs like "seldom", we use inversion (auxiliary + subject). For example: "Rarely do we see him these days."'
        },
        {
          id: 'h42',
          text: 'Not only _______ the race, but he also broke the world record.',
          options: ['he won', 'he wins', 'does he win', 'did he win'],
          correctAnswer: 3,
          explanation: 'Inversi digunakan setelah "not only" di awal kalimat. Inversion is used after "not only" at the beginning of a sentence. For example: "Not only was it cold, but it was also raining."'
        },
        {
          id: 'h43',
          text: 'Only then _______ how much trouble he was in.',
          options: ['he realized', 'he realizes', 'does he realize', 'did he realize'],
          correctAnswer: 3,
          explanation: 'Inversi mengikuti "only then". Inversion follows "only then". For example: "Only later did I find out the truth."'
        },
        {
          id: 'h44',
          text: 'No sooner _______ home than the phone rang.',
          options: ['I had arrived', 'I arrived', 'did I arrive', 'had I arrived'],
          correctAnswer: 3,
          explanation: 'Inversi digunakan dengan "no sooner... than". Inversion is used with "no sooner... than". For example: "No sooner had she sat down than the doorbell rang."'
        },
        {
          id: 'h45',
          text: 'Under no circumstances _______ you open this door.',
          options: ['you should', 'you must', 'must you', 'should you'],
          correctAnswer: 3,
          explanation: 'Inversi digunakan setelah frasa negatif seperti "under no circumstances". Inversion is used after negative phrases like "under no circumstances". For example: "On no account should you tell him."'
        },
        {
          id: 'h45-1',
          text: 'Which sentence uses correct inversion?',
          options: ['Never I have seen him.', 'Never have I seen him.', 'Never I saw him.', 'Never did I saw him.'],
          correctAnswer: 1,
          explanation: 'Setelah "Never", kita menggunakan auxiliary + subject + verb. After "Never", we use auxiliary + subject + verb. For example: "Never have I seen him."'
        },
        {
          id: 'h45-2',
          text: 'Seldom _______ such a thing happen.',
          options: ['does', 'do', 'did', 'is'],
          correctAnswer: 0,
          explanation: 'Setelah "Seldom", kita menggunakan auxiliary + subject + verb. After "Seldom", we use auxiliary + subject + verb. For example: "Seldom does such a thing happen."'
        },
        {
          id: 'h45-3',
          text: 'Rarely _______ we see such talent.',
          options: ['do', 'does', 'did', 'are'],
          correctAnswer: 0,
          explanation: 'Setelah "Rarely", kita menggunakan auxiliary + subject + verb. After "Rarely", we use auxiliary + subject + verb. For example: "Rarely do we see such talent."'
        },
        {
          id: 'h45-4',
          text: 'Only then _______ I realize my mistake.',
          options: ['did', 'do', 'was', 'have'],
          correctAnswer: 0,
          explanation: 'Setelah "Only then", kita menggunakan auxiliary + subject + verb. After "Only then", we use auxiliary + subject + verb. For example: "Only then did I realize my mistake."'
        },
        {
          id: 'h45-5',
          text: 'Little _______ they know about the surprise.',
          options: ['did', 'do', 'does', 'was'],
          correctAnswer: 0,
          explanation: 'Setelah "Little", kita menggunakan auxiliary + subject + verb. After "Little", we use auxiliary + subject + verb. For example: "Little did they know about the surprise."'
        }
      ]
    },
    {
      id: 'hs-10',
      title: 'Participle Clauses',
      description: 'Using -ing and -ed clauses to combine sentences and add detail.',
      tips: [
        "Gunakan present participle (-ing) untuk aksi aktif. (Correct: 'Feeling tired, I went to bed.' | Incorrect: 'Felt tired, I went to bed.')",
        "Gunakan past participle (-ed) untuk makna pasif. (Correct: 'Built in 1900, the house is very old.' | Incorrect: 'Building in 1900, the house is very old.')",
        "Subjek dari participle clause harus sama dengan subjek di main clause. (Correct: 'Walking down the street, I saw a dog.' | Incorrect: 'Walking down the street, the dog saw me.')",
        "Gunakan 'having + past participle' untuk aksi yang terjadi sebelum aksi utama. (Correct: 'Having finished my work, I left.')",
        "Participle clauses umum dalam tulisan formal untuk memberikan informasi tambahan secara ringkas. (Example: 'Located in the city center, the hotel is very convenient.') "
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Participle Clauses</h3>
          <p class="text-on-surface-variant leading-relaxed">
            <strong>Participle clauses</strong> membantu kita memberikan informasi lebih banyak dengan cara yang lebih singkat. <strong>Participle clauses</strong> help us give more information in a shorter way.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Example: "<strong>Watching</strong> TV, I fell asleep." (While I was watching...)</p>
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Example: "<strong>Shocked</strong> by the news, she couldn't speak." (Because she was shocked...)</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'h46',
          text: '_______ that he was late, he started to run.',
          options: ['Realized', 'Having realized', 'To realize', 'Realizing'],
          correctAnswer: 3,
          explanation: 'Present participle (-ing) menunjukkan aksi aktif yang terjadi pada saat yang sama atau tepat sebelum aksi utama. The present participle (-ing) shows an active action happening at the same time or just before the main action. For example: "Hearing the noise, she looked out the window."'
        },
        {
          id: 'h47',
          text: '_______ in 1889, the Eiffel Tower is a famous landmark.',
          options: ['Build', 'Building', 'Having built', 'Built'],
          correctAnswer: 3,
          explanation: 'Past participle (-ed) digunakan untuk makna pasif. The past participle (-ed) is used for a passive meaning. For example: "Damaged by the storm, the roof needed repairs."'
        },
        {
          id: 'h48',
          text: '_______ my homework, I went out to play.',
          options: ['Finish', 'Finished', 'Finishing', 'Having finished'],
          correctAnswer: 3,
          explanation: '"Having + past participle" digunakan untuk aksi yang telah selesai sebelum aksi utama. "Having + past participle" is used for an action that was completed before the main action. For example: "Having seen the movie already, I didn\'t want to go again."'
        },
        {
          id: 'h49',
          text: '_______ by the dog, the cat ran up a tree.',
          options: ['Chase', 'Chasing', 'Having chased', 'Chased'],
          correctAnswer: 3,
          explanation: 'Past participle digunakan karena kucing tersebut dikejar (pasif). The past participle is used because the cat was chased (passive). For example: "Scared by the thunder, the baby started to cry."'
        },
        {
          id: 'h50',
          text: '_______ down the street, I found a wallet.',
          options: ['Walk', 'Walked', 'Having walked', 'Walking'],
          correctAnswer: 3,
          explanation: 'Present participle menunjukkan aksi yang sedang berlangsung. The present participle shows an action in progress. For example: "Singing in the shower, he didn\'t hear the phone."'
        },
        {
          id: 'h50-1',
          text: '_______ the news, she burst into tears.',
          options: ['Hear', 'Hearing', 'Heard', 'To hear'],
          correctAnswer: 1,
          explanation: 'Present participle "Hearing" menunjukkan aksi yang terjadi pada saat yang sama atau segera sebelumnya. Present participle "Hearing" shows an action happening at the same time or immediately before. For example: "Hearing the news, she burst into tears."'
        },
        {
          id: 'h50-2',
          text: '_______ by the results, the team celebrated.',
          options: ['Encourage', 'Encouraging', 'Encouraged', 'To encourage'],
          correctAnswer: 2,
          explanation: 'Past participle "Encouraged" memiliki makna pasif (mereka didorong). Past participle "Encouraged" has a passive meaning (they were encouraged). For example: "Encouraged by the results, the team celebrated."'
        },
        {
          id: 'h50-3',
          text: '_______ all the tickets, we couldn\'t see the show.',
          options: ['Selling', 'Sold', 'Having sold', 'To sell'],
          correctAnswer: 2,
          explanation: 'Perfect participle "Having sold" menunjukkan aksi telah selesai sebelum aksi utama. Perfect participle "Having sold" indicates the action was completed before the main action. For example: "Having sold all the tickets, we couldn\'t see the show."'
        },
        {
          id: 'h50-4',
          text: '_______ for several hours, they were exhausted.',
          options: ['Walk', 'Walking', 'Having walked', 'To walk'],
          correctAnswer: 2,
          explanation: 'Perfect participle "Having walked" (aksi yang telah selesai). Perfect participle "Having walked" (completed action). For example: "Having walked for several hours, they were exhausted."'
        },
        {
          id: 'h50-5',
          text: '_______ by the police, the thief surrendered.',
          options: ['Chase', 'Chasing', 'Chased', 'To chase'],
          correctAnswer: 2,
          explanation: 'Past participle "Chased" (pasif). Past participle "Chased" (passive). For example: "Chased by the police, the thief surrendered."'
        }
      ]
    },
    {
      id: 'hs-11',
      title: 'Advanced Conjunctions',
      description: 'Using complex linking words like "whereas", "nonetheless", and "provided that".',
      tips: [
        "Gunakan 'whereas' dan 'while' untuk menunjukkan kontras antara dua fakta. (Correct: 'I like tea, whereas he likes coffee.')",
        "Gunakan 'nonetheless' dan 'nevertheless' yang berarti 'namun' atau 'meskipun demikian'. (Correct: 'It was raining; nonetheless, we went for a walk.')",
        "Gunakan 'provided that' atau 'as long as' yang berarti 'hanya jika'. (Correct: 'You can go, provided that you finish your work.')",
        "Gunakan 'consequently' dan 'therefore' untuk menunjukkan hasil/akibat. (Correct: 'He was late; consequently, he missed the start.')",
        "Gunakan 'moreover' dan 'furthermore' untuk menambahkan informasi lebih lanjut. (Correct: 'The house is beautiful; moreover, it is cheap.') "
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Advanced Conjunctions</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Kata-kata ini membantu Anda menghubungkan ide dengan cara yang lebih tepat dan formal. These words help you connect ideas in a more precise and formal way.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <ul class="list-disc pl-6 space-y-2 text-sm">
              <li><strong>Whereas:</strong> menunjukkan kontras (shows contrast)</li>
              <li><strong>Nonetheless:</strong> berarti "namun" (means "however")</li>
              <li><strong>Provided that:</strong> berarti "hanya jika" (means "only if")</li>
            </ul>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'h51',
          text: 'He is very rich, _______ his brother is quite poor.',
          options: ['nonetheless', 'provided that', 'consequently', 'whereas'],
          correctAnswer: 3,
          explanation: '"Whereas" digunakan untuk membandingkan dua fakta yang berbeda. "Whereas" is used to compare two different facts. For example: "She is very tall, whereas her sister is quite short."'
        },
        {
          id: 'h52',
          text: 'The exam was difficult; _______, most students passed.',
          options: ['whereas', 'provided that', 'consequently', 'nevertheless'],
          correctAnswer: 3,
          explanation: '"Nevertheless" (atau "nonetheless") berarti "meskipun demikian". "Nevertheless" (or "nonetheless") means "in spite of that". For example: "He was tired; nevertheless, he kept working."'
        },
        {
          id: 'h53',
          text: 'You can borrow the car _______ you drive carefully.',
          options: ['whereas', 'nonetheless', 'consequently', 'provided that'],
          correctAnswer: 3,
          explanation: '"Provided that" berarti "dengan syarat bahwa". "Provided that" means "on the condition that". For example: "I will go, provided that you come with me."'
        },
        {
          id: 'h54',
          text: 'He didn\'t study; _______, he failed the test.',
          options: ['whereas', 'nonetheless', 'provided that', 'consequently'],
          correctAnswer: 3,
          explanation: '"Consequently" berarti "sebagai hasilnya". "Consequently" means "as a result". For example: "The roads were icy; consequently, the traffic was slow."'
        },
        {
          id: 'h55',
          text: 'The hotel was expensive; _______, it was very far from the center.',
          options: ['whereas', 'provided that', 'consequently', 'moreover'],
          correctAnswer: 3,
          explanation: '"Moreover" digunakan untuk menambahkan informasi lebih lanjut. "Moreover" is used to add more information. For example: "The food was delicious; moreover, it was healthy."'
        },
        {
          id: 'h55-1',
          text: '_______ the difficulties, they succeeded.',
          options: ['Although', 'Notwithstanding', 'Whereas', 'Provided that'],
          correctAnswer: 1,
          explanation: '"Notwithstanding" berarti "meskipun". "Notwithstanding" means "despite". For example: "Notwithstanding the difficulties, they succeeded."'
        },
        {
          id: 'h55-2',
          text: 'She is very outgoing, _______ her sister is quite shy.',
          options: ['whereas', 'provided that', 'notwithstanding', 'because'],
          correctAnswer: 0,
          explanation: '"Whereas" digunakan untuk kontras. "Whereas" is used for contrast. For example: "She is very outgoing, whereas her sister is quite shy."'
        },
        {
          id: 'h55-3',
          text: 'I will help you, _______ you promise to listen.',
          options: ['whereas', 'provided that', 'notwithstanding', 'although'],
          correctAnswer: 1,
          explanation: '"Provided that" berarti "dengan syarat bahwa". "Provided that" means "on the condition that". For example: "I will help you, provided that you promise to listen."'
        },
        {
          id: 'h55-4',
          text: 'The city is crowded, _______ the countryside is peaceful.',
          options: ['whereas', 'provided that', 'notwithstanding', 'so'],
          correctAnswer: 0,
          explanation: '"Whereas" untuk kontras. "Whereas" for contrast. For example: "The city is crowded, whereas the countryside is peaceful."'
        },
        {
          id: 'h55-5',
          text: '_______ his age, he is very active.',
          options: ['Notwithstanding', 'Whereas', 'Provided that', 'Although'],
          correctAnswer: 0,
          explanation: '"Notwithstanding" (meskipun). "Notwithstanding" (despite). For example: "Notwithstanding his age, he is very active."'
        }
      ]
    },
    {
      id: 'hs-12',
      title: 'Modals in the Past',
      description: 'Expressing regret, possibility, or certainty about past events.',
      tips: [
        "Gunakan 'should have + past participle' untuk penyesalan atau hal-hal yang tidak terjadi. (Correct: 'I should have studied harder.')",
        "Gunakan 'must have + past participle' untuk hal-hal yang Anda hampir yakin terjadi. (Correct: 'He must have forgotten.')",
        "Gunakan 'might have' atau 'could have' untuk kemungkinan di masa lalu. (Correct: 'She might have missed the bus.')",
        "Gunakan 'can't have + past participle' untuk hal-hal yang Anda yakin tidak terjadi. (Correct: 'He can't have seen me; I was at home.')",
        "Gunakan 'needn't have + past participle' untuk hal-hal yang dilakukan tetapi sebenarnya tidak perlu. (Correct: 'You needn't have bought bread; we have plenty.') "
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Past Modals</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Kita menggunakan <strong>modal + have + past participle</strong> untuk membicarakan masa lalu. We use <strong>modal + have + past participle</strong> to talk about the past.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">"I <strong>should have</strong> called him." (I didn't, and I regret it.)</p>
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">"He <strong>must have</strong> left." (I'm sure he left.)</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'h56',
          text: 'I _______ harder for the exam. I failed.',
          options: ['should study', 'must study', 'must have studied', 'should have studied'],
          correctAnswer: 3,
          explanation: '"Should have + past participle" digunakan untuk penyesalan masa lalu. "Should have + past participle" is used for past regrets. For example: "I should have brought an umbrella; it\'s raining now."'
        },
        {
          id: 'h57',
          text: 'He _______ the keys. He always leaves them on the table.',
          options: ['must forget', 'can\'t forget', 'can\'t have forgotten', 'must have forgotten'],
          correctAnswer: 3,
          explanation: '"Must have + past participle" menunjukkan keyakinan yang kuat tentang kejadian masa lalu. "Must have + past participle" shows near certainty about a past event. For example: "She must have arrived by now; she left an hour ago."'
        },
        {
          id: 'h58',
          text: 'She _______ the message. I sent it an hour ago.',
          options: ['might see', 'should see', 'should have seen', 'might have seen'],
          correctAnswer: 3,
          explanation: '"Might have + past participle" digunakan untuk kemungkinan di masa lalu. "Might have + past participle" is used for past possibilities. For example: "He might have gone to the library."'
        },
        {
          id: 'h59',
          text: 'You _______ me! I was right there!',
          options: ['can\'t have seen', 'should have seen', 'might have seen', 'must have seen'],
          correctAnswer: 3,
          explanation: '"Must have seen" mengungkapkan keyakinan. Jika pembicara ada di sana, orang lain hampir pasti melihatnya. "Must have seen" expresses certainty. If the speaker was right there, the other person almost certainly saw them. For example: "You must have heard the explosion; it was very loud."'
        },
        {
          id: 'h60',
          text: 'He _______ the money. He was with me all day.',
          options: ['must have stolen', 'should have stolen', 'might have stolen', 'can\'t have stolen'],
          correctAnswer: 3,
          explanation: '"Can\'t have + past participle" digunakan ketika kita yakin sesuatu tidak terjadi. "Can\'t have + past participle" is used when we are certain something didn\'t happen. For example: "She can\'t have finished already; she only started five minutes ago."'
        },
        {
          id: 'h60-1',
          text: 'I _______ gone to the concert, but I decided to stay home and study.',
          options: ['should have', 'must have', 'could have', 'might have'],
          correctAnswer: 2,
          explanation: '"Could have" mengungkapkan kemungkinan masa lalu yang tidak terjadi. "Could have" expresses a past possibility that didn\'t happen. For example: "I could have gone to the concert, but I decided to stay home."'
        },
        {
          id: 'h60-2',
          text: 'The ground is wet. It _______ rained last night.',
          options: ['should have', 'must have', 'could have', 'might have'],
          correctAnswer: 1,
          explanation: '"Must have" mengungkapkan deduksi logis yang kuat. "Must have" expresses a strong logical deduction. For example: "The ground is wet. It must have rained last night."'
        },
        {
          id: 'h60-3',
          text: 'You _______ called me if you were going to be late.',
          options: ['should have', 'must have', 'could have', 'might have'],
          correctAnswer: 0,
          explanation: '"Should have" mengungkapkan penyesalan atau kewajiban yang tidak terpenuhi. "Should have" expresses regret or unfulfilled obligation. For example: "You should have called me if you were going to be late."'
        },
        {
          id: 'h60-4',
          text: 'We _______ won the game if our best player hadn\'t been injured.',
          options: ['should have', 'must have', 'could have', 'might have'],
          correctAnswer: 2,
          explanation: '"Could have" mengungkapkan kemungkinan masa lalu. "Could have" expresses a past possibility. For example: "We could have won the game if our best player hadn\'t been injured."'
        },
        {
          id: 'h60-5',
          text: 'They _______ gotten lost; they don\'t have a map.',
          options: ['should have', 'must have', 'could have', 'might have'],
          correctAnswer: 3,
          explanation: '"Might have" mengungkapkan kemungkinan masa lalu. "Might have" expresses a past possibility. For example: "They might have gotten lost; they don\'t have a map."'
        }
      ]
    },
    {
      id: 'hs-13',
      title: 'Complex Sentences & Passives',
      description: 'Mastering advanced sentence structures and the passive voice.',
      tips: [
        "Identifikasi 'pelaku' (subjek) dan 'penerima' (objek) sebelum beralih ke pasif. (Correct: 'The cake **was eaten**.' | Incorrect: 'The cake **was ate**.')",
        "Ingat rumusnya: 'Be' (dalam tenses asli) + Past Participle (V3). (Correct: 'The project **will be completed**.' | Incorrect: 'The project **will completed**.')",
        "Gunakan 'by' hanya jika orang yang melakukan tindakan itu penting atau mengejutkan. (Correct: 'The book was written **by** Shakespeare.' | Incorrect: 'The book was written **from** Shakespeare.')",
        "Berlatihlah dengan berbagai tenses: 'is being done' (continuous), 'has been done' (perfect), 'will be done' (future). (Correct: 'A bridge **is being built**.' | Incorrect: 'A bridge **is building**.')",
        "Identifikasi kalimat pasif dalam artikel berita untuk melihat bagaimana penggunaannya agar terdengar lebih objektif. (Correct: 'The suspect **was arrested**.' | Incorrect: 'The suspect **arrested**.')"
      ],
      content: `
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-primary">Passive Voice</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Dalam <strong>passive voice</strong>, fokusnya adalah pada tindakan atau penerima tindakan, bukan pada orang atau benda yang melakukannya. In the <strong>passive voice</strong>, the focus is on the action or the receiver of the action, rather than the person or thing performing it.
          </p>
          <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <h4 class="font-bold text-primary mb-2">Structure:</h4>
            <p class="text-sm font-mono bg-white p-2 rounded border border-slate-100">Subject + Be (is/am/are/was/were/been) + Past Participle (V3)</p>
          </div>
          <div class="space-y-2">
            <p class="font-bold">Examples Across Tenses:</p>
            <ul class="list-disc pl-6 space-y-2">
              <li><strong>Present Simple:</strong> English <strong>is spoken</strong> all over the world.</li>
              <li><strong>Present Continuous:</strong> A new bridge <strong>is being built</strong> near the city.</li>
              <li><strong>Past Simple:</strong> The meal <strong>was prepared</strong> by a world-class chef.</li>
            </ul>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'hs13-1',
          text: 'Change to passive: "The chef prepared the meal."',
          options: ['The meal is prepared by the chef.', 'The chef was prepared the meal.', 'The meal prepared by the chef.', 'The meal was prepared by the chef.'],
          correctAnswer: 3,
          explanation: 'Tense lampau "prepared" menjadi "was prepared" dalam kalimat pasif. The past tense "prepared" becomes "was prepared" in passive voice. For example: "The meal was prepared by the chef."'
        },
        {
          id: 'hs13-2',
          text: 'Change to passive: "The scientists are conducting an experiment."',
          options: ['An experiment is conducted by the scientists.', 'An experiment was conducted by the scientists.', 'An experiment has been conducted by the scientists.', 'An experiment is being conducted by the scientists.'],
          correctAnswer: 3,
          explanation: 'Present continuous aktif "are conducting" menjadi "is being conducted" dalam pasif. Present continuous active "are conducting" becomes "is being conducted" in passive. For example: "An experiment is being conducted by the scientists."'
        },
        {
          id: 'hs13-3',
          text: 'Change to passive: "They will complete the project by Friday."',
          options: ['The project will complete by Friday.', 'The project is completed by Friday.', 'The project was completed by Friday.', 'The project will be completed by Friday.'],
          correctAnswer: 3,
          explanation: 'Future simple aktif "will complete" menjadi "will be completed" dalam pasif. Future simple active "will complete" becomes "will be completed" in passive. For example: "The project will be completed by Friday."'
        },
        {
          id: 'hs13-4',
          text: 'Change to passive: "The company has launched a new product."',
          options: ['A new product launched by the company.', 'A new product is launched by the company.', 'A new product was launched by the company.', 'A new product has been launched by the company.'],
          correctAnswer: 3,
          explanation: 'Present perfect aktif "has launched" menjadi "has been launched" dalam pasif. Present perfect active "has launched" becomes "has been launched" in passive. For example: "A new product has been launched by the company."'
        },
        {
          id: 'hs13-5',
          text: 'Change to passive: "Someone stole my bike yesterday."',
          options: ['My bike is stolen yesterday.', 'My bike stole yesterday.', 'My bike has been stolen yesterday.', 'My bike was stolen yesterday.'],
          correctAnswer: 3,
          explanation: 'Past simple aktif "stole" menjadi "was stolen" dalam pasif. Past simple active "stole" becomes "was stolen" in passive. For example: "My bike was stolen yesterday."'
        },
        {
          id: 'hs13-6',
          text: 'Change to passive: "The government is building a new hospital."',
          options: ['A new hospital is built by the government.', 'A new hospital was built by the government.', 'A new hospital has been built by the government.', 'A new hospital is being built by the government.'],
          correctAnswer: 3,
          explanation: 'Present continuous aktif "is building" menjadi "is being built" dalam pasif. Present continuous active "is building" becomes "is being built" in passive. For example: "A new hospital is being built by the government."'
        },
        {
          id: 'hs13-7',
          text: 'Change to passive: "They had already finished the work."',
          options: ['The work had already finished.', 'The work was already finished.', 'The work has already been finished.', 'The work had already been finished.'],
          correctAnswer: 3,
          explanation: 'Past perfect aktif "had finished" menjadi "had been finished" dalam pasif. Past perfect active "had finished" becomes "had been finished" in passive. For example: "The work had already been finished."'
        },
        {
          id: 'hs13-8',
          text: 'Change to passive: "People speak English all over the world."',
          options: ['English was spoken all over the world.', 'English speaks all over the world.', 'English is speak all over the world.', 'English is spoken all over the world.'],
          correctAnswer: 3,
          explanation: 'Present simple aktif "speak" menjadi "is spoken" dalam pasif. Present simple active "speak" becomes "is spoken" in passive. For example: "English is spoken all over the world."'
        },
        {
          id: 'hs13-9',
          text: 'Change to passive: "The manager will sign the contract."',
          options: ['The contract will sign by the manager.', 'The contract is signed by the manager.', 'The contract was signed by the manager.', 'The contract will be signed by the manager.'],
          correctAnswer: 3,
          explanation: 'Future simple aktif "will sign" menjadi "will be signed" dalam pasif. Future simple active "will sign" becomes "will be signed" in passive. For example: "The contract will be signed by the manager."'
        },
        {
          id: 'hs13-10',
          text: 'Change to passive: "They are repairing the road."',
          options: ['The road is repaired.', 'The road was repaired.', 'The road has been repaired.', 'The road is being repaired.'],
          correctAnswer: 3,
          explanation: 'Present continuous aktif "are repairing" menjadi "is being repaired" dalam pasif. Present continuous active "are repairing" becomes "is being repaired" in passive. For example: "The road is being repaired."'
        }
      ]
    },
    {
      id: 'hs-14',
      title: 'Phrasal Verbs & Advanced Prepositions',
      description: 'Mastering idiomatic expressions and complex prepositional usage.',
      tips: [
        "Kategorikan phrasal verbs menjadi 'separable' (dapat dipisah) dan 'inseparable' (tidak dapat dipisah). (Correct: 'Turn **it** off.' | Incorrect: 'Look **it** into.')",
        "Fokus pada phrasal verbs 'tiga bagian' seperti 'look forward to' atau 'put up with' yang selalu tidak dapat dipisah. (Correct: 'I **look forward to** meeting you.' | Incorrect: 'I **look forward** meeting you.')",
        "Pelajari phrasal verbs dalam kelompok tematik (misalnya, 'terkait pekerjaan', 'bersosialisasi') untuk meningkatkan daya ingat. (Correct: '**Carry out** an experiment.' | Incorrect: '**Bring about** an experiment.')",
        "Perhatikan 'Preposisi Lanjutan' seperti 'concerning', 'regarding', dan 'with respect to' untuk penulisan formal. (Correct: '**Regarding** your request...' | Incorrect: '**About** your request... (less formal).')",
        "Uji diri Anda dengan mengganti kata kerja umum (misalnya, 'tolerate') dengan padanan phrasal verb-nya (misalnya, 'put up with'). (Correct: 'I can\\'t **put up with** it.' | Incorrect: 'I can\\'t **tolerate** it (if you want to use a phrasal verb).')"
      ],
      content: `
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-primary">Phrasal Verbs</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Phrasal verbs terdiri dari kata kerja dan partikel (preposisi atau kata keterangan). Maknanya seringkali berbeda dari kata-kata individualnya. Phrasal verbs consist of a verb and a particle (preposition or adverb). Their meaning is often different from the individual words.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 class="font-bold text-primary">Common Examples:</h4>
              <ul class="text-sm space-y-2">
                <li><strong>Bring about:</strong> Menyebabkan sesuatu terjadi (To cause something to happen).</li>
                <li><strong>Carry out:</strong> Melakukan atau melaksanakan (To perform or conduct).</li>
                <li><strong>Look into:</strong> Menyelidiki (To investigate).</li>
              </ul>
            </div>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'hs14-1',
          text: 'The new policy will _______ significant changes.',
          options: ['carry out', 'look into', 'put off', 'bring about'],
          correctAnswer: 3,
          explanation: '"Bring about" berarti menyebabkan sesuatu terjadi. "Bring about" means to cause something to happen. For example: "The new policy will bring about significant changes."'
        },
        {
          id: 'hs14-2',
          text: 'The scientists are _______ an experiment.',
          options: ['bringing about', 'looking into', 'putting off', 'carrying out'],
          correctAnswer: 3,
          explanation: '"Carry out" berarti melakukan atau melaksanakan. "Carry out" means to perform or conduct. For example: "The scientists are carrying out an experiment."'
        },
        {
          id: 'hs14-3',
          text: 'The police are _______ the cause of the accident.',
          options: ['bringing about', 'carrying out', 'putting off', 'looking into'],
          correctAnswer: 3,
          explanation: '"Look into" berarti menyelidiki. "Look into" means to investigate. For example: "The police are looking into the cause of the accident."'
        },
        {
          id: 'hs14-4',
          text: 'We had to _______ the meeting until next week.',
          options: ['bring about', 'carry out', 'look into', 'put off'],
          correctAnswer: 3,
          explanation: '"Put off" berarti menunda. "Put off" means to postpone. For example: "We had to put off the meeting until next week."'
        },
        {
          id: 'hs14-5',
          text: 'He _______ a great idea during the meeting.',
          options: ['looked into', 'carried out', 'brought about', 'came up with'],
          correctAnswer: 3,
          explanation: '"Come up with" berarti memikirkan sebuah ide. "Come up with" means to think of an idea. For example: "He came up with a great idea during the meeting."'
        },
        {
          id: 'hs14-6',
          text: 'I can\'t _______ his rude behavior anymore.',
          options: ['look into', 'carry out', 'bring about', 'put up with'],
          correctAnswer: 3,
          explanation: '"Put up with" berarti mentoleransi. "Put up with" means to tolerate. For example: "I can\'t put up with his rude behavior anymore."'
        },
        {
          id: 'hs14-7',
          text: 'The plane _______ on time despite the fog.',
          options: ['carried out', 'look into', 'bring about', 'took off'],
          correctAnswer: 3,
          explanation: '"Took off" (untuk pesawat). "Took off" (for a plane). For example: "The plane took off on time despite the fog."'
        },
        {
          id: 'hs14-8',
          text: 'She _______ her mother in many ways.',
          options: ['look into', 'carry out', 'bring about', 'takes after'],
          correctAnswer: 3,
          explanation: '"Takes after" berarti menyerupai. "Takes after" means to resemble. For example: "She takes after her mother in many ways."'
        },
        {
          id: 'hs14-9',
          text: 'Don\'t _______ until tomorrow what you can do today.',
          options: ['look into', 'carry out', 'bring about', 'put off'],
          correctAnswer: 3,
          explanation: '"Put off" (menunda). "Put off" (postpone). For example: "Don\'t put off until tomorrow what you can do today."'
        },
        {
          id: 'hs14-10',
          text: 'The fire _______ in the middle of the night.',
          options: ['carried out', 'looking into', 'brought about', 'broke out'],
          correctAnswer: 3,
          explanation: '"Broke out" (mulai tiba-tiba). "Broke out" (started suddenly). For example: "The fire broke out in the middle of the night."'
        }
      ]
    },
    {
      id: 'hs-15',
      title: 'Advanced Punctuation',
      description: 'Using colons, semicolons, and dashes for academic clarity.',
      tips: [
        "Titik koma (;) menghubungkan dua klausa independen yang berkaitan erat. (Correct: 'I like tea**;** she likes coffee.' | Incorrect: 'I like tea**:** she likes coffee (if not an explanation).')",
        "Titik dua (:) memperkenalkan daftar, penjelasan, atau kutipan langsung. (Correct: 'I have three hobbies**:** reading, swimming, and hiking.' | Incorrect: 'I have three hobbies**;** reading, swimming, and hiking.')",
        "Tanda pisah (—) dapat digunakan untuk penekanan atau untuk memisahkan informasi tambahan. (Correct: 'He was late **—** as usual.' | Incorrect: 'He was late **;** as usual.')",
        "Jangan berlebihan dalam memberi tanda baca; kalimat yang jelas dan sederhana seringkali lebih baik. (Correct: 'I went home.' | Incorrect: 'I went, home.')",
        "Baca tulisan Anda dengan keras untuk melihat di mana jeda alami (tanda baca) seharusnya berada. (Correct: 'She is smart**;** however, she is lazy.' | Incorrect: 'She is smart**,** however, she is lazy.')"
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Colons and Semicolons</h3>
          <p class="text-on-surface-variant leading-relaxed">
            Tanda baca yang tepat sangat penting untuk penulisan formal. Ini membantu memperjelas hubungan antar ide. Proper punctuation is vital for formal writing. It helps clarify the relationship between ideas.
          </p>
          <div class="space-y-4">
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 class="font-bold text-primary">1. Semicolon (;)</h4>
              <p class="text-sm">Menghubungkan dua klausa independen (kalimat lengkap) yang berkaitan erat. Connects two independent clauses (complete sentences) that are closely related.</p>
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 class="font-bold text-primary">2. Colon (:)</h4>
              <p class="text-sm">Memperkenalkan daftar, penjelasan, atau kutipan langsung. Introduces a list, an explanation, or a direct quote.</p>
            </div>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'hs15-1',
          text: 'The results were inconclusive _______ therefore, more research is needed.',
          options: [':', ',', '.', ';'],
          correctAnswer: 3,
          explanation: 'Titik koma digunakan untuk menghubungkan dua klausa independen, terutama dengan kata keterangan penghubung seperti "therefore". A semicolon is used to connect two independent clauses, especially with a conjunctive adverb like "therefore". For example: "The results were inconclusive; therefore, more research is needed."'
        },
        {
          id: 'hs15-2',
          text: 'The study focused on three main factors _______ age, income, and education.',
          options: [';', ',', '.', ':'],
          correctAnswer: 3,
          explanation: 'Titik dua digunakan untuk memperkenalkan daftar. A colon is used to introduce a list. For example: "The study focused on three main factors: age, income, and education."'
        },
        {
          id: 'hs15-3',
          text: 'It was a cold winter day _______ the wind was howling through the trees.',
          options: [':', ',', '.', ';'],
          correctAnswer: 3,
          explanation: 'Titik koma menghubungkan dua klausa independen. A semicolon connects two independent clauses. For example: "It was a cold winter day; the wind was howling through the trees."'
        },
        {
          id: 'hs15-4',
          text: 'You have two choices _______ stay and fight or run away.',
          options: [';', ',', '.', ':'],
          correctAnswer: 3,
          explanation: 'Titik dua digunakan untuk memperkenalkan penjelasan atau pilihan. A colon is used to introduce an explanation or choice. For example: "You have two choices: stay and fight or run away."'
        },
        {
          id: 'hs15-5',
          text: 'She loved the book _______ in fact, she read it three times.',
          options: [':', ',', '.', ';'],
          correctAnswer: 3,
          explanation: 'Titik koma digunakan sebelum kata keterangan penghubung seperti "in fact". A semicolon is used before conjunctive adverbs like "in fact". For example: "She loved the book; in fact, she read it three times."'
        },
        {
          id: 'hs15-6',
          text: 'The store sells many types of fruit _______ apples, oranges, and bananas.',
          options: [';', ',', '.', ':'],
          correctAnswer: 3,
          explanation: 'Titik dua digunakan untuk memperkenalkan daftar. A colon is used to introduce a list. For example: "The store sells many types of fruit: apples, oranges, and bananas."'
        },
        {
          id: 'hs15-7',
          text: 'I\'m not going to the party _______ I\'m too tired.',
          options: [':', ',', '.', ';'],
          correctAnswer: 3,
          explanation: 'Titik koma menghubungkan dua klausa independen. A semicolon connects two independent clauses. For example: "I\'m not going to the party; I\'m too tired."'
        },
        {
          id: 'hs15-8',
          text: 'This is the bottom line _______ we need more funding.',
          options: [';', ',', '.', ':'],
          correctAnswer: 3,
          explanation: 'Titik dua digunakan untuk memperkenalkan ringkasan atau penjelasan. A colon is used to introduce a summary or explanation. For example: "This is the bottom line: we need more funding."'
        },
        {
          id: 'hs15-9',
          text: 'He didn\'t see the sign _______ consequently, he walked right into the glass door.',
          options: [':', ',', '.', ';'],
          correctAnswer: 3,
          explanation: 'Titik koma digunakan sebelum kata keterangan penghubung seperti "consequently". A semicolon is used before conjunctive adverbs like "consequently". For example: "He didn\'t see the sign; consequently, he walked right into the glass door."'
        },
        {
          id: 'hs15-10',
          text: 'The package contained several items _______ a book, a pen, and a notebook.',
          options: [';', ',', '.', ':'],
          correctAnswer: 3,
          explanation: 'Titik dua digunakan untuk memperkenalkan daftar. A colon is used to introduce a list. For example: "The package contained several items: a book, a pen, and a notebook."'
        }
      ]
    }
  ]
};
