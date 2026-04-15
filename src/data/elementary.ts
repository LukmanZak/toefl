import { Category } from '../types';

export const ELEMENTARY_CATEGORY: Category = {
  id: 'elementary',
  title: 'Elementary School',
  icon: 'baby',
  lessons: [
    {
      id: 'elem-1',
      title: 'Basic Grammar: Nouns & Verbs',
      description: 'Introduction to the building blocks of English sentences.',
      tips: [
        "Nouns are 'naming' words - think of people, places, or things around you. (Kata benda adalah kata untuk menamai orang, tempat, atau benda di sekitarmu.)",
        "Verbs are 'doing' words - they describe actions or states of being. (Kata kerja adalah kata yang menunjukkan tindakan atau keadaan.)",
        "Every complete sentence must have at least one subject (noun) and one verb. (Setiap kalimat lengkap harus memiliki setidaknya satu subjek (kata benda) dan satu kata kerja.)",
        "Try to identify nouns and verbs in the books you read. (Cobalah untuk mengidentifikasi kata benda dan kata kerja dalam buku yang kamu baca.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Nouns and Verbs</h3>
            <p class="text-on-surface-variant leading-relaxed">
              A <strong>noun</strong> is a person, place, or thing. It's the "who" or "what" of a sentence.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Person:</h4>
                <p class="text-sm">teacher, boy, Sarah. <br/> <em>Example: The <strong>teacher</strong> is kind.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Place:</h4>
                <p class="text-sm">school, park, London. <br/> <em>Example: I go to <strong>school</strong>.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Thing:</h4>
                <p class="text-sm">book, cat, table. <br/> <em>Example: The <strong>book</strong> is red.</em></p>
              </div>
            </div>
            <p class="text-on-surface-variant leading-relaxed mt-4">
              A <strong>verb</strong> is an action word. It tells us what the noun is doing.
            </p>
            <div class="p-4 bg-primary/5 rounded-xl border border-primary/10">
              <p class="text-primary font-medium">Example sentence: <em>The <strong>cat</strong> (noun) <strong>eats</strong> (verb) the food.</em></p>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'e1',
          text: 'Which word is a noun?',
          options: ['Run', 'Fast', 'Apple', 'Quickly'],
          correctAnswer: 2,
          explanation: 'Apple is a thing, so it is a noun (kata benda). For example: "I ate a red apple for breakfast."'
        },
        {
          id: 'e2',
          text: 'Which word is a verb?',
          options: ['Happy', 'Table', 'Blue', 'Jump'],
          correctAnswer: 3,
          explanation: 'Jump is an action, so it is a verb (kata kerja). For example: "The children like to jump on the trampoline."'
        },
        {
          id: 'e1-3',
          text: 'Which word is a person?',
          options: ['Eat', 'Teacher', 'Small', 'Slowly'],
          correctAnswer: 1,
          explanation: 'Teacher is a person, so it is a noun (kata benda). For example: "The teacher is writing on the board."'
        },
        {
          id: 'e1-4',
          text: 'Which word is an action?',
          options: ['Pencil', 'Green', 'Sing', 'Quiet'],
          correctAnswer: 2,
          explanation: 'Sing is an action, so it is a verb (kata kerja). For example: "Birds sing in the morning."'
        },
        {
          id: 'e1-5',
          text: 'Identify the noun: "The dog is sleeping."',
          options: ['The', 'is', 'sleeping', 'dog'],
          correctAnswer: 3,
          explanation: 'Dog is an animal/thing, so it is a noun (kata benda). For example: "My dog is very friendly."'
        },
        {
          id: 'e1-6',
          text: 'Identify the verb: "I drink milk."',
          options: ['drink', 'I', 'milk', 'white'],
          correctAnswer: 0,
          explanation: 'Drink is an action, so it is a verb (kata kerja). For example: "I drink water every day."'
        },
        {
          id: 'e1-7',
          text: 'Which word is a place?',
          options: ['Run', 'Big', 'School', 'Often'],
          correctAnswer: 2,
          explanation: 'School is a place, so it is a noun (kata benda). For example: "I go to school by bus."'
        },
        {
          id: 'e1-8',
          text: 'Which word is an action?',
          options: ['Chair', 'Yellow', 'Soft', 'Write'],
          correctAnswer: 3,
          explanation: 'Write is an action, so it is a verb (kata kerja). For example: "Please write your name here."'
        },
        {
          id: 'e1-9',
          text: 'Identify the noun: "The sun is hot."',
          options: ['The', 'is', 'sun', 'hot'],
          correctAnswer: 2,
          explanation: 'Sun is a thing, so it is a noun (kata benda). For example: "The sun is very bright today."'
        },
        {
          id: 'e1-10',
          text: 'Identify the verb: "She walks to the park."',
          options: ['She', 'to', 'park', 'walks'],
          correctAnswer: 3,
          explanation: 'Walks is an action, so it is a verb (kata kerja). For example: "He walks his dog every evening."'
        }
      ]
    },
    {
      id: 'elem-2',
      title: 'Adjectives: Describing Words',
      description: 'Learn how to describe nouns using adjectives.',
      tips: [
        "Adjectives add color and detail to your writing. (Adjective atau kata sifat memberikan detail pada tulisanmu.)",
        "They usually come before the noun they describe (e.g., 'blue sky'). (Biasanya diletakkan sebelum kata benda yang dijelaskan.)",
        "You can use multiple adjectives to be more specific (e.g., 'large, red apple'). (Kamu bisa menggunakan lebih dari satu kata sifat agar lebih spesifik.)",
        "Think about how things look, feel, taste, or sound to find good adjectives. (Pikirkan tentang tampilan, rasa, atau suara benda tersebut untuk menemukan kata sifat yang tepat.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Adjectives</h3>
            <p class="text-on-surface-variant leading-relaxed">
              An <strong>adjective</strong> describes a noun. It tells us more about its color, size, or quality.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Color:</h4>
                <p class="text-sm">red, blue, green. <br/> <em>Example: The <strong>blue</strong> sky.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Size:</h4>
                <p class="text-sm">big, small, tall. <br/> <em>Example: The <strong>big</strong> elephant.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Quality:</h4>
                <p class="text-sm">happy, fast, cold. <br/> <em>Example: The <strong>happy</strong> dog.</em></p>
              </div>
            </div>
            <div class="p-4 bg-primary/5 rounded-xl border border-primary/10">
              <p class="text-primary font-medium">Example: <em>The <strong>big</strong>, <strong>red</strong> apple.</em></p>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'e3',
          text: 'Identify the adjective: "The small dog barked."',
          options: ['The', 'dog', 'barked', 'small'],
          correctAnswer: 3,
          explanation: '"Small" describes the size of the dog (menjelaskan ukuran anjing). For example: "The small bird is singing."'
        },
        {
          id: 'e4',
          text: 'Which word is an adjective?',
          options: ['Sing', 'Beautiful', 'House', 'Slowly'],
          correctAnswer: 1,
          explanation: '"Beautiful" describes a quality (menjelaskan kualitas). For example: "The flowers are beautiful."'
        },
        {
          id: 'e2-3',
          text: 'Identify the adjective: "I have a red car."',
          options: ['I', 'have', 'car', 'red'],
          correctAnswer: 3,
          explanation: '"Red" describes the color of the car (menjelaskan warna mobil). For example: "The red apple is sweet."'
        },
        {
          id: 'e2-4',
          text: 'Which word describes a size?',
          options: ['Run', 'Big', 'Apple', 'Fast'],
          correctAnswer: 1,
          explanation: '"Big" is an adjective that describes size (kata sifat yang menjelaskan ukuran). For example: "The big elephant is strong."'
        },
        {
          id: 'e2-5',
          text: 'Identify the adjective: "The soup is hot."',
          options: ['The', 'soup', 'hot', 'is'],
          correctAnswer: 2,
          explanation: '"Hot" describes the temperature of the soup (menjelaskan suhu sup). For example: "The hot tea is in the cup."'
        },
        {
          id: 'e2-6',
          text: 'Which word is an adjective?',
          options: ['Jump', 'Table', 'Happy', 'Quickly'],
          correctAnswer: 2,
          explanation: '"Happy" describes a feeling or quality (menjelaskan perasaan atau kualitas). For example: "The happy children are playing."'
        },
        {
          id: 'e2-7',
          text: 'Identify the adjective: "She has long hair."',
          options: ['long', 'She', 'has', 'hair'],
          correctAnswer: 0,
          explanation: '"Long" describes the length of the hair (menjelaskan panjang rambut). For example: "He has a long pencil."'
        },
        {
          id: 'e2-8',
          text: 'Which word describes a taste?',
          options: ['Walk', 'Book', 'Sweet', 'Loudly'],
          correctAnswer: 2,
          explanation: '"Sweet" is an adjective that describes taste (kata sifat yang menjelaskan rasa). For example: "The sweet candy is delicious."'
        },
        {
          id: 'e2-9',
          text: 'Identify the adjective: "The sky is blue."',
          options: ['The', 'sky', 'blue', 'is'],
          correctAnswer: 2,
          explanation: '"Blue" describes the color of the sky (menjelaskan warna langit). For example: "The blue ocean is very deep."'
        },
        {
          id: 'e2-10',
          text: 'Which word is an adjective?',
          options: ['Eat', 'Strong', 'Chair', 'Slowly'],
          correctAnswer: 1,
          explanation: '"Strong" describes a quality (menjelaskan kualitas). For example: "The strong man lifted the box."'
        }
      ]
    },
    {
      id: 'elem-3',
      title: 'Pronouns: I, You, They, We',
      description: 'Learn how to replace nouns with pronouns.',
      tips: [
        "Pronouns replace nouns to make sentences shorter and less repetitive. (Pronoun atau kata ganti menggantikan kata benda agar kalimat lebih singkat.)",
        "Use 'He' for a male, 'She' for a female, and 'It' for objects or animals. (Gunakan 'He' untuk laki-laki, 'She' untuk perempuan, dan 'It' untuk benda atau hewan.)",
        "Use 'They' for more than one person or thing. (Gunakan 'They' untuk lebih dari satu orang atau benda.)",
        "Use 'We' when you are part of the group. (Gunakan 'We' ketika kamu termasuk dalam kelompok tersebut.)",
        "Make sure the pronoun matches the noun it is replacing in number and gender. (Pastikan kata ganti sesuai dengan kata benda yang digantikannya dalam jumlah dan gender.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Pronouns</h3>
            <p class="text-on-surface-variant leading-relaxed">
              A <strong>pronoun</strong> is used instead of a noun to avoid repetition.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <ul class="space-y-2 text-sm">
                  <li><strong>I:</strong> Myself. <br/> <em>I am a student.</em></li>
                  <li><strong>You:</strong> The person I am talking to. <br/> <em>You are kind.</em></li>
                  <li><strong>He:</strong> A boy. <br/> <em>He is my brother.</em></li>
                  <li><strong>She:</strong> A girl. <br/> <em>She is my sister.</em></li>
                </ul>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <ul class="space-y-2 text-sm">
                  <li><strong>It:</strong> A thing or animal. <br/> <em>It is a big dog.</em></li>
                  <li><strong>We:</strong> Me and others. <br/> <em>We are friends.</em></li>
                  <li><strong>They:</strong> Other people. <br/> <em>They are playing.</em></li>
                </ul>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'e5',
          text: 'Which pronoun replaces "Sarah"?',
          options: ['He', 'It', 'She', 'They'],
          correctAnswer: 2,
          explanation: 'Sarah is a girl, so we use "She" (dia perempuan). For example: "She is my sister."'
        },
        {
          id: 'e6',
          text: 'Which pronoun replaces "The dog"?',
          options: ['He', 'It', 'She', 'We'],
          correctAnswer: 1,
          explanation: 'For animals or things, we use "It" (kata ganti benda/hewan). For example: "It is a big dog."'
        },
        {
          id: 'e3-3',
          text: 'Which pronoun replaces "John"?',
          options: ['She', 'It', 'They', 'He'],
          correctAnswer: 3,
          explanation: 'John is a boy, so we use "He" (dia laki-laki). For example: "He is my brother."'
        },
        {
          id: 'e3-4',
          text: 'Which pronoun replaces "My friends"?',
          options: ['I', 'You', 'They', 'We'],
          correctAnswer: 2,
          explanation: 'For a group of other people, we use "They" (mereka). For example: "They are playing in the park."'
        },
        {
          id: 'e3-5',
          text: 'Which pronoun replaces "Me and my mom"?',
          options: ['I', 'We', 'You', 'They'],
          correctAnswer: 1,
          explanation: 'For a group including myself, we use "We" (kami/kita). For example: "We are eating lunch together."'
        },
        {
          id: 'e3-6',
          text: 'Which pronoun replaces "The book"?',
          options: ['He', 'She', 'They', 'It'],
          correctAnswer: 3,
          explanation: 'For a thing, we use "It" (kata ganti benda). For example: "It is on the table."'
        },
        {
          id: 'e3-7',
          text: 'Which pronoun replaces "The children"?',
          options: ['He', 'She', 'They', 'It'],
          correctAnswer: 2,
          explanation: 'For a group of people, we use "They" (mereka). For example: "They are very happy."'
        },
        {
          id: 'e3-8',
          text: 'Which pronoun replaces "The cat"?',
          options: ['He', 'It', 'She', 'We'],
          correctAnswer: 1,
          explanation: 'For an animal, we use "It" (kata ganti hewan). For example: "It is sleeping on the sofa."'
        },
        {
          id: 'e3-9',
          text: 'Which pronoun replaces "Mary and Jane"?',
          options: ['She', 'We', 'They', 'You'],
          correctAnswer: 2,
          explanation: 'For a group of others, we use "They" (mereka). For example: "They are my classmates."'
        },
        {
          id: 'e3-10',
          text: 'Which pronoun replaces "The pencil"?',
          options: ['He', 'It', 'She', 'They'],
          correctAnswer: 1,
          explanation: 'For a thing, we use "It" (kata ganti benda). For example: "It is in my bag."'
        }
      ]
    },
    {
      id: 'elem-4',
      title: 'Prepositions of Place',
      description: 'Learn how to say where things are (In, On, Under).',
      tips: [
        "Prepositions of place help you describe exactly where something is. (Preposition of place membantu menjelaskan di mana letak sesuatu.)",
        "Use 'In' for enclosed spaces (like a box or a room). (Gunakan 'In' untuk ruang tertutup seperti kotak atau ruangan.)",
        "Use 'On' for surfaces (like a table or a wall). (Gunakan 'On' untuk permukaan seperti meja atau dinding.)",
        "Use 'Under' for things that are below something else. (Gunakan 'Under' untuk benda yang berada di bawah benda lain.)",
        "Use 'Beside' or 'Next to' for things that are side-by-side. (Gunakan 'Beside' atau 'Next to' untuk benda yang letaknya bersisian.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Prepositions of Place</h3>
            <p class="text-on-surface-variant leading-relaxed">
              Prepositions tell us the position of something.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">In:</h4>
                <p class="text-sm">Inside something. <br/> <em>The cat is <strong>in</strong> the box.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">On:</h4>
                <p class="text-sm">On top of a surface. <br/> <em>The book is <strong>on</strong> the table.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Under:</h4>
                <p class="text-sm">Below something. <br/> <em>The ball is <strong>under</strong> the chair.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Beside:</h4>
                <p class="text-sm">Next to something. <br/> <em>The lamp is <strong>beside</strong> the bed.</em></p>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'e7',
          text: 'Where is the cat if it is inside the house?',
          options: ['On the house', 'In the house', 'Under the house', 'Beside the house'],
          correctAnswer: 1,
          explanation: '"In" means inside (di dalam). For example: "The keys are in my pocket."'
        },
        {
          id: 'e4-2',
          text: 'Where is the book if it is on top of the table?',
          options: ['In the table', 'Under the table', 'Beside the table', 'On the table'],
          correctAnswer: 3,
          explanation: '"On" means on top of a surface (di atas permukaan). For example: "The cup is on the desk."'
        },
        {
          id: 'e4-3',
          text: 'Where is the ball if it is below the chair?',
          options: ['In the chair', 'On the chair', 'Under the chair', 'Beside the chair'],
          correctAnswer: 2,
          explanation: '"Under" means below something (di bawah). For example: "The shoes are under the bed."'
        },
        {
          id: 'e4-4',
          text: 'Where is the lamp if it is next to the bed?',
          options: ['In the bed', 'Beside the bed', 'On the bed', 'Under the bed'],
          correctAnswer: 1,
          explanation: '"Beside" means next to something (di samping). For example: "The chair is beside the table."'
        },
        {
          id: 'e4-5',
          text: 'The pencil is ____ the box (inside).',
          options: ['on', 'under', 'in', 'beside'],
          correctAnswer: 2,
          explanation: 'We use "in" for inside (di dalam). For example: "The pen is in the drawer."'
        },
        {
          id: 'e4-6',
          text: 'The picture is ____ the wall.',
          options: ['on', 'in', 'under', 'beside'],
          correctAnswer: 0,
          explanation: 'We use "on" for surfaces like a wall (permukaan dinding). For example: "The clock is on the wall."'
        },
        {
          id: 'e4-7',
          text: 'The shoes are ____ the bed (below).',
          options: ['in', 'on', 'under', 'beside'],
          correctAnswer: 2,
          explanation: 'We use "under" for below (di bawah). For example: "The ball is under the table."'
        },
        {
          id: 'e4-8',
          text: 'I am sitting ____ my friend (next to).',
          options: ['in', 'on', 'under', 'beside'],
          correctAnswer: 3,
          explanation: 'We use "beside" for next to (di samping). For example: "The lamp is beside the sofa."'
        },
        {
          id: 'e4-9',
          text: 'The keys are ____ my pocket.',
          options: ['in', 'on', 'under', 'beside'],
          correctAnswer: 0,
          explanation: 'We use "in" for inside a pocket (di dalam saku). For example: "The money is in my wallet."'
        },
        {
          id: 'e4-10',
          text: 'The computer is ____ the desk.',
          options: ['in', 'on', 'under', 'beside'],
          correctAnswer: 1,
          explanation: 'We use "on" for the surface of a desk (di atas meja). For example: "The book is on the desk."'
        }
      ]
    },
    {
      id: 'elem-5',
      title: 'Present Simple: V + s/es',
      description: 'Learn the rule for He, She, and It in the present tense.',
      tips: [
        "The Present Simple is used for habits, facts, and general truths. (Present Simple digunakan untuk kebiasaan, fakta, dan kebenaran umum.)",
        "Remember the 'S' rule: He/She/It always needs an -s or -es at the end of the verb. (Ingat aturan 'S': He/She/It selalu butuh akhiran -s atau -es pada kata kerja.)",
        "I, You, We, and They do NOT need an -s (e.g., 'I play', but 'He plays'). (I, You, We, dan They TIDAK butuh akhiran -s.)",
        "Verbs ending in -o, -ch, -sh, -x, or -ss usually add -es (e.g., 'Goes', 'Watches'). (Kata kerja yang berakhiran -o, -ch, -sh, -x, atau -ss biasanya ditambah -es.)",
        "Practice by describing your daily routine. (Berlatihlah dengan mendeskripsikan rutinitas harianmu.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Present Simple (He/She/It)</h3>
            <p class="text-on-surface-variant leading-relaxed">
              When the subject is <strong>He, She, or It</strong>, we add <strong>-s</strong> or <strong>-es</strong> to the verb.
            </p>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-slate-200">
                    <th class="text-left py-2">Subject</th>
                    <th class="text-left py-2">Verb</th>
                    <th class="text-left py-2">Example</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr>
                    <td class="py-2">I / You / We / They</td>
                    <td class="py-2">play</td>
                    <td class="py-2"><em>I <strong>play</strong> soccer.</em></td>
                  </tr>
                  <tr>
                    <td class="py-2">He / She / It</td>
                    <td class="py-2">play<strong>s</strong></td>
                    <td class="py-2"><em>He <strong>plays</strong> soccer.</em></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="p-4 bg-primary/5 rounded-xl border border-primary/10">
              <p class="text-xs text-primary"><strong>Rule:</strong> For verbs ending in -o, -ch, -sh, -x, -ss, add <strong>-es</strong> (e.g., go &rarr; go<strong>es</strong>, watch &rarr; watch<strong>es</strong>).</p>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'e8',
          text: 'Choose the correct form: "He ____ an apple every day."',
          options: ['eat', 'eating', 'eats', 'eaten'],
          correctAnswer: 2,
          explanation: 'For "He", we add -s to the verb: "eats" (tambah -s untuk subjek He). For example: "He eats breakfast at 7 AM."'
        },
        {
          id: 'e5-2',
          text: 'Choose the correct form: "She ____ to school."',
          options: ['go', 'going', 'gone', 'goes'],
          correctAnswer: 3,
          explanation: 'For "She", we add -es to verbs ending in -o: "goes" (tambah -es untuk kata kerja berakhiran -o). For example: "She goes to school by bus."'
        },
        {
          id: 'e5-3',
          text: 'Choose the correct form: "It ____ a lot in winter."',
          options: ['rains', 'rain', 'raining', 'rained'],
          correctAnswer: 0,
          explanation: 'For "It", we add -s to the verb: "rains" (tambah -s untuk subjek It). For example: "It rains almost every day in London."'
        },
        {
          id: 'e5-4',
          text: 'Choose the correct form: "My cat ____ milk."',
          options: ['like', 'likes', 'liking', 'liked'],
          correctAnswer: 1,
          explanation: 'My cat is "It", so we add -s: "likes" (kucing dianggap It, jadi tambah -s). For example: "My cat likes to sleep on the sofa."'
        },
        {
          id: 'e5-5',
          text: 'Choose the correct form: "He ____ his homework."',
          options: ['do', 'does', 'doing', 'done'],
          correctAnswer: 1,
          explanation: 'For "He", we add -es to "do": "does" (tambah -es untuk kata kerja do). For example: "He does his homework after dinner."'
        },
        {
          id: 'e5-6',
          text: 'Choose the correct form: "She ____ TV in the evening."',
          options: ['watch', 'watching', 'watched', 'watches'],
          correctAnswer: 3,
          explanation: 'For "She", we add -es to verbs ending in -ch: "watches" (tambah -es untuk kata kerja berakhiran -ch). For example: "She watches her favorite show every night."'
        },
        {
          id: 'e5-7',
          text: 'Choose the correct form: "The sun ____ in the east."',
          options: ['rises', 'rise', 'rising', 'rose'],
          correctAnswer: 0,
          explanation: 'The sun is "It", so we add -s: "rises" (Matahari dianggap It, jadi tambah -s). For example: "The sun rises and sets every day."'
        },
        {
          id: 'e5-8',
          text: 'Choose the correct form: "He ____ English very well."',
          options: ['speak', 'speaks', 'speaking', 'spoke'],
          correctAnswer: 1,
          explanation: 'For "He", we add -s: "speaks" (tambah -s untuk subjek He). For example: "He speaks three different languages."'
        },
        {
          id: 'e5-9',
          text: 'Choose the correct form: "She ____ a beautiful song."',
          options: ['sing', 'singing', 'sang', 'sings'],
          correctAnswer: 3,
          explanation: 'For "She", we add -s: "sings" (tambah -s untuk subjek She). For example: "She sings in the school choir."'
        },
        {
          id: 'e5-10',
          text: 'Choose the correct form: "It ____ very fast."',
          options: ['run', 'runs', 'running', 'ran'],
          correctAnswer: 1,
          explanation: 'For "It", we add -s: "runs" (tambah -s untuk subjek It). For example: "The car runs on electricity."'
        }
      ]
    },
    {
      id: 'elem-6',
      title: 'Question Words: Who, What, Where',
      description: 'Learn how to ask questions in English.',
      tips: [
        "Use 'Who' for people and 'What' for things or actions. (Gunakan 'Who' untuk orang dan 'What' untuk benda atau tindakan.)",
        "Use 'Where' for places and 'When' for time. (Gunakan 'Where' untuk tempat dan 'When' untuk waktu.)",
        "Use 'Why' to ask for a reason and 'How' for the way something is done. (Gunakan 'Why' untuk menanyakan alasan dan 'How' untuk cara sesuatu dilakukan.)",
        "Most question words start with 'Wh-', except for 'How'. (Kebanyakan kata tanya dimulai dengan 'Wh-', kecuali 'How'.)",
        "Practice asking questions about your friends and family. (Berlatihlah mengajukan pertanyaan tentang teman dan keluargamu.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Question Words</h3>
            <p class="text-on-surface-variant leading-relaxed">
              We use these words to ask for information. Each word has a specific purpose.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <ul class="space-y-3 text-sm">
                  <li><span class="font-bold text-primary">Who:</span> For people. <br/> <em><strong>Who</strong> is that boy?</em></li>
                  <li><span class="font-bold text-primary">What:</span> For things or actions. <br/> <em><strong>What</strong> are you doing?</em></li>
                  <li><span class="font-bold text-primary">Where:</span> For places. <br/> <em><strong>Where</strong> do you live?</em></li>
                </ul>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <ul class="space-y-3 text-sm">
                  <li><span class="font-bold text-primary">When:</span> For time. <br/> <em><strong>When</strong> is your birthday?</em></li>
                  <li><span class="font-bold text-primary">Why:</span> For reasons. <br/> <em><strong>Why</strong> are you happy?</em></li>
                  <li><span class="font-bold text-primary">How:</span> For manner or quantity. <br/> <em><strong>How</strong> are you?</em></li>
                </ul>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'e9',
          text: 'Which word asks about a place?',
          options: ['Who', 'What', 'Where', 'When'],
          correctAnswer: 2,
          explanation: '"Where" is used to ask about a place (digunakan untuk menanyakan tempat). For example: "Where is the nearest park?"'
        },
        {
          id: 'e6-2',
          text: 'Which word asks about a person?',
          options: ['What', 'Where', 'Who', 'When'],
          correctAnswer: 2,
          explanation: '"Who" is used to ask about a person (digunakan untuk menanyakan orang). For example: "Who is your favorite teacher?"'
        },
        {
          id: 'e6-3',
          text: 'Which word asks about a thing?',
          options: ['Who', 'What', 'Where', 'When'],
          correctAnswer: 1,
          explanation: '"What" is used to ask about a thing (digunakan untuk menanyakan benda). For example: "What is in your bag?"'
        },
        {
          id: 'e6-4',
          text: 'Which word asks about time?',
          options: ['Who', 'What', 'Where', 'When'],
          correctAnswer: 3,
          explanation: '"When" is used to ask about time (digunakan untuk menanyakan waktu). For example: "When does the lesson start?"'
        },
        {
          id: 'e6-5',
          text: 'Which word asks for a reason?',
          options: ['Who', 'What', 'Where', 'Why'],
          correctAnswer: 3,
          explanation: '"Why" is used to ask for a reason (digunakan untuk menanyakan alasan). For example: "Why are you late for school?"'
        },
        {
          id: 'e6-6',
          text: 'Which word asks about manner (how something is done)?',
          options: ['Who', 'What', 'How', 'Where'],
          correctAnswer: 2,
          explanation: '"How" is used to ask about manner (digunakan untuk menanyakan cara). For example: "How do you make a cake?"'
        },
        {
          id: 'e6-7',
          text: '"____ is your name?"',
          options: ['Who', 'What', 'Where', 'When'],
          correctAnswer: 1,
          explanation: 'We use "What" to ask for a name (menggunakan What untuk menanyakan nama). For example: "What is your father\'s name?"'
        },
        {
          id: 'e6-8',
          text: '"____ is your best friend?"',
          options: ['Who', 'What', 'Where', 'When'],
          correctAnswer: 0,
          explanation: 'We use "Who" to ask about a person (menggunakan Who untuk menanyakan orang). For example: "Who is the boy in the blue shirt?"'
        },
        {
          id: 'e6-9',
          text: '"____ do you live?"',
          options: ['Who', 'Where', 'What', 'When'],
          correctAnswer: 1,
          explanation: 'We use "Where" to ask about a place (menggunakan Where untuk menanyakan tempat). For example: "Where is your house?"'
        },
        {
          id: 'e6-10',
          text: '"____ is the party?" (asking about time)',
          options: ['Who', 'What', 'Where', 'When'],
          correctAnswer: 3,
          explanation: 'We use "When" to ask about time (menggunakan When untuk menanyakan waktu). For example: "When is the party starting?"'
        }
      ]
    },
    {
      id: 'elem-7',
      title: 'Prepositions of Time: In, On, At',
      description: 'Learn how to talk about when things happen.',
      tips: [
        "Use 'At' for specific times (e.g., 'At 7:00 PM') and 'At night'. (Gunakan 'At' untuk waktu spesifik dan 'At night'.)",
        "Use 'On' for days and dates (e.g., 'On Monday', 'On June 1st'). (Gunakan 'On' untuk hari dan tanggal.)",
        "Use 'In' for months, years, seasons, and parts of the day (e.g., 'In July', 'In the morning'). (Gunakan 'In' untuk bulan, tahun, musim, dan bagian dari hari.)",
        "Remember: 'In the morning', 'In the afternoon', 'In the evening', but 'At night'. (Ingat: 'In the morning/afternoon/evening', tapi 'At night'.)",
        "Think of 'At' as a point, 'On' as a surface (day), and 'In' as a container (period). (Bayangkan 'At' sebagai titik waktu, 'On' sebagai permukaan/hari, dan 'In' sebagai wadah/periode.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Prepositions of Time</h3>
            <p class="text-on-surface-variant leading-relaxed">
              Learn how to talk about when things happen using <strong>In</strong>, <strong>On</strong>, and <strong>At</strong>.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">At:</h4>
                <p class="text-xs">Specific times & points. <br/> <em><strong>At</strong> 5 o'clock, <strong>at</strong> night, <strong>at</strong> noon.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">On:</h4>
                <p class="text-xs">Days and dates. <br/> <em><strong>On</strong> Monday, <strong>on</strong> July 4th, <strong>on</strong> my birthday.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">In:</h4>
                <p class="text-xs">Months, years, seasons. <br/> <em><strong>In</strong> January, <strong>in</strong> 2024, <strong>in</strong> the morning.</em></p>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'e10',
          text: 'Which preposition do we use for days?',
          options: ['At', 'In', 'On', 'Under'],
          correctAnswer: 2,
          explanation: 'We use "On" for days like "On Monday" (menggunakan On untuk hari). For example: "I have a piano lesson on Wednesday."'
        },
        {
          id: 'e7-2',
          text: 'Which preposition do we use for specific times?',
          options: ['At', 'On', 'In', 'Under'],
          correctAnswer: 0,
          explanation: 'We use "At" for specific times like "At 5 o\'clock" (menggunakan At untuk waktu spesifik). For example: "The train leaves at 8:30 AM."'
        },
        {
          id: 'e7-3',
          text: 'Which preposition do we use for months?',
          options: ['At', 'On', 'In', 'Under'],
          correctAnswer: 2,
          explanation: 'We use "In" for months like "In January" (menggunakan In untuk bulan). For example: "It is very cold in December."'
        },
        {
          id: 'e7-4',
          text: '____ the morning.',
          options: ['At', 'On', 'In', 'Under'],
          correctAnswer: 2,
          explanation: 'We use "In" for parts of the day: "In the morning" (menggunakan In untuk bagian hari). For example: "I usually exercise in the morning."'
        },
        {
          id: 'e7-5',
          text: '____ night.',
          options: ['At', 'On', 'In', 'Under'],
          correctAnswer: 0,
          explanation: 'We use "At" for "At night" (menggunakan At untuk malam hari). For example: "I like to read a book at night."'
        },
        {
          id: 'e7-6',
          text: '____ Sunday.',
          options: ['At', 'On', 'In', 'Under'],
          correctAnswer: 1,
          explanation: 'We use "On" for days (menggunakan On untuk hari). For example: "We go to the park on Sunday."'
        },
        {
          id: 'e7-7',
          text: '____ 2024.',
          options: ['At', 'On', 'In', 'Under'],
          correctAnswer: 2,
          explanation: 'We use "In" for years (menggunakan In untuk tahun). For example: "The Olympics were held in 2024."'
        },
        {
          id: 'e7-8',
          text: '____ noon.',
          options: ['At', 'On', 'In', 'Under'],
          correctAnswer: 0,
          explanation: 'We use "At" for "At noon" (menggunakan At untuk tengah hari). For example: "We usually have lunch at noon."'
        },
        {
          id: 'e7-9',
          text: '____ August 15th.',
          options: ['At', 'On', 'In', 'Under'],
          correctAnswer: 1,
          explanation: 'We use "On" for specific dates (menggunakan On untuk tanggal spesifik). For example: "My sister was born on August 15th."'
        },
        {
          id: 'e7-10',
          text: '____ the summer.',
          options: ['At', 'On', 'In', 'Under'],
          correctAnswer: 2,
          explanation: 'We use "In" for seasons (menggunakan In untuk musim). For example: "We go swimming in the summer."'
        }
      ]
    },
    {
      id: 'elem-8',
      title: 'Plural Nouns: -s, -es, and Irregular',
      description: 'Learn how to talk about more than one thing.',
      tips: [
        "Most nouns just need an -s to become plural (e.g., 'Cats'). (Kebanyakan kata benda hanya butuh akhiran -s untuk menjadi jamak.)",
        "If a word ends in -s, -x, -ch, or -sh, add -es (e.g., 'Buses', 'Boxes'). (Jika sebuah kata berakhiran -s, -x, -ch, atau -sh, tambahkan -es.)",
        "Watch out for irregular nouns like 'Child' -> 'Children' and 'Man' -> 'Men'. (Waspadai kata benda tidak beraturan seperti 'Child' menjadi 'Children'.)",
        "Nouns ending in a consonant + y change the y to i and add -es (e.g., 'Baby' -> 'Babies'). (Kata benda yang berakhiran konsonan + y berubah menjadi i + -es.)",
        "Make a list of common irregular plurals to memorize them. (Buatlah daftar kata benda tidak beraturan yang umum untuk dihafalkan.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Plural Nouns</h3>
            <p class="text-on-surface-variant leading-relaxed">
              Plural nouns are used when there is more than one of something.
            </p>
            <div class="space-y-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">Regular Plurals:</h4>
                <p class="text-xs mt-1">Most nouns: Add <strong>-s</strong>. <br/> <em>Book &rarr; Books, Car &rarr; Cars.</em></p>
                <p class="text-xs mt-2">Ending in -ch, -sh, -x, -s: Add <strong>-es</strong>. <br/> <em>Bus &rarr; Buses, Box &rarr; Boxes.</em></p>
              </div>
              <div class="p-4 bg-primary/5 rounded-xl border border-primary/10">
                <h4 class="font-bold text-primary text-sm">Irregular Plurals:</h4>
                <p class="text-xs mt-1">These change completely and must be memorized.</p>
                <div class="grid grid-cols-2 gap-2 mt-2 text-xs">
                  <div>Child &rarr; <strong>Children</strong></div>
                  <div>Man &rarr; <strong>Men</strong></div>
                  <div>Foot &rarr; <strong>Feet</strong></div>
                  <div>Tooth &rarr; <strong>Teeth</strong></div>
                </div>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'e11',
          text: 'What is the plural of "Child"?',
          options: ['Childs', 'Children', 'Childes', 'Childrens'],
          correctAnswer: 1,
          explanation: '"Children" is the irregular plural form of "Child" (bentuk jamak tidak beraturan dari Child). For example: "The children are playing outside."'
        },
        {
          id: 'e8-2',
          text: 'What is the plural of "Car"?',
          options: ['Cares', 'Caris', 'Cars', 'Caren'],
          correctAnswer: 2,
          explanation: 'Most nouns just add -s (kebanyakan kata benda hanya ditambah -s). For example: "I see many cars on the road."'
        },
        {
          id: 'e8-3',
          text: 'What is the plural of "Bus"?',
          options: ['Buss', 'Busis', 'Busen', 'Buses'],
          correctAnswer: 3,
          explanation: 'Nouns ending in -s add -es (kata benda berakhiran -s ditambah -es). For example: "The school buses are yellow."'
        },
        {
          id: 'e8-4',
          text: 'What is the plural of "Man"?',
          options: ['Men', 'Mans', 'Manes', 'Menes'],
          correctAnswer: 0,
          explanation: '"Men" is the irregular plural form (bentuk jamak tidak beraturan). For example: "The men are wearing suits."'
        },
        {
          id: 'e8-5',
          text: 'What is the plural of "Box"?',
          options: ['Boxs', 'Boxes', 'Boxis', 'Boxen'],
          correctAnswer: 1,
          explanation: 'Nouns ending in -x add -es (kata benda berakhiran -x ditambah -es). For example: "There are empty boxes in the garage."'
        },
        {
          id: 'e8-6',
          text: 'What is the plural of "Foot"?',
          options: ['Foots', 'Footes', 'Feet', 'Feetes'],
          correctAnswer: 2,
          explanation: '"Feet" is the irregular plural form (bentuk jamak tidak beraturan). For example: "He has big feet."'
        },
        {
          id: 'e8-7',
          text: 'What is the plural of "Baby"?',
          options: ['Babys', 'Babies', 'Babyes', 'Babien'],
          correctAnswer: 1,
          explanation: 'Nouns ending in consonant + y change y to i and add -es (kata benda berakhiran konsonan + y berubah menjadi i + -es). For example: "The babies are crying."'
        },
        {
          id: 'e8-8',
          text: 'What is the plural of "Watch"?',
          options: ['Watchs', 'Watches', 'Watchis', 'Watchen'],
          correctAnswer: 1,
          explanation: 'Nouns ending in -ch add -es (kata benda berakhiran -ch ditambah -es). For example: "She has two watches."'
        },
        {
          id: 'e8-9',
          text: 'What is the plural of "Tooth"?',
          options: ['Tooths', 'Toothes', 'Teeth', 'Teethes'],
          correctAnswer: 2,
          explanation: '"Teeth" is the irregular plural form (bentuk jamak tidak beraturan). For example: "I brush my teeth every morning."'
        },
        {
          id: 'e8-10',
          text: 'What is the plural of "Dish"?',
          options: ['Dishs', 'Dishes', 'Dishis', 'Dishen'],
          correctAnswer: 1,
          explanation: 'Nouns ending in -sh add -es (kata benda berakhiran -sh ditambah -es). For example: "Please wash the dishes."'
        }
      ]
    },
    {
      id: 'elem-9',
      title: 'Articles: A, An, The',
      description: 'Learn when to use a, an, and the.',
      tips: [
        "Use 'A' before words starting with a consonant sound (e.g., 'A dog'). (Gunakan 'A' sebelum kata yang diawali bunyi konsonan.)",
        "Use 'An' before words starting with a vowel sound (e.g., 'An apple'). (Gunakan 'An' sebelum kata yang diawali bunyi vokal.)",
        "Use 'The' when talking about something specific or unique (e.g., 'The sun'). (Gunakan 'The' untuk sesuatu yang spesifik atau unik.)",
        "Be careful: 'An hour' (vowel sound) and 'A university' (consonant sound). (Hati-hati: 'An hour' karena bunyi vokal 'a', dan 'A university' karena bunyi konsonan 'y'.)",
        "If you're talking about something for the first time, use 'A/An'. Use 'The' for the second time. (Gunakan 'A/An' untuk penyebutan pertama, dan 'The' untuk penyebutan kedua.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Articles: A, An, The</h3>
            <p class="text-on-surface-variant leading-relaxed">
              Articles are words that come before nouns. They tell us if we are talking about something general or specific.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">A:</h4>
                <p class="text-xs">Before consonant sounds. <br/> <em><strong>A</strong> cat, <strong>a</strong> dog, <strong>a</strong> university.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">An:</h4>
                <p class="text-xs">Before vowel sounds. <br/> <em><strong>An</strong> apple, <strong>an</strong> elephant, <strong>an</strong> hour.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">The:</h4>
                <p class="text-xs">For specific or unique things. <br/> <em><strong>The</strong> sun, <strong>the</strong> book on the table.</em></p>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'e9-1',
          text: 'I have ____ apple.',
          options: ['a', 'the', 'an', 'no article'],
          correctAnswer: 2,
          explanation: '"Apple" starts with a vowel sound, so we use "an" (menggunakan an untuk bunyi vokal). For example: "An orange is round."'
        },
        {
          id: 'e9-2',
          text: 'She has ____ cat.',
          options: ['the', 'a', 'an', 'no article'],
          correctAnswer: 1,
          explanation: '"Cat" starts with a consonant sound, so we use "a" (menggunakan a untuk bunyi konsonan). For example: "A dog is barking."'
        },
        {
          id: 'e9-3',
          text: '____ sun is very bright today.',
          options: ['A', 'An', 'The', 'No article'],
          correctAnswer: 2,
          explanation: 'We use "the" for unique things like the sun (menggunakan the untuk benda unik). For example: "The moon is bright tonight."'
        },
        {
          id: 'e9-4',
          text: 'He is ____ honest man.',
          options: ['a', 'the', 'an', 'no article'],
          correctAnswer: 2,
          explanation: '"Honest" starts with a vowel sound (the "h" is silent), so we use "an" (menggunakan an karena bunyi vokal). For example: "An hour has sixty minutes."'
        },
        {
          id: 'e9-5',
          text: 'I saw ____ elephant at the zoo.',
          options: ['a', 'an', 'the', 'no article'],
          correctAnswer: 1,
          explanation: '"Elephant" starts with a vowel sound (menggunakan an untuk bunyi vokal). For example: "An egg is in the nest."'
        },
        {
          id: 'e9-6',
          text: 'Can you give me ____ book on the desk?',
          options: ['the', 'a', 'an', 'no article'],
          correctAnswer: 0,
          explanation: 'We use "the" for a specific book (menggunakan the untuk benda spesifik). For example: "The pen on the floor is mine."'
        },
        {
          id: 'e9-7',
          text: 'She wants to be ____ teacher.',
          options: ['an', 'the', 'a', 'no article'],
          correctAnswer: 2,
          explanation: 'We use "a" for a non-specific job (menggunakan a untuk pekerjaan umum). For example: "He is a doctor."'
        },
        {
          id: 'e9-8',
          text: 'It is ____ beautiful day.',
          options: ['a', 'an', 'the', 'no article'],
          correctAnswer: 0,
          explanation: '"Beautiful" starts with a consonant sound (menggunakan a untuk bunyi konsonan). For example: "A big tree is in the yard."'
        },
        {
          id: 'e9-9',
          text: 'He ate ____ orange for breakfast.',
          options: ['a', 'the', 'an', 'no article'],
          correctAnswer: 2,
          explanation: '"Orange" starts with a vowel sound (menggunakan an untuk bunyi vokal). For example: "An umbrella is useful in the rain."'
        },
        {
          id: 'e9-10',
          text: '____ moon looks beautiful tonight.',
          options: ['A', 'An', 'The', 'No article'],
          correctAnswer: 2,
          explanation: 'We use "the" for unique things like the moon (menggunakan the untuk benda unik). For example: "The sky is clear today."'
        }
      ]
    },
    {
      id: 'elem-10',
      title: 'Basic Conjunctions: And, But, Or',
      description: 'Learn how to join words and sentences.',
      tips: [
        "Conjunctions are like glue—they hold your ideas together. (Conjunction atau kata hubung menyatukan ide-idemu.)",
        "Use 'And' to add similar information (e.g., 'I like tea and coffee'). (Gunakan 'And' untuk menambah informasi yang serupa.)",
        "Use 'But' to show a contrast or something different (e.g., 'I'm tired but happy'). (Gunakan 'But' untuk menunjukkan perbedaan atau kontras.)",
        "Use 'Or' when there is a choice (e.g., 'Do you want this or that?'). (Gunakan 'Or' ketika ada pilihan.)",
        "Using conjunctions makes your writing flow more naturally. (Menggunakan kata hubung membuat tulisanmu mengalir lebih alami.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Basic Conjunctions</h3>
            <p class="text-on-surface-variant leading-relaxed">
              Conjunctions are like glue—they hold your ideas together.
            </p>
            <div class="space-y-3">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p class="text-sm"><strong>And:</strong> Joins similar things. <br/> <em>I like apples <strong>and</strong> bananas.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p class="text-sm"><strong>But:</strong> Joins different things (contrast). <br/> <em>I like apples <strong>but</strong> I don't like grapes.</em></p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p class="text-sm"><strong>Or:</strong> Gives a choice. <br/> <em>Do you want tea <strong>or</strong> coffee?</em></p>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'e10-1',
          text: 'I like milk ____ cookies.',
          options: ['but', 'or', 'and', 'so'],
          correctAnswer: 2,
          explanation: 'We use "and" to join similar things (menggunakan and untuk menggabungkan hal serupa). For example: "I like apples and bananas."'
        },
        {
          id: 'e10-2',
          text: 'I want to play, ____ it is raining.',
          options: ['and', 'or', 'so', 'but'],
          correctAnswer: 3,
          explanation: 'We use "but" to show a contrast (menggunakan but untuk menunjukkan kontras). For example: "I am tired but happy."'
        },
        {
          id: 'e10-3',
          text: 'Do you want an apple ____ an orange?',
          options: ['and', 'but', 'or', 'so'],
          correctAnswer: 2,
          explanation: 'We use "or" for a choice (menggunakan or untuk pilihan). For example: "Do you want to go to the park or the cinema?"'
        },
        {
          id: 'e10-4',
          text: 'He is tall ____ strong.',
          options: ['and', 'but', 'or', 'so'],
          correctAnswer: 0,
          explanation: 'We use "and" to add information (menggunakan and untuk menambah informasi). For example: "She is smart and kind."'
        },
        {
          id: 'e10-5',
          text: 'I studied hard, ____ I failed the test.',
          options: ['and', 'or', 'so', 'but'],
          correctAnswer: 3,
          explanation: 'We use "but" for an unexpected result or contrast (menggunakan but untuk hasil tak terduga). For example: "I want to go out but I have to study."'
        },
        {
          id: 'e10-6',
          text: 'Is it Monday ____ Tuesday today?',
          options: ['and', 'but', 'or', 'so'],
          correctAnswer: 2,
          explanation: 'We use "or" for a choice (menggunakan or untuk pilihan). For example: "Is your car red or blue?"'
        },
        {
          id: 'e10-7',
          text: 'She is happy ____ she is singing.',
          options: ['and', 'but', 'or', 'so'],
          correctAnswer: 0,
          explanation: 'We use "and" to join related actions (menggunakan and untuk tindakan terkait). For example: "He can read and write."'
        },
        {
          id: 'e10-8',
          text: 'I have a pen, ____ I don\'t have paper.',
          options: ['and', 'or', 'so', 'but'],
          correctAnswer: 3,
          explanation: 'We use "but" for contrast (menggunakan but untuk kontras). For example: "The box is small but heavy."'
        },
        {
          id: 'e10-9',
          text: 'Would you like to go to the park ____ the beach?',
          options: ['and', 'but', 'or', 'so'],
          correctAnswer: 2,
          explanation: 'We use "or" for a choice (menggunakan or untuk pilihan). For example: "Do you prefer tea or coffee?"'
        },
        {
          id: 'e10-10',
          text: 'The cat is small ____ fast.',
          options: ['and', 'but', 'or', 'so'],
          correctAnswer: 0,
          explanation: 'We use "and" to add descriptions (menggunakan and untuk menambah deskripsi). For example: "I have a book and a notebook."'
        }
      ]
    },
    {
      id: 'elem-11',
      title: 'Articles: A, An, and The',
      description: 'Learn when to use a, an, or the.',
      tips: [
        "Use 'A' before words starting with a consonant sound (e.g., 'A cat'). (Gunakan 'A' sebelum kata yang diawali bunyi konsonan.)",
        "Use 'An' before words starting with a vowel sound (e.g., 'An apple'). (Gunakan 'An' sebelum kata yang diawali bunyi vokal.)",
        "Use 'The' for specific things or things mentioned before. (Gunakan 'The' untuk benda spesifik atau yang sudah disebutkan sebelumnya.)",
        "Don't use 'a/an' with plural nouns. (Jangan gunakan 'a/an' dengan kata benda jamak.)",
        "Use 'The' for unique things like 'The sun' or 'The moon'. (Gunakan 'The' untuk benda unik seperti matahari atau bulan.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Articles: A, An, and The</h3>
            <p class="text-on-surface-variant leading-relaxed">
              Articles are used before nouns to show if they are general or specific.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">Indefinite (A / An):</h4>
                <p class="text-xs mt-1">Used for non-specific things.</p>
                <ul class="text-xs mt-2 space-y-1">
                  <li><strong>A</strong> + Consonant: <em>A book, A car.</em></li>
                  <li><strong>An</strong> + Vowel: <em>An apple, An egg.</em></li>
                </ul>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">Definite (The):</h4>
                <p class="text-xs mt-1">Used for specific things.</p>
                <ul class="text-xs mt-2 space-y-1">
                  <li><em><strong>The</strong> book I read.</em></li>
                  <li><em><strong>The</strong> sun is bright.</em></li>
                </ul>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'e11-1',
          text: 'I have ____ umbrella.',
          options: ['a', 'the', 'an', 'no article'],
          correctAnswer: 2,
          explanation: 'We use "an" before a vowel sound (u) (menggunakan an sebelum bunyi vokal). For example: "I need an umbrella because it is raining."'
        },
        {
          id: 'e11-2',
          text: 'She is reading ____ book.',
          options: ['an', 'the', 'a', 'no article'],
          correctAnswer: 2,
          explanation: 'We use "a" for a non-specific singular noun starting with a consonant (menggunakan a untuk benda tunggal bunyi konsonan). For example: "I saw a movie yesterday."'
        },
        {
          id: 'e11-3',
          text: '____ sun is very hot today.',
          options: ['A', 'An', 'The', 'No article'],
          correctAnswer: 2,
          explanation: 'We use "The" for unique objects like the sun (menggunakan the untuk benda unik). For example: "The moon shines at night."'
        },
        {
          id: 'e11-4',
          text: 'I saw a dog. ____ dog was barking.',
          options: ['A', 'An', 'The', 'No article'],
          correctAnswer: 2,
          explanation: 'We use "The" when referring to something mentioned before (menggunakan the untuk benda yang sudah disebut). For example: "I bought a car. The car is blue."'
        },
        {
          id: 'e11-5',
          text: 'He is ____ honest man.',
          options: ['a', 'the', 'an', 'no article'],
          correctAnswer: 2,
          explanation: 'We use "an" because "honest" starts with a vowel sound (menggunakan an karena bunyi vokal). For example: "It was an honor to meet him."'
        },
        {
          id: 'e11-6',
          text: 'I want to buy ____ new car.',
          options: ['an', 'the', 'a', 'no article'],
          correctAnswer: 2,
          explanation: 'We use "a" for a general singular noun (menggunakan a untuk benda tunggal umum). For example: "She wants a new dress."'
        },
        {
          id: 'e11-7',
          text: 'Look at ____ moon!',
          options: ['a', 'an', 'the', 'no article'],
          correctAnswer: 2,
          explanation: 'We use "the" for unique celestial bodies (menggunakan the untuk benda langit unik). For example: "The stars are beautiful tonight."'
        },
        {
          id: 'e11-8',
          text: 'She ate ____ apple for breakfast.',
          options: ['a', 'the', 'an', 'no article'],
          correctAnswer: 2,
          explanation: 'We use "an" before a vowel sound (menggunakan an sebelum bunyi vokal). For example: "I have an orange in my bag."'
        },
        {
          id: 'e11-9',
          text: '____ Earth goes around the sun.',
          options: ['A', 'An', 'The', 'No article'],
          correctAnswer: 2,
          explanation: 'We use "the" for unique things like the Earth (menggunakan the untuk benda unik). For example: "The sky is blue."'
        },
        {
          id: 'e11-10',
          text: 'I need ____ pencil.',
          options: ['an', 'the', 'a', 'no article'],
          correctAnswer: 2,
          explanation: 'We use "a" for a non-specific singular noun (menggunakan a untuk benda tunggal umum). For example: "Can I have a piece of paper?"'
        }
      ]
    },
    {
      id: 'elem-12',
      title: 'Possessive Adjectives: My, Your, His, Her',
      description: 'Learn how to show who owns something.',
      tips: [
        "Use 'My' for things belonging to me. (Gunakan 'My' untuk benda milik saya.)",
        "Use 'Your' for things belonging to you. (Gunakan 'Your' untuk benda milik kamu.)",
        "Use 'His' for a boy/man and 'Her' for a girl/woman. (Gunakan 'His' untuk laki-laki dan 'Her' untuk perempuan.)",
        "Use 'Its' for animals or things. (Gunakan 'Its' untuk hewan atau benda.)",
        "Use 'Our' for things belonging to us and 'Their' for things belonging to them. (Gunakan 'Our' untuk benda milik kami dan 'Their' untuk benda milik mereka.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Possessive Adjectives</h3>
            <p class="text-on-surface-variant leading-relaxed">
              Possessive adjectives are used before nouns to show ownership.
            </p>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-slate-200 text-primary">
                    <th class="text-left py-2">Subject</th>
                    <th class="text-left py-2">Possessive</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr><td class="py-2">I</td><td class="py-2"><strong>My</strong></td></tr>
                  <tr><td class="py-2">You</td><td class="py-2"><strong>Your</strong></td></tr>
                  <tr><td class="py-2">He</td><td class="py-2"><strong>His</strong></td></tr>
                  <tr><td class="py-2">She</td><td class="py-2"><strong>Her</strong></td></tr>
                  <tr><td class="py-2">It</td><td class="py-2"><strong>Its</strong></td></tr>
                  <tr><td class="py-2">We</td><td class="py-2"><strong>Our</strong></td></tr>
                  <tr><td class="py-2">They</td><td class="py-2"><strong>Their</strong></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'e12-1',
          text: 'I have a cat. ____ cat is white.',
          options: ['Your', 'His', 'My', 'Her'],
          correctAnswer: 2,
          explanation: 'We use "My" for something belonging to "I" (menggunakan My untuk milik saya). For example: "I like my new shoes."'
        },
        {
          id: 'e12-2',
          text: 'He has a car. ____ car is fast.',
          options: ['My', 'Your', 'Her', 'His'],
          correctAnswer: 3,
          explanation: 'We use "His" for something belonging to a male (menggunakan His untuk milik laki-laki). For example: "His father is a doctor."'
        },
        {
          id: 'e12-3',
          text: 'She has a brother. ____ brother is tall.',
          options: ['My', 'Your', 'His', 'Her'],
          correctAnswer: 3,
          explanation: 'We use "Her" for something belonging to a female (menggunakan Her untuk milik perempuan). For example: "Her favorite color is pink."'
        },
        {
          id: 'e12-4',
          text: 'We have a house. ____ house is big.',
          options: ['Our', 'Your', 'Their', 'Its'],
          correctAnswer: 0,
          explanation: 'We use "Our" for something belonging to "We" (menggunakan Our untuk milik kami). For example: "Our teacher is very kind."'
        },
        {
          id: 'e12-5',
          text: 'They have a dog. ____ dog is friendly.',
          options: ['Our', 'Your', 'Their', 'Its'],
          correctAnswer: 2,
          explanation: 'We use "Their" for something belonging to "They" (menggunakan Their untuk milik mereka). For example: "Their house is near the park."'
        },
        {
          id: 'e12-6',
          text: 'The dog has a bone. It is ____ bone.',
          options: ['his', 'her', 'their', 'its'],
          correctAnswer: 3,
          explanation: 'We use "its" for animals or things (menggunakan its untuk hewan/benda). For example: "The cat licked its paws."'
        },
        {
          id: 'e12-7',
          text: 'You have a nice watch. ____ watch is expensive.',
          options: ['My', 'Your', 'His', 'Her'],
          correctAnswer: 1,
          explanation: 'We use "Your" for something belonging to "You" (menggunakan Your untuk milik kamu). For example: "What is your name?"'
        },
        {
          id: 'e12-8',
          text: 'Mary has a red dress. ____ dress is beautiful.',
          options: ['His', 'Its', 'Their', 'Her'],
          correctAnswer: 3,
          explanation: 'Mary is female, so we use "Her" (Mary perempuan, jadi pakai Her). For example: "Her hair is long."'
        },
        {
          id: 'e12-9',
          text: 'John has a blue bike. ____ bike is new.',
          options: ['His', 'Her', 'Its', 'Their'],
          correctAnswer: 0,
          explanation: 'John is male, so we use "His" (John laki-laki, jadi pakai His). For example: "His hobby is swimming."'
        },
        {
          id: 'e12-10',
          text: 'We love ____ school.',
          options: ['your', 'their', 'its', 'our'],
          correctAnswer: 3,
          explanation: 'We use "our" for something belonging to us (menggunakan our untuk milik kami). For example: "We are doing our homework."'
        }
      ]
    },
    {
      id: 'elem-13',
      title: 'Demonstratives: This, That, These, Those',
      description: 'Learn how to point to things.',
      tips: [
        "Use 'This' for one thing near you. (Gunakan 'This' untuk satu benda di dekatmu.)",
        "Use 'That' for one thing far from you. (Gunakan 'That' untuk satu benda yang jauh darimu.)",
        "Use 'These' for many things near you. (Gunakan 'These' untuk banyak benda di dekatmu.)",
        "Use 'Those' for many things far from you. (Gunakan 'Those' untuk banyak benda yang jauh darimu.)",
        "Remember: This/That = Singular, These/Those = Plural. (Ingat: This/That untuk tunggal, These/Those untuk jamak.)"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Demonstratives</h3>
            <p class="text-on-surface-variant leading-relaxed">
              Demonstratives are used to point to specific things and show if they are near or far.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">Near:</h4>
                <ul class="text-xs mt-2 space-y-1">
                  <li><strong>This</strong> (Singular): <em>This apple.</em></li>
                  <li><strong>These</strong> (Plural): <em>These apples.</em></li>
                </ul>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary text-sm">Far:</h4>
                <ul class="text-xs mt-2 space-y-1">
                  <li><strong>That</strong> (Singular): <em>That star.</em></li>
                  <li><strong>Those</strong> (Plural): <em>Those stars.</em></li>
                </ul>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'e13-1',
          text: '____ is my book (here in my hand).',
          options: ['That', 'These', 'This', 'Those'],
          correctAnswer: 2,
          explanation: 'We use "This" for a singular object near us (menggunakan This untuk benda tunggal dekat). For example: "This is my phone."'
        },
        {
          id: 'e13-2',
          text: '____ is a plane (far away in the sky).',
          options: ['This', 'These', 'Those', 'That'],
          correctAnswer: 3,
          explanation: 'We use "That" for a singular object far from us (menggunakan That untuk benda tunggal jauh). For example: "That is a high mountain."'
        },
        {
          id: 'e13-3',
          text: '____ are my friends (standing next to me).',
          options: ['This', 'That', 'These', 'Those'],
          correctAnswer: 2,
          explanation: 'We use "These" for plural objects near us (menggunakan These untuk benda jamak dekat). For example: "These are my keys."'
        },
        {
          id: 'e13-4',
          text: '____ are birds (flying far away).',
          options: ['This', 'That', 'These', 'Those'],
          correctAnswer: 3,
          explanation: 'We use "Those" for plural objects far from us (menggunakan Those untuk benda jamak jauh). For example: "Those are beautiful clouds."'
        },
        {
          id: 'e13-5',
          text: 'I like ____ shoes (that I am wearing).',
          options: ['this', 'that', 'these', 'those'],
          correctAnswer: 2,
          explanation: 'Shoes are plural and near (wearing them), so we use "these" (sepatu jamak dan dekat, pakai these). For example: "These shoes are comfortable."'
        },
        {
          id: 'e13-6',
          text: 'Look at ____ mountain over there!',
          options: ['this', 'that', 'these', 'those'],
          correctAnswer: 1,
          explanation: 'Mountain is singular and far away, so we use "that" (gunung tunggal dan jauh, pakai that). For example: "That mountain is covered in snow."'
        },
        {
          id: 'e13-7',
          text: '____ cookies (on this plate) are delicious.',
          options: ['This', 'That', 'These', 'Those'],
          correctAnswer: 2,
          explanation: 'Cookies are plural and near, so we use "These" (kue jamak dan dekat, pakai These). For example: "These cookies are for you."'
        },
        {
          id: 'e13-8',
          text: 'Who is ____ man (across the street)?',
          options: ['this', 'that', 'these', 'those'],
          correctAnswer: 1,
          explanation: 'Man is singular and far away, so we use "that" (pria tunggal dan jauh, pakai that). For example: "That man is my teacher."'
        },
        {
          id: 'e13-9',
          text: '____ is a great day!',
          options: ['That', 'These', 'Those', 'This'],
          correctAnswer: 3,
          explanation: 'We use "This" to refer to the current time or situation (menggunakan This untuk situasi saat ini). For example: "This is a wonderful party."'
        },
        {
          id: 'e13-10',
          text: '____ stars are so bright tonight.',
          options: ['This', 'That', 'These', 'Those'],
          correctAnswer: 3,
          explanation: 'Stars are plural and far away, so we use "Those" (bintang jamak dan jauh, pakai Those). For example: "Those stars are millions of miles away."'
        }
      ]
    }
  ]
};

