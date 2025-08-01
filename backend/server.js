const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const port = 3000;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/get-roadmap', async (req, res) => {
    const { topic, skillLevel } = req.body;

    if (!topic || !skillLevel) {
        return res.status(400).json({ error: "Topic and skillLevel are required." });
    }

    const prompt = `You are an expert learning architect. Generate a comprehensive, highly-detailed, and structured learning roadmap for a user wanting to learn "${topic}" at a "${skillLevel}" level. The roadmap must be practical, encouraging, and provide clear, actionable steps.

    Curate information from trusted, high-quality, and up-to-date web sources.

    Respond strictly in a raw JSON object format. Do not include any markdown formatting, commentary, or any text outside of the JSON object itself.

    The JSON structure must be:
    {
    "topic": "${topic}",
    "skillLevel": "${skillLevel}",
    "what_you_will_achieve": "A concise, motivational summary of what the learner will accomplish after completing this entire roadmap.",
    "learning_modules": [
    {
      "module_number": "The sequential number of the module (e.g., 1).",
      "module_title": "A clear title for this learning module (e.g., 'The Absolute Basics' or 'Advanced State Management').",
      "module_goal": "A one-sentence goal for what the learner will be able to do after this module.",
      "key_concepts": [
        {
          "concept": "The name of a specific concept or skill within this module.",
          "description": "A clear, simple explanation of the concept, tailored to the user's skill level.",
          "why_it_is_important": "A brief explanation of why this concept is crucial and how it connects to the bigger picture."
        }
      ],
      "project_idea": "A small, practical project idea that allows the learner to apply the concepts from this specific module."
    }
],
  "recommended_courses": [
    // Provide between 3 and 5 course recommendations.
    {
      "title": "The full title of a recommended online course.",
      "platform": "The platform where the course is hosted (e.g., Coursera, Udemy, freeCodeCamp).",
      "url": "The direct URL to the course.",
      "description": "A one-sentence summary of why this course is a good fit for the learner."
    }
  ],
  "other_resources": [
    // Provide at least 10 other resources.
    {
      "type": "The type of resource (e.g., 'article', 'video', 'blog', 'repo', 'interactive_tutorial').",
      "title": "The title of the resource.",
      "url": "The direct URL to the resource.",
      "description": "A one-sentence summary of what makes this resource helpful."
    }
  ],
  "common_pitfalls_and_tips": [
    {
      "pitfall": "A common mistake or challenge learners face with this topic.",
      "tip": "A practical, actionable tip to help the learner avoid or overcome this pitfall."
    }
  ],
  "next_steps": "A brief, encouraging paragraph suggesting what the learner could focus on after successfully completing this roadmap to continue their growth."
}`;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        // console.log("Raw response from Gemini:", text);
        const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const jsonResponse = JSON.parse(cleanedText);
        // console.log("Generated JSON Response: ", jsonResponse);

        res.status(200).json(jsonResponse);

    } catch (err) {
        console.error("Backend error: ", err.message);
        res.status(500).json({ error: "Failed to generate roadmap.", details: err.message });
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
