import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

export const handler = async (event: any) => {
  // Enable CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const messages = body.messages;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Messages array is required" }),
      };
    }

    // Get the user's latest query
    const userMessage = messages[messages.length - 1].content;

    // Call Gemini API
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: userMessage,
      config: {
        systemInstruction: "You are the AI Concierge for Goodman Real Estate Solutions. ONLY discuss Herb Goodman, services (Asset Management, Repositioning, Advisory, Leasing, Due Diligence, Design, Construction, Entitlements), contacts (214-537-1441), and the 10 case studies listed in the content. Keep answers to 3 sentences. Never mention you are an AI.",
        temperature: 0.7,
      },
    });

    const reply = response.text || "I apologize, but I could not process that request at this moment.";

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ reply }),
    };
  } catch (error: any) {
    console.error("Gemini API Error in Netlify Function:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message || "Internal Server Error" }),
    };
  }
};
