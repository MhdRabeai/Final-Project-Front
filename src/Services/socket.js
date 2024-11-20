import { io } from "socket.io-client";

const socket = io("http://localhost:4000", {
  transports: ["polling"],
});
socket.on("connect", () => {
  console.log("Connected to server");
});
export const joinRoom = (roomId, userId) => {
  socket.emit("joinRoom", { roomId, userId });
};

export const leaveRoom = (roomId, userId) => {
  socket.emit("leaveRoom", { roomId, userId });
};

export const sendMessage = (roomId, message) => {
  socket.emit("sendMessage", { roomId, message });
};

export const onMessageReceived = (callback) => {
  socket.on("messageReceived", callback);
};

export const onUserJoined = (callback) => {
  socket.on("userJoined", callback);
};

export const onUserLeft = (callback) => {
  socket.on("userLeft", callback);
};

export const disconnect = () => {
  socket.disconnect();
};

export default socket;
