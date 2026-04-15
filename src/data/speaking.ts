import { Category } from '../types';

export const SPEAKING_CATEGORY: Category = {
  id: 'speaking',
  title: 'Speaking Practice',
  icon: 'mic',
  lessons: [
    {
      id: 'sp-1',
      title: 'Independent Speaking: Personal Choice',
      description: 'Expressing and defending a personal opinion on a familiar topic.',
      tips: [
        "State your opinion clearly in the first sentence.",
        "Provide two distinct reasons for your choice.",
        "Use specific examples or details to support each reason.",
        "Use transition words (e.g., 'firstly', 'secondly', 'for example').",
        "Keep track of your time (usually 45 seconds to speak)."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Independent Speaking</h3>
          <p class="text-on-surface-variant leading-relaxed">
            In this task, you will be asked to give your opinion on a familiar topic. You will have 15 seconds to prepare and 45 seconds to speak.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="font-bold">Sample Question:</p>
            <p class="text-sm italic">"Some people prefer to study alone, while others prefer to study in a group. Which do you prefer and why?"</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'sp1',
          text: 'Which of the following is the best way to start your response?',
          options: [
            'I don\'t know, both are good.',
            'In my opinion, studying alone is better for several reasons.',
            'Group study is popular among students today.',
            'I like to study in the library.'
          ],
          correctAnswer: 1,
          explanation: 'A clear statement of your opinion is the best way to begin an independent speaking task.'
        },
        {
          id: 'sp2',
          text: 'How many reasons should you ideally provide in a 45-second response?',
          options: ['One', 'Two', 'Three', 'As many as possible'],
          correctAnswer: 1,
          explanation: 'Two well-supported reasons are usually better than one long one or many short ones.'
        },
        {
          id: 'sp3',
          text: 'What should you do if you finish your response early?',
          options: [
            'Stop talking immediately.',
            'Repeat your main point or give a brief conclusion.',
            'Start talking about a different topic.',
            'Wait in silence until the time is up.'
          ],
          correctAnswer: 1,
          explanation: 'A brief summary or conclusion helps to round out your response if you have a few seconds left.'
        },
        {
          id: 'sp4',
          text: 'Which transition word is best for introducing your second reason?',
          options: ['However', 'Furthermore', 'In addition', 'Both B and C are correct'],
          correctAnswer: 3,
          explanation: '"Furthermore" and "In addition" are both excellent for adding a second point.'
        },
        {
          id: 'sp5',
          text: 'What is the most important thing to focus on during your 15-second preparation time?',
          options: [
            'Writing down your entire response.',
            'Thinking of two main reasons and a few key words.',
            'Checking your grammar and spelling.',
            'Reading the question again and again.'
          ],
          correctAnswer: 1,
          explanation: 'Preparation time should be used to outline your main points, not to write a script.'
        }
      ]
    },
    {
      id: 'sp-2',
      title: 'Integrated Speaking: University Policy',
      description: 'Summarizing a campus announcement and a student\'s reaction to it.',
      tips: [
        "Identify the change mentioned in the reading passage.",
        "Identify the student's opinion (agree or disagree).",
        "Note the two reasons the student gives for their opinion.",
        "Do not give your own opinion; only summarize the student's.",
        "Use transition words to connect the reading and the listening."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Campus Situation Task</h3>
          <p class="text-on-surface-variant leading-relaxed">
            You will read a short text about a campus change and then listen to two students discussing it. You must summarize the student's opinion and their reasons.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Reading: The university plans to close the main library for renovations during the summer.</p>
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Listening: A student disagrees because many students take summer classes and need the library.</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'sp6',
          text: 'What is the first thing you should mention in your response?',
          options: [
            'The student\'s name.',
            'The change or policy mentioned in the reading.',
            'Your own opinion on the policy.',
            'The student\'s second reason.'
          ],
          correctAnswer: 1,
          explanation: 'Starting with a brief summary of the campus change provides necessary context for the rest of your response.'
        },
        {
          id: 'sp7',
          text: 'Whose opinion should you summarize in this task?',
          options: [
            'Your own opinion.',
            'The professor\'s opinion.',
            'The student who speaks the most or has a strong opinion.',
            'The university administration\'s opinion.'
          ],
          correctAnswer: 2,
          explanation: 'The task specifically asks you to summarize the student\'s opinion and reasons.'
        },
        {
          id: 'sp8',
          text: 'How much time do you have to speak for this task?',
          options: ['45 seconds', '60 seconds', '90 seconds', '2 minutes'],
          correctAnswer: 1,
          explanation: 'Integrated speaking tasks typically allow 60 seconds for the response.'
        },
        {
          id: 'sp9',
          text: 'Which of the following is a good transition phrase?',
          options: [
            'The reading says...',
            'The student believes that...',
            'According to the conversation...',
            'All of the above'
          ],
          correctAnswer: 3,
          explanation: 'All of these phrases help to attribute information to the correct source.'
        },
        {
          id: 'sp10',
          text: 'What should you do if you didn\'t catch one of the student\'s reasons?',
          options: [
            'Make up a reason that sounds plausible.',
            'Focus on explaining the first reason in more detail.',
            'Stop speaking and wait for the timer to end.',
            'Tell the examiner that you missed the information.'
          ],
          correctAnswer: 1,
          explanation: 'If you miss a point, it\'s better to provide a detailed and fluent explanation of what you did catch than to guess or stop.'
        }
      ]
    },
    {
      id: 'sp-3',
      title: 'Integrated Speaking: Academic Concept',
      description: 'Explaining a term using an example from a lecture.',
      tips: [
        "Define the concept briefly based on the reading.",
        "Focus most of your response on the example from the lecture.",
        "Explain how the example illustrates the concept.",
        "Use clear transitions (e.g., 'The professor provides an example of...').",
        "Maintain a steady pace and clear pronunciation."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Academic Task</h3>
          <p class="text-on-surface-variant leading-relaxed">
            You will read a short definition of an academic term and then hear a professor give an example of it. You must explain the concept using the example.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Concept: "Target Marketing" - focusing advertising on a specific group of people.</p>
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Example: A company selling cell phones to teenagers by advertising on social media.</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'sp11',
          text: 'What is the main purpose of this task?',
          options: [
            'To show that you can read fast.',
            'To show that you can summarize a lecture.',
            'To show that you can explain a concept using a specific example.',
            'To show that you agree with the professor.'
          ],
          correctAnswer: 2,
          explanation: 'The core of this task is demonstrating your ability to connect an abstract concept with a concrete example.'
        },
        {
          id: 'sp12',
          text: 'How long should your definition of the concept be?',
          options: [
            'About 10-15 seconds.',
            'At least 30 seconds.',
            'The entire 60 seconds.',
            'You don\'t need to define it.'
          ],
          correctAnswer: 0,
          explanation: 'The definition should be brief, leaving most of the time for the professor\'s example.'
        },
        {
          id: 'sp13',
          text: 'What is the most important part of your response?',
          options: [
            'The reading passage.',
            'The professor\'s example.',
            'Your own experience with the concept.',
            'The introduction and conclusion.'
          ],
          correctAnswer: 1,
          explanation: 'The example from the lecture is the most important part of the response.'
        },
        {
          id: 'sp14',
          text: 'Which transition is best for moving from the definition to the example?',
          options: [
            'In contrast...',
            'The professor illustrates this with...',
            'However...',
            'Secondly...'
          ],
          correctAnswer: 1,
          explanation: '"The professor illustrates this with..." clearly connects the concept to the example.'
        },
        {
          id: 'sp15',
          text: 'What should you do if the professor gives two examples?',
          options: [
            'Only talk about the first one.',
            'Only talk about the second one.',
            'Briefly summarize both and how they relate to the concept.',
            'Pick the one you understood better.'
          ],
          correctAnswer: 2,
          explanation: 'If there are two examples, you should try to include both, showing how they both illustrate the concept.'
        }
      ]
    }
  ]
};
