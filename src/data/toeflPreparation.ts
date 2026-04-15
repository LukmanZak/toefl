import { Category } from '../types';

export const TOEFL_PREPARATION_CATEGORY: Category = {
  id: 'toefl-preparation',
  title: 'TOEFL Preparation',
  icon: 'school',
  lessons: [
    {
      id: 'toefl-1',
      title: 'TOEFL iBT Overview',
      description: 'Understand the test format, scoring, and what to expect on test day.',
      tips: [
        "The TOEFL iBT is now a shorter, 2-hour test; focus on maintaining high concentration throughout. (Correct: 'Stay focused.' | Incorrect: 'Lose focus.')",
        "Practice the 'Writing for an Academic Discussion' task, which replaced the Independent Writing task. (Correct: 'Respond to the post.' | Incorrect: 'Write a long essay.')",
        "Familiarize yourself with the 'Integrated' tasks where you must synthesize information from both reading and listening. (Correct: 'Combine both sources.' | Incorrect: 'Only use the reading.')",
        "Use a standard QWERTY keyboard for all writing practice to build typing speed and accuracy. (Correct: 'Type fast.' | Incorrect: 'Write by hand.')",
        "Take official practice tests from ETS to get used to the real test interface and timing. (Correct: 'Simulate the test.' | Incorrect: 'Just read the book.')"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Test Format</h3>
            <p class="text-on-surface-variant leading-relaxed">
              The TOEFL iBT test measures your ability to use and understand English at the university level. It evaluates how well you combine your reading, listening, speaking, and writing skills to perform academic tasks.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Reading</h4>
                <p class="text-sm">2 passages, 10 questions each. (35 minutes)</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Listening</h4>
                <p class="text-sm">3 lectures, 2 conversations. (36 minutes)</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Speaking</h4>
                <p class="text-sm">4 tasks: 1 independent, 3 integrated. (16 minutes)</p>
              </div>
              <div class="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 class="font-bold text-primary">Writing</h4>
                <p class="text-sm">2 tasks: 1 integrated, 1 academic discussion. (29 minutes)</p>
              </div>
            </div>
            <div class="p-4 bg-primary/5 rounded-xl border border-primary/10">
              <p class="text-primary font-medium">Total Time: Approximately 2 hours.</p>
            </div>
          </div>
        `
    },
    {
      id: 'toefl-2',
      title: 'Scoring System',
      description: 'Learn how each section is graded and what scores mean.',
      tips: [
        "Each of the four sections is scored from 0 to 30, for a total score of 0 to 120. (Correct: 'Total 120.' | Incorrect: 'Total 100.')",
        "Most top-tier universities require a total score of 90-100+, with minimum sub-scores in each section. (Correct: 'Check requirements.' | Incorrect: 'Assume any score is fine.')",
        "The Speaking and Writing sections are scored by both human raters and AI to ensure fairness and accuracy. (Correct: 'Write clearly.' | Incorrect: 'Try to trick the AI.')",
        "There is no 'passing' or 'failing' score; each institution sets its own requirements. (Correct: 'Know your target.' | Incorrect: 'Just try to pass.')",
        "You can view your unofficial Reading and Listening scores immediately after finishing the test. (Correct: 'See instant results.' | Incorrect: 'Wait 10 days for all.')"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Score Breakdown</h3>
            <p class="text-on-surface-variant leading-relaxed">
              Your score report provides a detailed look at your performance in each skill area.
            </p>
            <div class="space-y-4">
              <div class="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span class="font-bold">Reading</span>
                <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">0 - 30</span>
              </div>
              <div class="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span class="font-bold">Listening</span>
                <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">0 - 30</span>
              </div>
              <div class="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span class="font-bold">Speaking</span>
                <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">0 - 30</span>
              </div>
              <div class="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span class="font-bold">Writing</span>
                <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">0 - 30</span>
              </div>
            </div>
          </div>
        `
    },
    {
      id: 'toefl-3',
      title: 'Test Day Strategy',
      description: 'Tips for managing time and stress during the actual exam.',
      tips: [
        "Arrive at the test center at least 30 minutes early for the check-in process. (Correct: 'Be early.' | Incorrect: 'Arrive exactly on time.')",
        "Bring your valid ID (usually a passport) as you will not be allowed to test without it. (Correct: 'Bring ID.' | Incorrect: 'Forget your passport.')",
        "Use the provided scratch paper and pencils to take notes during the Listening, Speaking, and Writing sections. (Correct: 'Take notes.' | Incorrect: 'Rely on memory.')",
        "Pace yourself; don't spend too much time on any single question in the Reading section. (Correct: 'Keep moving.' | Incorrect: 'Stuck on one question.')",
        "During the Speaking section, speak clearly and at a natural pace; don't try to rush. (Correct: 'Speak clearly.' | Incorrect: 'Mumble quickly.')"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Success Strategies</h3>
            <div class="grid grid-cols-1 gap-4">
              <div class="p-4 bg-green-50 rounded-xl border border-green-100">
                <h4 class="font-bold text-green-800">Note-Taking</h4>
                <p class="text-sm text-green-700">Develop a shorthand system to capture key points quickly without missing the next part of the lecture.</p>
              </div>
              <div class="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <h4 class="font-bold text-blue-800">Time Management</h4>
                <p class="text-sm text-blue-700">Monitor the on-screen clock. In Reading, aim for about 1.5 minutes per question.</p>
              </div>
              <div class="p-4 bg-purple-50 rounded-xl border border-purple-100">
                <h4 class="font-bold text-purple-800">Mental Stamina</h4>
                <p class="text-sm text-purple-700">Take deep breaths between sections to reset your focus and reduce anxiety.</p>
              </div>
            </div>
          </div>
        `
    },
    {
      id: 'toefl-4',
      title: 'Registration & Results',
      description: 'How to sign up and how to receive your official score report.',
      tips: [
        "Register for the test 2-3 months in advance to ensure you get your preferred date and location. (Correct: 'Plan ahead.' | Incorrect: 'Register last minute.')",
        "You can send your scores to up to 4 institutions for free if you select them before 10 PM on the day before the test. (Correct: 'Select early.' | Incorrect: 'Pay later for all.')",
        "Official scores are typically available in your ETS account 4-8 days after your test date. (Correct: 'Check account.' | Incorrect: 'Wait for mail.')",
        "Your TOEFL scores are valid for 2 years from the test date. (Correct: 'Check validity.' | Incorrect: 'Use old scores.')",
        "If you are not satisfied with your score, you can retake the test as many times as you wish, but not more than once in a 3-day period. (Correct: 'Retake if needed.' | Incorrect: 'Give up.')"
      ],
      content: `
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-primary">Next Steps</h3>
            <div class="p-6 bg-slate-50 rounded-[2rem] border border-slate-200">
              <h4 class="text-lg font-bold mb-4">The Registration Process</h4>
              <ol class="space-y-3 text-sm text-on-surface-variant">
                <li class="flex gap-3"><span class="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shrink-0">1</span> Create an ETS account online.</li>
                <li class="flex gap-3"><span class="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shrink-0">2</span> Select 'Register for a Test' and choose 'TOEFL iBT'.</li>
                <li class="flex gap-3"><span class="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shrink-0">3</span> Choose your location (Test Center or Home Edition) and date.</li>
                <li class="flex gap-3"><span class="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shrink-0">4</span> Complete the payment and receive your confirmation.</li>
              </ol>
            </div>
          </div>
        `
    }
  ]
};
