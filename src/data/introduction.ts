import { Category } from '../types';

export const INTRODUCTION_CATEGORY: Category = {
  id: 'introduction',
  title: 'Introduction',
  icon: 'school',
  lessons: [
    {
      id: 'intro-1',
      title: 'Welcome to TOEFL Mastery',
      description: 'Learn how to use this platform to achieve your target score.',
      tips: [
        "Set a specific target score before you start studying. (Correct: 'My goal is 100.' | Incorrect: 'I want a high score.')",
        "Practice every day, even if it's only for 15 minutes. (Correct: 'Study 15 mins daily.' | Incorrect: 'Study 5 hours once a week.')",
        "Use a good pair of headphones for listening exercises. (Correct: 'Use noise-canceling ones.' | Incorrect: 'Use broken speakers.')",
        "Don't be afraid to make mistakes; they are part of learning. (Correct: 'I learned from that error.' | Incorrect: 'I am perfect.')"
      ],
      content: `
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-primary">Welcome, Scholar.</h2>
          <p class="text-lg text-text-muted leading-relaxed">
            The TOEFL (Test of English as a Foreign Language) is a high-stakes exam that measures your ability to use and understand English at the university level. 
            This platform is designed to provide you with an <strong>elite academic experience</strong>.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div class="p-6 bg-surface-variant rounded-2xl border border-border">
              <h4 class="font-bold text-primary mb-2">Listening</h4>
              <p class="text-sm text-text-muted">Understanding academic lectures and campus conversations with real-time transcripts.</p>
            </div>
            <div class="p-6 bg-surface-variant rounded-2xl border border-border">
              <h4 class="font-bold text-primary mb-2">Structure</h4>
              <p class="text-sm text-text-muted">Mastering the nuances of formal written English through error identification and sentence completion.</p>
            </div>
            <div class="p-6 bg-surface-variant rounded-2xl border border-border">
              <h4 class="font-bold text-primary mb-2">Reading</h4>
              <p class="text-sm text-text-muted">Analyzing complex research-grade texts with side-by-side split view analysis.</p>
            </div>
            <div class="p-6 bg-surface-variant rounded-2xl border border-border">
              <h4 class="font-bold text-primary mb-2">Vocabulary</h4>
              <p class="text-sm text-text-muted">Building a repertoire of high-level academic terms using interactive flashcards.</p>
            </div>
          </div>
          <p class="text-text-muted leading-relaxed mt-6">
            Use the sidebar to navigate between modules. Each module starts with a theoretical foundation followed by practice questions.
          </p>
          <div class="p-4 bg-secondary/10 border-l-4 border-secondary rounded-r-xl">
            <p class="text-sm font-medium text-secondary"><strong>Pro Tip:</strong> Consistency is key. Aim for at least 30 minutes of practice daily to see significant improvements in your score.</p>
          </div>
        </div>
      `
    }
  ]
};
