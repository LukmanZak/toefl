import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Save, Plus, Trash2, BookOpen, Mic, List, PenTool, Loader2, Edit } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, addDoc, serverTimestamp, doc, setDoc, updateDoc, query, where, getDocs, deleteDoc } from 'firebase/firestore';
import { Category, Question, Lesson } from '../types';

interface AddModuleModalProps {
  onClose: () => void;
  user: any;
  categories: Category[];
  editingLesson?: Lesson | null;
}

export default function AddModuleModal({ onClose, user, categories, editingLesson }: AddModuleModalProps) {
  const [categoryId, setCategoryId] = useState(editingLesson?.categoryId || categories[0]?.id || '');
  const [title, setTitle] = useState(editingLesson?.title || '');
  const [description, setDescription] = useState(editingLesson?.description || '');
  const [content, setContent] = useState(editingLesson?.content || '');
  const [audioUrl, setAudioUrl] = useState(editingLesson?.audioUrl || '');
  const [readingText, setReadingText] = useState(editingLesson?.readingPassage || '');
  const [questions, setQuestions] = useState<Partial<Question>[]>(
    editingLesson?.questions || [
      { id: `q-${Date.now()}`, text: '', options: ['', '', '', ''], correctAnswer: 0, explanation: '' }
    ]
  );
  const [isSaving, setIsSaving] = useState(false);

  const handleAddQuestion = () => {
    setQuestions([...questions, { 
      id: `q-${Date.now()}-${questions.length}`, 
      text: '', 
      options: ['', '', '', ''], 
      correctAnswer: 0, 
      explanation: '' 
    }]);
  };

  const handleRemoveQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    if (!title || !categoryId) {
      alert('Please fill in the title and select a category.');
      return;
    }

    setIsSaving(true);
    try {
      const lessonId = editingLesson?.id || `custom-${Date.now()}`;
      const lessonData = {
        id: lessonId,
        categoryId,
        title,
        description,
        content,
        audioUrl,
        readingPassage: readingText,
        createdBy: editingLesson?.createdBy || user.uid,
        isCustom: editingLesson?.isCustom ?? true,
        updatedAt: serverTimestamp(),
        questions: questions.map((q, i) => ({ ...q, id: q.id || `${lessonId}-q-${i}` }))
      };

      if (editingLesson) {
        // Find the document ID for the lesson
        const q = query(collection(db, 'lessons'), where('id', '==', lessonId));
        const snap = await getDocs(q);
        if (!snap.empty) {
          await setDoc(doc(db, 'lessons', snap.docs[0].id), lessonData, { merge: true });
        } else {
          // Fallback if not found by ID field
          await setDoc(doc(db, 'lessons', lessonId), lessonData, { merge: true });
        }

        // Update questions collection (cleanup old ones first for simplicity in this custom implementation)
        const qQuery = query(collection(db, 'questions'), where('lessonId', '==', lessonId));
        const qSnap = await getDocs(qQuery);
        for (const d of qSnap.docs) {
          await deleteDoc(d.ref);
        }
      } else {
        await addDoc(collection(db, 'lessons'), {
          ...lessonData,
          createdAt: serverTimestamp()
        });
      }
      
      // Save questions to the questions collection
      for (const q of questions) {
        await addDoc(collection(db, 'questions'), {
          ...q,
          id: q.id || `${lessonId}-q-${questions.indexOf(q)}`,
          lessonId
        });
      }

      onClose();
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'lessons/questions');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-card w-full max-w-4xl rounded-[2.5rem] shadow-2xl border border-border flex flex-col max-h-[90vh]"
      >
        <div className="p-8 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              {editingLesson ? <Edit size={24} /> : <Plus size={24} />}
            </div>
            <h3 className="text-2xl font-bold text-primary">{editingLesson ? 'Edit Module' : 'Add New Module'}</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-surface-variant rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Category</label>
              <select 
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full px-4 py-3 bg-surface-variant border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none"
              >
                {categories.filter(c => !['introduction', 'study-guide', 'resources', 'full-test'].includes(c.id)).map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.title}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Module Title</label>
              <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Advanced Nouns"
                className="w-full px-4 py-3 bg-surface-variant border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Description</label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Short summary of the module..."
              className="w-full px-4 py-3 bg-surface-variant border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none h-24"
            />
          </div>

          {categoryId === 'listening' && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest flex items-center gap-2">
                <Mic size={14} /> Audio URL
              </label>
              <input 
                type="text"
                value={audioUrl}
                onChange={(e) => setAudioUrl(e.target.value)}
                placeholder="https://example.com/audio.mp3"
                className="w-full px-4 py-3 bg-surface-variant border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
          )}

          {categoryId === 'reading' && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest flex items-center gap-2">
                <List size={14} /> Reading Text
              </label>
              <textarea 
                value={readingText}
                onChange={(e) => setReadingText(e.target.value)}
                placeholder="Paste the reading passage here..."
                className="w-full px-4 py-3 bg-surface-variant border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none h-48"
              />
            </div>
          )}

          {categoryId === 'writing' && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest flex items-center gap-2">
                <PenTool size={14} /> Writing Prompt
              </label>
              <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Describe the writing task..."
                className="w-full px-4 py-3 bg-surface-variant border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none h-32"
              />
            </div>
          )}

          {!['listening', 'reading', 'writing'].includes(categoryId) && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest flex items-center gap-2">
                <BookOpen size={14} /> Lesson Content (HTML/Text)
              </label>
              <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="The main educational content..."
                className="w-full px-4 py-3 bg-surface-variant border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none h-48"
              />
            </div>
          )}

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-primary">Quiz Questions</h4>
              <button 
                onClick={handleAddQuestion}
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-xl font-bold text-sm hover:bg-primary/20 transition-all"
              >
                <Plus size={16} /> Add Question
              </button>
            </div>

            <div className="space-y-8">
              {questions.map((q, qIdx) => (
                <div key={q.id} className="p-6 bg-surface-variant rounded-2xl border border-border space-y-4 relative">
                  <button 
                    onClick={() => handleRemoveQuestion(qIdx)}
                    className="absolute top-4 right-4 text-text-muted hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Question {qIdx + 1}</label>
                    <input 
                      type="text"
                      value={q.text}
                      onChange={(e) => {
                        const newQs = [...questions];
                        newQs[qIdx].text = e.target.value;
                        setQuestions(newQs);
                      }}
                      placeholder="Enter question text..."
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {q.options?.map((opt, oIdx) => (
                      <div key={oIdx} className="flex items-center gap-3">
                        <input 
                          type="radio"
                          name={`correct-${qIdx}`}
                          checked={q.correctAnswer === oIdx}
                          onChange={() => {
                            const newQs = [...questions];
                            newQs[qIdx].correctAnswer = oIdx;
                            setQuestions(newQs);
                          }}
                          className="w-4 h-4 text-primary"
                        />
                        <input 
                          type="text"
                          value={opt}
                          onChange={(e) => {
                            const newQs = [...questions];
                            newQs[qIdx].options![oIdx] = e.target.value;
                            setQuestions(newQs);
                          }}
                          placeholder={`Option ${String.fromCharCode(65 + oIdx)}`}
                          className="flex-1 px-4 py-2 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none text-sm"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Explanation</label>
                    <input 
                      type="text"
                      value={q.explanation}
                      onChange={(e) => {
                        const newQs = [...questions];
                        newQs[qIdx].explanation = e.target.value;
                        setQuestions(newQs);
                      }}
                      placeholder="Why is this answer correct?"
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary outline-none text-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-8 border-t border-border flex justify-end gap-4">
          <button 
            onClick={onClose}
            className="px-6 py-3 font-bold text-text-muted hover:bg-surface-variant rounded-xl transition-all"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="px-10 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center gap-2 disabled:opacity-50"
          >
            {isSaving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
            <span>Save Module</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
