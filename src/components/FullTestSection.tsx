import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ClipboardCheck, 
  Play, 
  Loader2, 
  CheckCircle2, 
  AlertCircle, 
  BookOpen, 
  Clock, 
  List,
  ChevronRight,
  Trophy,
  Sparkles
} from 'lucide-react';
import { generateTOEFLQuestions, generateReadingPassage } from '../services/gemini';
import { Question, SectionType } from '../types';
import QuizRenderer from './QuizRenderer';

export default function FullTestSection() {
  const [testState, setTestState] = useState<'idle' | 'generating' | 'active' | 'finished'>('idle');
  const [testType, setTestType] = useState<'TOEFL' | 'IELTS'>('TOEFL');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentSection, setCurrentSection] = useState<SectionType>('reading');
  const [scores, setScores] = useState<Record<string, number>>({});

  const startTest = async (type: 'TOEFL' | 'IELTS') => {
    setTestType(type);
    setTestState('generating');
    try {
      // Generate a mix of questions
      const readingData = await generateReadingPassage('Academic Science', type);
      
      // Assign the passage to each reading question so it only shows for them
      const readingQuestions = readingData.questions.map(q => ({
        ...q,
        readingPassage: readingData.passage
      }));

      const listening = await generateTOEFLQuestions('listening', 'University Lecture', 5);
      const structure = await generateTOEFLQuestions('structure', 'Advanced Grammar', 5);
      
      setQuestions([...readingQuestions, ...listening, ...structure]);
      setTestState('active');
    } catch (error) {
      console.error(error);
      setTestState('idle');
    }
  };

  const handleSectionComplete = (score: number) => {
    const newScores = { ...scores, [currentSection]: score };
    setScores(newScores);

    if (currentSection === 'reading') setCurrentSection('listening');
    else if (currentSection === 'listening') setCurrentSection('structure');
    else setTestState('finished');
  };

  if (testState === 'generating') {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-8">
        <div className="relative">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center text-primary">
            <Sparkles size={32} />
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-2">Generating Your {testType} Test</h3>
          <p className="text-text-muted">Gemini is curating a unique set of academic questions for you...</p>
        </div>
      </div>
    );
  }

  if (testState === 'finished') {
    const avgScore = Math.round(Object.values(scores).reduce((a, b) => a + b, 0) / Object.keys(scores).length);
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl mx-auto py-12"
      >
        <div className="card-base p-12 text-center">
          <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-8">
            <Trophy size={48} />
          </div>
          <h2 className="text-4xl font-black text-primary mb-4">Test Complete!</h2>
          <p className="text-text-muted text-lg mb-12">Here is your proficiency breakdown for the {testType} simulation.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {Object.entries(scores).map(([section, score]) => (
              <div key={section} className="p-6 bg-surface-variant rounded-2xl border border-border">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">{section}</p>
                <p className="text-3xl font-black text-primary">{score}%</p>
              </div>
            ))}
          </div>

          <div className="p-8 bg-primary rounded-3xl text-white mb-12">
            <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-80">Overall Proficiency</p>
            <h4 className="text-5xl font-black">{avgScore}%</h4>
            <p className="mt-4 text-indigo-100">
              {avgScore >= 80 ? "Excellent! You are ready for the real exam." : 
               avgScore >= 60 ? "Good progress. Focus on your weaker sections to reach the top tier." : 
               "Keep practicing. Consistency is key to mastering academic English."}
            </p>
          </div>

          <button 
            onClick={() => setTestState('idle')}
            className="px-8 py-4 bg-surface-variant text-primary font-bold rounded-2xl hover:bg-border transition-all"
          >
            Back to Selection
          </button>
        </div>
      </motion.div>
    );
  }

  if (testState === 'active') {
    const sectionQuestions = questions.filter((_, i) => {
      if (currentSection === 'reading') return i < 5;
      if (currentSection === 'listening') return i >= 5 && i < 10;
      return i >= 10;
    });

    const mockLesson = {
      id: 'test',
      title: `${testType} Simulation: ${currentSection.toUpperCase()}`,
      description: `Part of your full proficiency evaluation.`,
      content: '',
      questions: sectionQuestions,
    };

    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between card-base p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <ClipboardCheck size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary">{testType} Simulation</h3>
              <p className="text-xs text-text-muted font-bold uppercase tracking-widest">Section: {currentSection}</p>
            </div>
          </div>
          <div className="flex gap-2">
            {['reading', 'listening', 'structure'].map((s) => (
              <div 
                key={s}
                className={`w-3 h-3 rounded-full ${currentSection === s ? 'bg-primary' : scores[s] !== undefined ? 'bg-green-500' : 'bg-surface-variant'}`}
              />
            ))}
          </div>
        </div>
        <QuizRenderer lesson={mockLesson as any} onComplete={handleSectionComplete} />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-12 space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
          <ClipboardCheck size={14} />
          <span>Proficiency Evaluation</span>
        </div>
        <h2 className="text-4xl font-black text-primary tracking-tight">Full Length Simulations</h2>
        <p className="text-text-muted max-w-2xl mx-auto">
          Test your skills with a comprehensive TOEFL or IELTS simulation. 
          Our AI generates fresh academic content for every attempt.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { 
            id: 'TOEFL', 
            title: 'TOEFL iBT Simulation', 
            desc: 'Academic focus with integrated tasks. Ideal for US university applications.',
            icon: BookOpen,
            color: 'bg-indigo-700'
          },
          { 
            id: 'IELTS', 
            title: 'IELTS Academic', 
            desc: 'Comprehensive evaluation of all four skills. Widely accepted globally.',
            icon: List,
            color: 'bg-amber-700'
          }
        ].map((test) => (
          <div 
            key={test.id}
            className="group card-base p-10 hover:border-primary/30 transition-all shadow-sm hover:shadow-xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className={`w-16 h-16 ${test.color} rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-lg`}>
                <test.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{test.title}</h3>
              <p className="text-text-muted leading-relaxed mb-8">{test.desc}</p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <Clock size={16} className="text-primary" />
                  <span>~45 Minutes Duration</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <Sparkles size={16} className="text-primary" />
                  <span>AI-Generated Academic Content</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-muted">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>Instant Proficiency Scoring</span>
                </div>
              </div>

              <button 
                onClick={() => startTest(test.id as any)}
                className="w-full py-5 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
              >
                <span>Start Simulation</span>
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
