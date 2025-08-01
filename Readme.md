# 🧠 AI Learning Roadmap Generator API

This backend API generates **comprehensive and structured learning roadmaps** using the **Google Generative AI (Gemini)** API. Built with **Express.js**, it offers intelligent roadmap creation based on user-defined **topics** and **skill levels**.

---

## 🚀 Features

- ✅ **Dynamic Roadmap Generation**  
  Get tailored learning paths based on topic and user skill level.
- 🧠 **Gemini AI Integration**  
  Uses `gemini-1.5-flash` via the official [Google Generative AI SDK](https://github.com/google/generative-ai-js).
- 📦 **Structured JSON Output**  
  Ideal for frontend rendering or mobile apps.
- ⚠️ **Robust Error Handling**  
  Gracefully handles bad input and Gemini API errors.
- 🌐 **CORS Enabled**  
  Ready for cross-origin requests out of the box.

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes bundled with Node.js)

---

## 🛠️ Installation

Clone the repository and install dependencies:

```bash
git clone <your-repository-url>
cd <your-project-directory>
npm install
🔐 Environment Variables
Create a .env file in the root directory of your project and add the following:

env
Copy
Edit
GEMINI_API_KEY=your-gemini-api-key
🔑 You can get your API key from Google AI Studio.

🔁 Running the Server
Development Mode (Auto Restart using Nodemon)
First, install nodemon globally or as a dev dependency:

bash
Copy
Edit
npm install --save-dev nodemon
Then start the development server:

bash
Copy
Edit
nodemon server.js
Production Mode
bash
Copy
Edit
node server.js
The server will run on: http://localhost:3000

📡 API Endpoint
POST /api/get-roadmap
This endpoint generates a customized learning roadmap based on user input.

✅ Request Headers:
pgsql
Copy
Edit
Content-Type: application/json
📝 Request Body:
json
Copy
Edit
{
  "topic": "JavaScript",
  "skillLevel": "Beginner"
}
🎯 Success Response (200 OK):
json
Copy
Edit
{
  "topic": "JavaScript",
  "skillLevel": "Beginner",
  "what_you_will_achieve": "...",
  "learning_modules": [...],
  "recommended_courses": [...],
  "other_resources": [...],
  "common_pitfalls_and_tips": [...],
  "next_steps": "..."
}
⚠️ Error Responses:
400 Bad Request: If topic or skillLevel is missing.

500 Internal Server Error: If Gemini API fails or internal issues occur.

📁 Project Structure
bash
Copy
Edit
.
├── server.js               # Main server file
├── .env                   # Environment variables
├── package.json           # Project metadata and scripts
├── package-lock.json      # Auto-generated dependency tree
└── README.md              # Project documentation
📚 Dependencies
Package	Description
express	Web server framework
cors	Middleware for enabling CORS
dotenv	Loads environment variables from .env file
@google/generative-ai	Google Generative AI SDK for Node.js

🤝 Contributing
Contributions are welcome! 🚀

To Contribute:
Fork the repository

Create a new branch:

bash
Copy
Edit
git checkout -b feature/YourFeature
Make your changes and commit:

bash
Copy
Edit
git commit -m "Add your feature"
Push to your branch:

bash
Copy
Edit
git push origin feature/YourFeature
Open a Pull Request

Let’s build something amazing together! 💡

📄 License
This project is licensed under the MIT License.
You’re free to use, modify, and distribute it for both personal and commercial use.

💡 Powered by Google Gemini API & Node.js — Built with ❤️ by [Your Name]

yaml
Copy
Edit

---

### ✅ Final Notes:
- Replace `<your-repository-url>` with your actual GitHub repo URL.
- Update `[Your Name]` with your name or GitHub handle.
- Add a `LICENSE` file if you haven't already.

Let me know if you want a version with GitHub shields, project logo, or deployment guide (e.g., for Render/Vercel/Heroku).