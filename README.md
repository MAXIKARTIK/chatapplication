# 💬 Chat Application (TypeScript)

A real-time chat application built with **TypeScript**, **Node.js**, **Socket.io**, and **Vite (React)**.  
This project demonstrates instant messaging with a modern client-server architecture.

---

## 🚀 Features

- **Real-time Communication**: Uses **Socket.io** for instant, bidirectional event-based communication.  
- **Modern Frontend**: Powered by a fast and efficient **Vite + React + TypeScript** stack.  
- **Robust Backend**: Built with a scalable **Node.js + Express + TypeScript** server.  
- **Type-Safe Codebase**: Strong typing ensures maintainability and prevents common bugs.  
- **Simple Setup**: Designed for straightforward development and production deployment.  

---

## 📂 Project Structure

```
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
```

---

## 🛠️ Getting Started

Follow these instructions to get the project running on your local machine.

### 📌 Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)  
- **npm** or **yarn**

---

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/MAXIKARTIK/chatapplication.git
cd chatapplication
```

---

### 2️⃣ Install Dependencies  

#### Install Server Dependencies:
```bash
cd server
npm install
```

#### Install Client Dependencies:
```bash
# From the root directory
cd ../client
npm install
```

---

### 3️⃣ Run the Application Locally

Start the **server** first, then the **client** in separate terminals.

#### Start the Server:
```bash
cd server
npm run dev
```

#### Start the Client:
```bash
cd client
npm run dev
```

✅ The application should now be running and accessible in your browser.

---

### 4️⃣ Build for Production  

#### Build and Run Server:
```bash
cd server
npm run build
npm run start
```

#### Build Client:
```bash
cd client
npm run build
```

---

## 🔧 Configuration
- Ensure the **client’s API request URLs** point to the correct server address (especially after deployment).  
- The **server must be running** before the client can establish a connection.  

---

## 🤝 Contributing
Contributions are always welcome! 🎉  
- Fork the repository  
- Create a new feature branch  
- Commit your changes  
- Push the branch  
- Open a Pull Request  

Please create an issue first to discuss any major changes.

---

## 📜 License
This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for more details.
