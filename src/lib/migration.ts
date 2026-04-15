import { db } from './firebase';
import { collection, doc, setDoc, getDocs, writeBatch } from 'firebase/firestore';
import { CATEGORIES, VOCABULARY } from '../data';

// Add these to your data imports or define them here if they are only in components
const SPEAKING_PROMPTS = [
  "Describe a place you have visited that you would recommend to others. Why would you recommend it?",
  "Some people prefer to live in a small town. Others prefer to live in a big city. Which do you prefer and why?",
  "Do you agree or disagree with the following statement? 'It is better to work in a group than to work alone.'",
  "What is the most important invention of the last 100 years? Explain your choice.",
  "Describe a person who has had a significant influence on your life. How did they influence you?",
  "If you could travel anywhere in the world, where would you go and what would you do there?",
  "What are the advantages and disadvantages of online learning compared to traditional classroom learning?",
  "Describe a book or a movie that you found particularly interesting. What was it about and why did you like it?"
];

const WRITING_TASKS = [
  { id: 'w1', title: 'Formal Email: Requesting Information', type: 'email', prompt: 'Write a formal email to a university admissions office requesting information about their MBA program. Include questions about application deadlines, required documents, and scholarship opportunities.', timeLimit: 20 },
  { id: 'w2', title: 'Academic Essay: Technology in Education', type: 'essay', prompt: 'Some people believe that technology has a negative impact on the quality of education, while others argue that it enhances learning. Discuss both views and give your opinion.', timeLimit: 30 },
  { id: 'w3', title: 'Summary: Environmental Protection', type: 'summary', prompt: 'Summarize the main arguments for why governments should prioritize environmental protection over economic growth in the short term.', timeLimit: 15 },
  { id: 'w4', title: 'Argumentative Essay: Remote Work', type: 'essay', prompt: 'Many companies are moving towards remote work models. Discuss the advantages and disadvantages of this trend for both employers and employees.', timeLimit: 30 },
  { id: 'w5', title: 'Formal Letter: Complaint to a Service Provider', type: 'email', prompt: 'Write a formal letter of complaint to an internet service provider regarding frequent outages and poor customer service. Demand a resolution or compensation.', timeLimit: 20 },
  { id: 'w6', title: 'Summary: The Impact of Artificial Intelligence', type: 'summary', prompt: 'Read a short article about AI in healthcare and summarize how it is being used to improve patient outcomes and diagnostic accuracy.', timeLimit: 15 },
  { id: 'w7', title: 'Academic Essay: Urbanization', type: 'essay', prompt: 'The rapid growth of cities has led to numerous social and environmental challenges. What are the main causes of urbanization, and how can cities become more sustainable?', timeLimit: 30 },
  { id: 'w8', title: 'Formal Email: Job Application Follow-up', type: 'email', prompt: 'Write a professional follow-up email to a hiring manager after an interview for a Junior Data Analyst position. Express your continued interest and briefly reiterate your key qualifications.', timeLimit: 15 },
  { id: 'w9', title: 'Argumentative Essay: Social Media', type: 'essay', prompt: 'Does social media do more harm than good to interpersonal relationships? Provide specific examples and evidence to support your position.', timeLimit: 30 },
  { id: 'w10', title: 'Summary: Renewable Energy Trends', type: 'summary', prompt: 'Summarize the recent global trends in renewable energy adoption, focusing on solar and wind power growth in developing nations.', timeLimit: 15 },
  { id: 'w11', title: 'Academic Essay: Space Exploration', type: 'essay', prompt: 'Is spending billions of dollars on space exploration justified when there are so many problems on Earth? Discuss your view with supporting arguments.', timeLimit: 30 },
  { id: 'w12', title: 'Formal Email: Requesting a Letter of Recommendation', type: 'email', prompt: 'Write a formal email to a former professor requesting a letter of recommendation for a graduate school application. Remind them of the course you took and your performance.', timeLimit: 15 },
  { id: 'w13', title: 'Summary: The History of the Internet', type: 'summary', prompt: 'Summarize the key milestones in the development of the internet, from its origins as a military project to the modern World Wide Web.', timeLimit: 15 },
  { id: 'w14', title: 'Argumentative Essay: Genetic Engineering', type: 'essay', prompt: 'Genetic engineering in agriculture has the potential to solve world hunger, but it also raises ethical and environmental concerns. Evaluate the pros and cons.', timeLimit: 30 },
  { id: 'w15', title: 'Formal Letter: Invitation to a Guest Speaker', type: 'email', prompt: 'Write a formal invitation to a renowned expert in your field to speak at a student-led seminar. Include details about the event and why their presence is requested.', timeLimit: 20 },
  { id: 'w16', title: 'Summary: The Psychology of Motivation', type: 'summary', prompt: 'Read a short text about intrinsic vs. extrinsic motivation and summarize the main differences and how they affect long-term performance.', timeLimit: 15 },
  { id: 'w17', title: 'Academic Essay: The Future of Work', type: 'essay', prompt: 'Automation and AI are expected to replace many human jobs in the coming decades. How should education systems adapt to prepare students for this future?', timeLimit: 30 },
  { id: 'w18', title: 'Formal Email: Rescheduling a Meeting', type: 'email', prompt: 'Write a formal email to a client explaining that you need to reschedule an upcoming project kick-off meeting due to an unforeseen conflict. Suggest two alternative times.', timeLimit: 15 },
  { id: 'w19', title: 'Summary: The Benefits of Mindfulness', type: 'summary', prompt: 'Summarize a short article about the psychological and physiological benefits of practicing mindfulness meditation daily.', timeLimit: 15 },
  { id: 'w20', title: 'Argumentative Essay: Universal Basic Income', type: 'essay', prompt: 'Universal Basic Income (UBI) is often proposed as a solution to poverty and job displacement. Discuss the potential benefits and drawbacks of implementing UBI on a national scale.', timeLimit: 30 }
];

export async function migrateDataToFirebase() {
  console.log('Starting migration...');
  
  const operations: { ref: any, data: any }[] = [];

  // 1. Prepare Categories
  CATEGORIES.forEach((category, index) => {
    operations.push({
      ref: doc(db, 'categories', category.id),
      data: {
        id: category.id,
        title: category.title,
        icon: category.icon || 'BookOpen',
        description: category.description || '',
        sortOrder: index
      }
    });

    // 2. Prepare Lessons
    for (const lesson of category.lessons) {
      const lessonQuestions = lesson.questions?.map((q, i) => ({ 
        ...q, 
        id: q.id || `${lesson.id}-q-${i}` 
      })) || [];

      operations.push({
        ref: doc(db, 'lessons', lesson.id),
        data: {
          id: lesson.id,
          categoryId: category.id,
          title: lesson.title,
          description: lesson.description || '',
          content: lesson.content || '',
          tips: lesson.tips || [],
          audioUrl: lesson.audioUrl || '',
          readingPassage: lesson.readingPassage || '',
          isCustom: false,
          createdBy: 'system',
          questions: lessonQuestions
        }
      });

      // 3. Prepare Questions for separate collection
      if (lesson.questions) {
        for (const question of lesson.questions) {
          const qId = question.id || `${lesson.id}-q-${lesson.questions.indexOf(question)}`;
          operations.push({
            ref: doc(db, 'questions', qId),
            data: {
              ...question,
              id: qId,
              lessonId: lesson.id
            }
          });
        }
      }
    }
  });

  // 4. Prepare Vocabulary
  for (const word of VOCABULARY) {
    operations.push({
      ref: doc(db, 'vocabulary', word.word),
      data: word
    });
  }

  // 5. Prepare Speaking Prompts
  for (let i = 0; i < SPEAKING_PROMPTS.length; i++) {
    operations.push({
      ref: doc(db, 'speaking_prompts', `sp-${i}`),
      data: { text: SPEAKING_PROMPTS[i] }
    });
  }

  // 6. Prepare Writing Tasks
  for (const task of WRITING_TASKS) {
    operations.push({
      ref: doc(db, 'writing_tasks', task.id),
      data: task
    });
  }

  console.log(`Total operations to perform: ${operations.length}`);

  // Execute in chunks of 400 (well below 500 limit)
  const chunkSize = 400;
  for (let i = 0; i < operations.length; i += chunkSize) {
    const chunk = operations.slice(i, i + chunkSize);
    const batch = writeBatch(db);
    
    chunk.forEach(op => {
      batch.set(op.ref, op.data, { merge: true });
    });

    await batch.commit();
    console.log(`Committed chunk ${Math.floor(i / chunkSize) + 1} of ${Math.ceil(operations.length / chunkSize)}`);
  }

  console.log('Migration complete!');
}
