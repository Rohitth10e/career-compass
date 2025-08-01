# Career Compass

A brief description of your project, what it does, and what technologies it uses. This is a full-stack web application built with the MERN (MongoDB, Express.js, React, Node.js) stack.

---

## Table of Contents

- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)

---

## Folder Structure

The project is organized into two main directories: `frontend` and `backend`.

```text
/
├── backend/         # Express.js & Node.js server
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js    # Main server entry point
│   └── package.json
│
├── frontend/        # React client
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── .gitignore       # Files to be ignored by Git
└── README.md        # This file

Prerequisites
Before you begin, ensure you have the following installed on your system:

Node.js (v14.x or later recommended)

npm (or yarn)

MongoDB (or a MongoDB Atlas account)

Installation
Follow these steps to set up the project locally.

Clone the repository:

git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name

Install backend dependencies:

Navigate to the backend directory and install the required npm packages.

cd backend
npm install

Install frontend dependencies:

Navigate to the frontend directory from the root and install its dependencies.

cd ../frontend
npm install

Environment Variables
This project uses environment variables to handle sensitive information like database connection strings and API keys.

Backend .env file:

In the backend directory, create a file named .env and add the following variables. Replace the placeholder values with your actual configuration.

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

Frontend .env file:

In the frontend directory, create a file named .env to specify the backend API endpoint.

REACT_APP_API_URL=http://localhost:5000

Note: .env files are included in the .gitignore and should never be committed to version control. You can create a .env.example file in each directory to list the required variables for other developers.

Available Scripts
Backend
In the backend directory, you can run the following commands:

npm run start: Starts the production server.

npm run dev: Starts the server in development mode using nodemon, which will automatically restart the server on file changes.

Frontend
In the frontend directory, you can run:

npm start: Runs the app in development mode. Open http://localhost:3000 to view it in your browser.

npm test: Launches the test runner in interactive watch mode.

npm run build: Builds the app for production to the build folder.

Running Both Servers Concurrently
For a better development experience, you can use a package like concurrently to run both the frontend and backend servers with a single command from the root directory.

Install concurrently in the root:

npm install concurrently --save-dev

Add a script to the root package.json:

"scripts": {
  "dev": "concurrently \"npm run dev --prefix backend\" \"npm start --prefix frontend\""
}

Run the command from the root directory:

npm run dev
