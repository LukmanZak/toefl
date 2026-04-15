import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  Clock, 
  List, 
  CheckCircle, 
  Play, 
  HelpCircle, 
  LogOut,
  Bell,
  Settings,
  ChevronRight,
  Sparkles,
  Loader2,
  Baby,
  Briefcase,
  Book,
  Link as LinkIcon,
  Trophy,
  LayoutDashboard,
  Menu,
  X,
  Mic,
  PenTool,
  Moon,
  Sun,
  ClipboardCheck,
  Plus,
  LogIn,
  User as UserIcon,
  Key,
  Eye,
  EyeOff,
  Edit,
  ShieldCheck,
  BarChart3,
  AlertTriangle,
  Headphones,
  Save,
  Trash2
} from 'lucide-react';
import { SectionType, Category, Lesson, Question } from './types';
import QuizRenderer from './components/QuizRenderer';
import VocabularySection from './components/VocabularySection';
import SpeakingSection from './components/SpeakingSection';
import WritingSection from './components/WritingSection';
import FullTestSection from './components/FullTestSection';
import AddModuleModal from './components/AddModuleModal';
import { generateTOEFLQuestions, generateReadingPassage } from './services/gemini';
import { auth, googleProvider, signInWithPopup, signOut, onAuthStateChanged, db, syncUserToFirestore, handleFirestoreError, OperationType } from './lib/firebase';
import { collection, query, where, onSnapshot, addDoc, doc, getDoc, updateDoc, setDoc, deleteDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import { migrateDataToFirebase } from './lib/migration';

const ICON_MAP: Record<string, any> = {
  Baby,
  GraduationCap,
  Briefcase,
  BookOpen,
  Clock,
  List,
  CheckCircle,
  Play,
  HelpCircle,
  LogOut,
  Bell,
  Settings,
  ChevronRight,
  Sparkles,
  Loader2,
  Book,
  Link: LinkIcon,
  Trophy,
  LayoutDashboard,
  Menu,
  X,
  Mic,
  PenTool,
  Moon,
  Sun,
  ClipboardCheck,
  Plus,
  LogIn,
  User: UserIcon,
  Key,
  Eye,
  EyeOff,
  Edit,
  ShieldCheck,
  BarChart3,
  Save,
  Trash2,
  baby: Baby,
  'graduation-cap': GraduationCap,
  briefcase: Briefcase,
  'book-open': BookOpen,
  clock: Clock,
  list: List,
  'check-circle': CheckCircle,
  play: Play,
  'help-circle': HelpCircle,
  'log-out': LogOut,
  bell: Bell,
  settings: Settings,
  'chevron-right': ChevronRight,
  sparkles: Sparkles,
  'loader-2': Loader2,
  book: Book,
  link: LinkIcon,
  trophy: Trophy,
  'layout-dashboard': LayoutDashboard,
  menu: Menu,
  x: X,
  mic: Mic,
  headphones: Headphones,
  'pen-tool': PenTool,
  moon: Moon,
  sun: Sun,
  'clipboard-check': ClipboardCheck,
  plus: Plus,
  'log-in': LogIn,
  user: UserIcon,
  key: Key,
  eye: Eye,
  'eye-off': EyeOff,
  edit: Edit,
  'shield-check': ShieldCheck,
  'bar-chart-3': BarChart3,
  save: Save,
  'trash-2': Trash2
};

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [firestoreError, setFirestoreError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<SectionType>('introduction');
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isAddingModule, setIsAddingModule] = useState(false);
  const [editingLesson, setEditingLesson] = useState<Lesson | null>(null);
  const [aiCodeInput, setAiCodeInput] = useState('');
  const [showAiCodeModal, setShowAiCodeModal] = useState(false);
  const [showAdminCode, setShowAdminCode] = useState(false);
  const [adminAiCode, setAdminAiCode] = useState('');
  const [isUpdatingAdminCode, setIsUpdatingAdminCode] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const [vocabularyCount, setVocabularyCount] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'vocabulary'), (snapshot) => {
      setVocabularyCount(snapshot.size);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'vocabulary');
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        try {
          await syncUserToFirestore(user);
          // Listen to user profile
          const userRef = doc(db, 'users', user.uid);
          onSnapshot(userRef, (doc) => {
            if (doc.exists()) {
              setUserProfile(doc.data());
            }
          }, (error) => {
            handleFirestoreError(error, OperationType.GET, `users/${user.uid}`);
          });

          // Run migration ONLY for the hardcoded admin
          if (user.email === 'lukmanzakaria005@gmail.com') {
            const hasMigrated = localStorage.getItem('has_migrated_v2');
            if (!hasMigrated) {
              migrateDataToFirebase().then(() => {
                localStorage.setItem('has_migrated_v2', 'true');
              }).catch(err => {
                console.error("Migration failed:", err);
              });
            }

            // Listen to admin config
            const adminRef = doc(db, 'admin', 'config');
            onSnapshot(adminRef, (doc) => {
              if (doc.exists()) {
                setAdminAiCode(doc.data().aiUnlockCode);
              }
            }, (error) => {
              handleFirestoreError(error, OperationType.GET, 'admin/config');
            });
          }
        } catch (error) {
          console.error("Auth sync error:", error);
        }
      } else {
        setUser(null);
        setUserProfile(null);
      }
      setIsAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Listen to categories from Firestore
    const catQuery = query(collection(db, 'categories'));
    const unsubscribeCats = onSnapshot(catQuery, (catSnapshot) => {
      const fetchedCategories = catSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
        lessons: [] // Initialize with empty lessons
      } as Category));

      // Listen to lessons from Firestore
      const lessonQuery = query(collection(db, 'lessons'));
      const unsubscribeLessons = onSnapshot(lessonQuery, (lessonSnapshot) => {
        const fetchedLessons = lessonSnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.data().id || doc.id
        } as Lesson));

        // Group lessons by category
        const updatedCategories = fetchedCategories.map(cat => {
          const catLessons = fetchedLessons.filter(l => l.categoryId === cat.id);
          return { ...cat, lessons: catLessons };
        }).sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

        setCategories(updatedCategories);
      }, (error) => {
        handleFirestoreError(error, OperationType.LIST, 'lessons');
      });

      return () => unsubscribeLessons();
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'categories');
    });

    return () => unsubscribeCats();
  }, []);

  const handleMigrateData = async () => {
    if (!isAdmin) return;
    setIsGenerating(true);
    try {
      await migrateDataToFirebase();
      alert('Data migration complete! All static data has been moved to Firestore.');
    } catch (error) {
      console.error("Migration error:", error);
      alert('Migration failed. Check console for details.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleLogin = async () => {
    setAuthError(null);
    try {
      console.log("Attempting login...");
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Login successful:", result.user.email);
    } catch (error: any) {
      console.error("Login failed:", error);
      setAuthError(error.message);
      if (error.code === 'auth/unauthorized-domain') {
        alert(`Domain not authorized. Please add this domain to Firebase Console: ${window.location.hostname}`);
      } else {
        alert(`Login error: ${error.message}`);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setActiveSection('introduction');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleUnlockAi = async () => {
    if (!user) return;
    try {
      const adminDoc = await getDoc(doc(db, 'admin', 'config'));
      const correctCode = adminDoc.exists() ? adminDoc.data()?.aiUnlockCode : 'ADMIN123';
      
      if (aiCodeInput === correctCode) {
        await updateDoc(doc(db, 'users', user.uid), {
          aiCode: aiCodeInput
        });
        setShowAiCodeModal(false);
        setAiCodeInput('');
      } else {
        alert('Invalid Code');
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `users/${user.uid}`);
    }
  };

  const hasAiAccess = userProfile?.aiCode === adminAiCode || userProfile?.role === 'admin';

  const currentCategory = categories.find(c => c.id === activeSection);

  const handleStartLesson = (lesson: Lesson) => {
    setActiveLesson(lesson);
  };

  const handleLessonComplete = (lessonId: string, score: number) => {
    setActiveLesson(null);
  };

  const handleGenerateAI = async () => {
    if (!currentCategory || !hasAiAccess) {
      if (!hasAiAccess) setShowAiCodeModal(true);
      return;
    }
    setIsGenerating(true);
    try {
      const elementaryTopics = [
        'Animals and their Habitats',
        'Daily Routines and Hobbies',
        'Family and Friends',
        'School Life and Subjects',
        'Food and Healthy Eating',
        'Weather and Seasons',
        'Colors and Shapes',
        'Numbers and Counting',
        'My House and Furniture',
        'Sports and Games'
      ];

      const topic = activeSection === 'listening' ? 'Academic Lecture' : 
                    activeSection === 'reading' ? 'Scientific Discovery' : 
                    activeSection === 'elementary' ? elementaryTopics[Math.floor(Math.random() * elementaryTopics.length)] :
                    activeSection === 'junior-high' ? 'Verb Tenses' :
                    activeSection === 'high-school' ? 'Conditional Sentences' :
                    'Advanced Grammar';
      
      let newLesson: Lesson;

      if (activeSection === 'reading') {
        const readingData = await generateReadingPassage(topic, 'TOEFL');
        newLesson = {
          id: `ai-${Date.now()}`,
          title: `AI Generated Reading: ${topic}`,
          description: 'Practice with a long TOEFL-style reading passage and questions.',
          questions: readingData.questions,
          readingPassage: readingData.passage
        };
      } else {
        const aiQuestions = await generateTOEFLQuestions(activeSection, topic, 10);
        newLesson = {
          id: `ai-${Date.now()}`,
          title: `AI Generated: ${topic}`,
          description: 'Practice with fresh, AI-generated questions tailored to your level.',
          content: '<p>This module was generated by Gemini to provide you with unique practice material.</p>',
          questions: aiQuestions
        };
      }
      
      setActiveLesson(newLesson);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleUpdateAdminCode = async () => {
    if (!user || user.email !== 'lukmanzakaria005@gmail.com') return;
    setIsUpdatingAdminCode(true);
    try {
      const adminRef = doc(db, 'admin', 'config');
      await setDoc(adminRef, {
        aiUnlockCode: adminAiCode,
        updatedAt: serverTimestamp(),
        updatedBy: user.uid
      }, { merge: true });
      alert('Admin AI Code updated successfully!');
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'admin/config');
    } finally {
      setIsUpdatingAdminCode(false);
    }
  };

  const isAdmin = user?.email === 'lukmanzakaria005@gmail.com';

  const menuGroups = [
    {
      label: 'Main',
      items: [
        { id: 'introduction', title: 'Introduction', icon: LayoutDashboard },
      ]
    },
    ...(isAdmin ? [{
      label: 'Administration',
      items: [
        { id: 'admin', title: 'Admin Panel', icon: ShieldCheck },
      ]
    }] : []),
    {
      label: 'Grammar Foundations',
      items: categories.filter(c => ['elementary', 'junior-high', 'high-school'].includes(c.id)).map(c => ({
        id: c.id,
        title: c.title,
        icon: ICON_MAP[c.icon as string] || BookOpen
      }))
    },
    {
      label: 'TOEFL Preparation',
      items: categories.filter(c => ['listening', 'structure', 'reading', 'writing', 'speaking', 'vocabulary', 'full-test'].includes(c.id)).map(c => ({
        id: c.id,
        title: c.title,
        icon: ICON_MAP[c.icon as string] || BookOpen
      }))
    },
    {
      label: 'Resources',
      items: categories.filter(c => ['study-guide', 'resources'].includes(c.id)).map(c => ({
        id: c.id,
        title: c.title,
        icon: ICON_MAP[c.icon as string] || BookOpen
      }))
    }
  ];

  const totalLessons = categories.reduce((acc, cat) => acc + cat.lessons.length, 0);

  useEffect(() => {
    if (userProfile?.role === 'admin') {
      const adminRef = doc(db, 'admin', 'config');
      onSnapshot(adminRef, (doc) => {
        if (doc.exists()) {
          setAdminAiCode(doc.data().aiUnlockCode);
        }
      });
    }
  }, [userProfile]);

  const handleEditLesson = (lesson: Lesson) => {
    setEditingLesson(lesson);
    setIsAddingModule(true);
  };

  const handleDeleteLesson = async (lesson: Lesson) => {
    console.log("Delete requested for lesson:", lesson.id, "isAdmin:", isAdmin);
    if (!isAdmin) {
      alert("You do not have permission to delete modules.");
      return;
    }
    if (!window.confirm(`Are you sure you want to delete "${lesson.title}"? This action cannot be undone.`)) return;

    try {
      console.log("Attempting to delete lesson:", lesson.id);
      
      // 1. Try direct deletion first (for system/migrated lessons)
      await deleteDoc(doc(db, 'lessons', lesson.id));
      
      // 2. Also try finding by 'id' field (for custom lessons with random doc IDs)
      const q = query(collection(db, 'lessons'), where('id', '==', lesson.id));
      const snap = await getDocs(q);
      
      if (!snap.empty) {
        for (const d of snap.docs) {
          if (d.id !== lesson.id) { // Avoid double delete if doc ID was already lesson.id
            await deleteDoc(doc(db, 'lessons', d.id));
          }
        }
      }
      
      // 3. Delete associated questions
      const qQuery = query(collection(db, 'questions'), where('lessonId', '==', lesson.id));
      const qSnap = await getDocs(qQuery);
      console.log(`Found ${qSnap.size} questions to delete`);
      
      for (const d of qSnap.docs) {
        await deleteDoc(d.ref);
      }
      
      alert('Module deleted successfully!');
    } catch (error) {
      console.error("Delete error:", error);
      handleFirestoreError(error, OperationType.DELETE, `lessons/${lesson.id}`);
    }
  };

  const renderStudyGuideOrResources = () => (
    <div className="space-y-12">
      <section className="relative card-base p-8 md:p-12 overflow-hidden shadow-sm">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            <Book size={12} />
            <span>Learning Materials</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-primary tracking-tight mb-6 leading-tight">
            {currentCategory?.title}
          </h3>
          <p className="text-text-muted text-lg leading-relaxed font-medium">
            {currentCategory?.id === 'study-guide' 
              ? 'Comprehensive strategies and formulas to help you master the TOEFL exam.' 
              : 'A curated list of high-quality external resources to supplement your learning.'}
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      </section>

      <div className="space-y-16">
        {currentCategory?.lessons.map((lesson, idx) => (
          <motion.div 
            key={lesson.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-xl font-black">{idx + 1}</span>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary">{lesson.title}</h4>
                <p className="text-text-muted font-medium">{lesson.description}</p>
              </div>
            </div>

            <div 
              className="card-base p-8 md:p-10 prose prose-slate dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: lesson.content || '' }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderAdmin = () => (
    <div className="space-y-8">
      <section className="relative card-base p-8 md:p-12 overflow-hidden shadow-sm">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            <ShieldCheck size={12} />
            <span>Administrator Control Panel</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-primary tracking-tight mb-6 leading-tight">
            Manage AI Access & Content
          </h3>
          <p className="text-text-muted text-lg leading-relaxed font-medium">
            Control the global AI access code and monitor system-wide learning materials.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card-base p-8 space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
              <Key size={20} />
            </div>
            <h4 className="text-xl font-bold text-primary">AI Unlock Code</h4>
          </div>
          <p className="text-sm text-text-muted">Users must enter this code to unlock AI-powered features like speaking analysis and question generation.</p>
          
          <div className="relative">
            <div className="w-full px-6 py-4 bg-surface-variant border border-border rounded-2xl font-mono text-lg tracking-widest flex items-center justify-between">
              <span>{showAdminCode ? adminAiCode : '••••••••'}</span>
              <button 
                onClick={() => setShowAdminCode(!showAdminCode)}
                className="p-2 text-text-muted hover:text-primary transition-colors"
              >
                {showAdminCode ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Update Access Code</label>
            <input 
              type="text"
              value={adminAiCode}
              onChange={(e) => setAdminAiCode(e.target.value)}
              className="w-full px-6 py-4 bg-surface-variant border border-border rounded-2xl focus:ring-2 focus:ring-primary outline-none font-mono text-lg tracking-widest"
              placeholder="Enter new AI code"
            />
          </div>

          <button 
            onClick={handleUpdateAdminCode}
            disabled={isUpdatingAdminCode}
            className="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isUpdatingAdminCode ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
            <span>Update Global Access Code</span>
          </button>
        </div>

        <div className="card-base p-8 space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
              <BarChart3 size={20} />
            </div>
            <h4 className="text-xl font-bold text-primary">System Stats</h4>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-surface-variant rounded-2xl border border-border">
              <p className="text-2xl font-black text-primary">{totalLessons}</p>
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Total Modules</p>
            </div>
            <div className="p-4 bg-surface-variant rounded-2xl border border-border">
              <p className="text-2xl font-black text-secondary">{categories.length}</p>
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Categories</p>
            </div>
          </div>
          
          <div className="p-6 bg-amber-500/10 rounded-2xl border border-amber-500/20 space-y-4">
            <div className="flex items-center gap-2 text-amber-600">
              <AlertTriangle size={18} />
              <h5 className="font-bold">Database Maintenance</h5>
            </div>
            <p className="text-sm font-medium text-amber-600">
              If data is missing or questions are not showing, you can force a re-migration of the initial static data. This will merge with existing data.
            </p>
            <button 
              onClick={handleMigrateData}
              disabled={isGenerating}
              className="w-full py-3 bg-amber-500 text-white font-bold rounded-xl shadow-lg hover:bg-amber-600 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isGenerating ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
              <span>Force Data Migration</span>
            </button>
          </div>

          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="text-sm font-medium text-primary leading-relaxed">
              Admin access allows you to edit any module directly from the learning grids. Look for the "Edit" button on module cards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLessonsGrid = () => (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="text-2xl font-bold text-primary">Available Modules</h4>
        <div className="flex items-center gap-2 text-xs font-bold text-text-muted">
          <List size={14} />
          <span>{currentCategory?.lessons.length} Modules</span>
        </div>
      </div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {currentCategory?.lessons.map((lesson) => {
          return (
            <motion.div 
              key={lesson.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`group card-base p-8 shadow-sm border transition-all cursor-pointer relative flex flex-col hover:border-primary/20 hover:shadow-md`}
              onClick={() => handleStartLesson(lesson)}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors bg-surface-variant text-secondary group-hover:bg-primary group-hover:text-white`}>
                  {activeSection === 'listening' ? <Clock size={24} /> : 
                   activeSection === 'elementary' ? <Baby size={24} /> :
                   <BookOpen size={24} />}
                </div>
                {isAdmin && (
                  <div className="flex gap-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditLesson(lesson);
                      }}
                      className="p-2 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-all flex items-center gap-2 text-xs font-bold"
                    >
                      <Edit size={14} />
                      Edit
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteLesson(lesson);
                      }}
                      className="p-2 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500/20 transition-all flex items-center gap-2 text-xs font-bold"
                    >
                      <Trash2 size={14} />
                      Delete
                    </button>
                  </div>
                )}
              </div>
              
              <h5 className="text-xl font-bold text-primary mb-2">{lesson.title}</h5>
              <p className="text-sm text-text-muted leading-relaxed mb-6 line-clamp-2">
                {lesson.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-border">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
                    {lesson.questions?.length || 0} Questions
                  </span>
                </div>
                <div className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Start <ChevronRight size={16} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );

  const renderIntroduction = () => (
    <div className="space-y-6 md:space-y-10">
      <section className="relative card-base p-6 md:p-12 overflow-hidden shadow-sm">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 md:mb-6">
            <Sparkles size={12} />
            <span>Welcome to TOEFL Mastery</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-primary tracking-tight mb-4 md:mb-6 leading-tight">
            Your Journey to Academic Success Starts Here
          </h3>
          <p className="text-text-muted text-base md:text-lg leading-relaxed font-medium">
            Master the English language from the ground up. Whether you're starting with basic grammar or diving into advanced TOEFL strategies, we've got you covered.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.slice(1, 4).map((cat, idx) => {
          const Icon = ICON_MAP[cat.icon as string] || BookOpen;
          const colors = ['bg-indigo-700', 'bg-violet-700', 'bg-amber-700'];
          return (
            <button
              key={cat.id}
              onClick={() => setActiveSection(cat.id as SectionType)}
              className="group card-base p-6 md:p-8 hover:border-primary/30 transition-all text-left shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 ${colors[idx % colors.length]} rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <Icon size={24} />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-primary mb-2">{cat.title}</h4>
              <p className="text-text-muted text-xs md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-2">{cat.description || 'Master the essentials of this level.'}</p>
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <span>Start Learning</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>

      <section className="bg-primary rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h4 className="text-2xl md:text-3xl font-bold mb-4">Ready for the TOEFL?</h4>
            <p className="text-indigo-100/80 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              Once you've mastered the foundations, head over to our TOEFL Preparation modules for intensive practice in Listening, Reading, and Structure.
            </p>
            <button 
              onClick={() => setActiveSection('listening')}
              className="px-6 md:px-8 py-3 md:py-4 bg-white text-primary font-bold rounded-2xl hover:bg-indigo-50 transition-all shadow-lg"
            >
              Go to TOEFL Prep
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 md:p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-2xl md:text-3xl font-bold text-white mb-1">{totalLessons}</p>
              <p className="text-[10px] text-indigo-200 uppercase font-bold tracking-widest">Total Lessons</p>
            </div>
            <div className="p-4 md:p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-2xl md:text-3xl font-bold text-secondary mb-1">{vocabularyCount}</p>
              <p className="text-[10px] text-indigo-200 uppercase font-bold tracking-widest">Vocab Words</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  if (!isAuthReady) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="animate-spin text-primary" size={48} />
          <p className="text-text-muted font-bold animate-pulse">Initializing TOEFL Mastery...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full card-base p-10 text-center space-y-8 shadow-2xl"
        >
          <div className="w-20 h-20 bg-primary rounded-[2rem] flex items-center justify-center text-white mx-auto shadow-xl shadow-primary/20">
            <GraduationCap size={40} />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-black text-primary tracking-tight">TOEFL Mastery</h1>
            <p className="text-text-muted font-medium">Please login to access your learning dashboard and practice modules.</p>
          </div>
          <button 
            onClick={handleLogin}
            className="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-3"
          >
            <LogIn size={20} />
            Sign in with Google
          </button>
          {authError && (
            <p className="text-red-500 text-xs font-bold bg-red-50 p-3 rounded-xl border border-red-100">
              {authError}
            </p>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-surface">
      {/* AI Code Modal */}
      <AnimatePresence>
        {showAiCodeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-card w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl border border-border relative overflow-hidden"
            >
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto">
                  <Key size={32} />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-primary">Unlock AI Features</h3>
                  <p className="text-text-muted text-sm">Enter the code provided by your administrator to enable AI-powered practice.</p>
                </div>
                <input 
                  type="text" 
                  value={aiCodeInput}
                  onChange={(e) => setAiCodeInput(e.target.value)}
                  placeholder="Enter Access Code"
                  className="w-full px-6 py-4 bg-surface-variant border border-border rounded-2xl focus:ring-2 focus:ring-primary outline-none text-center font-bold tracking-widest"
                />
                <div className="flex gap-3">
                  <button 
                    onClick={() => setShowAiCodeModal(false)}
                    className="flex-1 py-4 font-bold text-text-muted hover:bg-surface-variant rounded-2xl transition-all"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleUnlockAi}
                    className="flex-1 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
                  >
                    Unlock
                  </button>
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Add Module Modal */}
      <AnimatePresence>
        {isAddingModule && (
          <AddModuleModal 
            onClose={() => {
              setIsAddingModule(false);
              setEditingLesson(null);
            }} 
            user={user}
            categories={categories}
            editingLesson={editingLesson}
          />
        )}
      </AnimatePresence>

      {/* Floating Add Button */}
      {isAdmin && (
        <button 
          onClick={() => {
            setEditingLesson(null);
            setIsAddingModule(true);
          }}
          className="fixed bottom-8 right-8 w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 group"
          title="Add Custom Module"
        >
          <Plus size={32} />
          <span className="absolute right-20 bg-card border border-border px-4 py-2 rounded-xl text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            Add Module
          </span>
        </button>
      )}

      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`w-72 bg-card border-r border-border flex flex-col fixed h-full z-50 transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="p-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <GraduationCap size={24} />
            </div>
            <div>
              <h1 className="text-lg font-black text-primary leading-none tracking-tight">TOEFL</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mt-1">Mastery</p>
            </div>
          </div>
          <button 
            className="md:hidden p-2 text-text-muted hover:bg-surface-variant rounded-lg"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-2 custom-scrollbar">
          {menuGroups.map((group, gIdx) => (
            <div key={group.label} className={gIdx > 0 ? 'mt-8' : ''}>
              <p className="px-4 text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">
                {group.label}
              </p>
              <div className="space-y-1">
                {group.items.map((item, iIdx) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (gIdx * 0.1) + (iIdx * 0.05) }}
                      onClick={() => {
                        setActiveSection(item.id as SectionType);
                        setActiveLesson(null);
                        setIsSidebarOpen(false); // Close on mobile after selection
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                        isActive 
                          ? 'bg-primary text-white shadow-md shadow-primary/10' 
                          : 'text-text-muted hover:bg-surface-variant'
                      }`}
                    >
                      <Icon size={18} />
                      <span>{item.title}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-72 w-full min-w-0">
        <header className="glass-panel sticky top-0 z-40 px-4 md:px-12 py-4">
          <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button 
                className="md:hidden p-2 text-text-muted hover:bg-surface-variant rounded-lg"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu size={24} />
              </button>
              <div className="flex items-center gap-2 text-text-muted text-xs md:text-sm font-medium">
                <span className="hidden sm:inline">Dashboard</span>
                <ChevronRight size={14} className="hidden sm:inline" />
                <span className="text-primary font-bold capitalize">{activeSection.replace('-', ' ')}</span>
              </div>
            </div>
          <div className="flex items-center gap-2 md:gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-xs font-bold text-primary">{user.displayName}</span>
                  <span className="text-[10px] text-text-muted">{userProfile?.role || 'User'}</span>
                </div>
                <img src={user.photoURL || ''} className="w-8 h-8 rounded-full border border-primary/20" alt="" referrerPolicy="no-referrer" />
                <button 
                  onClick={handleLogout}
                  className="p-2 text-text-muted hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <button 
                onClick={handleLogin}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
              >
                <LogIn size={18} />
                <span>Login</span>
              </button>
            )}
            <button 
              onClick={toggleTheme}
                className="p-2 text-text-muted hover:bg-surface-variant rounded-full transition-colors"
                title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button className="p-2 text-text-muted hover:bg-surface-variant rounded-full transition-colors relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-card"></span>
              </button>
            </div>
          </div>
        </header>

        <div className="px-4 md:px-12 py-6 md:py-10 max-w-screen-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection + (activeLesson?.id || '')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeLesson ? (
                <QuizRenderer 
                  lesson={activeLesson} 
                  onComplete={(score) => handleLessonComplete(activeLesson.id, score)} 
                />
              ) : activeSection === 'admin' && isAdmin ? (
                renderAdmin()
              ) : activeSection === 'vocabulary' ? (
                <div className="space-y-12">
                  <VocabularySection />
                  <div className="border-t border-slate-200 pt-12">
                    <h3 className="text-2xl font-bold text-primary mb-6">Vocabulary Lessons & Quizzes</h3>
                    {renderLessonsGrid()}
                  </div>
                </div>
              ) : activeSection === 'speaking' ? (
                <div className="space-y-12">
                  <SpeakingSection />
                  <div className="border-t border-slate-200 pt-12">
                    <h3 className="text-2xl font-bold text-primary mb-6">Speaking Lessons & Strategies</h3>
                    {renderLessonsGrid()}
                  </div>
                </div>
              ) : activeSection === 'writing' ? (
                <div className="space-y-12">
                  <WritingSection />
                  <div className="border-t border-slate-200 pt-12">
                    <h3 className="text-2xl font-bold text-primary mb-6">Writing Lessons & Strategies</h3>
                    {renderLessonsGrid()}
                  </div>
                </div>
              ) : activeSection === 'full-test' ? (
                <FullTestSection />
              ) : activeSection === 'study-guide' || activeSection === 'resources' ? (
                renderStudyGuideOrResources()
              ) : activeSection === 'introduction' ? (
                renderIntroduction()
              ) : (
                <div className="space-y-10">
                  {/* Hero Section */}
                  <section className="relative card-base p-12 overflow-hidden shadow-sm">
                    <div className="relative z-10 max-w-3xl">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                        <Trophy size={12} />
                        <span>Academic Excellence</span>
                      </div>
                      <h3 className="text-5xl font-black text-primary tracking-tight mb-6 leading-tight">
                        {currentCategory?.title}
                      </h3>
                      <p className="text-text-muted text-lg leading-relaxed font-medium">
                        Master the academic English skills required for high-level university success. 
                        Choose a module below or generate a custom practice session with AI.
                      </p>
                    </div>
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
                  </section>

                  {/* AI Generation Card */}
                  {!['introduction', 'study-guide', 'resources', 'listening'].includes(activeSection) && (
                    <section className="bg-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-xl shadow-primary/20">
                      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div className="max-w-xl">
                          <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs uppercase tracking-widest mb-4">
                            <Sparkles size={16} />
                            <span>AI Powered Practice</span>
                          </div>
                          <h4 className="text-3xl font-bold mb-4">Generate Custom {currentCategory?.title} Questions</h4>
                          <p className="text-indigo-100/80 leading-relaxed">
                            Need more practice? Our AI can generate unique, high-quality TOEFL questions 
                            on any academic topic using Gemini 3.1 Flash Lite.
                          </p>
                        </div>
                        <button 
                          onClick={handleGenerateAI}
                          disabled={isGenerating}
                          className="px-8 py-5 bg-white text-primary font-bold rounded-2xl shadow-xl hover:bg-indigo-50 transition-all flex items-center gap-3 disabled:opacity-50"
                        >
                          {isGenerating ? (
                            <>
                              <Loader2 className="animate-spin" size={20} />
                              <span>Generating...</span>
                            </>
                          ) : (
                            <>
                              <Sparkles size={20} />
                              <span>Generate with AI</span>
                            </>
                          )}
                        </button>
                      </div>
                      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
                    </section>
                  )}

                  {/* Lessons Grid */}
                  {renderLessonsGrid()}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Global CSS for perspective */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
