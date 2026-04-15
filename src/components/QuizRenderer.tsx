import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Eye, EyeOff, CheckCircle2, AlertCircle, BookOpen, ChevronLeft, Star, X as XIcon, Trophy, Sparkles, Info, FileText, ChevronRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Lesson, Question } from '../types';

interface QuizProps {
  lesson: Lesson;
  onComplete: (score: number) => void;
}

export default function QuizRenderer({ lesson, onComplete }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [isReferenceOpen, setIsReferenceOpen] = useState(false);
  const [isExplanationDrawerOpen, setIsExplanationDrawerOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const questions = lesson.questions || [];
  const currentQuestion = questions[currentQuestionIndex];
  const activeReadingPassage = currentQuestion?.readingPassage || lesson.readingPassage;

  const finalScorePercent = Math.round((score / questions.length) * 100);

  if (questions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-10">
        <div className="card-base p-8 md:p-12 shadow-sm mb-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
              <BookOpen size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-black text-primary tracking-tight">{lesson.title}</h2>
              <p className="text-text-muted font-medium">{lesson.description}</p>
            </div>
          </div>
          
          <div className="markdown-body" dangerouslySetInnerHTML={{ __html: lesson.content }} />
        </div>

        <div className="flex justify-center">
          <button 
            onClick={() => onComplete(0)}
            className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2"
          >
            <ChevronLeft size={20} />
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    const isCorrect = index === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(score + 1);
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }

    setTimeout(() => setFeedback(null), 1500);
    setShowExplanation(true);
    // Automatically open explanation drawer after answering
    setTimeout(() => setIsExplanationDrawerOpen(true), 1000);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setIsExplanationDrawerOpen(false);
      // Stop audio when moving to next question if needed, or keep it playing? 
      // Usually in TOEFL, audio plays once per module or per question. 
      // If it's a lecture, it plays once at the start.
    } else {
      setIsFinished(true);
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto py-12 md:py-20 text-center"
      >
        <div className="relative inline-block mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            className="w-32 h-32 md:w-40 md:h-40 bg-primary text-white rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl shadow-primary/30 relative z-10"
          >
            <Trophy size={64} className="md:size-80" />
          </motion.div>
          {/* Decorative circles */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 border-2 border-dashed border-primary/20 rounded-full"
          />
          <motion.div 
            animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 border border-dotted border-secondary/20 rounded-full"
          />
          {/* Floating stars */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0], 
                scale: [0, 1, 0],
                x: Math.cos(i * 60 * Math.PI / 180) * 100,
                y: Math.sin(i * 60 * Math.PI / 180) * 100
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.3,
                ease: "easeOut"
              }}
              className="absolute top-1/2 left-1/2 text-amber-400"
            >
              <Star size={24} fill="currentColor" />
            </motion.div>
          ))}
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 tracking-tight">Module Complete!</h2>
        <p className="text-text-muted text-lg md:text-xl mb-12 font-medium">
          You scored <span className="text-primary font-bold">{score}</span> out of <span className="text-primary font-bold">{questions.length}</span> ({percentage}%)
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-12 max-w-sm mx-auto">
          <div className="card-base p-6 bg-surface-variant/50">
            <div className="text-2xl font-black text-primary">{score}</div>
            <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Correct</div>
          </div>
          <div className="card-base p-6 bg-surface-variant/50">
            <div className="text-2xl font-black text-secondary">{questions.length - score}</div>
            <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Incorrect</div>
          </div>
        </div>

        {lesson.transcript && (
          <div className="mb-12 max-w-2xl mx-auto">
            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="flex items-center gap-2 mx-auto text-primary font-bold hover:underline mb-6"
            >
              {showTranscript ? <EyeOff size={20} /> : <Eye size={20} />}
              {showTranscript ? 'Hide Transcript' : 'Show Transcript'}
            </button>
            
            <AnimatePresence>
              {showTranscript && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-8 bg-surface-variant/50 rounded-3xl text-left overflow-hidden border border-primary/10"
                >
                  <h4 className="font-black text-primary mb-4 flex items-center gap-2">
                    <FileText size={18} />
                    Audio Transcript
                  </h4>
                  <div className="text-text-muted leading-relaxed whitespace-pre-wrap text-sm md:text-base">
                    {lesson.transcript}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        <button 
          onClick={() => onComplete(score)}
          className="px-10 py-5 bg-primary text-white rounded-2xl font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center gap-3 mx-auto group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Return to Dashboard</span>
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-6 md:py-12 relative min-h-[600px]">
      {/* Side Controls - Floating */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-4">
        {(lesson.readingPassage || lesson.audioUrl || lesson.content || lesson.tips) && (
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsReferenceOpen(true)}
            className="w-14 h-14 bg-primary text-white rounded-2xl shadow-xl flex items-center justify-center group relative"
          >
            <Sparkles size={24} />
            <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Study Tips
            </span>
          </motion.button>
        )}

        {showExplanation && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExplanationDrawerOpen(true)}
            className="w-14 h-14 bg-secondary text-white rounded-2xl shadow-xl flex items-center justify-center group relative"
          >
            <Info size={24} />
            <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              View Explanation
            </span>
          </motion.button>
        )}
      </div>

      {/* Reference Drawer */}
      <AnimatePresence>
        {isReferenceOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsReferenceOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-xl bg-card border-l border-border z-[70] shadow-2xl p-8 md:p-12 overflow-y-auto custom-scrollbar"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="text-2xl font-black text-primary">Pro Study Tips</h3>
                </div>
                <button 
                  onClick={() => setIsReferenceOpen(false)}
                  className="p-2 hover:bg-surface-variant rounded-xl transition-colors"
                >
                  <XIcon size={24} />
                </button>
              </div>

              <div className="space-y-6">
                {(lesson.tips || (
                  lesson.readingPassage ? [
                    "Read the entire passage carefully before looking at the questions.",
                    "Pay attention to transition words like 'however', 'therefore', and 'in addition'.",
                    "Eliminate obviously wrong answers first to increase your chances.",
                    "Don't spend too much time on a single difficult question.",
                    "Use the context of the sentence to understand unfamiliar vocabulary."
                  ] : lesson.audioUrl ? [
                    "Focus on the main idea and the speaker's tone.",
                    "Take brief notes on key points and details.",
                    "Listen for signal words like 'for example', 'in contrast', and 'specifically'.",
                    "Don't worry if you miss a word; keep listening for the overall meaning.",
                    "Pay attention to the relationship between speakers in conversations."
                  ] : [
                    "Practice every day, even if it's only for 15 minutes.",
                    "Review your mistakes to understand why you got them wrong.",
                    "Try to use new vocabulary in your own sentences.",
                    "Consistency is the key to mastering a new language.",
                    "Don't be afraid to ask for help if you're stuck on a concept."
                  ]
                )).map((tip, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-surface-variant rounded-2xl border border-border">
                    <div className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center shrink-0 font-bold text-sm">
                      {i + 1}
                    </div>
                    <div className="text-text-muted font-medium leading-relaxed markdown-body">
                      <ReactMarkdown>{tip}</ReactMarkdown>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Explanation Drawer */}
      <AnimatePresence>
        {isExplanationDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExplanationDrawerOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-secondary text-white z-[70] shadow-2xl p-8 md:p-12 overflow-y-auto custom-scrollbar"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Info size={20} />
                  </div>
                  <h3 className="text-2xl font-black">Explanation</h3>
                </div>
                <button 
                  onClick={() => setIsExplanationDrawerOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                >
                  <XIcon size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-white/10 rounded-3xl border border-white/10">
                  <p className="text-amber-200 text-[10px] font-bold uppercase tracking-widest mb-2">Detailed Breakdown</p>
                  <div className="text-lg leading-relaxed font-medium markdown-body prose-invert">
                    <ReactMarkdown>{currentQuestion.explanation}</ReactMarkdown>
                  </div>
                </div>

                <button 
                  onClick={nextQuestion}
                  className="w-full py-5 bg-white text-secondary font-black rounded-2xl shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                >
                  <span>{currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Module'}</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Feedback Overlay */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
          >
            <motion.div
              initial={{ rotate: -20 }}
              animate={{ rotate: 0 }}
              className={`p-12 rounded-full shadow-2xl backdrop-blur-md ${
                feedback === 'correct' 
                  ? 'bg-green-500/20 text-green-500 border-4 border-green-500/50' 
                  : 'bg-red-500/20 text-red-500 border-4 border-red-500/50'
              }`}
            >
              {feedback === 'correct' ? (
                <div className="relative">
                  <Star size={120} fill="currentColor" className="animate-pulse" />
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="absolute inset-0 text-amber-400"
                  >
                    <Star size={120} fill="currentColor" />
                  </motion.div>
                </div>
              ) : (
                <XIcon size={120} strokeWidth={3} />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`${activeReadingPassage ? 'max-w-[1600px]' : 'max-w-4xl'} mx-auto py-6 md:py-10 relative min-h-[600px]`}>
        {/* Quiz Header - Redesigned */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 px-4">
          <div className="flex items-center gap-6">
            <div className="relative">
              <svg className="w-16 h-16 transform -rotate-90">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                  className="text-border"
                />
                <motion.circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                  strokeDasharray={175.9}
                  initial={{ strokeDashoffset: 175.9 }}
                  animate={{ strokeDashoffset: 175.9 - (175.9 * (currentQuestionIndex + 1) / questions.length) }}
                  className="text-primary"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-black text-primary">{currentQuestionIndex + 1}</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-black text-primary leading-none mb-1">Question {currentQuestionIndex + 1}</h3>
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Progress: {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="px-5 py-2 bg-primary/5 rounded-2xl border border-primary/10 flex items-center gap-3">
              <Trophy size={16} className="text-secondary" />
              <span className="text-sm font-black text-primary">Score: {score}</span>
            </div>
          </div>
        </div>

        <div className={`${activeReadingPassage ? 'grid grid-cols-1 lg:grid-cols-2 gap-10' : 'max-w-2xl mx-auto'}`}>
          {/* Audio Player for Listening */}
          {lesson.audioUrl && (
            <div className="col-span-full mb-8">
              <div className="card-base p-6 bg-primary/5 border border-primary/10 flex items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={toggleAudio}
                    className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-all"
                  >
                    {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
                  </button>
                  <div>
                    <h4 className="text-lg font-black text-primary">Listening Material</h4>
                    <p className="text-xs font-bold text-text-muted uppercase tracking-widest">Click play to listen to the recording</p>
                  </div>
                </div>
                <audio 
                  ref={audioRef} 
                  src={lesson.audioUrl} 
                  onEnded={() => setIsPlaying(false)}
                  onPause={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                  className="hidden"
                />
                <div className="hidden md:block flex-1 max-w-xs h-2 bg-border rounded-full overflow-hidden relative">
                  <motion.div 
                    className="absolute inset-y-0 left-0 bg-primary"
                    animate={{ width: isPlaying ? '100%' : '0%' }}
                    transition={{ duration: 30, ease: "linear" }} // Dummy progress for now
                  />
                </div>
              </div>
            </div>
          )}

          {/* Reading Passage - Direct Layout */}
          {activeReadingPassage && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card-base p-6 md:p-10 shadow-xl shadow-primary/5 bg-card/50 backdrop-blur-sm h-[400px] lg:h-[600px] overflow-y-auto custom-scrollbar lg:sticky lg:top-24"
            >
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <FileText size={20} />
                </div>
                <h4 className="text-xl font-black text-primary">Reading Passage</h4>
              </div>
              <div className="prose prose-indigo max-w-none text-text-muted leading-relaxed text-lg">
                {activeReadingPassage.split('\n').map((p, i) => (
                  <p key={i} className="mb-6 last:mb-0">{p}</p>
                ))}
              </div>
            </motion.div>
          )}

          {/* Question Card */}
          <div className="space-y-8">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card-base p-8 md:p-12 shadow-xl shadow-primary/5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">
                <Sparkles size={12} />
                <span>Active Question</span>
              </div>
              
              <h4 className="text-2xl md:text-3xl font-black text-primary mb-12 leading-tight">
                {currentQuestion.text}
              </h4>

              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === currentQuestion.correctAnswer;
                    const showResult = selectedAnswer !== null;

                    let buttonClass = "w-full text-left p-6 md:p-8 rounded-3xl transition-all border-2 flex items-center justify-between group text-lg ";
                    if (!showResult) {
                      buttonClass += "bg-card border-border hover:border-primary/30 hover:bg-surface-variant shadow-sm";
                    } else if (isCorrect) {
                      buttonClass += "bg-green-500/10 border-green-500 text-green-700 font-bold shadow-lg shadow-green-500/10";
                    } else if (isSelected && !isCorrect) {
                      buttonClass += "bg-red-500/10 border-red-500 text-red-700 font-bold shadow-lg shadow-red-500/10";
                    } else {
                      buttonClass += "bg-card border-border opacity-50";
                    }

                    return (
                      <motion.button
                        key={currentQuestionIndex + '-' + index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={!showResult ? { x: 10, scale: 1.02 } : {}}
                        whileTap={!showResult ? { scale: 0.98 } : {}}
                        onClick={() => handleAnswer(index)}
                        disabled={showResult}
                        className={buttonClass}
                      >
                        <span className="font-medium">{option}</span>
                        {showResult && isCorrect && <CheckCircle2 size={24} className="text-green-500 shrink-0 ml-4" />}
                        {showResult && isSelected && !isCorrect && <AlertCircle size={24} className="text-red-500 shrink-0 ml-4" />}
                      </motion.button>
                    );
                  })}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Bottom Navigation (Only if answered) */}
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center"
                >
                  <button 
                    onClick={nextQuestion}
                    className="px-10 py-5 bg-primary text-white rounded-2xl font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center gap-3 group"
                  >
                    <span>{currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Module'}</span>
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
