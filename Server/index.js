const express = require("express");
const http = require("node:http");
const socketIo = require("socket.io");

const app = express();
const PORT = 3002;

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on("connection", socket => {
    const user = socket.handshake.address.substr(7);
    
    console.log(user + " connected at " + new Date().toLocaleTimeString());

    socket.emit("message", { text: "Welcome to PeerChat, " + user + "!", from: "System", time: new Date().toLocaleTimeString() });

    socket.on("message", message => {
        io.emit("message", { text: message.text, from: user, time: new Date().toLocaleTimeString() });
    });

    socket.on("disconnect", _ => {
        console.log(user + " disconnected at " + new Date().toLocaleTimeString());
    });
});

server.listen(PORT, _ => console.log("Server listening on port " + PORT));