export type SectionType = 
  | 'introduction' 
  | 'elementary' 
  | 'junior-high' 
  | 'high-school' 
  | 'grammar-foundations'
  | 'toefl-preparation'
  | 'listening' 
  | 'structure' 
  | 'reading' 
  | 'writing'
  | 'vocabulary' 
  | 'speaking'
  | 'full-test'
  | 'study-guide' 
  | 'resources'
  | 'admin';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  readingPassage?: string;
}

export interface WritingTask {
  id: string;
  title: string;
  prompt: string;
  type: 'email' | 'essay' | 'summary';
  timeLimit?: number; // in minutes
}

export interface Lesson {
  id: string;
  categoryId?: string;
  title: string;
  description: string;
  content?: string; // Markdown or HTML for explanation
  questions?: Question[];
  audioUrl?: string; // For listening
  readingPassage?: string; // For reading
  transcript?: string; // For listening
  writingTasks?: WritingTask[];
  tips?: string[]; // Helpful tips for the module
  createdBy?: string;
  isCustom?: boolean;
}

export interface Category {
  id: SectionType;
  title: string;
  icon: string;
  description?: string;
  sortOrder?: number;
  lessons: Lesson[];
}

export interface VocabularyWord {
  word: string;
  definition: string;
  example: string;
  synonyms?: string[];
  category?: string;
}

export interface UserProgress {
  completedLessons: string[]; // Array of lesson IDs
  inProgressLessons: string[]; // Array of lesson IDs that have been started
  scores: Record<string, number>; // lessonId -> score
}
