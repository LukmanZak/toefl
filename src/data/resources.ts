import { Category } from '../types';

export const RESOURCES_CATEGORY: Category = {
  id: 'resources',
  title: 'Resources',
  icon: 'link',
  lessons: [
    {
      id: 'res-3',
      title: 'Useful External Links',
      description: 'Websites and YouTube channels for extra practice.',
      content: `
        <div class="space-y-6">
          <h3 class="text-2xl font-bold text-primary">Top YouTube Channels</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://www.youtube.com/@LearnEnglishWithTVSeries" target="_blank" class="p-4 bg-card border border-border rounded-xl hover:shadow-md transition-all flex items-center gap-3">
              <div class="w-10 h-10 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </div>
              <div>
                <p class="font-bold text-sm text-primary">Learn English with TV Series</p>
                <p class="text-[10px] text-text-muted">Fun and engaging lessons.</p>
              </div>
            </a>
            <a href="https://www.youtube.com/@EnglishwithLucy" target="_blank" class="p-4 bg-card border border-border rounded-xl hover:shadow-md transition-all flex items-center gap-3">
              <div class="w-10 h-10 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </div>
              <div>
                <p class="font-bold text-sm text-primary">English with Lucy</p>
                <p class="text-[10px] text-text-muted">British English and grammar.</p>
              </div>
            </a>
          </div>

          <h3 class="text-2xl font-bold text-primary">Practice Websites</h3>
          <div class="space-y-3">
            <a href="https://www.khanacademy.org/humanities/grammar" target="_blank" class="block p-4 bg-surface-variant border border-border rounded-xl hover:bg-card transition-all">
              <p class="font-bold text-sm text-primary">Khan Academy Grammar</p>
              <p class="text-xs text-text-muted">Excellent structured grammar lessons.</p>
            </a>
            <a href="https://www.test-guide.com/free-toefl-practice-tests.html" target="_blank" class="block p-4 bg-surface-variant border border-border rounded-xl hover:bg-card transition-all">
              <p class="font-bold text-sm text-primary">Test-Guide</p>
              <p class="text-xs text-text-muted">Free TOEFL practice tests and quizzes.</p>
            </a>
          </div>

          <h3 class="text-2xl font-bold text-primary">Official Sources</h3>
          <div class="p-6 bg-primary/5 rounded-2xl border border-primary/10 space-y-4">
            <ul class="list-disc pl-6 space-y-2 text-sm text-text-muted">
              <li><strong class="text-primary">ETS Official Website:</strong> <a href="https://www.ets.org/toefl" target="_blank" class="text-primary hover:underline">ets.org/toefl</a></li>
              <li><strong class="text-primary">TOEFL Go! App:</strong> <a href="https://www.ets.org/toefl/test-takers/ibt/prepare/toefl-go-app.html" target="_blank" class="text-primary hover:underline">Official Mobile App</a></li>
              <li><strong class="text-primary">Official YouTube:</strong> <a href="https://www.youtube.com/user/TOEFLtv" target="_blank" class="text-primary hover:underline">TOEFL TV Channel</a></li>
              <li><strong class="text-primary">IELTS Official:</strong> <a href="https://www.ielts.org/" target="_blank" class="text-primary hover:underline">ielts.org</a></li>
            </ul>
          </div>
        </div>
      `
    }
  ]
};
