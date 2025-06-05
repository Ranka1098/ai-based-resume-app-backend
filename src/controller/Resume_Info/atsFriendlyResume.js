import dotenv from "dotenv";
dotenv.config();
import { GoogleGenerativeAI } from "@google/generative-ai";

const atsFriendlyResume = async (req, res) => {
  const resumeData = req.body;

  try {
    const prompt = `
You're an expert resume writer and HR professional.

Given the following structured resume data, generate a clean, ATS-friendly resume in plain text format that emphasizes clarity, proper formatting, and keyword optimization.

Resume data:
${JSON.stringify(resumeData, null, 2)}
`;

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res
      .status(200)
      .json({ message: "Your ATS friendly resume", atsResume: text });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error generating ATS resume", error: error.message });
  }
};

export default atsFriendlyResume;
