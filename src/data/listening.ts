import { Category } from '../types';

export const LISTENING_CATEGORY: Category = {
  id: 'listening',
  title: 'Listening',
  icon: 'headphones',
  lessons: [
    {
      id: 'list-1',
      title: 'TOEFL Practice: Short Conversations (Full 30 Questions)',
      description: 'Transkrip lengkap dari Part A: 30 percakapan pendek antara dua orang.',
      tips: [
        "Focus on the second speaker; the answer is often found in their response. (Correct: 'Listen to the second person.' | Incorrect: 'Only listen to the first.')",
        "Listen for synonyms. The correct answer often uses different words with the same meaning. (Correct: 'Look for synonyms.' | Incorrect: 'Look for exact words.')",
        "Pay attention to the tone and emotion of the speakers. (Correct: 'Notice the tone.' | Incorrect: 'Ignore the feelings.')",
        "Be careful with 'distractors'—words that sound like the recording but are used in a wrong context. (Correct: 'Avoid distractors.' | Incorrect: 'Pick words that sound similar.')",
        "If you miss a question, don't panic. Move on immediately to stay focused on the next one. (Correct: 'Move on.' | Incorrect: 'Worry about the past.')"
      ],
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      transcript: "Narrator: Section 1. Listening Comprehension. In this section of the test, you will have an opportunity to demonstrate your ability to understand conversations and talks in English. There are three parts to this section...\n\nPart A. In part A, you will hear short conversations between two people. After each conversation, you will hear a question about the conversation.\n\nListen to an example. On the recording you hear: \n(Man): What are you doing there? \n(Woman): Nothing, I was just wondering if there are any trout in here. \n(Narrator): What does the woman mean? \nIn your test book you read: (A) She doesn't expect that there is any pickerel. (B) She tells the man to catch the fish. (C) She is Wonder Woman. (D) She wants to know the truth. \nThe sample answer is A.\n\n1. (Woman): What do you think of the food there? (Man): As far as I can tell, it's different from our food of course. Some are quite nice, but many give me a stomach ache. (Narrator): What does the man mean?\n2. (Man): I have a problem with my school assignment. Could you help me? (Woman): My pleasure. (Narrator): What does the woman mean?\n3. (Man): Can you come to my house at 4 this afternoon? (Woman): I'm afraid I can't. I'm going shopping at that time. What about at 6? (Narrator): What does the woman imply?\n4. (Woman): If I were you, I would rather not go with John. He is a careless driver. (Man): You are right. He usually drives a car very quickly. (Narrator): What does the man mean?\n5. (Man): Oh, I'm sorry. I don't have your book. (Woman): You're nuts! I need to study for the test. (Narrator): What does the woman probably feel?\n6. (Man): How many children does Martha have? (Woman): The oldest is five, the second is three, and the last one is one year old, I think. (Narrator): What does the woman imply?\n7. (Woman): Hello, how are you? (Man): Hi, I can't accept it. (Narrator): What does the man mean?\n8. (Man): (Coughing) My throat is killing me. It hurts. (Woman): You better stop your smoking habit. (Narrator): What does the woman suggest?\n9. (Woman): Do you know what the meaning of corruption is? (Man): Well, I'm not sure about it, sorry. (Narrator): What does the man imply?\n10. (Woman): Do you know that the most clever animals after man are the chimpanzees? (Man): I don't think so. Dolphins are more clever than these big apes. (Narrator): What does the man mean?\n11. (Man): Have you seen the new Walt Disney movie? (Woman): Sure, it's so wonderful. (Narrator): What does the woman mean?\n12. (Man): I heard that you got into an accident. Can you tell me how it happened? (Woman): Forgive me, I can't remember what happened at that time. (Narrator): What does the man mean?\n13. (Woman): I'm not working now. What time will you be back? (Man): About 5, but I will ring you if there are any problems. (Narrator): What does the man imply?\n14. (Man): Is Kevin coming tonight? (Woman): He didn't say, but if he calls me, I'll invite him. (Narrator): What does the woman imply?\n15. (Woman): Look at the time! I'll miss the bus unless I go now. (Man): Okay, bye. I'll see you when I get home. (Narrator): What does the man mean?\n16. (Woman): If I pass a supermarket, I'll buy you some strawberries and meals. (Man): That's great. (Narrator): What does the man mean?\n17. (Man): The weather is so hot today, isn't it? (Woman): Oh, I don't think so. (Narrator): What does the woman mean?\n18. (Woman): Will you go to your hometown? (Man): Yes, I'll fly there tomorrow after I leave my car in your house. (Narrator): What does the man mean?\n19. (Man): What exactly do I want to do in this presentation? I'm so nervous. (Woman): Calm down and relax. (Narrator): What does the woman suggest to the man?\n20. (Woman): Those strange men are looking at us now. (Man): Well, it is not safe here. (Narrator): What does the man probably do?\n21. (Man): Good morning, can you help me? (Woman): Good morning, sure. Wow, you look terrific today. (Narrator): What does the woman mean?\n22. (Woman): As far as we know, the headmaster is going to add more classes in this school. (Man): Well, it should be discussed with the students' parents first. (Narrator): What does the man imply?\n23. (Man): How long did you stay there? (Woman): I stayed there from April 2nd until the 8th. (Narrator): What does the woman mean?\n24. (Man): Did you speak French when you were in France? (Woman): Most of the time. (Narrator): What does the woman mean?\n25. (Woman): By the way, the class has already started. (Man): Yes, let's go to class. (Narrator): What does the man probably do?\n26. (Man): Are you still taking a computer course in that place? (Woman): I still have to study there for the next three months. (Narrator): What does the woman imply?\n27. (Woman): Nice party, isn't it? (Man): Very much. (Narrator): What does the man imply?\n28. (Man): Hi, how are you doing? (Woman): Not bad at all. (Narrator): What does the woman imply?\n29. (Woman): Do you know Olive? (Man): She is my best friend since we were kids. (Narrator): What does the man imply?\n30. (Woman): That's a lovely rose, isn't it? (Man): It certainly is. (Narrator): What does the man mean?",
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Part A: Short Conversations</h3>
            <p class="text-on-surface-variant leading-relaxed">
              In this section, you will hear a short conversation between two people. After the conversation, a third person will ask a question.
            </p>
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 class="font-bold text-primary mb-2 text-sm">Key Strategy:</h4>
              <p class="text-sm italic">"Focus on the second speaker. The answer is often a paraphrase of what they said."</p>
            </div>
            <div class="space-y-4">
              <h4 class="font-bold text-primary">Example:</h4>
              <div class="p-4 bg-white rounded-lg border border-slate-100 shadow-sm">
                <p class="text-sm"><strong>Speaker 1:</strong> Are you coming to the party tonight?</p>
                <p class="text-sm"><strong>Speaker 2:</strong> I wish I could, but I have a huge exam tomorrow.</p>
                <p class="text-sm mt-2 font-bold">Question: What does the woman mean?</p>
                <p class="text-sm text-green-600 mt-1"><strong>Correct Answer:</strong> She is unable to attend because she needs to study.</p>
              </div>
            </div>
          </div>
        `,
      questions: [
        {
          id: 'q1',
          text: 'What does the man mean about the food?',
          options: ['He likes all the food.', 'The food is different but some make him sick.', 'He wants more food.', 'He never eats there.'],
          correctAnswer: 1,
          explanation: 'The man states that some food is nice, but many give him a stomach ache. For example: "The spicy curry was delicious, but it gave him a stomach ache later."'
        },
        {
          id: 'q2',
          text: 'What does the woman mean?',
          options: ['She is happy to help.', 'She is unhappy.', 'She is busy.', 'She is leaving.'],
          correctAnswer: 0,
          explanation: '"My pleasure" means she is happy to help. For example: "When I thanked her for the ride, she said, \'My pleasure.\'"'
        },
        {
          id: 'q3',
          text: 'What does the woman imply about the meeting?',
          options: ['She will come at 4.', 'She is busy shopping at 4.', 'She is free all day.', 'She hates shopping.'],
          correctAnswer: 1,
          explanation: 'The woman says she is going shopping at 4:00. For example: "She has to buy groceries for dinner, so she can\'t meet at 4."'
        },
        {
          id: 'q4',
          text: 'What does the man mean about John?',
          options: ['John is safe.', 'John drives too fast.', 'John has no car.', 'John is a good teacher.'],
          correctAnswer: 1,
          explanation: 'The man agrees that John drives very quickly. For example: "John often gets speeding tickets because he drives so fast."'
        },
        {
          id: 'q5',
          text: 'What does the woman probably feel?',
          options: ['Happy.', 'Annoyed.', 'Tired.', 'Calm.'],
          correctAnswer: 1,
          explanation: 'The expression "You\'re nuts!" indicates she is annoyed or frustrated. For example: "She was angry because he forgot their anniversary again."'
        },
        {
          id: 'q6',
          text: 'How many children does Martha have?',
          options: ['One', 'Two', 'Three', 'Five'],
          correctAnswer: 2,
          explanation: 'The woman mentions the first, second, and last child (total of 3). For example: "She has a five-year-old, a three-year-old, and a baby."'
        },
        {
          id: 'q7',
          text: 'What does the man mean?',
          options: ['He accepts it.', 'He cannot accept it.', 'He is fine.', 'He is greeting her.'],
          correctAnswer: 1,
          explanation: 'He explicitly says "I can\'t accept it". For example: "He refused the gift because it was too expensive."'
        },
        {
          id: 'q8',
          text: 'What does the woman suggest?',
          options: ['Smoke more.', 'Stop smoking.', 'Drink water.', 'Go home.'],
          correctAnswer: 1,
          explanation: 'The woman suggests that he should stop his smoking habit because his throat hurts. For example: "Quitting smoking will help his throat heal and improve his health."'
        },
        {
          id: 'q9',
          text: 'What does the man imply?',
          options: ['He is an expert.', 'He is not sure about the meaning.', 'He is corrupt.', 'He is smart.'],
          correctAnswer: 1,
          explanation: 'The man says he is not sure about the meaning of corruption. For example: "He needs to look up the definition in a dictionary to be sure."'
        },
        {
          id: 'q10',
          text: 'What is the man\'s opinion?',
          options: ['Dolphins are smarter than chimpanzees.', 'Apes are smarter.', 'Humans are dolphins.', 'Chimpanzees are best.'],
          correctAnswer: 0,
          explanation: 'The man states that dolphins are more clever than chimpanzees. For example: "Dolphins have complex social structures and communication systems."'
        },
        {
          id: 'q11',
          text: 'What does the woman mean?',
          options: ['She hasn\'t seen the movie.', 'The movie is wonderful.', 'She hates Walt Disney.', 'The movie is boring.'],
          correctAnswer: 1,
          explanation: 'The woman says the movie is "so wonderful". For example: "She enjoyed the animation and the story very much."'
        },
        {
          id: 'q12',
          text: 'What does the man mean?',
          options: ['He remembers everything.', 'He cannot remember the accident.', 'He was not in an accident.', 'He is telling a story.'],
          correctAnswer: 1,
          explanation: 'The woman says she can\'t remember what happened during the accident. For example: "The shock of the crash caused her to lose her memory of the event."'
        },
        {
          id: 'q13',
          text: 'What does the man imply?',
          options: ['He will be back at 5.', 'He will never return.', 'He is working now.', 'He will call if there are problems.'],
          correctAnswer: 3,
          explanation: 'The man says he will "ring you if there are any problems". For example: "He will call her on her mobile phone if he is going to be late."'
        },
        {
          id: 'q14',
          text: 'What does the woman imply?',
          options: ['Kevin is coming.', 'She will invite Kevin if he calls.', 'Kevin is already there.', 'She hates Kevin.'],
          correctAnswer: 1,
          explanation: 'The woman says "if he calls me, I\'ll invite him". For example: "She is waiting for his call before she asks him to the party."'
        },
        {
          id: 'q15',
          text: 'What does the man mean?',
          options: ['He will see her at home.', 'He is going with her.', 'He will miss the bus.', 'He is staying at the bus stop.'],
          correctAnswer: 0,
          explanation: 'The man says "I\'ll see you when I get home". For example: "He expects to meet her at their house later in the evening."'
        },
        {
          id: 'q16',
          text: 'What does the man mean?',
          options: ['He is angry.', 'He is happy about the strawberries.', 'He doesn\'t like strawberries.', 'He is going to the supermarket.'],
          correctAnswer: 1,
          explanation: 'The man says "That\'s great" in response to the offer. For example: "He is looking forward to eating the fresh fruit."'
        },
        {
          id: 'q17',
          text: 'What does the woman mean?',
          options: ['It is hot.', 'She doesn\'t think it is hot.', 'She likes hot weather.', 'She is going outside.'],
          correctAnswer: 1,
          explanation: 'The woman says "Oh, I don\'t think so" regarding the hot weather. For example: "She feels that the temperature is quite comfortable."'
        },
        {
          id: 'q18',
          text: 'What does the man mean?',
          options: ['He will drive home.', 'He will leave his car at her house and fly.', 'He has no car.', 'He is staying in town.'],
          correctAnswer: 1,
          explanation: 'The man says he will fly after leaving his car at her house. For example: "He is taking a plane to his hometown for the holidays."'
        },
        {
          id: 'q19',
          text: 'What does the woman suggest to the man?',
          options: ['Be nervous.', 'Calm down and relax.', 'Stop the presentation.', 'Go home.'],
          correctAnswer: 1,
          explanation: 'The woman explicitly tells him to "Calm down and relax". For example: "She wants him to take deep breaths so he can perform better."'
        },
        {
          id: 'q20',
          text: 'What does the man probably do?',
          options: ['Stay there.', 'Leave because it is not safe.', 'Look at the men.', 'Start a fight.'],
          correctAnswer: 1,
          explanation: 'The man says "it is not safe here", implying they should leave. For example: "The dark alley made him feel uneasy, so he wanted to find a brighter street."'
        },
        {
          id: 'q21',
          text: 'What does the woman mean?',
          options: ['The man looks bad.', 'The man looks great.', 'She is angry.', 'She needs help.'],
          correctAnswer: 1,
          explanation: 'The woman says "you look terrific today". For example: "She thinks his new suit makes him look very professional."'
        },
        {
          id: 'q22',
          text: 'What does the man imply?',
          options: ['The headmaster is right.', 'It should be discussed with parents first.', 'He hates the school.', 'He is a teacher.'],
          correctAnswer: 1,
          explanation: 'The man says it "should be discussed with the students\' parents first". For example: "He believes that parents should have a say in school changes."'
        },
        {
          id: 'q23',
          text: 'What does the woman mean?',
          options: ['She stayed for 2 days.', 'She stayed for 6 days.', 'She stayed for 8 days.', 'She stayed for a month.'],
          correctAnswer: 1,
          explanation: 'She stayed from April 2nd to the 8th (6 days). For example: "Her trip lasted nearly a full week."'
        },
        {
          id: 'q24',
          text: 'What does the woman mean?',
          options: ['She spoke French most of the time.', 'She never spoke French.', 'She doesn\'t know French.', 'She is from France.'],
          correctAnswer: 0,
          explanation: 'She says "Most of the time" when asked if she spoke French. For example: "She used her language skills to order food and ask for directions."'
        },
        {
          id: 'q25',
          text: 'What does the man probably do?',
          options: ['Go to class.', 'Stay outside.', 'Go home.', 'Sleep.'],
          correctAnswer: 0,
          explanation: 'The man says "let\'s go to class". For example: "He doesn\'t want to be late for the professor\'s lecture."'
        },
        {
          id: 'q26',
          text: 'What does the woman imply?',
          options: ['She is finished.', 'She has 3 more months of study.', 'She hates computers.', 'She is a teacher.'],
          correctAnswer: 1,
          explanation: 'She says she has to study there for the next three months. For example: "She will finish her certification by the end of the summer."'
        },
        {
          id: 'q27',
          text: 'What does the man imply?',
          options: ['He likes the party.', 'He hates the party.', 'He is leaving.', 'He is tired.'],
          correctAnswer: 0,
          explanation: 'The man says "Very much" in response to "Nice party, isn\'t it?". For example: "He is enjoying the music and the company of his friends."'
        },
        {
          id: 'q28',
          text: 'What does the woman imply?',
          options: ['She is doing badly.', 'She is doing fine.', 'She is sick.', 'She is angry.'],
          correctAnswer: 1,
          explanation: '"Not bad at all" means she is doing fine. For example: "She is having a good day and feeling positive."'
        },
        {
          id: 'q29',
          text: 'What does the man imply?',
          options: ['She is a stranger.', 'She is his best friend.', 'He doesn\'t know her.', 'She is his sister.'],
          correctAnswer: 1,
          explanation: 'The man says "She is my best friend since we were kids". For example: "They have known each other for over twenty years."'
        },
        {
          id: 'q30',
          text: 'What does the man mean?',
          options: ['The rose is ugly.', 'The rose is lovely.', 'He doesn\'t like roses.', 'He is buying a rose.'],
          correctAnswer: 1,
          explanation: 'The man agrees that it is a lovely rose. For example: "He admires the vibrant color and the sweet scent of the flower."'
        }
      ]
    },
    {
      id: 'list-2',
      title: 'Navigating Campus Life: Academics and Housing',
      description: 'A deep dive into common university challenges, from managing difficult courses to understanding new residential policies.',
      tips: [
        "Listen for the speaker's problem and the solution offered. (Correct: 'The student needs a tutor.' | Incorrect: 'The student is a tutor.')",
        "Identify the relationship between the speakers (e.g., friends, student-advisor). (Correct: 'They are classmates.' | Incorrect: 'They are strangers.')",
        "Pay attention to 'campus vocabulary' (e.g., dorm, registrar, syllabus). (Correct: 'Registrar handles records.' | Incorrect: 'Registrar is a teacher.')",
        "Note any specific numbers, dates, or locations mentioned. (Correct: 'Room 302 at 4 PM.' | Incorrect: 'Sometime next week.')",
        "Try to predict what the speakers will do next based on the conversation. (Correct: 'She will go to the library.' | Incorrect: 'She will go home.')"
      ],
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      transcript: "Narrator: Part B. In this part of the test, you will hear longer conversations. After each conversation, you will hear several questions. The conversations and questions will not be repeated. After you hear a question, read the four possible answers in your test book and choose the best answer. Then, on your answer sheet, find the number of the question and fill in the space that corresponds to the letter of the answer you have chosen. Remember, you are not allowed to take notes or write in your test book.\n\nQuestions 31 through 34. Listen to a conversation about a university course.\n\n(Man): Hi, Alice. I haven't seen you in a while. How’s your semester going?\n(Woman): Oh, hi, Mark. It’s going okay, but I’m really struggling with my Introduction to Biology class.\n(Man): Really? I took that last year. Is it the material or the professor?\n(Woman): Both, I think. Professor Miller moves so fast through the lectures, and the textbook is so dense. I’m having a hard time keeping up with the notes.\n(Man): Yeah, Miller is known for being thorough. Have you tried going to the tutoring center in the library?\n(Woman): I thought about it, but I wasn't sure if they could actually help with specific lab reports.\n(Man): They definitely can. They have senior biology students there who have already taken Miller’s class. They even have copies of old practice exams.\n(Woman): That sounds like exactly what I need. Do I need an appointment?\n(Man): No, you can just walk in, but it’s best to go in the afternoon before it gets too crowded.\n(Woman): Thanks, Mark. I’ll head over there after my chemistry lab today.\n\nNarrator:\n31. What is the woman’s main problem?\n32. What does the man say about Professor Miller?\n33. How can the tutoring center help the woman?\n34. What does the man suggest about the timing of her visit?\n\nQuestions 35 through 38. Listen to a conversation between two students.\n\n(Woman): Hey, did you hear about the new housing policy for next year?\n(Man): No, what’s changing?\n(Woman): Well, the university is going to require all sophomores to live on campus. \n(Man): Really? That’s going to be a problem. The dorms are already overcrowded.\n(Woman): I know. They’re planning to renovate the old North Hall to make more room, but I don’t think it’ll be finished by September.\n(Man): This is going to make finding an affordable apartment off-campus even harder for juniors and seniors if the university takes up more local space.\n(Woman): Exactly. I was planning to share an apartment with three friends to save money, but now I’m worried about the availability.\n(Man): We should probably check with the housing office this week to see where we are on the waiting list.\n\nNarrator:\n35. What is the main topic of the conversation?\n36. What is the university planning to do with North Hall?\n37. What is the man’s concern regarding the new policy?\n38. What do the students decide to do at the end of their talk?",
      content: 'In this section, listen for specific details regarding academic support and administrative changes. Pay close attention to the suggestions made by the speakers.',
      questions: [
        {
          id: 'la1',
          text: 'What is the woman’s main problem?',
          options: ['She missed her biology exam', 'She is struggling with her biology class', 'She wants to change her major', 'She lost her biology textbook'],
          correctAnswer: 1,
          explanation: 'The woman states she is having a difficult time keeping up with the material and lectures in her Biology course. For example: "She finds the textbook dense and the professor\'s pace too fast."'
        },
        {
          id: 'la2',
          text: 'What does the man say about Professor Miller?',
          options: ['He is a new teacher', 'He moves very slowly', 'He is known for being thorough', 'He doesn’t give lab reports'],
          correctAnswer: 2,
          explanation: 'The man uses the word "thorough" to describe the professor\'s teaching style, which explains why the lectures are fast-paced. For example: "Professor Miller covers every detail, making it hard for students to take notes quickly enough."'
        },
        {
          id: 'la3',
          text: 'How can the tutoring center help the woman?',
          options: ['By giving her a new textbook', 'By providing senior students and practice exams', 'By canceling her lab reports', 'By moving her to a different class'],
          correctAnswer: 1,
          explanation: 'The center offers access to experienced students and resources like old exams that are specific to the course. For example: "Senior students who have already passed the class can provide valuable insights and study materials."'
        },
        {
          id: 'la4',
          text: 'What does the man suggest about the timing of her visit?',
          options: ['Go early in the morning', 'Go in the afternoon before it gets crowded', 'Go only on weekends', 'Make an appointment weeks in advance'],
          correctAnswer: 1,
          explanation: 'He advises her to visit in the afternoon to avoid the peak hours when the center is too busy. For example: "Going at 2 PM might be better than going right after a popular morning lecture."'
        },
        {
          id: 'la5',
          text: 'What is the main topic of the second conversation?',
          options: ['A change in the chemistry lab', 'New university housing policies', 'Graduation requirements', 'Renovating the library'],
          correctAnswer: 1,
          explanation: 'The conversation focuses on a new rule requiring second-year students (sophomores) to stay in university dorms. For example: "This policy change aims to foster a stronger campus community among underclassmen."'
        },
        {
          id: 'la6',
          text: 'What is the university planning to do with North Hall?',
          options: ['Tear it down', 'Turn it into a library', 'Renovate it to create more room', 'Sell it to a local business'],
          correctAnswer: 2,
          explanation: 'The university intends to update the old building to increase the total number of beds available on campus. For example: "Renovating North Hall will provide more housing options for the incoming sophomore class."'
        },
        {
          id: 'la7',
          text: 'What is the man’s concern regarding the new policy?',
          options: ['He wants to live in North Hall', 'The dorms are already overcrowded', 'He doesn’t like sophomores', 'He wants to move to a different city'],
          correctAnswer: 1,
          explanation: 'He worries about the capacity of the current facilities, noting that they are already at their limit. For example: "Adding more students to already full dorms could lead to uncomfortable living conditions."'
        },
        {
          id: 'la8',
          text: 'What do the students decide to do at the end of their talk?',
          options: ['Check with the housing office', 'Buy an apartment', 'Quit their housing jobs', 'Move in together'],
          correctAnswer: 0,
          explanation: 'To secure their spots and understand their options, they plan to visit the administrative office for housing. For example: "Checking the waiting list will help them decide if they need to look for off-campus housing sooner."'
        },
        {
          id: 'la9',
          text: 'Why was the woman planning to share an apartment?',
          options: ['To be closer to the gym', 'To save money', 'Because she hates the dorms', 'To study more effectively'],
          correctAnswer: 1,
          explanation: 'Renting an apartment with multiple friends was her strategy to reduce her living expenses. For example: "Splitting the rent four ways makes living off-campus much more affordable than a single dorm room."'
        },
        {
          id: 'la10',
          text: 'When will the woman go to the tutoring center?',
          options: ['Before her biology class', 'Tomorrow morning', 'After her chemistry lab today', 'Next semester'],
          correctAnswer: 2,
          explanation: 'She mentions her immediate plan is to go right after finishing her scheduled chemistry lab session. For example: "She wants to get help as soon as possible to catch up on her biology notes."'
        }
      ]
    },
    {
      id: 'list-3',
      title: 'Academic Lecture: Psychology - Cognitive Dissonance',
      description: 'Listen to a lecture about a key concept in social psychology.',
      tips: [
        "Lectures often start with a definition of the main concept. (Correct: 'Dissonance is discomfort.' | Incorrect: 'Dissonance is a sound.')",
        "Listen for the name of the researcher and the year of the study. (Correct: 'Festinger in 1957.' | Incorrect: 'Freud in 1900.')",
        "Pay attention to examples; they help illustrate abstract theories. (Correct: 'The smoker example.' | Incorrect: 'The professor's car.')",
        "Note the different ways to resolve dissonance mentioned by the professor. (Correct: 'Change behavior or belief.' | Incorrect: 'Ignore the feeling.')",
        "Think about how this theory applies to your own life or decisions. (Correct: 'Justifying a purchase.' | Incorrect: 'Buying groceries.')"
      ],
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      transcript: `Professor: Today we're discussing cognitive dissonance. This theory, first proposed by Leon Festinger in 1957, suggests that we have an inner drive to hold all our attitudes and beliefs in harmony and avoid disharmony, or dissonance. 

When there is an inconsistency between attitudes or behaviors, something must change to eliminate the dissonance. For example, consider someone who smokes but knows that smoking causes cancer. This person experiences dissonance because their behavior—smoking—conflicts with their belief—that smoking is dangerous. 

To reduce this discomfort, they can do one of three things. First, they can change their behavior: quit smoking. Second, they can change their belief: convince themselves that the research on cancer is flawed. Or third, they can add new beliefs: "I exercise a lot, so it balances out the smoking." 

Cognitive dissonance is a powerful motivator. It explains why people often justify their bad decisions or work harder to convince themselves they made the right choice after a difficult purchase. It's about maintaining a consistent self-image.`,
      content: 'In the Listening section, you will hear lectures and conversations. You can take notes while you listen. You will only hear the audio once.',
      questions: [
        {
          id: 'l3-1',
          text: 'Who first proposed the theory of cognitive dissonance?',
          options: ['Sigmund Freud', 'Leon Festinger', 'B.F. Skinner', 'Ivan Pavlov'],
          correctAnswer: 1,
          explanation: 'The professor mentions Leon Festinger. For example: "Festinger\'s 1957 book introduced the theory to the academic world."'
        },
        {
          id: 'l3-2',
          text: 'What is the core idea of cognitive dissonance?',
          options: ['People like to have conflicting beliefs.', 'People strive for harmony between their beliefs and actions.', 'People always change their behavior when they are wrong.', 'People are naturally irrational.'],
          correctAnswer: 1,
          explanation: 'The theory suggests we have an inner drive for harmony. For example: "When our actions don\'t match our values, we feel a psychological tension that we try to resolve."'
        },
        {
          id: 'l3-3',
          text: 'In the smoker example, what causes the dissonance?',
          options: ['The cost of cigarettes', 'The conflict between smoking and the knowledge it causes cancer', 'The pressure from friends to quit', 'The physical addiction to nicotine'],
          correctAnswer: 1,
          explanation: 'Dissonance comes from the conflict between behavior and belief. For example: "Knowing smoking is deadly while continuing to smoke creates a state of mental discomfort."'
        },
        {
          id: 'l3-4',
          text: 'Which of the following is NOT a way to reduce dissonance mentioned by the professor?',
          options: ['Changing behavior', 'Changing beliefs', 'Adding new beliefs', 'Ignoring the problem entirely'],
          correctAnswer: 3,
          explanation: 'The professor lists changing behavior, changing beliefs, and adding new beliefs. For example: "Ignoring the problem doesn\'t resolve the underlying psychological conflict."'
        },
        {
          id: 'l3-5',
          text: 'What does the professor say about people after a difficult purchase?',
          options: ['They usually return the item.', 'They work hard to convince themselves it was the right choice.', 'They feel no dissonance.', 'They immediately regret it.'],
          correctAnswer: 1,
          explanation: 'People justify their decisions to reduce dissonance. For example: "After buying an expensive car, a person might focus only on its positive features to feel better about the cost."'
        },
        {
          id: 'l3-6',
          text: 'When was the theory first proposed?',
          options: ['1945', '1957', '1968', '1980'],
          correctAnswer: 1,
          explanation: 'The professor mentions 1957. For example: "The mid-20th century was a period of significant growth in social psychology research."'
        },
        {
          id: 'l3-7',
          text: 'Cognitive dissonance is described as a powerful ____.',
          options: ['Emotion', 'Motivator', 'Distraction', 'Obstacle'],
          correctAnswer: 1,
          explanation: 'The professor calls it a "powerful motivator". For example: "The need to reduce dissonance can drive people to change long-held habits or opinions."'
        },
        {
          id: 'l3-8',
          text: 'Adding the belief "I exercise a lot" to justify smoking is an example of:',
          options: ['Changing behavior', 'Changing an old belief', 'Adding a new belief', 'Eliminating dissonance through logic'],
          correctAnswer: 2,
          explanation: 'It\'s adding a new belief to balance the conflict. For example: "By focusing on their exercise routine, the smoker creates a justification that minimizes the perceived risk of smoking."'
        },
        {
          id: 'l3-9',
          text: 'The professor implies that cognitive dissonance is:',
          options: ['A rare psychological condition', 'A common human experience', 'Only found in smokers', 'Easy to ignore'],
          correctAnswer: 1,
          explanation: 'He explains it as a general human drive for consistency. For example: "Most people experience this discomfort at some point when their actions and beliefs are at odds."'
        },
        {
          id: 'l3-10',
          text: 'What is the ultimate goal of reducing dissonance?',
          options: ['To be more intelligent', 'To maintain a consistent self-image', 'To impress others', 'To save money'],
          correctAnswer: 1,
          explanation: 'The professor mentions maintaining a consistent self-image. For example: "We want to see ourselves as rational and moral, so we resolve dissonance to protect that view."'
        }
      ]
    },
    {
      id: 'list-4',
      title: 'Academic Lecture: Astronomy - The Life Cycle of Stars',
      description: 'Listen to a lecture about how stars are born and how they die.',
      tips: [
        "Scientific lectures often follow a chronological or process-based order. (Correct: 'Nebula to Main Sequence.' | Incorrect: 'Star dies then is born.')",
        "Listen for key terms like 'nebula', 'fusion', and 'supernova'. (Correct: 'Fusion powers stars.' | Incorrect: 'Fusion is a type of star.')",
        "Note the differences between low-mass and high-mass stars. (Correct: 'High-mass stars explode.' | Incorrect: 'All stars become white dwarfs.')",
        "Pay attention to the specific temperatures and timeframes mentioned. (Correct: '15 million degrees.' | Incorrect: 'It's very hot.')",
        "Visualize the process as the professor describes each stage. (Correct: 'Imagine a cloud collapsing.' | Incorrect: 'Just read the text.')"
      ],
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
      transcript: `Professor: All stars, including our sun, have a life cycle. It begins in a nebula—a giant cloud of gas and dust. Gravity pulls the gas and dust together, and as it gets denser, it heats up, forming a protostar. 

Once the temperature reaches about 15 million degrees Celsius, nuclear fusion begins. This is the "main sequence" stage, where a star spends most of its life, fusing hydrogen into helium. Our sun is currently in this stage. 

What happens next depends on the star's mass. Smaller stars, like our sun, will eventually expand into red giants as they run out of hydrogen. They then shed their outer layers, leaving behind a white dwarf. 

Massive stars, however, have a much more dramatic end. They expand into red supergiants and then explode in a massive supernova. The remains can become a neutron star or, if the mass is great enough, a black hole—an object with gravity so strong that not even light can escape. It's a cycle of birth, life, and spectacular death on a cosmic scale.`,
      content: 'In the Listening section, you will hear lectures and conversations. You can take notes while you listen. You will only hear the audio once.',
      questions: [
        {
          id: 'l4-1',
          text: 'Where are stars born?',
          options: ['In a black hole', 'In a nebula', 'In a supernova', 'In a white dwarf'],
          correctAnswer: 1,
          explanation: 'The professor states stars begin in a nebula. For example: "The Orion Nebula is a well-known stellar nursery where new stars are currently forming."'
        },
        {
          id: 'l4-2',
          text: 'What process marks the beginning of a star\'s "main sequence" stage?',
          options: ['Gravity pulling dust together', 'Nuclear fusion', 'A supernova explosion', 'The formation of a black hole'],
          correctAnswer: 1,
          explanation: 'Nuclear fusion marks the start of the main sequence. For example: "Once hydrogen atoms fuse into helium, the star releases a tremendous amount of energy."'
        },
        {
          id: 'l4-3',
          text: 'What stage is our sun currently in?',
          options: ['Protostar', 'Red giant', 'Main sequence', 'White dwarf'],
          correctAnswer: 2,
          explanation: 'The professor says our sun is in the main sequence stage. For example: "Our sun has been in this stable phase for about 4.6 billion years."'
        },
        {
          id: 'l4-4',
          text: 'What determines how a star will die?',
          options: ['Its color', 'Its mass', 'Its distance from Earth', 'Its age'],
          correctAnswer: 1,
          explanation: 'The professor says "What happens next depends on the star\'s mass." For example: "A star with ten times the mass of our sun will have a much more violent end."'
        },
        {
          id: 'l4-5',
          text: 'What will our sun eventually become after its red giant phase?',
          options: ['A black hole', 'A supernova', 'A white dwarf', 'A neutron star'],
          correctAnswer: 2,
          explanation: 'Smaller stars like our sun leave behind a white dwarf. For example: "After shedding its outer layers, the sun will become a dense, Earth-sized remnant."'
        },
        {
          id: 'l4-6',
          text: 'What is a supernova?',
          options: ['The birth of a star', 'A giant cloud of gas', 'A massive explosion of a massive star', 'A type of black hole'],
          correctAnswer: 2,
          explanation: 'Massive stars explode in a supernova. For example: "A supernova can briefly outshine an entire galaxy as it releases heavy elements into space."'
        },
        {
          id: 'l4-7',
          text: 'What is a black hole?',
          options: ['A very bright star', 'A cloud of dust', 'An object with gravity so strong light cannot escape', 'A small, cold star'],
          correctAnswer: 2,
          explanation: 'The professor defines a black hole this way. For example: "The gravity is so intense that even light is trapped within the event horizon."'
        },
        {
          id: 'l4-8',
          text: 'What temperature is needed for nuclear fusion to start?',
          options: ['1 million degrees', '5 million degrees', '15 million degrees', '100 million degrees'],
          correctAnswer: 2,
          explanation: 'The professor mentions 15 million degrees Celsius. For example: "This extreme heat is necessary to overcome the electrical repulsion between hydrogen nuclei."'
        },
        {
          id: 'l4-9',
          text: 'What fuel do stars use during the main sequence stage?',
          options: ['Helium', 'Oxygen', 'Hydrogen', 'Carbon'],
          correctAnswer: 2,
          explanation: 'Stars fuse hydrogen into helium. For example: "Hydrogen is the most abundant element in the universe and the primary fuel for young stars."'
        },
        {
          id: 'l4-10',
          text: 'What is a protostar?',
          options: ['A dying star', 'A fully formed star', 'A heating cloud of gas and dust before fusion', 'A type of supernova'],
          correctAnswer: 2,
          explanation: 'A protostar forms as the nebula heats up before fusion starts. For example: "A protostar is a star in the making, still gathering mass from its surrounding cloud."'
        }
      ]
    },
    {
      id: 'list-5',
      title: 'Academic Lecture: Biology - Photosynthesis',
      description: 'Listen to a detailed explanation of how plants convert light into energy.',
      tips: [
        "Biological processes often involve multiple stages or cycles. (Correct: 'Light and dark reactions.' | Incorrect: 'It happens all at once.')",
        "Identify the inputs (what goes in) and outputs (what comes out) of each stage. (Correct: 'CO2 goes in, O2 comes out.' | Incorrect: 'Water is a byproduct.')",
        "Listen for the location where each part of the process occurs. (Correct: 'In the chloroplasts.' | Incorrect: 'In the roots.')",
        "Note the importance of the process to the overall ecosystem. (Correct: 'Base of the food chain.' | Incorrect: 'Only for plants.')",
        "Draw a simple diagram while listening to help visualize the flow. (Correct: 'Sun -> Plant -> Glucose.' | Incorrect: 'Just take notes.')"
      ],
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
      transcript: `Professor: Photosynthesis is perhaps the most important chemical process on Earth. It's how plants, algae, and some bacteria capture solar energy and turn it into chemical energy. 

The process happens in two main stages: the light-dependent reactions and the light-independent reactions, also known as the Calvin Cycle. In the light-dependent stage, chlorophyll in the chloroplasts absorbs sunlight, which is used to split water molecules, releasing oxygen as a byproduct and creating energy-carrying molecules like ATP.

In the second stage, the Calvin Cycle, the plant uses that ATP and carbon dioxide from the air to build glucose—a simple sugar. This glucose is the plant's food, but it's also the foundation of almost all food chains. Without photosynthesis, there would be no oxygen for us to breathe and no food for animals to eat. It's the engine that drives life in the biosphere.`,
      content: 'Focus on the two stages of photosynthesis and the inputs/outputs of each.',
      questions: [
        {
          id: 'l5-1',
          text: 'What are the two main stages of photosynthesis?',
          options: ['Heating and cooling', 'Light-dependent and light-independent', 'Inhaling and exhaling', 'Absorption and reflection'],
          correctAnswer: 1,
          explanation: 'The professor mentions light-dependent and light-independent reactions. For example: "The light-dependent stage captures energy, while the light-independent stage builds sugars."'
        },
        {
          id: 'l5-2',
          text: 'Where does the light-dependent stage occur?',
          options: ['In the roots', 'In the chloroplasts', 'In the mitochondria', 'In the nucleus'],
          correctAnswer: 1,
          explanation: 'Chlorophyll in the chloroplasts absorbs the sunlight. For example: "Chloroplasts are the specialized organelles where the magic of energy conversion happens."'
        },
        {
          id: 'l5-3',
          text: 'What is released as a byproduct during the first stage?',
          options: ['Carbon dioxide', 'Glucose', 'Oxygen', 'Nitrogen'],
          correctAnswer: 2,
          explanation: 'Splitting water molecules releases oxygen. For example: "This oxygen is released into the atmosphere, providing the air we breathe."'
        },
        {
          id: 'l5-4',
          text: 'What is another name for the light-independent reactions?',
          options: ['The Krebs Cycle', 'The Calvin Cycle', 'The Solar Cycle', 'The Energy Cycle'],
          correctAnswer: 1,
          explanation: 'The professor calls it the Calvin Cycle. For example: "The Calvin Cycle is named after Melvin Calvin, who mapped out the chemical pathway."'
        },
        {
          id: 'l5-5',
          text: 'What does the plant use to build glucose in the second stage?',
          options: ['Oxygen and water', 'ATP and carbon dioxide', 'Sunlight and soil', 'Nitrogen and minerals'],
          correctAnswer: 1,
          explanation: 'The plant uses ATP and carbon dioxide to build glucose. For example: "Carbon dioxide from the air is fixed into organic molecules like glucose using the energy from ATP."'
        },
        {
          id: 'l5-6',
          text: 'What is the primary function of chlorophyll?',
          options: ['To store water', 'To absorb sunlight', 'To release carbon dioxide', 'To protect the roots'],
          correctAnswer: 1,
          explanation: 'Chlorophyll is the pigment that captures solar energy. For example: "Without chlorophyll, plants wouldn\'t be able to initiate the process of photosynthesis."'
        },
        {
          id: 'l5-7',
          text: 'Glucose is described as a _______ .',
          options: ['Simple sugar', 'Complex protein', 'Type of gas', 'Mineral'],
          correctAnswer: 0,
          explanation: 'The professor calls glucose a "simple sugar". For example: "Glucose provides the immediate energy needed for cellular processes."'
        },
        {
          id: 'l5-8',
          text: 'What would happen to animals without photosynthesis?',
          options: ['They would grow faster.', 'They would have no food or oxygen.', 'They would move to the ocean.', 'Nothing would change.'],
          correctAnswer: 1,
          explanation: 'Photosynthesis is the foundation of food chains and the source of oxygen. For example: "The entire biosphere depends on the energy captured by plants."'
        },
        {
          id: 'l5-9',
          text: 'Which organisms besides plants perform photosynthesis?',
          options: ['Fungi and animals', 'Algae and some bacteria', 'Insects and birds', 'Only trees'],
          correctAnswer: 1,
          explanation: 'The professor mentions algae and some bacteria. For example: "Phytoplankton in the ocean are responsible for a large portion of the Earth\'s oxygen production."'
        },
        {
          id: 'l5-10',
          text: 'Photosynthesis turns solar energy into _______ energy.',
          options: ['Kinetic', 'Thermal', 'Chemical', 'Nuclear'],
          correctAnswer: 2,
          explanation: 'It converts light into chemical energy stored in glucose. For example: "This chemical energy can be stored for long periods and used when needed."'
        }
      ]
    },
    {
      id: 'list-6',
      title: 'Academic Lecture: History - The Industrial Revolution',
      description: 'Listen to a lecture about the technological shift that changed the world.',
      tips: [
        "History lectures often discuss causes and effects of major events. (Correct: 'Steam engine led to factories.' | Incorrect: 'History is just dates.')",
        "Listen for specific inventions and the names of inventors. (Correct: 'James Watt and the steam engine.' | Incorrect: 'Edison and the lightbulb.')",
        "Note the social changes, such as urbanization and working conditions. (Correct: 'People moved to cities.' | Incorrect: 'Everyone stayed on farms.')",
        "Pay attention to the time period and the location where it started. (Correct: 'Late 18th century Britain.' | Incorrect: 'Modern day America.')",
        "Think about how these historical changes still affect us today. (Correct: 'Pollution is a legacy.' | Incorrect: 'It has no effect now.')"
      ],
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
      transcript: `Professor: The Industrial Revolution, starting in the late 18th century in Britain, wasn't just about machines; it was a total transformation of society. Before this, most people lived in rural areas and made things by hand. 

The shift began with the textile industry. Inventions like the spinning jenny and the power loom allowed cloth to be produced much faster and cheaper. But the real game-changer was the steam engine, improved by James Watt. It provided a reliable source of power that didn't depend on wind or water.

This led to the rise of the factory system and rapid urbanization, as people moved to cities for work. While it created great wealth, it also led to harsh working conditions and environmental pollution. We are still living with the consequences of this revolution today, both the technological benefits and the ecological challenges.`,
      content: 'Analyze the social and technological impacts of the Industrial Revolution.',
      questions: [
        {
          id: 'l6-1',
          text: 'Where did the Industrial Revolution begin?',
          options: ['France', 'United States', 'Britain', 'Germany'],
          correctAnswer: 2,
          explanation: 'The professor states it began in Britain. For example: "Britain had the necessary resources like coal and iron, and a stable political environment."'
        },
        {
          id: 'l6-2',
          text: 'Which industry was the first to be transformed?',
          options: ['Agriculture', 'Textiles', 'Transportation', 'Mining'],
          correctAnswer: 1,
          explanation: 'The shift began with the textile industry. For example: "The production of cloth was the first to be mechanized with new inventions."'
        },
        {
          id: 'l6-3',
          text: 'Who improved the steam engine?',
          options: ['Eli Whitney', 'James Watt', 'Thomas Edison', 'Alexander Graham Bell'],
          correctAnswer: 1,
          explanation: 'James Watt is mentioned as the one who improved it. For example: "Watt\'s improvements made the steam engine efficient enough to power factories and locomotives."'
        },
        {
          id: 'l6-4',
          text: 'What was a major social result of the revolution?',
          options: ['People moved to rural areas', 'Rapid urbanization', 'The end of factories', 'A decrease in pollution'],
          correctAnswer: 1,
          explanation: 'The rise of the factory system led to rapid urbanization. For example: "Cities like Manchester grew tremendously as workers flocked to factory jobs."'
        },
        {
          id: 'l6-5',
          text: 'What does the professor mention as a negative consequence?',
          options: ['Cheaper cloth', 'Reliable power', 'Harsh working conditions', 'New inventions'],
          correctAnswer: 2,
          explanation: 'Harsh working conditions and pollution are mentioned as challenges. For example: "Long hours and poor air quality in factories were common problems for the working class."'
        },
        {
          id: 'l6-6',
          text: 'When did the Industrial Revolution start?',
          options: ['Late 17th century', 'Late 18th century', 'Early 19th century', 'Mid 20th century'],
          correctAnswer: 1,
          explanation: 'The professor mentions the late 18th century. For example: "The 1760s and 1770s saw the emergence of key textile inventions."'
        },
        {
          id: 'l6-7',
          text: 'What was the "real game-changer" mentioned in the lecture?',
          options: ['The spinning jenny', 'The power loom', 'The steam engine', 'The telephone'],
          correctAnswer: 2,
          explanation: 'The professor calls the steam engine the "real game-changer". For example: "It allowed factories to be located anywhere, not just near rivers."'
        },
        {
          id: 'l6-8',
          text: 'Before the revolution, where did most people live?',
          options: ['In large cities', 'In rural areas', 'In coastal towns', 'In underground shelters'],
          correctAnswer: 1,
          explanation: 'Most people lived in rural areas and made things by hand. For example: "The majority of the population were farmers or small-scale artisans."'
        },
        {
          id: 'l6-9',
          text: 'What did the steam engine provide that was unique?',
          options: ['Free energy', 'A source of power independent of wind or water', 'A way to communicate instantly', 'Clean energy'],
          correctAnswer: 1,
          explanation: 'It didn\'t depend on wind or water. For example: "This reliability was crucial for the continuous operation of large factories."'
        },
        {
          id: 'l6-10',
          text: 'The professor implies that the revolution was _______ .',
          options: ['Only about machines', 'A total transformation of society', 'A short-lived event', 'Unimportant'],
          correctAnswer: 1,
          explanation: 'He says it was "a total transformation of society". For example: "It changed how people lived, worked, and related to one another."'
        }
      ]
    },
    {
      id: 'list-7',
      title: 'Academic Lecture: Biology - Symbiosis',
      description: 'An exploration of different types of relationships between species.',
      tips: [
        "Classification lectures often group ideas into categories. (Correct: 'Three types of symbiosis.' | Incorrect: 'All relationships are the same.')",
        "Listen for the definitions of 'mutualism', 'commensalism', and 'parasitism'. (Correct: 'Mutualism is win-win.' | Incorrect: 'Parasitism is win-win.')",
        "Note the specific examples given for each type of relationship. (Correct: 'Bees and flowers.' | Incorrect: 'Cats and dogs.')",
        "Pay attention to whether each species is helped, harmed, or unaffected. (Correct: 'Host is harmed in parasitism.' | Incorrect: 'Both are happy.')",
        "Use a table to organize the information as you listen. (Correct: 'Type | Species A | Species B.' | Incorrect: 'Just write sentences.')"
      ],
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
      transcript: 'Today we are exploring symbiosis, which refers to close and long-term biological interactions between two different biological organisms. There are three main types: mutualism, commensalism, and parasitism. In mutualism, both species benefit. A classic example is the relationship between bees and flowers. Commensalism occurs when one species benefits while the other is neither helped nor harmed, like barnacles on a whale. Finally, parasitism is where one species, the parasite, benefits at the expense of the other, the host. Think of ticks on a dog. Understanding these relationships is key to understanding how ecosystems function and maintain balance.',
      content: 'Focus on the three types of symbiosis and the examples provided.',
      questions: [
        {
          id: 'l7-1',
          text: 'What is the definition of mutualism according to the lecture?',
          options: [
            'One species benefits while the other is harmed.',
            'Both species benefit from the relationship.',
            'One species benefits while the other is unaffected.',
            'Neither species benefits.'
          ],
          correctAnswer: 1,
          explanation: 'Mutualism is a symbiotic relationship where both organisms benefit. For example: "Bees get nectar from flowers, while flowers get pollinated by the bees."'
        },
        {
          id: 'l7-2',
          text: 'Which example of parasitism is mentioned by the professor?',
          options: ['Bees and flowers', 'Ticks on a dog', 'Barnacles on a whale', 'Clownfish and anemones'],
          correctAnswer: 1,
          explanation: 'Ticks are a classic example of parasites that harm their host. For example: "A tick feeds on a dog\'s blood, potentially transmitting diseases while the dog is weakened."'
        },
        {
          id: 'l7-3',
          text: 'What is commensalism?',
          options: ['Both species benefit.', 'One benefits, the other is harmed.', 'One benefits, the other is unaffected.', 'Both are harmed.'],
          correctAnswer: 2,
          explanation: 'In commensalism, one benefits and the other is neutral. For example: "The whale is not bothered by the barnacles, but the barnacles get a ride and access to food."'
        },
        {
          id: 'l7-4',
          text: 'The relationship between barnacles and a whale is an example of:',
          options: ['Mutualism', 'Commensalism', 'Parasitism', 'Competition'],
          correctAnswer: 1,
          explanation: 'The professor uses this as an example of commensalism. For example: "The barnacles benefit from the movement of the whale through nutrient-rich waters."'
        },
        {
          id: 'l7-5',
          text: 'In parasitism, the species that is harmed is called the _______ .',
          options: ['Parasite', 'Host', 'Guest', 'Victim'],
          correctAnswer: 1,
          explanation: 'The professor identifies the harmed species as the "host". For example: "The host provides the resources that the parasite needs to survive."'
        },
        {
          id: 'l7-6',
          text: 'Symbiosis refers to _______ biological interactions.',
          options: ['Short-term', 'Close and long-term', 'Aggressive', 'Rare'],
          correctAnswer: 1,
          explanation: 'It refers to close and long-term interactions. For example: "These relationships often evolve over millions of years."'
        },
        {
          id: 'l7-7',
          text: 'How many main types of symbiosis are discussed?',
          options: ['Two', 'Three', 'Four', 'Five'],
          correctAnswer: 1,
          explanation: 'The professor discusses mutualism, commensalism, and parasitism. For example: "These three categories cover the majority of specialized species interactions."'
        },
        {
          id: 'l7-8',
          text: 'Which relationship is described as "win-win"?',
          options: ['Mutualism', 'Commensalism', 'Parasitism', 'Predation'],
          correctAnswer: 0,
          explanation: 'Mutualism benefits both species. For example: "Both partners gain something valuable from the interaction."'
        },
        {
          id: 'l7-9',
          text: 'The professor implies that understanding these relationships is key to:',
          options: ['Saving endangered species', 'Understanding how ecosystems function', 'Predicting the weather', 'Improving agriculture'],
          correctAnswer: 1,
          explanation: 'He says it\'s key to understanding ecosystem function and balance. For example: "Symbiosis helps maintain the complex web of life in a habitat."'
        },
        {
          id: 'l7-10',
          text: 'A tick on a dog is an example of:',
          options: ['Mutualism', 'Commensalism', 'Parasitism', 'Cooperation'],
          correctAnswer: 2,
          explanation: 'The tick (parasite) benefits at the expense of the dog (host). For example: "The tick gains nutrients while the dog suffers from blood loss or irritation."'
        }
      ]
    },
    {
      id: 'list-8',
      title: 'Academic Lecture: Economics - Supply and Demand',
      description: 'A fundamental look at how market forces determine prices.',
      tips: [
        "Economics lectures often explain relationships between variables. (Correct: 'Price vs. Demand.' | Incorrect: 'Economics is only about money.')",
        "Understand the 'Law of Supply' and the 'Law of Demand'. (Correct: 'Higher price, lower demand.' | Incorrect: 'Higher price, higher demand.')",
        "Listen for what happens to price when supply or demand changes. (Correct: 'Scarcity increases price.' | Incorrect: 'Abundance increases price.')",
        "Note the definition of 'equilibrium price'. (Correct: 'Where supply equals demand.' | Incorrect: 'The highest possible price.')",
        "Think of a real-world product and apply these principles to it. (Correct: 'Gasoline prices.' | Incorrect: 'The professor's tie.')"
      ],
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
      transcript: 'In economics, the law of supply and demand is a fundamental principle that explains how prices are determined in a market. Demand refers to how much of a product or service is desired by buyers, while supply represents how much the market can offer. Generally, if demand increases and supply remains the same, the price will go up. Conversely, if supply increases and demand remains the same, the price will go down. The point where the quantity demanded equals the quantity supplied is known as the equilibrium price. At this point, the market is cleared, and there is no surplus or shortage of the product.',
      content: 'Understand the relationship between supply, demand, and price.',
      questions: [
        {
          id: 'l8-1',
          text: 'What happens to the price of a product if demand increases but supply remains constant?',
          options: ['The price decreases.', 'The price remains the same.', 'The price increases.', 'The product becomes free.'],
          correctAnswer: 2,
          explanation: 'Higher demand with limited supply typically leads to higher prices. For example: "If a new video game is very popular but only a few copies are available, the price may rise."'
        },
        {
          id: 'l8-2',
          text: 'What is the "equilibrium price"?',
          options: [
            'The highest price a seller can charge.',
            'The lowest price a buyer will pay.',
            'The price where quantity demanded equals quantity supplied.',
            'The price set by the government.'
          ],
          correctAnswer: 2,
          explanation: 'Equilibrium is the point where market forces are balanced. For example: "At the equilibrium price, every buyer who wants the product can find a seller who is willing to provide it."'
        },
        {
          id: 'l8-3',
          text: 'Demand refers to:',
          options: ['How much a product is offered.', 'How much a product is desired by buyers.', 'The cost of production.', 'The profit made by sellers.'],
          correctAnswer: 1,
          explanation: 'Demand is the desire of buyers for a product. For example: "High demand for a new smartphone means many people want to buy it."'
        },
        {
          id: 'l8-4',
          text: 'Supply represents:',
          options: ['The number of buyers.', 'How much the market can offer.', 'The quality of the product.', 'The advertising budget.'],
          correctAnswer: 1,
          explanation: 'Supply is the amount available in the market. For example: "A bumper crop of apples increases the supply in grocery stores."'
        },
        {
          id: 'l8-5',
          text: 'If supply increases and demand remains the same, the price will:',
          options: ['Go up', 'Go down', 'Stay the same', 'Disappear'],
          correctAnswer: 1,
          explanation: 'Abundance typically leads to lower prices. For example: "When there are too many houses for sale and not enough buyers, house prices drop."'
        },
        {
          id: 'l8-6',
          text: 'What happens when the market is "cleared"?',
          options: ['There is a large surplus.', 'There is a severe shortage.', 'There is no surplus or shortage.', 'The market closes.'],
          correctAnswer: 2,
          explanation: 'At equilibrium, the market is cleared. For example: "Every item produced is sold, and every buyer\'s need is met."'
        },
        {
          id: 'l8-7',
          text: 'The law of supply and demand is a _______ principle.',
          options: ['Minor', 'Fundamental', 'Complex', 'Irrelevant'],
          correctAnswer: 1,
          explanation: 'The professor calls it a fundamental principle. For example: "It is the basis for understanding how free markets operate."'
        },
        {
          id: 'l8-8',
          text: 'Which of these would likely cause a price increase?',
          options: ['A decrease in demand', 'An increase in supply', 'A decrease in supply with constant demand', 'A decrease in both'],
          correctAnswer: 2,
          explanation: 'Scarcity (lower supply) drives prices up. For example: "A drought that destroys orange crops will cause the price of orange juice to rise."'
        },
        {
          id: 'l8-9',
          text: 'The professor implies that prices are determined by:',
          options: ['The government', 'Market forces', 'Individual sellers only', 'Individual buyers only'],
          correctAnswer: 1,
          explanation: 'Prices are determined by the interaction of supply and demand. For example: "The market naturally adjusts prices based on the balance of these two forces."'
        },
        {
          id: 'l8-10',
          text: 'What is the result of a "shortage"?',
          options: ['Price decreases', 'Price increases', 'Supply equals demand', 'No one wants the product'],
          correctAnswer: 1,
          explanation: 'A shortage (demand > supply) leads to higher prices. For example: "When a popular toy is sold out everywhere, people are willing to pay more to get one."'
        }
      ]
    },
    {
      id: 'list-9',
      title: 'Academic Lecture: Geology - Plate Tectonics',
      description: 'Understanding the dynamic forces that shape the Earth\'s surface.',
      tips: [
        "Listen for the names of the different types of plate boundaries. (Correct: 'Convergent, divergent, transform.' | Incorrect: 'Up, down, sideways.')",
        "Identify the geological events associated with each boundary. (Correct: 'Mountains at convergent boundaries.' | Incorrect: 'Deserts at divergent boundaries.')",
        "Note the role of the Earth's mantle and convection currents. (Correct: 'Heat drives the movement.' | Incorrect: 'The wind moves the plates.')",
        "Pay attention to the specific examples of boundaries mentioned. (Correct: 'The San Andreas Fault.' | Incorrect: 'The Grand Canyon.')",
        "Visualize the plates moving and interacting as the professor explains. (Correct: 'Imagine giant puzzle pieces.' | Incorrect: 'Just read the text.')"
      ],
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
      transcript: `Professor: Today we're diving into plate tectonics. The Earth's outer shell, the lithosphere, is broken into several large plates that float on the semi-liquid mantle below. These plates are constantly moving, driven by convection currents in the mantle.

There are three main types of boundaries where these plates meet. Convergent boundaries occur where plates collide. This can create massive mountain ranges, like the Himalayas, or deep ocean trenches. Divergent boundaries are where plates pull apart, often creating new crust as magma rises to the surface, like at the Mid-Atlantic Ridge. 

Finally, transform boundaries are where plates slide past each other horizontally. The San Andreas Fault in California is a famous example. These movements are responsible for earthquakes, volcanic activity, and the slow but steady reshaping of our continents over millions of years.`,
      content: 'Analyze the three types of plate boundaries and their geological consequences.',
      questions: [
        {
          id: 'l9-1',
          text: 'What is the Earth\'s outer shell called?',
          options: ['Mantle', 'Core', 'Lithosphere', 'Atmosphere'],
          correctAnswer: 2,
          explanation: 'The professor identifies the outer shell as the lithosphere. For example: "The lithosphere includes the crust and the uppermost part of the mantle."'
        },
        {
          id: 'l9-2',
          text: 'What drives the movement of the tectonic plates?',
          options: ['Ocean currents', 'Wind patterns', 'Convection currents in the mantle', 'The Moon\'s gravity'],
          correctAnswer: 2,
          explanation: 'Heat-driven convection currents in the mantle move the plates. For example: "The rising and sinking of hot rock creates a slow-moving conveyor belt effect."'
        },
        {
          id: 'l9-3',
          text: 'What happens at a convergent boundary?',
          options: ['Plates pull apart', 'Plates slide past each other', 'Plates collide', 'Plates disappear'],
          correctAnswer: 2,
          explanation: 'Convergent boundaries are where plates collide. For example: "When two continental plates crash into each other, the crust is pushed upward to form mountains."'
        },
        {
          id: 'l9-4',
          text: 'The Himalayas were formed at which type of boundary?',
          options: ['Divergent', 'Convergent', 'Transform', 'Static'],
          correctAnswer: 1,
          explanation: 'The professor uses the Himalayas as an example of a convergent boundary. For example: "The collision of the Indian and Eurasian plates created the world\'s highest peaks."'
        },
        {
          id: 'l9-5',
          text: 'What is created at a divergent boundary?',
          options: ['Deep trenches', 'New crust', 'Horizontal faults', 'Extinct volcanoes'],
          correctAnswer: 1,
          explanation: 'Magma rises to create new crust as plates pull apart. For example: "The seafloor spreads as new volcanic rock is added to the edges of the plates."'
        },
        {
          id: 'l9-6',
          text: 'The San Andreas Fault is an example of a _______ boundary.',
          options: ['Convergent', 'Divergent', 'Transform', 'Subduction'],
          correctAnswer: 2,
          explanation: 'It is a transform boundary where plates slide past each other. For example: "The horizontal movement along the fault is responsible for many of California\'s earthquakes."'
        },
        {
          id: 'l9-7',
          text: 'What is the Mid-Atlantic Ridge an example of?',
          options: ['Convergent boundary', 'Divergent boundary', 'Transform boundary', 'Mountain range'],
          correctAnswer: 1,
          explanation: 'The professor mentions it as a divergent boundary. For example: "The Atlantic Ocean is slowly getting wider as the plates on either side move apart."'
        },
        {
          id: 'l9-8',
          text: 'How do plates move at a transform boundary?',
          options: ['They collide head-on.', 'They pull away from each other.', 'They slide past each other horizontally.', 'One sinks below the other.'],
          correctAnswer: 2,
          explanation: 'Transform boundaries involve horizontal sliding. For example: "The plates often get stuck and then suddenly slip, causing powerful earthquakes."'
        },
        {
          id: 'l9-9',
          text: 'The semi-liquid layer below the plates is the _______ .',
          options: ['Crust', 'Mantle', 'Outer core', 'Inner core'],
          correctAnswer: 1,
          explanation: 'The plates float on the semi-liquid mantle. For example: "The high temperature and pressure in the mantle allow the rock to flow very slowly."'
        },
        {
          id: 'l9-10',
          text: 'Plate movements are responsible for all of the following EXCEPT:',
          options: ['Earthquakes', 'Volcanic activity', 'Reshaping continents', 'Tides'],
          correctAnswer: 3,
          explanation: 'Tides are caused by the Moon\'s gravity, not plate tectonics. For example: "While tectonics shapes the land, the ocean\'s movements are driven by external forces."'
        }
      ]
    },
    {
      id: 'list-10',
      title: 'Academic Lecture: Literature - The Hero\'s Journey',
      description: 'Exploring the universal pattern found in myths and stories around the world.',
      tips: [
        "Listen for the name of the scholar who identified this pattern. (Correct: 'Joseph Campbell.' | Incorrect: 'William Shakespeare.')",
        "Identify the three main stages of the journey. (Correct: 'Departure, Initiation, Return.' | Incorrect: 'Beginning, middle, end.')",
        "Note the common elements like the 'Call to Adventure' and the 'Mentor'. (Correct: 'The hero is called to leave home.' | Incorrect: 'The hero stays home.')",
        "Pay attention to the concept of the 'Monomyth'. (Correct: 'One universal story.' | Incorrect: 'Many different stories.')",
        "Think of a famous movie or book and see if it fits this pattern. (Correct: 'Star Wars or Harry Potter.' | Incorrect: 'A cookbook.')"
      ],
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
      transcript: `Professor: Today we're discussing the "Hero's Journey," a concept popularized by Joseph Campbell in his book "The Hero with a Thousand Faces." Campbell identified a universal pattern that appears in myths, legends, and stories from cultures all over the world. He called this the "Monomyth."

The journey typically follows three main stages: Departure, Initiation, and Return. In the Departure, the hero receives a "Call to Adventure" and leaves their ordinary world. They often meet a Mentor who provides guidance or a magical tool. 

During the Initiation, the hero faces a series of trials and challenges, eventually reaching the "Abyss" or the greatest danger. Finally, in the Return, the hero comes back to their ordinary world, changed by their experiences and often bringing a "boon" or a gift to help their community. This pattern is so powerful that it still forms the basis for many of our most popular modern stories and films.`,
      content: 'Analyze the structure and significance of the Hero\'s Journey in literature and mythology.',
      questions: [
        {
          id: 'l10-1',
          text: 'Who popularized the concept of the Hero\'s Journey?',
          options: ['J.R.R. Tolkien', 'Joseph Campbell', 'George Lucas', 'Homer'],
          correctAnswer: 1,
          explanation: 'The professor mentions Joseph Campbell. For example: "Campbell\'s work has influenced generations of writers and filmmakers."'
        },
        {
          id: 'l10-2',
          text: 'What is the "Monomyth"?',
          options: ['A story about one person', 'A universal pattern in myths and stories', 'A myth that is only found in one culture', 'A modern type of novel'],
          correctAnswer: 1,
          explanation: 'The Monomyth is the universal pattern Campbell identified. For example: "Despite different settings and characters, the underlying structure of the hero\'s story remains the same."'
        },
        {
          id: 'l10-3',
          text: 'What are the three main stages of the journey?',
          options: ['Birth, Life, Death', 'Beginning, Middle, End', 'Departure, Initiation, Return', 'Conflict, Climax, Resolution'],
          correctAnswer: 2,
          explanation: 'The professor lists Departure, Initiation, and Return. For example: "Each stage contains specific milestones that the hero must achieve."'
        },
        {
          id: 'l10-4',
          text: 'What happens during the "Departure" stage?',
          options: ['The hero faces their greatest fear.', 'The hero receives a Call to Adventure.', 'The hero returns home with a gift.', 'The hero defeats the villain.'],
          correctAnswer: 1,
          explanation: 'The hero is called to leave their ordinary world. For example: "The call can be a message, a mysterious event, or a personal choice to seek change."'
        },
        {
          id: 'l10-5',
          text: 'What is the role of the "Mentor"?',
          options: ['To challenge the hero', 'To provide guidance or a magical tool', 'To be the main villain', 'To stay at home'],
          correctAnswer: 1,
          explanation: 'The mentor helps the hero prepare for the journey. For example: "Characters like Obi-Wan Kenobi or Dumbledore serve as classic mentors."'
        },
        {
          id: 'l10-6',
          text: 'The "Abyss" represents:',
          options: ['The hero\'s home', 'The greatest danger or trial', 'The end of the story', 'A peaceful place'],
          correctAnswer: 1,
          explanation: 'The Abyss is the point of greatest danger. For example: "It is the hero\'s lowest point, where they must face their inner or outer demons."'
        },
        {
          id: 'l10-7',
          text: 'What does the hero often bring back in the "Return" stage?',
          options: ['A new weapon', 'A "boon" or gift for the community', 'A map to a new world', 'Nothing, they are the same'],
          correctAnswer: 1,
          explanation: 'The hero brings back a "boon" to help others. For example: "The boon can be knowledge, a cure, or a new sense of peace for their people."'
        },
        {
          id: 'l10-8',
          text: 'The professor implies that the Hero\'s Journey is _______ .',
          options: ['Outdated', 'Only found in ancient myths', 'Still the basis for many modern stories', 'Difficult to understand'],
          correctAnswer: 2,
          explanation: 'He says it still forms the basis for many popular modern stories. For example: "Blockbuster movies often follow the exact steps outlined by Campbell."'
        },
        {
          id: 'l10-9',
          text: 'In which stage does the hero face a series of trials?',
          options: ['Departure', 'Initiation', 'Return', 'None of the above'],
          correctAnswer: 1,
          explanation: 'Trials and challenges occur during the Initiation. For example: "These tests prepare the hero for the final confrontation in the Abyss."'
        },
        {
          id: 'l10-10',
          text: 'The "ordinary world" is where the hero _______ .',
          options: ['Ends their journey', 'Starts their journey', 'Faces the Abyss', 'Meets the Mentor'],
          correctAnswer: 1,
          explanation: 'The hero leaves the ordinary world at the start. For example: "The ordinary world represents the hero\'s safe, familiar, but often limited life."'
        }
      ]
    }
  ]
};
