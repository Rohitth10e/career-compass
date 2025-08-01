AI Learning Roadmap Generator API
This backend API generates comprehensive and structured learning roadmaps using the Google Generative AI (Gemini) API. Built with Express.js, it offers intelligent roadmap creation based on user-defined topics and skill levels.

🚀 Features
Dynamic Roadmap Generation: Detailed, topic-based learning paths tailored by skill level.

Gemini AI Integration: Powered by gemini-1.5-flash via the official Generative AI SDK.

JSON Output: Consistent and structured responses, ideal for front-end integration.

Error Handling: Responds gracefully to missing fields and API issues.

CORS Enabled: Cross-origin support for broader client compatibility.

📦 Prerequisites
Before you begin, ensure these are installed:

Node.js (LTS recommended)

npm (comes with Node.js)

🛠️ Installation
Clone the repository and install dependencies:

git clone <your-repository-url>
cd <your-project-directory>
npm install

🔐 Environment Variables
Create a .env file in the root of the project:

GEMINI_API_KEY=your-gemini-api-key

You can obtain your API key from Google AI Studio.

🔁 Running the Server
Development (auto restart with nodemon)
First, install nodemon if you haven't already:

npm install --save-dev nodemon

Then, run:

nodemon server.js

Production
For a stable run without automatic restarts:

node server.js

The server will run at: http://localhost:3000

📡 API Endpoint
POST /api/get-roadmap
This endpoint generates a learning roadmap.

Request Headers:

Content-Type: application/json

Request Body:

{
    "topic": "JavaScript",
    "skillLevel": "Beginner"
}

Successful Response (200 OK):

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

Error Responses:

400 Bad Request: Missing topic or skillLevel parameters.

500 Internal Server Error: Issues with the Gemini API or other server-side errors.

📁 Project Structure
.
├── server.js
├── .env
├── package.json
├── package-lock.json
└── README.md

📚 Dependencies
This project relies on the following key dependencies:

express: Web framework for Node.js.

cors: Middleware for enabling Cross-Origin Resource Sharing.

dotenv: Loads environment variables from a .env file.

@google/generative-ai: Official Google Generative AI Node.js SDK.

🤝 Contributing
Pull requests and ideas are welcome! Follow these steps to contribute:

Create a feature branch:

git checkout -b feature/YourFeature

Commit your changes:

git commit -m "Add new feature"

Push to GitHub:

git push origin feature/YourFeature

Then, open a Pull Request and let’s build together!

📄 License
Distributed under the MIT License. Feel free to use, modify, and distribute.