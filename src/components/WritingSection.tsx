import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PenTool, Send, Sparkles, Loader2, CheckCircle, AlertCircle, ChevronLeft } from 'lucide-react';
import { evaluateWriting } from '../services/gemini';
import { WritingTask } from '../types';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

export default function WritingSection() {
  const [tasks, setTasks] = useState<WritingTask[]>([]);
  const [selectedTask, setSelectedTask] = useState<WritingTask | null>(null);
  const [submission, setSubmission] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [result, setResult] = useState<{ feedback: string; score: number; improvements: string[] } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'writing_tasks'), (snapshot) => {
      const data = snapshot.docs.map(doc => doc.data() as WritingTask);
      setTasks(data);
      setIsLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'writing_tasks');
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async () => {
    if (!selectedTask || submission.trim().length < 50) return;
    
    setIsEvaluating(true);
    try {
      const evaluation = await evaluateWriting(selectedTask.prompt, submission);
      setResult(evaluation);
    } catch (error) {
      console.error(error);
    } finally {
      setIsEvaluating(false);
    }
  };

  const reset = () => {
    setSelectedTask(null);
    setSubmission('');
    setResult(null);
  };

  if (result) {
    return (
      <div className="max-w-4xl mx-auto py-12">
        <div className="card-base p-8 md:p-12 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-primary">Writing Evaluation</h3>
            <div className={`px-6 py-3 rounded-2xl text-2xl font-black ${
              result.score >= 80 ? 'bg-green-100 text-green-700' :
              result.score >= 60 ? 'bg-orange-100 text-orange-700' :
              'bg-red-100 text-red-700'
            }`}>
              {result.score}/100
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h4 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-4">Overall Feedback</h4>
              <div className="p-6 bg-surface-variant rounded-2xl text-text-muted leading-relaxed">
                {result.feedback}
              </div>
            </section>

            <section>
              <h4 className="text-sm font-bold text-text-muted uppercase tracking-widest mb-4">Key Improvements</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.improvements.map((improvement, i) => (
                  <div key={i} className="flex gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <CheckCircle size={18} className="text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-text-muted">{improvement}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <button 
            onClick={reset}
            className="mt-12 w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all"
          >
            Try Another Task
          </button>
        </div>
      </div>
    );
  }

  if (selectedTask) {
    return (
      <div className="max-w-4xl mx-auto py-12">
        <button 
          onClick={() => setSelectedTask(null)}
          className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-8 font-bold text-sm"
        >
          <ChevronLeft size={18} />
          <span>Back to Tasks</span>
        </button>

        <div className="card-base p-8 md:p-12 shadow-sm">
          <div className="mb-8">
            <span className="px-3 py-1 bg-primary/5 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">
              {selectedTask.type} Task
            </span>
            <h3 className="text-3xl font-bold text-primary mb-4">{selectedTask.title}</h3>
            <div className="p-6 bg-surface-variant rounded-2xl border border-border">
              <p className="text-text-muted leading-relaxed italic">"{selectedTask.prompt}"</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-text-muted uppercase tracking-widest">Your Response</label>
              <span className="text-xs text-text-muted">{submission.trim().split(/\s+/).filter(Boolean).length} words</span>
            </div>
            <textarea 
              value={submission}
              onChange={(e) => setSubmission(e.target.value)}
              placeholder="Start writing here..."
              className="w-full h-80 p-6 rounded-2xl border border-border bg-card focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all resize-none outline-none text-primary leading-relaxed"
            />
            {submission.trim().length < 50 && submission.length > 0 && (
              <p className="text-xs text-orange-500 flex items-center gap-1">
                <AlertCircle size={12} />
                Please write at least 50 characters for a meaningful evaluation.
              </p>
            )}
          </div>

          <button 
            onClick={handleSubmit}
            disabled={isEvaluating || submission.trim().length < 50}
            className="mt-8 w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary/90 transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg shadow-primary/20"
          >
            {isEvaluating ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                <span>Evaluating with AI...</span>
              </>
            ) : (
              <>
                <Send size={20} />
                <span>Submit for AI Evaluation</span>
              </>
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-primary mb-4 tracking-tight">Writing Practice</h2>
        <p className="text-text-muted max-w-2xl mx-auto">
          Improve your academic writing skills with real-time AI feedback. Choose a task below to get started.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div 
            key={task.id}
            onClick={() => setSelectedTask(task)}
            className="group card-base p-8 hover:border-primary/30 transition-all text-left shadow-sm hover:shadow-xl cursor-pointer"
          >
            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <PenTool size={28} />
            </div>
            <h4 className="text-xl font-bold text-primary mb-2">{task.title}</h4>
            <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-2">{task.prompt}</p>
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{task.timeLimit} mins</span>
              <div className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Start <Send size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
