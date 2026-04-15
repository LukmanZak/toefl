import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Sparkles, Loader2 } from 'lucide-react';
import { generateVocabulary } from '../services/gemini';
import { VocabularyWord } from '../types';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, onSnapshot, query, addDoc } from 'firebase/firestore';

export default function VocabularySection() {
  const [vocabulary, setVocabulary] = useState<VocabularyWord[]>([]);
  const [history, setHistory] = useState<number[]>([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [seenIndices, setSeenIndices] = useState<Set<number>>(new Set());
  const [isFlipped, setIsFlipped] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'vocabulary'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const words = snapshot.docs.map(doc => doc.data() as VocabularyWord);
      setVocabulary(words);
      
      if (words.length > 0 && history.length === 0) {
        const initialIdx = Math.floor(Math.random() * words.length);
        setHistory([initialIdx]);
        setSeenIndices(new Set([initialIdx]));
      }
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'vocabulary');
    });
    return () => unsubscribe();
  }, []);

  const currentIndex = history[historyIndex];
  const currentWord = vocabulary[currentIndex];

  if (!currentWord) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <Loader2 className="animate-spin text-primary" size={40} />
        <p className="text-text-muted font-medium">Loading vocabulary...</p>
      </div>
    );
  }

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      if (historyIndex < history.length - 1) {
        setHistoryIndex(prev => prev + 1);
      } else {
        if (seenIndices.size === vocabulary.length) {
          // Reset if all words have been seen, but keep history for going back
          const nextIdx = Math.floor(Math.random() * vocabulary.length);
          setHistory(prev => [...prev, nextIdx]);
          setHistoryIndex(prev => prev + 1);
          setSeenIndices(new Set([nextIdx]));
        } else {
          let nextIdx;
          do {
            nextIdx = Math.floor(Math.random() * vocabulary.length);
          } while (seenIndices.has(nextIdx));
          
          setHistory(prev => [...prev, nextIdx]);
          setHistoryIndex(prev => prev + 1);
          setSeenIndices(prev => new Set(prev).add(nextIdx));
        }
      }
    }, 150);
  };

  const prevCard = () => {
    if (historyIndex > 0) {
      setIsFlipped(false);
      setTimeout(() => {
        setHistoryIndex(prev => prev - 1);
      }, 150);
    }
  };

  const handleGenerateAI = async () => {
    setIsGenerating(true);
    try {
      const topics = [
        'Academic Science', 'History & Culture', 'Business & Economics', 
        'Literature & Arts', 'Technology & Innovation', 'Psychology & Sociology',
        'Environment & Ecology', 'Law & Government'
      ];
      const randomTopic = topics[Math.floor(Math.random() * topics.length)];
      const newWords = await generateVocabulary(randomTopic, 5);
      if (newWords.length > 0) {
        const firstNewIdx = vocabulary.length;
        setVocabulary(prev => [...prev, ...newWords]);
        setHistory(prev => [...prev, firstNewIdx]);
        setHistoryIndex(prev => prev + 1);
        setIsFlipped(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="text-left">
          <h2 className="text-3xl font-bold text-primary mb-2">Academic Vocabulary</h2>
          <p className="text-text-muted">Master high-frequency words found in TOEFL reading and listening.</p>
        </div>
        <button 
          onClick={handleGenerateAI}
          disabled={isGenerating}
          className="px-6 py-3 bg-primary text-white font-bold rounded-2xl shadow-lg hover:bg-primary/90 transition-all flex items-center gap-2 disabled:opacity-50 whitespace-nowrap"
        >
          {isGenerating ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              <span>Generating...</span>
            </>
          ) : (
            <>
              <Sparkles size={18} />
              <span>Generate with AI</span>
            </>
          )}
        </button>
      </div>

      <div className="relative h-96 perspective-1000">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100, rotateY: 45 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -100, rotateY: -45 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full h-full cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              className="w-full h-full relative preserve-3d"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
            >
              {/* Front */}
              <div className="absolute inset-0 backface-hidden card-base flex flex-col items-center justify-center p-12 text-center shadow-xl shadow-primary/5">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-4 block">Word</span>
                  <h3 className="text-5xl font-black text-primary tracking-tight">{currentWord.word}</h3>
                  <div className="mt-8 flex items-center gap-2 text-text-muted text-sm justify-center">
                    <Sparkles size={14} className="text-amber-400" />
                    <span>Click to flip for explanation</span>
                  </div>
                </motion.div>
              </div>

              {/* Back */}
              <div 
                className="absolute inset-0 backface-hidden bg-slate-900 text-slate-100 rounded-[2rem] shadow-2xl p-12 flex flex-col justify-center rotate-y-180 overflow-y-auto border border-indigo-500/20"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isFlipped ? 1 : 0, y: isFlipped ? 0 : 10 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="mb-6">
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Definition & Explanation</span>
                    <p className="text-xl font-medium mt-1 leading-tight">{currentWord.definition}</p>
                  </div>
                  <div className="mb-6">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">Contextual Example</span>
                    <p className="text-sm italic text-indigo-200 mt-1 leading-relaxed">"{currentWord.example}"</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Synonyms</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {currentWord.synonyms?.map(s => (
                        <span key={s} className="px-3 py-1 bg-white/10 rounded-full text-xs hover:bg-white/20 transition-colors">{s}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center gap-8 mt-12">
        <button 
          onClick={prevCard}
          className="p-4 rounded-full bg-card border border-border shadow-md hover:bg-surface-variant transition-colors text-primary"
        >
          <ChevronLeft size={24} />
        </button>
        <span className="font-bold text-primary">
          {historyIndex + 1} / {vocabulary.length}
        </span>
        <button 
          onClick={nextCard}
          className="p-4 rounded-full bg-card border border-border shadow-md hover:bg-surface-variant transition-colors text-primary"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
