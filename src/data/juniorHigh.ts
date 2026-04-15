import { Category } from '../types';

export const JUNIOR_HIGH_CATEGORY: Category = {
  id: 'junior-high',
  title: 'Junior High School',
  icon: 'graduation-cap',
  lessons: [
    {
      id: 'jh-1',
      title: 'Tenses: Present & Past',
      description: 'Understanding how to talk about time in English.',
      tips: [
        "Use the Present Simple for facts and habits (e.g., 'I study'). (Gunakan Present Simple untuk fakta dan kebiasaan.)",
        "Use the Past Simple for actions that are finished (e.g., 'I studied'). (Gunakan Past Simple untuk kejadian yang sudah selesai.)",
        "Watch out for irregular verbs in the past tense (e.g., 'Go' -> 'Went'). (Hati-hati dengan kata kerja tidak beraturan di masa lampau.)",
        "Look for time markers like 'Yesterday', 'Last week', and 'Every day'. (Cari penanda waktu seperti 'Yesterday', 'Last week', dan 'Every day'.)",
        "Practice by telling a short story about your day. (Berlatihlah dengan menceritakan cerita pendek tentang harimu.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Present and Past Tense</h3>
            <div class="space-y-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">Present Simple:</h4>
                <p class="text-xs mt-1 text-on-surface-variant">Used for habits, facts, or general truths.</p>
                <p class="text-sm mt-2"><em>Example: I <strong>study</strong> every day.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">Past Simple:</h4>
                <p class="text-xs mt-1 text-on-surface-variant">Used for actions that were completed in the past.</p>
                <p class="text-sm mt-2"><em>Example: I <strong>studied</strong> yesterday.</em></p>
              </div>
            </div>
            <div class="p-4 bg-primary/5 rounded-xl border border-primary/10">
              <p class="text-xs text-primary"><strong>Tip:</strong> Look for time markers like "every day" (Present) or "yesterday" (Past).</p>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'jh1',
          text: 'Choose the correct past tense form: "I ____ to school yesterday."',
          options: ['go', 'went', 'goes', 'going'],
          correctAnswer: 1,
          explanation: 'The past tense of "go" is "went" (bentuk lampau dari go adalah went). For example: "I went to the cinema last night."'
        },
        {
          id: 'jh1-2',
          text: 'Choose the correct form: "She ____ her homework an hour ago."',
          options: ['finish', 'finishes', 'finishing', 'finished'],
          correctAnswer: 3,
          explanation: 'The past tense of "finish" is "finished" (bentuk lampau dari finish adalah finished). For example: "He finished his project on time."'
        },
        {
          id: 'jh1-3',
          text: 'Choose the correct form: "They ____ to the beach every summer."',
          options: ['went', 'go', 'goes', 'going'],
          correctAnswer: 1,
          explanation: 'For habits (every summer), we use the present simple: "go" (untuk kebiasaan, gunakan present simple). For example: "They go to the gym twice a week."'
        },
        {
          id: 'jh1-4',
          text: 'Choose the correct form: "We ____ a movie last night."',
          options: ['watch', 'watched', 'watches', 'watching'],
          correctAnswer: 1,
          explanation: 'The past tense of "watch" is "watched" (bentuk lampau dari watch adalah watched). For example: "We watched a great documentary yesterday."'
        },
        {
          id: 'jh1-5',
          text: 'Choose the correct form: "The sun ____ in the east."',
          options: ['rise', 'rose', 'rises', 'rising'],
          correctAnswer: 2,
          explanation: 'For facts, we use the present simple: "rises" (untuk fakta umum, gunakan present simple). For example: "The sun rises and sets every day."'
        },
        {
          id: 'jh1-6',
          text: 'Choose the correct form: "I ____ my keys this morning."',
          options: ['lose', 'lost', 'loses', 'losing'],
          correctAnswer: 1,
          explanation: 'The past tense of "lose" is "lost" (bentuk lampau dari lose adalah lost). For example: "I lost my wallet at the station."'
        },
        {
          id: 'jh1-7',
          text: 'Choose the correct form: "He ____ football every weekend."',
          options: ['play', 'playing', 'played', 'plays'],
          correctAnswer: 3,
          explanation: 'For habits, we use the present simple: "plays" (untuk kebiasaan, gunakan present simple). For example: "He plays the guitar in a band."'
        },
        {
          id: 'jh1-8',
          text: 'Choose the correct form: "She ____ a letter to her grandmother yesterday."',
          options: ['write', 'wrote', 'writes', 'writing'],
          correctAnswer: 1,
          explanation: 'The past tense of "write" is "wrote" (bentuk lampau dari write adalah wrote). For example: "She wrote a beautiful poem."'
        },
        {
          id: 'jh1-9',
          text: 'Choose the correct form: "Water ____ at 100 degrees Celsius."',
          options: ['boil', 'boiling', 'boiled', 'boils'],
          correctAnswer: 3,
          explanation: 'For facts, we use the present simple: "boils" (untuk fakta ilmiah, gunakan present simple). For example: "The Earth boils at a very high temperature in its core."'
        },
        {
          id: 'jh1-10',
          text: 'Choose the correct form: "They ____ the game last week."',
          options: ['won', 'win', 'wins', 'winning'],
          correctAnswer: 0,
          explanation: 'The past tense of "win" is "won" (bentuk lampau dari win adalah won). For example: "They won the championship last year."'
        }
      ]
    },
    {
      id: 'jh-2',
      title: 'Future Tense: Will & Going to',
      description: 'Talking about plans and predictions.',
      tips: [
        "Use 'Will' for sudden decisions or promises (e.g., 'I will help you'). (Gunakan 'Will' untuk keputusan mendadak atau janji.)",
        "Use 'Be going to' for plans you've already made (e.g., 'I'm going to visit'). (Gunakan 'Be going to' untuk rencana yang sudah dibuat.)",
        "Both can be used for predictions, but 'Be going to' is better for evidence. (Keduanya bisa untuk prediksi, tapi 'Be going to' lebih baik jika ada bukti.)",
        "Remember: 'Will' is often used for opinions (e.g., 'I think it will rain'). (Ingat: 'Will' sering digunakan untuk opini.)",
        "Think about your plans for next weekend to practice 'Be going to'. (Pikirkan rencanamu untuk akhir pekan depan untuk berlatih 'Be going to'.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Future Tense: Will & Going to</h3>
            <div class="space-y-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">Will:</h4>
                <p class="text-xs mt-1 text-on-surface-variant">Used for sudden decisions, promises, or predictions based on opinion.</p>
                <p class="text-sm mt-2"><em>Example: I <strong>will help</strong> you with your bags.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">Be going to:</h4>
                <p class="text-xs mt-1 text-on-surface-variant">Used for plans already made or predictions based on evidence.</p>
                <p class="text-sm mt-2"><em>Example: I <strong>am going to visit</strong> my grandma this weekend.</em></p>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'jh2',
          text: 'Which sentence is a planned future action?',
          options: [
            'I will eat now.',
            'It will rain.',
            'I am going to travel to Bali next month.',
            'I think he will come.'
          ],
          correctAnswer: 2,
          explanation: '"Am going to" indicates a plan (menunjukkan rencana). For example: "I am going to visit my grandparents this weekend."'
        },
        {
          id: 'jh2-2',
          text: 'Choose the correct form: "I think it ____ rain tomorrow."',
          options: ['is going to', 'will', 'rains', 'rained'],
          correctAnswer: 1,
          explanation: 'We use "will" for predictions based on opinion (untuk prediksi berdasarkan opini). For example: "I think he will win the race."'
        },
        {
          id: 'jh2-3',
          text: 'Choose the correct form: "We ____ have a party on Saturday. We already sent the invitations."',
          options: ['will', 'have', 'are going to', 'had'],
          correctAnswer: 2,
          explanation: 'We use "be going to" for plans (untuk rencana yang sudah pasti). For example: "They are going to move to a new house next month."'
        },
        {
          id: 'jh2-4',
          text: 'Choose the correct form: "Watch out! You ____ fall."',
          options: ['will', 'fall', 'fell', 'are going to'],
          correctAnswer: 3,
          explanation: 'We use "be going to" for predictions based on evidence (prediksi berdasarkan bukti). For example: "Look at those clouds! It is going to rain."'
        },
        {
          id: 'jh2-5',
          text: 'Choose the correct form: "I ____ call you later. I promise."',
          options: ['am going to', 'will', 'call', 'called'],
          correctAnswer: 1,
          explanation: 'We use "will" for promises (untuk janji). For example: "I will always love you."'
        },
        {
          id: 'jh2-6',
          text: 'Choose the correct form: "She ____ study medicine next year. She has already enrolled."',
          options: ['will', 'studies', 'is going to', 'studied'],
          correctAnswer: 2,
          explanation: 'We use "be going to" for plans (untuk rencana). For example: "She is going to study medicine next year."'
        },
        {
          id: 'jh2-7',
          text: 'Choose the correct form: "Maybe they ____ arrive late."',
          options: ['will', 'are going to', 'arrive', 'arrived'],
          correctAnswer: 0,
          explanation: 'We use "will" with "maybe" for possibility (untuk kemungkinan). For example: "Maybe they will arrive late because of the traffic."'
        },
        {
          id: 'jh2-8',
          text: 'Choose the correct form: "I ____ buy a new phone tomorrow. I have the money ready."',
          options: ['will', 'am going to', 'buy', 'bought'],
          correctAnswer: 1,
          explanation: 'We use "be going to" for plans (untuk rencana). For example: "I am going to buy a new phone tomorrow."'
        },
        {
          id: 'jh2-9',
          text: 'Choose the correct form: "The phone is ringing. I ____ answer it."',
          options: ['am going to', 'will', 'answer', 'answered'],
          correctAnswer: 1,
          explanation: 'We use "will" for sudden decisions (untuk keputusan mendadak). For example: "The phone is ringing. I will answer it."'
        },
        {
          id: 'jh2-10',
          text: 'Choose the correct form: "Look at those clouds! It ____ rain."',
          options: ['will', 'rain', 'is going to', 'rains'],
          correctAnswer: 2,
          explanation: 'We use "be going to" for predictions based on evidence (prediksi berdasarkan bukti). For example: "Look! The bus is going to leave!"'
        }
      ]
    },
    {
      id: 'jh-3',
      title: 'Gerunds & Infinitives',
      description: 'Learn when to use -ing and when to use "to".',
      tips: [
        "Some verbs are followed by -ing (e.g., 'Enjoy reading'). (Correct: 'I enjoy **swimming**.' | Incorrect: 'I enjoy **to swim**.')",
        "Some verbs are followed by 'to' (e.g., 'Want to read'). (Correct: 'I want **to go**.' | Incorrect: 'I want **going**.')",
        "Make a list of common verbs for each category to memorize them. (Correct: 'Avoid **eating**, promise **to help**.' | Incorrect: 'Avoid **to eat**, promise **helping**.')",
        "Use -ing after prepositions (e.g., 'Interested in learning'). (Correct: 'I\\'m good at **singing**.' | Incorrect: 'I\\'m good at **to sing**.')",
        "When in doubt, check a dictionary or use the form that sounds most natural. (Correct: 'I like **dancing**.' | Incorrect: 'I like **to dancing**.')"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Gerunds and Infinitives</h3>
            <p class="text-on-surface-variant leading-relaxed">
              Some verbs are followed by the <strong>-ing</strong> form (Gerund), while others are followed by the <strong>to + verb</strong> form (Infinitive).
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">Gerund (-ing):</h4>
                <ul class="text-xs mt-2 space-y-1">
                  <li>Enjoy <strong>reading</strong></li>
                  <li>Stop <strong>running</strong></li>
                  <li>Finish <strong>doing</strong></li>
                </ul>
                <p class="text-xs mt-2 italic">Example: I like <strong>swimming</strong>.</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">Infinitive (to...):</h4>
                <ul class="text-xs mt-2 space-y-1">
                  <li>Want <strong>to go</strong></li>
                  <li>Hope <strong>to see</strong></li>
                  <li>Decide <strong>to buy</strong></li>
                </ul>
                <p class="text-xs mt-2 italic">Example: I want <strong>to swim</strong>.</p>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'jh3',
          text: 'Choose the correct form: "I enjoy ____ books."',
          options: ['read', 'reading', 'to read', 'reads'],
          correctAnswer: 1,
          explanation: '"Enjoy" is followed by a gerund (-ing) (Enjoy diikuti oleh gerund). For example: "I enjoy reading books in my free time."'
        },
        {
          id: 'jh4',
          text: 'Choose the correct form: "She wants ____ a doctor."',
          options: ['become', 'becoming', 'to become', 'becomes'],
          correctAnswer: 2,
          explanation: '"Want" is followed by an infinitive (to + verb) (Want diikuti oleh infinitive). For example: "She wants to become a doctor."'
        },
        {
          id: 'jh3-3',
          text: 'Choose the correct form: "I hope ____ you soon."',
          options: ['see', 'seeing', 'to see', 'sees'],
          correctAnswer: 2,
          explanation: '"Hope" is followed by an infinitive (Hope diikuti oleh infinitive). For example: "I hope to see you soon."'
        },
        {
          id: 'jh3-4',
          text: 'Choose the correct form: "Avoid ____ too much sugar."',
          options: ['eat', 'to eat', 'eats', 'eating'],
          correctAnswer: 3,
          explanation: '"Avoid" is followed by a gerund (Avoid diikuti oleh gerund). For example: "Avoid eating too much sugar."'
        },
        {
          id: 'jh3-5',
          text: 'Choose the correct form: "He decided ____ a new car."',
          options: ['to buy', 'buy', 'buying', 'buys'],
          correctAnswer: 0,
          explanation: '"Decide" is followed by an infinitive (Decide diikuti oleh infinitive). For example: "He decided to buy a new car."'
        },
        {
          id: 'jh3-6',
          text: 'Choose the correct form: "I finished ____ my homework."',
          options: ['do', 'doing', 'to do', 'does'],
          correctAnswer: 1,
          explanation: '"Finish" is followed by a gerund (Finish diikuti oleh gerund). For example: "I finished doing my homework."'
        },
        {
          id: 'jh3-7',
          text: 'Choose the correct form: "She promised ____ me."',
          options: ['help', 'to help', 'helping', 'helps'],
          correctAnswer: 1,
          explanation: '"Promise" is followed by an infinitive (Promise diikuti oleh infinitive). For example: "She promised to help me."'
        },
        {
          id: 'jh3-8',
          text: 'Choose the correct form: "They stopped ____ because they were tired."',
          options: ['running', 'run', 'to run', 'runs'],
          correctAnswer: 0,
          explanation: '"Stop" is followed by a gerund when the action itself stops (Stop diikuti gerund jika tindakannya berhenti). For example: "They stopped running because they were tired."'
        },
        {
          id: 'jh3-9',
          text: 'Choose the correct form: "I would like ____ some tea."',
          options: ['have', 'having', 'to have', 'has'],
          correctAnswer: 2,
          explanation: '"Would like" is followed by an infinitive (Would like diikuti oleh infinitive). For example: "I would like to have some tea."'
        },
        {
          id: 'jh3-10',
          text: 'Choose the correct form: "Keep ____! You can do it."',
          options: ['try', 'trying', 'to try', 'tries'],
          correctAnswer: 1,
          explanation: '"Keep" is followed by a gerund (Keep diikuti oleh gerund). For example: "Keep trying! You can do it."'
        }
      ]
    },
    {
      id: 'jh-4',
      title: 'Degrees of Comparison',
      description: 'Tall, Taller, Tallest.',
      tips: [
        "Use comparative (-er) to compare two things (e.g., 'A is faster than B'). (Gunakan comparative untuk membandingkan dua hal.)",
        "Use superlative (-est) for the highest degree (e.g., 'A is the fastest'). (Gunakan superlative untuk tingkat tertinggi.)",
        "For long words, use 'More' and 'Most' (e.g., 'More beautiful'). (Untuk kata panjang, gunakan 'More' dan 'Most'.)",
        "Remember irregulars: 'Good' -> 'Better' -> 'Best' and 'Bad' -> 'Worse' -> 'Worst'. (Ingat kata tidak beraturan: Good, Better, Best.)",
        "Don't forget to use 'than' with comparatives and 'the' with superlatives. (Jangan lupa pakai 'than' untuk comparative dan 'the' untuk superlative.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Degrees of Comparison</h3>
            <p class="text-on-surface-variant leading-relaxed">
              We use different forms of adjectives to compare people or things.
            </p>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-slate-200 text-primary">
                    <th class="text-left py-2">Positive</th>
                    <th class="text-left py-2">Comparative</th>
                    <th class="text-left py-2">Superlative</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr>
                    <td class="py-2">Tall</td>
                    <td class="py-2">Tall<strong>er</strong></td>
                    <td class="py-2">Tall<strong>est</strong></td>
                  </tr>
                  <tr>
                    <td class="py-2">Big</td>
                    <td class="py-2">Big<strong>ger</strong></td>
                    <td class="py-2">Big<strong>gest</strong></td>
                  </tr>
                  <tr>
                    <td class="py-2">Beautiful</td>
                    <td class="py-2"><strong>More</strong> beautiful</td>
                    <td class="py-2"><strong>Most</strong> beautiful</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="p-4 bg-primary/5 rounded-xl border border-primary/10">
              <p class="text-xs text-primary"><strong>Rule:</strong> Use "than" with comparatives (e.g., taller than) and "the" with superlatives (e.g., the tallest).</p>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'jh5',
          text: 'Which is the comparative form of "fast"?',
          options: ['Fast', 'Fastest', 'Faster', 'More fast'],
          correctAnswer: 2,
          explanation: 'Comparative of "fast" is "faster" (Comparative dari fast adalah faster). For example: "A car is faster than a bicycle."'
        },
        {
          id: 'jh4-2',
          text: 'Which is the superlative form of "big"?',
          options: ['Biggest', 'Big', 'Bigger', 'Most big'],
          correctAnswer: 0,
          explanation: 'Superlative of "big" is "biggest" (Superlative dari big adalah biggest). For example: "The blue whale is the biggest animal in the world."'
        },
        {
          id: 'jh4-3',
          text: 'Which is the comparative form of "expensive"?',
          options: ['Expensiver', 'Most expensive', 'Expensivest', 'More expensive'],
          correctAnswer: 3,
          explanation: 'For long words, we use "more" for comparative (untuk kata panjang, gunakan more). For example: "This watch is more expensive than that one."'
        },
        {
          id: 'jh4-4',
          text: 'Which is the superlative form of "good"?',
          options: ['Better', 'Gooder', 'Best', 'Goodest'],
          correctAnswer: 2,
          explanation: '"Good" is irregular: good, better, best (Good tidak beraturan). For example: "He is the best player on the team."'
        },
        {
          id: 'jh4-5',
          text: 'Which is the comparative form of "bad"?',
          options: ['Worse', 'Badder', 'Worst', 'Baddest'],
          correctAnswer: 0,
          explanation: '"Bad" is irregular: bad, worse, worst (Bad tidak beraturan). For example: "The weather today is worse than yesterday."'
        },
        {
          id: 'jh4-6',
          text: 'This car is ____ than that one.',
          options: ['cheap', 'cheapest', 'more cheap', 'cheaper'],
          correctAnswer: 3,
          explanation: 'We use comparative "cheaper" for comparison (gunakan comparative untuk perbandingan). For example: "This car is cheaper than that one."'
        },
        {
          id: 'jh4-7',
          text: 'She is the ____ girl in the class.',
          options: ['smartest', 'smart', 'smarter', 'most smart'],
          correctAnswer: 0,
          explanation: 'We use superlative "smartest" for the highest degree (gunakan superlative untuk tingkat tertinggi). For example: "She is the smartest girl in the class."'
        },
        {
          id: 'jh4-8',
          text: 'This book is ____ than the previous one.',
          options: ['interesting', 'most interesting', 'more interesting', 'interestinger'],
          correctAnswer: 2,
          explanation: 'For long words, we use "more" for comparative (untuk kata panjang, gunakan more). For example: "This book is more interesting than the previous one."'
        },
        {
          id: 'jh4-9',
          text: 'Mount Everest is the ____ mountain in the world.',
          options: ['high', 'higher', 'most high', 'highest'],
          correctAnswer: 3,
          explanation: 'We use superlative "highest" (gunakan superlative). For example: "Mount Everest is the highest mountain in the world."'
        },
        {
          id: 'jh4-10',
          text: 'My house is ____ than yours.',
          options: ['larger', 'large', 'largest', 'more large'],
          correctAnswer: 0,
          explanation: 'We use comparative "larger" (gunakan comparative). For example: "My house is larger than yours."'
        }
      ]
    },
    {
      id: 'jh-5',
      title: 'Modals: Can, Must, Should',
      description: 'Learn how to express ability, obligation, and advice.',
      tips: [
        "Use 'Can' for ability (e.g., 'I can swim'). (Gunakan 'Can' untuk kemampuan.)",
        "Use 'Must' for strong obligation (e.g., 'You must stop'). (Gunakan 'Must' untuk kewajiban kuat.)",
        "Use 'Should' for giving advice (e.g., 'You should study'). (Gunakan 'Should' untuk memberi saran.)",
        "Use 'May' or 'Might' for possibility (e.g., 'It might rain'). (Gunakan 'May' atau 'Might' untuk kemungkinan.)",
        "Modal verbs are always followed by the base form of the verb (no 'to'). (Kata kerja modal selalu diikuti bentuk dasar kata kerja tanpa 'to'.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Modal Verbs</h3>
            <p class="text-on-surface-variant leading-relaxed">
              Modals are special verbs that give extra meaning to the main verb.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">Can:</h4>
                <p class="text-xs mt-1">Ability. <br/> <em>I <strong>can</strong> swim.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">Must:</h4>
                <p class="text-xs mt-1">Obligation. <br/> <em>You <strong>must</strong> wear a helmet.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">Should:</h4>
                <p class="text-xs mt-1">Advice. <br/> <em>You <strong>should</strong> study hard.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">May:</h4>
                <p class="text-xs mt-1">Permission. <br/> <em><strong>May</strong> I come in?</em></p>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'jh6',
          text: 'Which modal expresses advice?',
          options: ['Can', 'Must', 'Will', 'Should'],
          correctAnswer: 3,
          explanation: '"Should" is used for giving advice (Should digunakan untuk memberi saran). For example: "You should eat more vegetables."'
        },
        {
          id: 'jh5-2',
          text: 'Which modal expresses ability?',
          options: ['Must', 'Can', 'Should', 'May'],
          correctAnswer: 1,
          explanation: '"Can" is used for ability (Can digunakan untuk kemampuan). For example: "I can swim."'
        },
        {
          id: 'jh5-3',
          text: 'Which modal expresses obligation?',
          options: ['Can', 'Should', 'Must', 'May'],
          correctAnswer: 2,
          explanation: '"Must" is used for obligation (Must digunakan untuk kewajiban). For example: "You must wear a helmet."'
        },
        {
          id: 'jh5-4',
          text: 'Which modal expresses permission?',
          options: ['Can', 'Must', 'Should', 'May'],
          correctAnswer: 3,
          explanation: '"May" is often used for formal permission (May sering digunakan untuk izin formal). For example: "May I come in?"'
        },
        {
          id: 'jh5-5',
          text: '"I ____ swim when I was five."',
          options: ['can', 'must', 'should', 'could'],
          correctAnswer: 3,
          explanation: '"Could" is the past of "can" for ability (Could adalah bentuk lampau dari can). For example: "I could swim when I was five."'
        },
        {
          id: 'jh5-6',
          text: '"You ____ stop at the red light."',
          options: ['can', 'should', 'must', 'may'],
          correctAnswer: 2,
          explanation: 'Stopping at a red light is an obligation (Berhenti di lampu merah adalah kewajiban). For example: "You must stop at the red light."'
        },
        {
          id: 'jh5-7',
          text: '"It ____ rain later."',
          options: ['can', 'must', 'should', 'might'],
          correctAnswer: 3,
          explanation: '"Might" expresses possibility (Might menyatakan kemungkinan). For example: "It might rain later."'
        },
        {
          id: 'jh5-8',
          text: '"____ I use your pen?"',
          options: ['Can', 'Must', 'Should', 'Will'],
          correctAnswer: 0,
          explanation: '"Can" is commonly used for permission (Can umum digunakan untuk izin). For example: "Can I use your pen?"'
        },
        {
          id: 'jh5-9',
          text: '"You ____ see a doctor if you feel sick."',
          options: ['can', 'must', 'should', 'may'],
          correctAnswer: 2,
          explanation: 'This is advice, so we use "should" (Ini adalah saran, jadi gunakan should). For example: "You should see a doctor if you feel sick."'
        },
        {
          id: 'jh5-10',
          text: '"I ____ speak three languages."',
          options: ['can', 'must', 'should', 'may'],
          correctAnswer: 0,
          explanation: 'This is an ability (Ini adalah kemampuan). For example: "I can speak three languages."'
        }
      ]
    },
    {
      id: 'jh-6',
      title: 'Conjunctions: And, But, So, Because',
      description: 'Learn how to connect sentences.',
      tips: [
        "Use 'And' to add information. (Gunakan 'And' untuk menambah informasi.)",
        "Use 'But' to show contrast. (Gunakan 'But' untuk menunjukkan kontras.)",
        "Use 'So' to show a result (e.g., 'I was tired, so I slept'). (Gunakan 'So' untuk menunjukkan hasil.)",
        "Use 'Because' to give a reason (e.g., 'I slept because I was tired'). (Gunakan 'Because' untuk memberi alasan.)",
        "Try to combine short sentences using these conjunctions. (Cobalah menggabungkan kalimat pendek menggunakan kata hubung ini.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Conjunctions: And, But, So, Because</h3>
            <p class="text-on-surface-variant leading-relaxed">
              Conjunctions are used to connect words, phrases, or clauses.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">And (Addition):</h4>
                <p class="text-xs mt-1"><em>I like apples <strong>and</strong> oranges.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">But (Contrast):</h4>
                <p class="text-xs mt-1"><em>I like apples <strong>but</strong> not grapes.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">So (Result):</h4>
                <p class="text-xs mt-1"><em>It was raining, <strong>so</strong> I took an umbrella.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">Because (Reason):</h4>
                <p class="text-xs mt-1"><em>I took an umbrella <strong>because</strong> it was raining.</em></p>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'jh7',
          text: 'Which conjunction shows a reason?',
          options: ['And', 'But', 'So', 'Because'],
          correctAnswer: 3,
          explanation: '"Because" is used to give a reason (Because digunakan untuk memberi alasan). For example: "I took an umbrella because it was raining."'
        },
        {
          id: 'jh6-2',
          text: 'Which conjunction shows a contrast?',
          options: ['And', 'So', 'But', 'Because'],
          correctAnswer: 2,
          explanation: '"But" is used to show contrast (But digunakan untuk menunjukkan kontras). For example: "I like tea but I don\'t like coffee."'
        },
        {
          id: 'jh6-3',
          text: 'Which conjunction shows a result?',
          options: ['And', 'So', 'But', 'Because'],
          correctAnswer: 1,
          explanation: '"So" is used to show a result (So digunakan untuk menunjukkan hasil). For example: "It was raining, so I took an umbrella."'
        },
        {
          id: 'jh6-4',
          text: 'Which conjunction shows addition?',
          options: ['But', 'So', 'Because', 'And'],
          correctAnswer: 3,
          explanation: '"And" is used for addition (And digunakan untuk penambahan). For example: "I like apples and oranges."'
        },
        {
          id: 'jh6-5',
          text: '"I was hungry, ____ I ate a sandwich."',
          options: ['and', 'so', 'but', 'because'],
          correctAnswer: 1,
          explanation: 'Eating a sandwich is the result of being hungry (Makan sandwich adalah hasil dari lapar). For example: "I was hungry, so I ate a sandwich."'
        },
        {
          id: 'jh6-6',
          text: '"I like tea, ____ I don\'t like coffee."',
          options: ['and', 'so', 'because', 'but'],
          correctAnswer: 3,
          explanation: 'This shows a contrast (Ini menunjukkan kontras). For example: "I like tea, but I don\'t like coffee."'
        },
        {
          id: 'jh6-7',
          text: '"She stayed home ____ she was sick."',
          options: ['and', 'but', 'so', 'because'],
          correctAnswer: 3,
          explanation: 'Being sick is the reason she stayed home (Sakit adalah alasan dia di rumah). For example: "She stayed home because she was sick."'
        },
        {
          id: 'jh6-8',
          text: '"He is tall ____ strong."',
          options: ['but', 'so', 'because', 'and'],
          correctAnswer: 3,
          explanation: 'This adds information (Ini menambah informasi). For example: "He is tall and strong."'
        },
        {
          id: 'jh6-9',
          text: '"It was cold, ____ he didn\'t wear a coat."',
          options: ['and', 'so', 'because', 'but'],
          correctAnswer: 3,
          explanation: 'This shows a contrast (Ini menunjukkan kontras). For example: "It was cold, but he didn\'t wear a coat."'
        },
        {
          id: 'jh6-10',
          text: '"I studied hard, ____ I passed the exam."',
          options: ['and', 'but', 'because', 'so'],
          correctAnswer: 3,
          explanation: 'Passing the exam is the result of studying hard (Lulus ujian adalah hasil belajar keras). For example: "I studied hard, so I passed the exam."'
        }
      ]
    },
    {
      id: 'jh-7',
      title: 'Passive Voice: Present & Past',
      description: 'Learn how to focus on the action rather than the doer.',
      tips: [
        "Use the passive voice when the action is more important than the person doing it. (Gunakan kalimat pasif jika tindakannya lebih penting daripada pelakunya.)",
        "Form: Be (am/is/are/was/were) + Past Participle (V3). (Rumus: Be + V3.)",
        "The object of the active sentence becomes the subject of the passive one. (Objek kalimat aktif menjadi subjek kalimat pasif.)",
        "Use 'by' if you want to mention who did the action. (Gunakan 'by' untuk menyebutkan siapa pelakunya.)",
        "Passive voice is common in formal writing and news reports. (Kalimat pasif umum dalam tulisan formal dan berita.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Passive Voice: Present & Past</h3>
            <p class="text-on-surface-variant leading-relaxed">
              In the passive voice, the object of the active sentence becomes the subject.
            </p>
            <div class="space-y-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">Present Passive (am/is/are + V3):</h4>
                <p class="text-sm mt-2"><em>Example: The cake <strong>is eaten</strong> by me.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">Past Passive (was/were + V3):</h4>
                <p class="text-sm mt-2"><em>Example: The cake <strong>was eaten</strong> by me.</em></p>
              </div>
            </div>
            <div class="p-4 bg-primary/5 rounded-xl border border-primary/10">
              <p class="text-xs text-primary"><strong>Note:</strong> We use "by" to mention who did the action.</p>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'jh8',
          text: 'Change to passive: "She wrote a letter."',
          options: ['A letter is written by her.', 'A letter wrote by her.', 'A letter was written by her.', 'A letter was write by her.'],
          correctAnswer: 2,
          explanation: 'The past passive is "was/were + V3" (Pasif lampau adalah was/were + V3). For example: "A letter was written by her."'
        },
        {
          id: 'jh7-2',
          text: 'Change to passive: "They clean the room every day."',
          options: ['The room is cleaned by them.', 'The room was cleaned by them.', 'The room cleaned by them.', 'The room is clean by them.'],
          correctAnswer: 0,
          explanation: 'The present passive is "am/is/are + V3" (Pasif sekarang adalah am/is/are + V3). For example: "The room is cleaned by them every day."'
        },
        {
          id: 'jh7-3',
          text: 'Change to passive: "He repaired the car."',
          options: ['The car is repaired by him.', 'The car repaired by him.', 'The car was repaired by him.', 'The car was repair by him.'],
          correctAnswer: 2,
          explanation: 'The past passive is "was/were + V3" (Pasif lampau adalah was/were + V3). For example: "The car was repaired by him."'
        },
        {
          id: 'jh7-4',
          text: 'Change to passive: "The teacher helps the students."',
          options: ['The students were helped by the teacher.', 'The students are helped by the teacher.', 'The students helped by the teacher.', 'The students are help by the teacher.'],
          correctAnswer: 1,
          explanation: 'The present passive is "am/is/are + V3" (Pasif sekarang adalah am/is/are + V3). For example: "The students are helped by the teacher."'
        },
        {
          id: 'jh7-5',
          text: 'Change to passive: "Shakespeare wrote Hamlet."',
          options: ['Hamlet is written by Shakespeare.', 'Hamlet wrote by Shakespeare.', 'Hamlet was written by Shakespeare.', 'Hamlet was write by Shakespeare.'],
          correctAnswer: 2,
          explanation: 'The past passive is "was/were + V3" (Pasif lampau adalah was/were + V3). For example: "Hamlet was written by Shakespeare."'
        },
        {
          id: 'jh7-6',
          text: 'Change to passive: "The cat caught the mouse."',
          options: ['The mouse is caught by the cat.', 'The mouse caught by the cat.', 'The mouse was caught by the cat.', 'The mouse was catch by the cat.'],
          correctAnswer: 2,
          explanation: 'The past passive is "was/were + V3" (Pasif lampau adalah was/were + V3). For example: "The mouse was caught by the cat."'
        },
        {
          id: 'jh7-7',
          text: 'Change to passive: "Many people speak English."',
          options: ['English was spoken by many people.', 'English spoken by many people.', 'English is spoken by many people.', 'English is speak by many people.'],
          correctAnswer: 2,
          explanation: 'The present passive is "am/is/are + V3" (Pasif sekarang adalah am/is/are + V3). For example: "English is spoken by many people."'
        },
        {
          id: 'jh7-8',
          text: 'Change to passive: "They built the bridge in 1990."',
          options: ['The bridge is built in 1990.', 'The bridge built in 1990.', 'The bridge was built in 1990.', 'The bridge was build in 1990.'],
          correctAnswer: 2,
          explanation: 'The past passive is "was/were + V3" (Pasif lampau adalah was/were + V3). For example: "The bridge was built in 1990."'
        },
        {
          id: 'jh7-9',
          text: 'Change to passive: "She makes delicious cakes."',
          options: ['Delicious cakes were made by her.', 'Delicious cakes are made by her.', 'Delicious cakes made by her.', 'Delicious cakes are make by her.'],
          correctAnswer: 1,
          explanation: 'The present passive is "am/is/are + V3" (Pasif sekarang adalah am/is/are + V3). For example: "Delicious cakes are made by her."'
        },
        {
          id: 'jh7-10',
          text: 'Change to passive: "The police arrested the thief."',
          options: ['The thief is arrested by the police.', 'The thief arrested by the police.', 'The thief was arrested by the police.', 'The thief was arrest by the police.'],
          correctAnswer: 2,
          explanation: 'The past passive is "was/were + V3" (Pasif lampau adalah was/were + V3). For example: "The thief was arrested by the police."'
        }
      ]
    },
    {
      id: 'jh-8',
      title: 'Present Perfect: Have/Has + V3',
      description: 'Learn how to talk about experiences and recent actions.',
      tips: [
        "Use the Present Perfect for experiences (e.g., 'I have been to Paris'). (Gunakan Present Perfect untuk pengalaman.)",
        "Use it for actions that started in the past and continue now. (Gunakan untuk tindakan yang dimulai di masa lalu dan berlanjut sampai sekarang.)",
        "Form: Have/Has + Past Participle (V3). (Rumus: Have/Has + V3.)",
        "Look for keywords like 'Ever', 'Never', 'Just', 'Already', and 'Yet'. (Cari kata kunci seperti Ever, Never, Just, Already, dan Yet.)",
        "Don't use it with specific times (like 'Yesterday' or 'In 2010'). (Jangan gunakan dengan waktu spesifik seperti Yesterday.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Present Perfect: Have/Has + V3</h3>
            <p class="text-on-surface-variant leading-relaxed">
              We use the present perfect for actions that happened at an unspecified time in the past or that started in the past and continue to the present.
            </p>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 class="font-bold text-primary text-sm">Form: have/has + Past Participle (V3)</h4>
              <ul class="text-sm mt-3 space-y-2">
                <li><em>I <strong>have visited</strong> Bali.</em></li>
                <li><em>She <strong>has lived</strong> here for five years.</em></li>
              </ul>
            </div>
            <div class="p-4 bg-primary/5 rounded-xl border border-primary/10">
              <p class="text-xs text-primary"><strong>Keywords:</strong> Ever, Never, Just, Already, Yet, Since, For.</p>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'jh8-1',
          text: 'Choose the correct form: "I ____ that movie three times."',
          options: ['see', 'saw', 'have seen', 'has seen'],
          correctAnswer: 2,
          explanation: 'For experiences, we use the present perfect: "have seen" (Untuk pengalaman, gunakan have seen). For example: "I have seen that movie three times."'
        },
        {
          id: 'jh8-2',
          text: 'Choose the correct form: "She ____ her keys."',
          options: ['lose', 'lost', 'has lost', 'have lost'],
          correctAnswer: 2,
          explanation: 'For "She", we use "has" + V3: "has lost" (Untuk She, gunakan has + V3). For example: "She has lost her keys."'
        },
        {
          id: 'jh8-3',
          text: 'Choose the correct form: "They ____ in this house since 2010."',
          options: ['live', 'have lived', 'lived', 'has lived'],
          correctAnswer: 1,
          explanation: 'For actions continuing from the past, we use "have lived" (Untuk tindakan berlanjut, gunakan have lived). For example: "They have lived in this house since 2010."'
        },
        {
          id: 'jh8-4',
          text: 'Choose the correct form: "Have you ever ____ to Japan?"',
          options: ['be', 'been', 'was', 'being'],
          correctAnswer: 1,
          explanation: 'The past participle of "be" is "been" (V3 dari be adalah been). For example: "Have you ever been to Japan?"'
        },
        {
          id: 'jh8-5',
          text: 'Choose the correct form: "He ____ his homework yet."',
          options: ['didn\'t finish', 'haven\'t finished', 'hasn\'t finished', 'not finished'],
          correctAnswer: 2,
          explanation: 'We use present perfect with "yet" in negative sentences (Gunakan present perfect dengan yet untuk kalimat negatif). For example: "He hasn\'t finished his homework yet."'
        },
        {
          id: 'jh8-6',
          text: 'Choose the correct form: "We ____ each other for a long time."',
          options: ['know', 'knew', 'has known', 'have known'],
          correctAnswer: 3,
          explanation: 'For states continuing from the past, we use "have known" (Untuk keadaan berlanjut, gunakan have known). For example: "We have known each other for a long time."'
        },
        {
          id: 'jh8-7',
          text: 'Choose the correct form: "The train ____ already."',
          options: ['leave', 'has left', 'left', 'have left'],
          correctAnswer: 1,
          explanation: 'We use present perfect with "already" (Gunakan present perfect dengan already). For example: "The train has left already."'
        },
        {
          id: 'jh8-8',
          text: 'Choose the correct form: "I ____ never ____ sushi."',
          options: ['have, eat', 'has, eaten', 'have, eaten', 'had, eaten'],
          correctAnswer: 2,
          explanation: 'Present perfect with "never": "have eaten" (Present perfect dengan never: have eaten). For example: "I have never eaten sushi."'
        },
        {
          id: 'jh8-9',
          text: 'Choose the correct form: "She ____ just ____ home."',
          options: ['has, arrive', 'have, arrived', 'has, arrived', 'is, arrived'],
          correctAnswer: 2,
          explanation: 'Present perfect with "just": "has arrived" (Present perfect dengan just: has arrived). For example: "She has just arrived home."'
        },
        {
          id: 'jh8-10',
          text: 'Choose the correct form: "They ____ many books this year."',
          options: ['read', 'have read', 'reads', 'has read'],
          correctAnswer: 1,
          explanation: 'Present perfect for a period of time that is not over (Present perfect untuk periode waktu yang belum berakhir). For example: "They have read many books this year."'
        }
      ]
    },
    {
      id: 'jh-9',
      title: 'Relative Clauses: Who, Which, That',
      description: 'Learn how to give more information about people and things.',
      tips: [
        "Relative clauses act like adjectives—they describe a noun. (Relative clause berfungsi seperti kata sifat—mendeskripsikan kata benda.)",
        "Use 'Who' for people (e.g., 'The man who lives next door'). (Gunakan 'Who' untuk orang.)",
        "Use 'Which' for things (e.g., 'The car which is outside'). (Gunakan 'Which' untuk benda.)",
        "You can use 'That' for both people and things in informal English. (Kamu bisa gunakan 'That' untuk orang dan benda dalam bahasa Inggris informal.)",
        "Make sure the relative pronoun comes immediately after the noun it describes. (Pastikan kata ganti relatif datang tepat setelah kata benda yang dideskripsikan.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Relative Clauses: Who, Which, That</h3>
            <p class="text-on-surface-variant leading-relaxed">
              We use relative clauses to identify which person or thing we are talking about.
            </p>
            <div class="space-y-3">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p class="text-sm"><strong>Who:</strong> For people. <br/> <em>The man <strong>who</strong> lives next door is a doctor.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p class="text-sm"><strong>Which:</strong> For things. <br/> <em>The car <strong>which</strong> is parked outside is mine.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p class="text-sm"><strong>That:</strong> For people or things. <br/> <em>The book <strong>that</strong> I am reading is interesting.</em></p>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'jh9-1',
          text: 'The girl ____ is wearing a red dress is my sister.',
          options: ['which', 'who', 'where', 'when'],
          correctAnswer: 1,
          explanation: 'We use "who" for people (Gunakan who untuk orang). For example: "The girl who is wearing a red dress is my sister."'
        },
        {
          id: 'jh9-2',
          text: 'The house ____ has a blue door is for sale.',
          options: ['who', 'where', 'which', 'when'],
          correctAnswer: 2,
          explanation: 'We use "which" for things (Gunakan which untuk benda). For example: "The house which has a blue door is for sale."'
        },
        {
          id: 'jh9-3',
          text: 'I like the book ____ you gave me.',
          options: ['who', 'where', 'when', 'that'],
          correctAnswer: 3,
          explanation: 'We can use "that" for things (Kita bisa gunakan that untuk benda). For example: "I like the book that you gave me."'
        },
        {
          id: 'jh9-4',
          text: 'The man ____ I met yesterday was very kind.',
          options: ['who', 'which', 'where', 'when'],
          correctAnswer: 0,
          explanation: 'We use "who" for people (Gunakan who untuk orang). For example: "The man who I met yesterday was very kind."'
        },
        {
          id: 'jh9-5',
          text: 'This is the restaurant ____ serves great pizza.',
          options: ['who', 'where', 'that', 'when'],
          correctAnswer: 2,
          explanation: 'We use "that" or "which" for things/places (Gunakan that atau which untuk benda/tempat). For example: "This is the restaurant that serves great pizza."'
        },
        {
          id: 'jh9-6',
          text: 'The dog ____ is barking belongs to my neighbor.',
          options: ['who', 'where', 'when', 'which'],
          correctAnswer: 3,
          explanation: 'We use "which" or "that" for animals (Gunakan which atau that untuk hewan). For example: "The dog which is barking belongs to my neighbor."'
        },
        {
          id: 'jh9-7',
          text: 'The students ____ study hard get good grades.',
          options: ['which', 'who', 'where', 'when'],
          correctAnswer: 1,
          explanation: 'We use "who" for people (Gunakan who untuk orang). For example: "The students who study hard get good grades."'
        },
        {
          id: 'jh9-8',
          text: 'The phone ____ I bought is very expensive.',
          options: ['who', 'where', 'which', 'when'],
          correctAnswer: 2,
          explanation: 'We use "which" or "that" for things (Gunakan which atau that untuk benda). For example: "The phone which I bought is very expensive."'
        },
        {
          id: 'jh9-9',
          text: 'The teacher ____ taught us English was very patient.',
          options: ['which', 'where', 'who', 'when'],
          correctAnswer: 2,
          explanation: 'We use "who" for people (Gunakan who untuk orang). For example: "The teacher who taught us English was very patient."'
        },
        {
          id: 'jh9-10',
          text: 'I found the keys ____ I had lost.',
          options: ['who', 'where', 'when', 'that'],
          correctAnswer: 3,
          explanation: 'We use "that" or "which" for things (Gunakan that atau which untuk benda). For example: "I found the keys that I had lost."'
        }
      ]
    },
    {
      id: 'jh-10',
      title: 'Adverbs of Frequency',
      description: 'Always, Usually, Often, Sometimes, Never.',
      tips: [
        "Adverbs of frequency tell us how often an action happens. (Adverb of frequency memberitahu seberapa sering suatu tindakan terjadi.)",
        "Place them BEFORE the main verb (e.g., 'I always eat'). (Letakkan SEBELUM kata kerja utama.)",
        "Place them AFTER the verb 'to be' (e.g., 'She is usually late'). (Letakkan SETELAH kata kerja 'to be'.)",
        "Use 'Never' for 0% and 'Always' for 100%. (Gunakan 'Never' untuk 0% dan 'Always' untuk 100%.)",
        "Practice by describing your daily habits using these words. (Berlatihlah mendeskripsikan kebiasaan harianmu menggunakan kata-kata ini.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Adverbs of Frequency</h3>
            <p class="text-on-surface-variant leading-relaxed">
              These words tell us how often something happens.
            </p>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-white rounded border border-slate-200 text-xs font-bold">Always (100%)</span>
                <span class="px-2 py-1 bg-white rounded border border-slate-200 text-xs font-bold">Usually (90%)</span>
                <span class="px-2 py-1 bg-white rounded border border-slate-200 text-xs font-bold">Often (70%)</span>
                <span class="px-2 py-1 bg-white rounded border border-slate-200 text-xs font-bold">Sometimes (50%)</span>
                <span class="px-2 py-1 bg-white rounded border border-slate-200 text-xs font-bold">Never (0%)</span>
              </div>
            </div>
            <div class="p-4 bg-primary/5 rounded-xl border border-primary/10">
              <h4 class="font-bold text-primary text-sm">Word Order:</h4>
              <ul class="text-xs mt-2 space-y-1">
                <li><strong>Before</strong> main verbs: <em>I <strong>always</strong> eat breakfast.</em></li>
                <li><strong>After</strong> "to be": <em>She is <strong>usually</strong> late.</em></li>
              </ul>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'jh10-1',
          text: 'Where does the adverb go? "I ____ (always) eat breakfast."',
          options: ['I eat always', 'I always eat', 'Always I eat', 'I eat breakfast always'],
          correctAnswer: 1,
          explanation: 'Adverbs of frequency go before the main verb (Adverb of frequency diletakkan sebelum kata kerja utama). For example: "I always eat breakfast."'
        },
        {
          id: 'jh10-2',
          text: 'Where does the adverb go? "She ____ (is) late."',
          options: ['She usually is late', 'Usually she is late', 'She is usually late', 'She is late usually'],
          correctAnswer: 2,
          explanation: 'Adverbs of frequency go after the verb "to be" (Adverb of frequency diletakkan setelah kata kerja "to be"). For example: "She is usually late."'
        },
        {
          id: 'jh10-3',
          text: 'Which word means 0% of the time?',
          options: ['Always', 'Often', 'Never', 'Sometimes'],
          correctAnswer: 2,
          explanation: '"Never" means something doesn\'t happen (Never berarti sesuatu tidak terjadi). For example: "I never tell lies."'
        },
        {
          id: 'jh10-4',
          text: 'Which word means 100% of the time?',
          options: ['Often', 'Sometimes', 'Never', 'Always'],
          correctAnswer: 3,
          explanation: '"Always" means every time (Always berarti setiap saat). For example: "It always rains in April."'
        },
        {
          id: 'jh10-5',
          text: 'I ____ (often) go to the gym.',
          options: ['go often', 'often go', 'often am go', 'am often go'],
          correctAnswer: 1,
          explanation: 'Before the main verb (Sebelum kata kerja utama). For example: "I often go to the gym."'
        },
        {
          id: 'jh10-6',
          text: 'They ____ (sometimes) watch movies.',
          options: ['watch sometimes', 'sometimes watch', 'sometimes are watch', 'are sometimes watch'],
          correctAnswer: 1,
          explanation: 'Before the main verb (Sebelum kata kerja utama). For example: "They sometimes watch movies."'
        },
        {
          id: 'jh10-7',
          text: 'He ____ (never) tells lies.',
          options: ['tells never', 'never is tell', 'never tells', 'is never tell'],
          correctAnswer: 2,
          explanation: 'Before the main verb (Sebelum kata kerja utama). For example: "He never tells lies."'
        },
        {
          id: 'jh10-8',
          text: 'We ____ (usually) have dinner at 7 PM.',
          options: ['have usually', 'usually are have', 'are usually have', 'usually have'],
          correctAnswer: 3,
          explanation: 'Before the main verb (Sebelum kata kerja utama). For example: "We usually have dinner at 7 PM."'
        },
        {
          id: 'jh10-9',
          text: 'It ____ (always) rains in April.',
          options: ['rains always', 'always is rain', 'always rains', 'is always rain'],
          correctAnswer: 2,
          explanation: 'Before the main verb (Sebelum kata kerja utama). For example: "It always rains in April."'
        },
        {
          id: 'jh10-10',
          text: 'You ____ (often) are helpful.',
          options: ['often are', 'often am', 'am often', 'are often'],
          correctAnswer: 3,
          explanation: 'After the verb "to be" (Setelah kata kerja "to be"). For example: "You are often helpful."'
        }
      ]
    }
  ]
};
