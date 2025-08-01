AI Learning Roadmap Generator API
This project provides a backend API built with Express.js that leverages the Google Generative AI (Gemini) API to generate comprehensive and structured learning roadmaps for various topics and skill levels.

Table of Contents
Features

Prerequisites

Getting Started

Installation

Environment Variables

Running the Server

API Endpoints

POST /api/get-roadmap

Project Structure

Dependencies

Contributing

License

Features
Dynamic Roadmap Generation: Generates highly detailed and structured learning roadmaps based on user-specified topics and skill levels.

Gemini AI Integration: Utilizes the Google Gemini API (specifically gemini-1.5-flash) for intelligent content generation.

JSON Output: Provides roadmaps in a clean, consistent JSON format, making it easy to integrate with various front-end applications.

Error Handling: Includes basic error handling for missing parameters and API issues.

CORS Enabled: Configured with cors to allow requests from different origins, suitable for web applications.

Prerequisites
Before you begin, ensure you have the following installed on your system:

Node.js: Download and Install Node.js (LTS version recommended).

npm: Node Package Manager, which comes bundled with Node.js.

Getting Started
Follow these steps to get the project up and running on your local machine.

Installation
Clone the repository (if applicable):

Bash

git clone <your-repository-url>
cd <your-project-directory>
Install dependencies:
Navigate to the project's root directory in your terminal and run:

Bash

npm install
This command installs all the necessary packages listed in package.json.

Environment Variables
This project requires a Google Gemini API key. You'll need to set this up as an environment variable.

Obtain a Gemini API Key:

Go to the Google AI Studio and create a new API key.

Create a .env file:
In the root directory of your project, create a file named .env.

Add your API key to the .env file:

GEMINI_API_KEY="YOUR_GEMINI_API_KEY_HERE"
Replace "YOUR_GEMINI_API_KEY_HERE" with the actual API key you obtained.

Running the Server
You have a few options to run the server:

Development Mode (with nodemon):
If you want the server to automatically restart when you make changes to your code, use nodemon. First, ensure you have nodemon installed globally or as a dev dependency:

Bash

npm install -g nodemon # If you want to install globally
# OR
npm install --save-dev nodemon # If you want to install as a dev dependency
Then, run:

Bash

nodemon server.js
You'll see output similar to: Server running at http://localhost:3000

Production Mode:
For a stable run without automatic restarts, use node:

Bash

node server.js
You'll see output similar to: Server running at http://localhost:3000

API Endpoints
The API currently exposes one endpoint for generating roadmaps.

POST /api/get-roadmap
This endpoint generates a learning roadmap based on the provided topic and skill level.

Method: POST

URL: http://localhost:3000/api/get-roadmap (or your deployed URL)

Headers:

Content-Type: application/json

Request Body (JSON):

JSON

{
    "topic": "JavaScript",
    "skillLevel": "Beginner"
}
topic (string, required): The subject or area for which you want to generate a roadmap (e.g., "React", "Machine Learning", "Cloud Computing").

skillLevel (string, required): The proficiency level of the learner (e.g., "Beginner", "Intermediate", "Advanced").

Success Response (200 OK):

The response will be a JSON object containing the comprehensive learning roadmap. The structure will be similar to the prompt defined in server.js, including topic, skillLevel, what_you_will_achieve, learning_modules, recommended_courses, other_resources, common_pitfalls_and_tips, and next_steps.

JSON

{
    "topic": "JavaScript",
    "skillLevel": "Beginner",
    "what_you_will_achieve": "By completing this roadmap, you will have a solid foundation in JavaScript, enabling you to build interactive web pages and understand more complex frameworks.",
    "learning_modules": [
        {
            "module_number": 1,
            "module_title": "Introduction to JavaScript",
            "module_goal": "Understand the basics of JavaScript and how it interacts with web pages.",
            "key_concepts": [
                {
                    "concept": "Variables and Data Types",
                    "description": "How to store and manipulate different kinds of information like numbers, text, and true/false values.",
                    "why_it_is_important": "Essential for holding and working with any data in your programs."
                }
                // ... more concepts
            ],
            "project_idea": "Create a simple web page with a button that changes the text of an HTML element when clicked."
        }
        // ... more modules
    ],
    "recommended_courses": [
        {
            "title": "The Complete JavaScript Course 2024: From Zero to Expert!",
            "platform": "Udemy",
            "url": "https://www.udemy.com/course/the-complete-javascript-course/",
            "description": "A highly comprehensive course covering modern JavaScript development from scratch."
        }
        // ... more courses
    ],
    "other_resources": [
        {
            "type": "documentation",
            "title": "MDN Web Docs: JavaScript",
            "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "description": "The definitive resource for all JavaScript-related information, maintained by Mozilla."
        }
        // ... more resources
    ],
    "common_pitfalls_and_tips": [
        {
            "pitfall": "Forgetting semicolons.",
            "tip": "While often optional, consistent semicolon use can prevent unexpected errors, especially during minification."
        }
        // ... more pitfalls and tips
    ],
    "next_steps": "After mastering this roadmap, you can delve into front-end frameworks like React or Vue, or explore backend development with Node.js to become a full-stack developer."
}
Error Response (400 Bad Request):

JSON

{
    "error": "Topic and skillLevel are required."
}
Error Response (500 Internal Server Error):

JSON

{
    "error": "Failed to generate roadmap.",
    "details": "Details about the error, e.g., 'API key not configured' or 'network error'."
}
Project Structure
.
├── server.js
├── .env
├── package.json
└── package-lock.json
└── README.md
server.js: The main application file containing the Express server setup and the API endpoint logic.

.env: Stores environment variables, particularly your GEMINI_API_KEY. (Make sure this file is ignored in version control for security).

package.json: Defines project metadata and lists all project dependencies.

package-lock.json: Records the exact versions of dependencies installed.

README.md: This file, providing a guide for the project.

Dependencies
The core dependencies for this project are:

express: Fast, unopinionated, minimalist web framework for Node.js.

cors: Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

@google/generative-ai: The official Node.js client library for the Google Generative AI API.

dotenv: A zero-dependency module that loads environment variables from a .env file into process.env.

You can find the exact versions in package.json.

Contributing
Contributions are welcome! If you have suggestions for improvements, bug fixes, or new features, please feel free to:

Fork the repository.

Create a new branch (git checkout -b feature/YourFeature).

Make your changes.

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature/YourFeature).

Open a Pull Request.

License
This project is open-sourced under the MIT License.

