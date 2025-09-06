💬 Chat Application (TypeScript)

A real-time chat application built with TypeScript, Node.js, Socket.io, and Vite (React). This project demonstrates instant messaging with a modern client-server architecture.
🚀 Features

    Real-time Communication: Uses Socket.io for instant, bidirectional event-based communication.

    Modern Frontend: Powered by a fast and efficient Vite + React + TypeScript stack.

    Robust Backend: Built with a scalable Node.js + Express + TypeScript server.

    Type-Safe Codebase: Strong typing throughout the project ensures maintainability and helps prevent common bugs.

    Simple Setup: Designed for a straightforward development and production setup process.

📂 Project Structure

chatapplication/
│
├── client/             # React + Vite + TypeScript Frontend
│   ├── public/         # Static assets
│   ├── src/            # React components & application logic
│   └── tsconfig.json
│
├── server/             # Node.js + Express + TypeScript Backend
│   ├── src/            # Server-side logic and API
│   └── tsconfig.json
│
└── README.md           # Project documentation



🛠️ Getting Started

Follow these instructions to get the project running on your local machine.
Prerequisites

    Node.js (v18 or later recommended)

    npm or yarn

1. Clone the Repository

git clone [https://github.com/MAXIKARTIK/chatapplication.git](https://github.com/MAXIKARTIK/chatapplication.git)

2. Install Dependencies

You'll need to install dependencies for both the server and the client.

Install Server Dependencies:

cd server
npm install


Install Client Dependencies:

# From the root directory:
cd ../client
npm install


3. Run the Application Locally

Start the server first, then start the client in separate terminal windows.

Start the Server (from the server directory):

npm run dev


Start the Client (from the client directory):

npm run dev


The application should now be running and accessible in your browser.
4. Build for Production

Server:

# From the server directory
npm run build
npm run start


Client:

# From the client directory
npm run build
