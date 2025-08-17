"use server"
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});
export const generateAISummary = async (transcript, prompt) => {
  try {
    const input = `${prompt}\n\nTranscript:\n${transcript}`;
    const result = await model.generateContent(transcript, prompt);
    const response = await result.response.text();
    const cleanedText = response.replace(/```(?:json)?\n?/g, "").trim();
    return cleanedText;

  } catch (error) {
    console.error("Gemini API Error:", error.message);
    throw new Error("Error while Generating Summary");
  }
};
