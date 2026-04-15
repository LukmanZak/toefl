import { Category } from '../types';

export const WRITING_CATEGORY: Category = {
  id: 'writing',
  title: 'Writing Tasks',
  icon: 'pen-tool',
  lessons: [
    {
      id: 'w-1',
      title: 'Integrated Writing Task',
      description: 'Summarizing a lecture and explaining how it relates to a reading passage.',
      tips: [
        "Identify the three main points in the reading passage.",
        "Listen for how the professor challenges each of those points.",
        "Use a structured approach: introduction, three body paragraphs, and a conclusion.",
        "Use reporting verbs (e.g., 'the author claims', 'the professor argues').",
        "Focus on accuracy and clear connections between the two sources."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Integrated Writing</h3>
          <p class="text-on-surface-variant leading-relaxed">
            In this task, you will read a short text and then listen to a lecture on the same topic. You must explain how the lecture points challenge or support the reading points.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Reading: Provides three reasons why a certain theory is true.</p>
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Lecture: Provides three counter-arguments that disprove those reasons.</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'w1',
          text: 'What is the most common relationship between the reading and the lecture?',
          options: [
            'The lecture supports the reading.',
            'The lecture challenges or contradicts the reading.',
            'The lecture is about a completely different topic.',
            'The lecture provides more examples of the reading\'s points.'
          ],
          correctAnswer: 1,
          explanation: 'In most integrated writing tasks, the professor will present arguments that cast doubt on the points made in the reading.'
        },
        {
          id: 'w2',
          text: 'How many body paragraphs should your essay ideally have?',
          options: ['One', 'Two', 'Three', 'Five'],
          correctAnswer: 2,
          explanation: 'Since the reading and lecture usually have three main points, three body paragraphs (one for each point) is the best structure.'
        },
        {
          id: 'w3',
          text: 'Whose opinion should you include in your essay?',
          options: [
            'Your own opinion.',
            'The author\'s and the professor\'s.',
            'Only the professor\'s.',
            'Only the author\'s.'
          ],
          correctAnswer: 1,
          explanation: 'The task is to summarize and compare the two sources, not to give your own opinion.'
        },
        {
          id: 'w4',
          text: 'Which of the following is a good reporting verb?',
          options: ['Argues', 'Contends', 'Maintains', 'All of the above'],
          correctAnswer: 3,
          explanation: 'Using a variety of reporting verbs makes your writing more sophisticated.'
        },
        {
          id: 'w5',
          text: 'What is the recommended word count for this task?',
          options: ['100-150 words', '150-225 words', '300-400 words', 'Over 500 words'],
          correctAnswer: 1,
          explanation: 'The official recommendation is usually between 150 and 225 words.'
        }
      ]
    },
    {
      id: 'w-2',
      title: 'Writing for an Academic Discussion',
      description: 'Contributing to an online class discussion on a given topic.',
      tips: [
        "State your position clearly at the beginning.",
        "Respond to or build upon the ideas of the other students mentioned.",
        "Provide a new perspective or a specific example to support your point.",
        "Maintain an academic but conversational tone.",
        "Check your grammar and spelling carefully (you have 10 minutes)."
      ],
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Academic Discussion</h3>
          <p class="text-on-surface-variant leading-relaxed">
            You will read a question from a professor and two student responses. You must write your own contribution to the discussion.
          </p>
          <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Professor: "Should governments spend more money on public transportation or on improving roads for cars?"</p>
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Student A: Favors public transportation for environmental reasons.</p>
            <p class="text-sm italic pl-4 border-l-2 border-primary/20">Student B: Favors roads for personal convenience and freedom.</p>
          </div>
        </div>
      `,
      questions: [
        {
          id: 'w6',
          text: 'What is the first thing you should do in your response?',
          options: [
            'Agree with Student A.',
            'Disagree with Student B.',
            'Clearly state your own position on the topic.',
            'Ask the professor a question.'
          ],
          correctAnswer: 2,
          explanation: 'A clear statement of your own view is the most important part of your contribution.'
        },
        {
          id: 'w7',
          text: 'Is it necessary to mention the other students\' points?',
          options: [
            'No, just write your own opinion.',
            'Yes, it shows you are participating in a "discussion."',
            'Only if you agree with them.',
            'Only if you want to be polite.'
          ],
          correctAnswer: 1,
          explanation: 'Referring to the other students\' ideas demonstrates that you are engaging with the existing conversation.'
        },
        {
          id: 'w8',
          text: 'How long do you have to complete this task?',
          options: ['10 minutes', '20 minutes', '30 minutes', '45 minutes'],
          correctAnswer: 0,
          explanation: 'The "Writing for an Academic Discussion" task is a 10-minute task.'
        },
        {
          id: 'w9',
          text: 'What is the minimum word count for a good response?',
          options: ['50 words', '100 words', '200 words', '300 words'],
          correctAnswer: 1,
          explanation: 'A strong response is typically at least 100 words long.'
        },
        {
          id: 'w10',
          text: 'Which of the following is a good way to add a new idea?',
          options: [
            'I agree with Sarah, but I also think that...',
            'Another point to consider is...',
            'While David makes a good point about X, we should also look at Y...',
            'All of the above'
          ],
          correctAnswer: 3,
          explanation: 'All of these phrases help to introduce new perspectives while acknowledging the existing discussion.'
        }
      ]
    }
  ]
};
