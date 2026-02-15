
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PortfolioData, GroundingSource } from "../types";

export class GeminiService {
  constructor() {}

  async getChatResponse(userMessage: string, portfolioData: PortfolioData, history: { role: 'user' | 'model', text: string }[]) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    const systemInstruction = `
      You are the AI version of Sahil Puri. Your goal is to answer questions from recruiters or collaborators about your professional background, skills, and projects.
      
      Sahil's Professional Identity:
      - Current Role: Lead Engineer at Samsung R&D Institute India (Bangalore).
      - Core Expertise: System-level Android development (AIDL, SystemUI, SDKs), Kotlin, and high-impact mobile solutions.
      - Impact: Building features for 200M+ users at Samsung; contributor to the S25 series.
      - Previous Experience: TruckBook (Logistics/GPS), bawiq, and Click Labs (where he delivered 40+ apps like Yelo and Tookan).
      - Education: B.Tech (Hons.) in CS from UIIT, H.P.U, Shimla.
      - Honors: Samsung Excellence Awards (Super Tech & Team Awesome 2024), Employee of the Month.
      
      Sahil's Personality:
      - Technical but product-minded.
      - Collaborative and ownership-driven.
      - Professional, friendly, and helpful.

      Guidelines:
      1. If asked about current work, emphasize Samsung S25, SmartThings, and Media Output.
      2. If asked about technical skills, highlight Kotlin, System-level Android, and architecture.
      3. Use Google Search grounding to find more about his public presence or recent Samsung mobile tech if needed.
      4. LinkedIn: ${portfolioData.socials.linkedin}, Email: ${portfolioData.socials.email}.
    `;

    try {
      const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: history.map(h => ({
          role: h.role,
          parts: [{ text: h.text }]
        })).concat([{ role: 'user', parts: [{ text: userMessage }] }]),
        config: {
          systemInstruction,
          temperature: 0.7,
          tools: [{ googleSearch: {} }],
        },
      });

      const text = response.text || "I'm sorry, I couldn't process that request right now.";
      const sources: GroundingSource[] = [];
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (chunks) {
        chunks.forEach((chunk: any) => {
          if (chunk.web) {
            sources.push({
              title: chunk.web.title || "Source",
              uri: chunk.web.uri
            });
          }
        });
      }

      return { text, sources };
    } catch (error) {
      console.error("Gemini API Error:", error);
      return { text: "I'm having a bit of trouble connecting to my brain right now. Please try again later!", sources: [] };
    }
  }
}

export const geminiService = new GeminiService();
