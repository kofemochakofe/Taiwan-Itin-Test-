import { GoogleGenAI } from "@google/genai";
import { Location } from '../types';

const getClient = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is not set in environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const getGeminiInsight = async (location: Location): Promise<string> => {
  const client = getClient();
  if (!client) {
    return "Please configure your Google Gemini API Key to get AI insights.";
  }

  try {
    const prompt = `You are a local tour guide for Taiwan. 
    Write a short, engaging tip (max 60 words) for a tourist visiting "${location.name}". 
    Focus on what makes it special, what to eat, or a quick historical fact. 
    If it is a restaurant, recommend a signature dish.`;

    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "No insight available.";
  } catch (error) {
    console.error("Error fetching Gemini insight:", error);
    return "Sorry, I couldn't fetch an insight right now. Please try again.";
  }
};