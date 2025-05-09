import dotenv from "dotenv";
dotenv.config();
import { GoogleGenerativeAI } from "@google/generative-ai";

const geminiAi = async (req, res) => {
  try {
    const { prompt } = req.body;

    const KEY = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = KEY.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.status(200).json({ message: "your ai summery", summary: text });
  } catch (error) {
    res.status(500).json({ message: "Error generating summary", error });
  }
};

export default geminiAi;
