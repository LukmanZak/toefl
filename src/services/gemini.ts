import { GoogleGenAI, Type } from "@google/genai";
import { Question, SectionType, VocabularyWord } from "../types";

const apiKey = process.env.GEMINI_API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export async function generateTOEFLQuestions(
  section: SectionType,
  topic: string,
  count: number = 5
): Promise<Question[]> {
  let curriculumContext = "";
  if (section === 'elementary') curriculumContext = "elementary school level (simple vocabulary, basic grammar)";
  else if (section === 'junior-high') curriculumContext = "junior high school level (intermediate grammar, common topics)";
  else if (section === 'high-school') curriculumContext = "high school level (advanced grammar, academic preparation)";
  else if (section === 'toefl-preparation') curriculumContext = "TOEFL iBT standard (academic, formal, complex)";
  else if (section === 'reading') curriculumContext = "TOEFL Reading standard (inference, vocabulary in context, detail questions)";
  
  const prompt = `Generate ${count} multiple choice questions for the ${section} section. 
  Curriculum/Level: ${curriculumContext}.
  Topic: ${topic}.
  
  ${section === 'elementary' ? `
  SPECIFIC INSTRUCTIONS FOR ELEMENTARY LEVEL:
  1. VARIETY: Create a mix of question types (all multiple choice):
     - Identifying parts of speech (nouns, verbs, adjectives).
     - Fill-in-the-blanks with the correct word.
     - Choosing the best word to describe a picture/scenario described in text.
     - Basic sentence structure.
  2. ENGAGEMENT: Use fun, relatable scenarios for kids (animals, school, toys, family, hobbies).
  3. EXPLANATIONS: Provide clear, encouraging, and educational explanations in both English and Indonesian (like the examples in the codebase).
  4. LANGUAGE: Use simple, clear English suitable for children.
  ` : `
  Ensure the questions follow the standard of the specified level. If it is TOEFL or IELTS, use academic and formal language.
  `}

  GENERAL INSTRUCTIONS:
  1. ANSWER DISTRIBUTION: Ensure the correct answers (correctAnswer index 0-3) are evenly distributed across the set. Do NOT always pick 'A' or 'B'.
  2. QUALITY: Ensure all options are plausible but only one is clearly correct.
  3. EXPLANATIONS: Provide a detailed explanation for why the correct answer is right.

  Return the response as a JSON array of objects with the following structure:
  {
    "id": "string",
    "text": "string",
    "options": ["string", "string", "string", "string"],
    "correctAnswer": number (0-3),
    "explanation": "string"
  }`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              text: { type: Type.STRING },
              options: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              correctAnswer: { type: Type.INTEGER },
              explanation: { type: Type.STRING }
            },
            required: ["id", "text", "options", "correctAnswer", "explanation"]
          }
        }
      }
    });

    if (!response || !response.text) {
      throw new Error("Invalid or empty response from AI");
    }
    
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error generating questions:", error);
    return [];
  }
}

export async function generateReadingPassage(
  topic: string,
  standard: 'TOEFL' | 'IELTS' | 'General' = 'TOEFL'
): Promise<{ passage: string; questions: Question[] }> {
  const prompt = `Generate a long, academic reading passage (approx 500-700 words) about "${topic}" following ${standard} standards.
  Then, generate 5-7 multiple choice questions based on the passage.
  Questions should include:
  - Vocabulary in context
  - Main idea/Purpose
  - Factual information
  - Inference
  - Negative factual information (EXCEPT questions)
  
  Return the response as a JSON object:
  {
    "passage": "The full text of the passage with multiple paragraphs",
    "questions": [
      {
        "id": "string",
        "text": "string",
        "options": ["string", "string", "string", "string"],
        "correctAnswer": number (0-3),
        "explanation": "string"
      }
    ]
  }`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            passage: { type: Type.STRING },
            questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  text: { type: Type.STRING },
                  options: { 
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  },
                  correctAnswer: { type: Type.INTEGER },
                  explanation: { type: Type.STRING }
                },
                required: ["id", "text", "options", "correctAnswer", "explanation"]
              }
            }
          },
          required: ["passage", "questions"]
        }
      }
    });

    if (!response || !response.text) {
      throw new Error("Invalid or empty response from AI");
    }
    
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error generating reading passage:", error);
    return { passage: "", questions: [] };
  }
}

export async function generateVocabulary(topic: string, count: number = 5): Promise<VocabularyWord[]> {
  const prompt = `Generate ${count} academic vocabulary words related to the topic: "${topic}". 
  For each word, provide a definition, an example sentence, and 3-4 synonyms.
  Return the response as a JSON array of objects with the following structure:
  {
    "word": "string",
    "definition": "string",
    "example": "string",
    "synonyms": ["string", "string", "string"]
  }`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              word: { type: Type.STRING },
              definition: { type: Type.STRING },
              example: { type: Type.STRING },
              synonyms: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            },
            required: ["word", "definition", "example", "synonyms"]
          }
        }
      }
    });

    if (!response || !response.text) {
      throw new Error("Invalid or empty response from AI");
    }
    
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error generating vocabulary:", error);
    return [];
  }
}

export async function evaluateWriting(
  prompt: string,
  submission: string
): Promise<{ feedback: string; score: number; improvements: string[] }> {
  const aiPrompt = `Evaluate the following writing submission for the prompt: "${prompt}".
  Submission: "${submission}"
  Provide detailed feedback on grammar, structure, and vocabulary. 
  Give a score from 0 to 100 based on TOEFL writing rubrics.
  Also provide a list of specific improvements.
  Return the response as a JSON object with the following structure:
  {
    "feedback": "string",
    "score": number,
    "improvements": ["string", "string", "string"]
  }`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite-preview",
      contents: aiPrompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            feedback: { type: Type.STRING },
            score: { type: Type.INTEGER },
            improvements: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["feedback", "score", "improvements"]
        }
      }
    });

    if (!response || !response.text) {
      throw new Error("Invalid or empty response from AI");
    }
    
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error evaluating writing:", error);
    return {
      feedback: "There was an error evaluating your writing. Please try again.",
      score: 0,
      improvements: []
    };
  }
}

export async function generateSpeakingFeedback(
  audioBase64: string,
  mimeType: string,
  prompt: string
): Promise<{ transcription: string; feedback: string; score: number }> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite-preview",
      contents: {
        parts: [
          { text: `You are an expert TOEFL speaking examiner. Listen to this audio response to the prompt: "${prompt}". 
          
          1. TRANSCRIPTION: Provide a highly accurate word-for-word transcription of what the user said.
          2. FEEDBACK: Provide detailed, constructive feedback on:
             - Fluency and Coherence
             - Lexical Resource (Vocabulary)
             - Grammatical Range and Accuracy
             - Pronunciation
          3. SCORE: Give a score from 0 to 100 based on TOEFL iBT speaking rubrics.
          
          Return the response as a JSON object with the following structure:
          {
            "transcription": "string",
            "feedback": "string",
            "score": number
          }` },
          {
            inlineData: {
              data: audioBase64,
              mimeType: mimeType
            }
          }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            transcription: { type: Type.STRING },
            feedback: { type: Type.STRING },
            score: { type: Type.INTEGER }
          },
          required: ["transcription", "feedback", "score"]
        }
      }
    });

    if (!response || !response.text) {
      throw new Error("Invalid or empty response from AI");
    }
    
    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error generating speaking feedback:", error);
    return {
      transcription: "Could not transcribe audio.",
      feedback: "There was an error processing your audio. Please try again.",
      score: 0
    };
  }
}
