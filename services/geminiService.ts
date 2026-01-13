
import { GoogleGenAI } from "@google/genai";
import { UserStats } from "../types.ts";

export const getFitnessInsights = async (stats: UserStats): Promise<string> => {
  try {
    // Safety check for browser environments where 'process' might not be defined
    const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : '';
    
    if (!apiKey) {
      console.warn("Gemini API key is not configured.");
      return "Track your steps and stay hydrated to maintain your energy levels!";
    }

    const ai = new GoogleGenAI({ apiKey });
    const prompt = `Act as a professional fitness coach. Based on these daily stats: 
    - Steps: ${stats.steps}/${stats.stepGoal}
    - Calories: ${stats.calories}
    - Heart Rate: ${stats.heartRate} bpm
    - Active Minutes: ${stats.activeMinutes}
    
    Provide a concise, motivational 2-sentence health tip or insight. Be encouraging like the Samsung Health assistant. Do not use markdown headers.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Keep up the great work! Your consistency is the key to progress.";
  } catch (error) {
    console.error("Error fetching AI insights:", error);
    return "Stay active and hydrated throughout the day!";
  }
};
