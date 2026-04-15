import { Category } from '../types';

export const STUDY_GUIDE_CATEGORY: Category = {
  id: 'study-guide',
  title: 'Study Guide',
  icon: 'book',
  lessons: [
    {
      id: 'sg-4',
      title: 'Grammar & Tense Formulas',
      description: 'Quick reference for common tenses and structures.',
      content: `
        <div class="space-y-8">
          <h3 class="text-2xl font-bold text-primary">Tense Formulas Table</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse border border-border">
              <thead>
                <tr class="bg-primary/10">
                  <th class="border border-border p-3 text-left text-primary">Tense</th>
                  <th class="border border-border p-3 text-left text-primary">Formula</th>
                  <th class="border border-border p-3 text-left text-primary">Example</th>
                </tr>
              </thead>
              <tbody class="text-text">
                <tr>
                  <td class="border border-border p-3 font-bold">Simple Present</td>
                  <td class="border border-border p-3">S + V1 (s/es)</td>
                  <td class="border border-border p-3">He works every day.</td>
                </tr>
                <tr class="bg-surface-variant">
                  <td class="border border-border p-3 font-bold">Present Continuous</td>
                  <td class="border border-border p-3">S + am/is/are + V-ing</td>
                  <td class="border border-border p-3">She is studying now.</td>
                </tr>
                <tr>
                  <td class="border border-border p-3 font-bold">Simple Past</td>
                  <td class="border border-border p-3">S + V2</td>
                  <td class="border border-border p-3">They visited Paris last year.</td>
                </tr>
                <tr class="bg-surface-variant">
                  <td class="border border-border p-3 font-bold">Past Continuous</td>
                  <td class="border border-border p-3">S + was/were + V-ing</td>
                  <td class="border border-border p-3">I was sleeping when you called.</td>
                </tr>
                <tr>
                  <td class="border border-border p-3 font-bold">Present Perfect</td>
                  <td class="border border-border p-3">S + have/has + V3</td>
                  <td class="border border-border p-3">We have finished the project.</td>
                </tr>
                <tr class="bg-surface-variant">
                  <td class="border border-border p-3 font-bold">Simple Future</td>
                  <td class="border border-border p-3">S + will + V1</td>
                  <td class="border border-border p-3">It will rain tomorrow.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="text-2xl font-bold text-primary">Irregular Verbs (Common)</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 bg-surface-variant rounded-xl border border-border">
              <p class="font-bold mb-2 text-primary">V1 - V2 - V3</p>
              <ul class="space-y-1 text-sm text-text-muted">
                <li>Go - Went - Gone</li>
                <li>Eat - Ate - Eaten</li>
                <li>Do - Did - Done</li>
                <li>See - Saw - Seen</li>
              </ul>
            </div>
            <div class="p-4 bg-surface-variant rounded-xl border border-border">
              <p class="font-bold mb-2 text-primary">V1 - V2 - V3</p>
              <ul class="space-y-1 text-sm text-text-muted">
                <li>Take - Took - Taken</li>
                <li>Write - Wrote - Written</li>
                <li>Speak - Spoke - Spoken</li>
                <li>Give - Gave - Given</li>
              </ul>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'sg-5',
      title: 'Fluency & Pronunciation Tips',
      description: 'How to sound more natural and confident.',
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Strategies for Fluency</h3>
          <div class="space-y-4">
            <div class="p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <h4 class="font-bold text-primary mb-2">1. Shadowing Technique</h4>
              <p class="text-sm text-text-muted">Listen to a native speaker and repeat exactly what they say with a minimal delay. This helps with rhythm, intonation, and speed.</p>
            </div>
            <div class="p-6 bg-secondary/5 rounded-2xl border border-secondary/10">
              <h4 class="font-bold text-secondary mb-2">2. Use Fillers Wisely</h4>
              <p class="text-sm text-text-muted">Instead of silence, use natural fillers like "Well...", "Actually...", "I mean...", or "Let me think about that for a second."</p>
            </div>
            <div class="p-6 bg-surface-variant rounded-2xl border border-border">
              <h4 class="font-bold text-primary mb-2">3. Record and Review</h4>
              <p class="text-sm text-text-muted">Record yourself speaking on a topic for 1 minute. Listen back and identify where you hesitated or made grammatical errors.</p>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'sg-6',
      title: 'Advanced TOEFL Strategies',
      description: 'Mastering the most difficult parts of the test.',
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Reading & Listening Mastery</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="card-base p-6">
              <h4 class="font-bold text-primary mb-3">Reading: Active Scanning</h4>
              <p class="text-sm text-text-muted leading-relaxed">
                Don't read the whole passage first. Read the first paragraph, then go to the questions. Scan for keywords in the text to find the relevant section for each question.
              </p>
            </div>
            <div class="card-base p-6">
              <h4 class="font-bold text-primary mb-3">Listening: Main Idea vs. Detail</h4>
              <p class="text-sm text-text-muted leading-relaxed">
                The first question is almost always about the main idea. Listen for the "big picture" in the first 30 seconds, then focus on specific examples and reasons.
              </p>
            </div>
          </div>

          <h3 class="text-2xl font-bold text-primary">Writing & Speaking Templates</h3>
          <div class="p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <p class="font-bold text-primary mb-4">The "PEEL" Method for Writing:</p>
            <ul class="space-y-3 text-sm text-text-muted">
              <li><strong class="text-primary">P - Point:</strong> State your main argument clearly.</li>
              <li><strong class="text-primary">E - Evidence:</strong> Provide a fact or example to support your point.</li>
              <li><strong class="text-primary">E - Explanation:</strong> Explain how the evidence supports your point.</li>
              <li><strong class="text-primary">L - Link:</strong> Link back to the main thesis or the next paragraph.</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      id: 'sg-7',
      title: 'Time Management & Test Day Tips',
      description: 'How to stay calm and focused during the exam.',
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Test Day Countdown</h3>
          <div class="space-y-4">
            <div class="flex gap-4 p-4 bg-surface-variant rounded-xl border border-border">
              <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
              <div>
                <p class="font-bold text-primary">24 Hours Before</p>
                <p class="text-sm text-text-muted">Stop studying. Relax your brain. Prepare your ID and documents. Get at least 8 hours of sleep.</p>
              </div>
            </div>
            <div class="flex gap-4 p-4 bg-surface-variant rounded-xl border border-border">
              <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
              <div>
                <p class="font-bold text-primary">Morning Of</p>
                <p class="text-sm text-text-muted">Eat a healthy breakfast. Arrive at the test center at least 30 minutes early. Avoid caffeine if it makes you anxious.</p>
              </div>
            </div>
            <div class="flex gap-4 p-4 bg-surface-variant rounded-xl border border-border">
              <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
              <div>
                <p class="font-bold text-primary">During the Test</p>
                <p class="text-sm text-text-muted">If you get stuck on a question, guess and move on. Don't leave any blanks. Use your 10-minute break to stretch and drink water.</p>
              </div>
            </div>
          </div>
        </div>
      `
    }
  ]
};
