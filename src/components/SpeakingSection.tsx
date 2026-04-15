import React, { useState, useRef, useEffect } from 'react';
import { Mic, Square, Play, Loader2, CheckCircle, RefreshCw, Trophy, MessageSquare, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { generateSpeakingFeedback } from '../services/gemini';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

export default function SpeakingSection() {
  const [prompts, setPrompts] = useState<string[]>([]);
  const [currentPromptIdx, setCurrentPromptIdx] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [feedback, setFeedback] = useState<{ transcription: string; feedback: string; score: number } | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'speaking_prompts'), (snapshot) => {
      const data = snapshot.docs.map(doc => doc.data().text);
      if (data.length > 0) {
        setPrompts(data);
      }
      setIsLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'speaking_prompts');
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setAudioBlob(blob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      setFeedback(null);
      setAudioBlob(null);
      setError(null);
      
      setRecordingTime(0);
      timerRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      setError("Could not access microphone. Please ensure you have given permission in your browser and that your microphone is connected.");
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  const handleProcessAudio = async () => {
    if (!audioBlob) return;
    
    setIsProcessing(true);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = async () => {
        const base64Audio = (reader.result as string).split(',')[1];
        const result = await generateSpeakingFeedback(
          base64Audio, 
          'audio/webm', 
          prompts[currentPromptIdx]
        );
        setFeedback(result);
        setIsProcessing(false);
      };
    } catch (error) {
      console.error("Error processing audio:", error);
      setIsProcessing(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const nextPrompt = () => {
    setCurrentPromptIdx((prev) => (prev + 1) % (prompts.length || 1));
    setFeedback(null);
    setAudioBlob(null);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
          <Mic size={14} />
          <span>Speaking Practice</span>
        </div>
        <h2 className="text-4xl font-black text-primary tracking-tight">Master Your Academic Speech</h2>
        <p className="text-text-muted max-w-2xl mx-auto">
          Practice your speaking skills with real TOEFL prompts. Record your response and get instant AI-powered feedback on your performance.
        </p>

        {error && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl text-red-600 dark:text-red-400 text-sm font-medium flex items-center justify-center gap-2"
          >
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            {error}
          </motion.div>
        )}
      </div>

      {/* Prompt Card */}
      <motion.div 
        layout
        className="card-base p-8 md:p-12 relative overflow-hidden"
      >
        <div className="relative z-10 space-y-8">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">Current Prompt</span>
              <h3 className="text-2xl font-bold text-primary leading-tight">
                {prompts[currentPromptIdx] || 'Loading prompt...'}
              </h3>
            </div>
            <button 
              onClick={nextPrompt}
              className="p-3 text-text-muted hover:text-primary hover:bg-surface-variant rounded-2xl transition-all"
              title="Next Prompt"
            >
              <RefreshCw size={20} />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center py-12 space-y-8 border-2 border-dashed border-border rounded-[2rem] bg-surface-variant/50">
            {isRecording ? (
              <div className="flex flex-col items-center space-y-6">
                <div className="relative">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                      <Square size={24} fill="currentColor" />
                    </div>
                  </motion.div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-mono font-bold text-primary">{formatTime(recordingTime)}</p>
                  <p className="text-xs text-text-muted font-bold uppercase tracking-widest mt-1">Recording in progress...</p>
                </div>
                <button 
                  onClick={stopRecording}
                  className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl"
                >
                  Stop Recording
                </button>
              </div>
            ) : audioBlob ? (
              <div className="flex flex-col items-center space-y-6">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                  <CheckCircle size={40} />
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-primary">Recording Captured!</p>
                  <p className="text-sm text-text-muted">Ready to analyze your response.</p>
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={startRecording}
                    className="px-6 py-3 border border-border text-text-muted font-bold rounded-xl hover:bg-surface-variant transition-all"
                  >
                    Record Again
                  </button>
                  <button 
                    onClick={handleProcessAudio}
                    disabled={isProcessing}
                    className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="animate-spin" size={18} />
                        <span>Analyzing...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles size={18} />
                        <span>Get AI Feedback</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-6">
                <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                  <Mic size={40} />
                </div>
                <div className="text-center max-w-xs">
                  <p className="text-lg font-bold text-primary">Ready to speak?</p>
                  <p className="text-sm text-text-muted">Click the button below to start your 45-second response.</p>
                </div>
                <button 
                  onClick={startRecording}
                  className="px-10 py-5 bg-primary text-white font-bold rounded-[1.5rem] hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center gap-3 group"
                >
                  <Play size={20} fill="currentColor" className="group-hover:scale-110 transition-transform" />
                  <span>Start Recording</span>
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="absolute -left-20 -top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Feedback Section */}
      <AnimatePresence>
        {feedback && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Score Card */}
              <div className="card-base p-8 flex flex-col items-center justify-center text-center">
                <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="58"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-surface-variant"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="58"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={364.4}
                      initial={{ strokeDashoffset: 364.4 }}
                      animate={{ strokeDashoffset: 364.4 - (364.4 * feedback.score) / 100 }}
                      className="text-primary"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-black text-primary">{feedback.score}</span>
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Score</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Trophy size={16} />
                  <span>Great Effort!</span>
                </div>
              </div>

              {/* Transcription Card */}
              <div className="md:col-span-2 card-base p-8 space-y-4">
                <div className="flex items-center gap-2 text-text-muted">
                  <MessageSquare size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">AI Transcription</span>
                </div>
                <p className="text-primary font-medium leading-relaxed italic">
                  "{feedback.transcription}"
                </p>
              </div>
            </div>

            {/* Detailed Feedback */}
            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-2 text-indigo-300">
                  <Sparkles size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">Detailed AI Analysis</span>
                </div>
                <div className="prose prose-invert max-w-none">
                  <p className="text-indigo-100/90 leading-relaxed text-lg whitespace-pre-line">
                    {feedback.feedback}
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <button 
                    onClick={nextPrompt}
                    className="px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-indigo-50 transition-all shadow-xl"
                  >
                    Try Another Prompt
                  </button>
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
