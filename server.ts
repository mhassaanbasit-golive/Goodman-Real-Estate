import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

function getLocalChatResponse(userMessage: string): string {
  const query = userMessage.toLowerCase().trim();

  // 1. Herb Goodman / Principal
  if (query.includes("herb") || query.includes("goodman") || query.includes("who are you") || query.includes("principal")) {
    if (query.includes("experience") || query.includes("years") || query.includes("how long")) {
      return "Herb Goodman is the Principal of Goodman Real Estate Solutions, possessing over 25 years of institutional commercial real estate experience. He has overseen more than $1.2 billion in career transaction volume and 5 million square feet of development.";
    }
    return "Herb Goodman is the Principal of Goodman Real Estate Solutions. With over 25 years of commercial experience and $1.2B+ in transaction volume, he provides outsourced corporate development department services and master advisory. You can reach Herb directly at 214-537-1441.";
  }

  // 2. Case Studies (Specific Projects)
  if (query.includes("rustic")) {
    return "For 'The Rustic Expansion', we provided a comprehensive outsourced development solution for Dallas, Houston, and San Antonio venues. We handled everything from environmental studies through design development, bidding, and construction management, allowing the owners to scale without an in-house team.";
  }
  if (query.includes("painted tree") || query.includes("home decor") || query.includes("highland village")) {
    return "In the 'Painted Tree Marketplace' project in Highland Village, TX, we provided a complete outsourced development solution for a 35,000 SF large-format home decor store. We managed design development, construction bidding, and project close-out to enable expansion beyond their home territory.";
  }
  if (query.includes("raleigh") || query.includes("violet") || query.includes("kitchen 101") || query.includes("irving")) {
    return "The 'Raleigh, Kitchen 101, & Violet Room' case study in Irving, TX details a 30,000 SF multi-level entertainment and hospitality space. We provided full-service development, bidding, and construction coordination to integrate casual dining, concert stages, and event areas.";
  }
  if (query.includes("bowl") || query.includes("barrel")) {
    return "For 'Bowl and Barrel Expansion', we acted as the outsourced real estate department to scale their bowling and dining concept across Dallas, San Antonio, and Houston. Our work spanned the entire cycle, from environmental assessments to bidding, construction, and contract closeouts.";
  }
  if (query.includes("industrial relocation") || query.includes("kitchen equipment")) {
    return "In the 'Industrial Relocation' project, we assisted a commercial kitchen equipment supplier with multi-market relocations in DFW, Houston, and Georgia. We sourced appropriate facilities, negotiated long-term leases, and coordinated design and build-out to let corporate executives focus on growth.";
  }
  if (query.includes("rib crib") || query.includes("barbecue") || query.includes("ribcrib")) {
    return "For 'Rib Crib Growth', we served as their outsourced corporate development department to deliver 11 restaurant units across Texas, Oklahoma, Kansas, and Arkansas. We coordinated third-party vendors, managed construction, resolved contractor RFIs, and shepherded closeouts.";
  }
  if (query.includes("strip center") || query.includes("sherman")) {
    return "In 'Strip-Center Development' in Sherman, TX, we partnered with a high-net-worth investor to develop an outparcel into a 12,000 SF strip center housing two national tenants. We coordinated the entire sequence from re-platting through entitlements, design, and construction.";
  }
  if (query.includes("katrina") || query.includes("biloxi") || query.includes("post-katrina") || query.includes("walmart")) {
    return "The 'Post-Katrina Rehab' in Biloxi, MS, is a major retail turnaround case study. We rescued a storm-damaged, 75% destroyed 150,000 SF retail center by negotiating with Walmart to build an adjacent 160,000 SF Supercenter with shared cross-access, boosting occupancy from 30% to over 80%.";
  }
  if (query.includes("mesquite") || query.includes("target") || query.includes("land assemblage")) {
    return "In 'Retail Redevelopment' in Mesquite, TX, we unlocked a difficult 20-acre retail land assemblage held up by neighborhood and governmental opposition. We structured a 4-acre sale to Target for a new Super Target, and negotiated the sale of the remaining 16 acres to the city.";
  }
  if (query.includes("carrollton") || query.includes("theater") || query.includes("bally") || query.includes("value-add") || query.includes("demolition")) {
    return "In 'Value-Add Opportunity' in Carrollton, TX, we repositioned an aging 175,000 SF center with a hidden back theater. By demolishing 8,000 SF of hard-to-lease space, we unlocked visibility, secured a lease with Bally Fitness, obtained key sign variances, and stabilized occupancy to 90%.";
  }

  // 2b. Case Studies (General Query)
  if (query.includes("case") || query.includes("study") || query.includes("studies") || query.includes("portfolio") || query.includes("project")) {
    return "Goodman Real Estate Solutions has 10 featured case studies: The Rustic Expansion, Painted Tree Marketplace, The Raleigh & Kitchen 101, Bowl and Barrel, Industrial Relocation, Rib Crib Growth, Sherman Strip-Center, Post-Katrina Rehab (Biloxi), Retail Redevelopment (Mesquite), and Value-Add Carrollton. Which one would you like to explore?";
  }

  // 3. Contact Info
  if (query.includes("phone") || query.includes("contact") || query.includes("number") || query.includes("call") || query.includes("address") || query.includes("email") || query.includes("reach") || query.includes("location") || query.includes("dallas")) {
    return "You can reach Herb Goodman directly at 214-537-1441. Our primary office is located at 8150 N. Central Expressway, Suite M-1020, Dallas, TX 75206. We provide commercial real estate advisory across all major Texas markets.";
  }

  // 4. Services / Capabilities
  if (query.includes("service") || query.includes("services") || query.includes("what do you do") || query.includes("asset management") || query.includes("repositioning") || query.includes("advisory") || query.includes("leasing") || query.includes("due diligence") || query.includes("design") || query.includes("construction") || query.includes("entitlements") || query.includes("zoning")) {
    if (query.includes("asset management") || query.includes("repositioning")) {
      return "Our 'Strategic Asset Advisory & Asset Management' services optimize and defend property portfolios. We provide expert advisory, repositioning, due diligence, and financial modeling to ensure maximum asset value and stable returns. Reach us at 214-537-1441.";
    }
    if (query.includes("entitlements") || query.includes("zoning")) {
      return "Our 'Development Services & Entitlements' cover the full spectrum of land approvals, municipal navigation, and site due diligence. We coordinate with city engineers, planning boards, and attorneys to de-risk commercial development from day one. Call 214-537-1441.";
    }
    if (query.includes("leasing") || query.includes("transaction")) {
      return "For 'Transaction Management & Leasing', we connect premium institutional tenants with high-quality retail, mixed-use, and industrial properties. We manage landlord advisory, leasing campaigns, and lease negotiations across Texas. Contact Herb Goodman at 214-537-1441.";
    }
    if (query.includes("design") || query.includes("construction") || query.includes("oversight")) {
      return "Our 'Project Design & Construction Oversight' service de-risks construction by coordinating elite architects, engineers, and general contractors. We oversee schedules, pay applications, RFIs, and close-out items to deliver projects on time and budget. Call 214-537-1441.";
    }
    return "Goodman Real Estate Solutions provides four core commercial services: Strategic Asset Advisory & Asset Management, Development Services & Entitlements, Transaction Management & Leasing, and Project Design & Construction Oversight. Please call 214-537-1441 for tailored support.";
  }

  // 5. Greetings / Small Talk
  if (query.includes("hello") || query.includes("hi") || query.includes("hey") || query.includes("greetings") || query.includes("good morning") || query.includes("good afternoon")) {
    return "Hello! I am the AI Concierge for Goodman Real Estate Solutions. I can assist you with information regarding Herb Goodman, our commercial advisory services, contact information, or our 10 case studies. How can I help you today?";
  }

  if (query.includes("thank") || query.includes("thanks") || query.includes("awesome") || query.includes("great")) {
    return "You are very welcome! It is my pleasure to assist. Please let me know if you would like information on our case studies, services, or if you'd like to contact Herb Goodman directly at 214-537-1441.";
  }

  // 6. Default Fallback
  return "I am the AI Concierge for Goodman Real Estate Solutions. I can answer inquiries about our Principal, Herb Goodman, our services (Asset Management, Entitlements, Leasing, Construction), or our 10 case studies. Please feel free to ask a specific question or call Herb directly at 214-537-1441.";
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for chatbot proxying
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return res.status(400).json({ error: "Messages array is required" });
      }

      const userMessage = messages[messages.length - 1].content;

      // Try calling Gemini first, but gracefully fall back to local NLP engine if it fails due to quota/access restrictions
      try {
        const ai = new GoogleGenAI({
          apiKey: process.env.GEMINI_API_KEY,
          httpOptions: {
            headers: {
              'User-Agent': 'aistudio-build',
            }
          }
        });

        const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: userMessage,
          config: {
            systemInstruction: "You are the AI Concierge for Goodman Real Estate Solutions. ONLY discuss Herb Goodman, services (Asset Management, Repositioning, Advisory, Leasing, Due Diligence, Design, Construction, Entitlements), contacts (214-537-1441), and the 10 case studies listed in the content. Keep answers to 3 sentences. Never mention you are an AI.",
            temperature: 0.7,
          },
        });

        const reply = response.text || "I apologize, but I could not process that request at this moment.";
        return res.json({ reply });
      } catch (geminiError: any) {
        console.warn("Gemini API call failed, falling back to local NLP engine:", geminiError.message || geminiError);
        const reply = getLocalChatResponse(userMessage);
        return res.json({ reply });
      }
    } catch (error: any) {
      console.error("Express /api/chat general error:", error);
      res.status(500).json({ error: error.message || "Internal Server Error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
