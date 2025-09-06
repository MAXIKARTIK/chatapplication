"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});
io.on("connection", (socket) => {
    console.log(`user ${socket.id} connected`);
    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`user with ID ${socket.id} joined room: ${data}`);
    });
    socket.on("send_message", (data) => {
        // console.log(data);
        socket.to(data.room).emit("recieve_message", data);
    });
    socket.on("disconnect", () => {
        console.log(`user ${socket.id} disconnected`);
    });
});
app.get("/test", (req, res) => {
    res.json("server is running fine").status(200);
});
server.listen(5000, () => {
    console.log("server running on port 5000");
});
