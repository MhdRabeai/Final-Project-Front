import React, { useState, useEffect } from "react";
import axios from "axios";
import socket from "../../Services/socket";

const Room = ({ roomId, userId }) => {
  const [participants, setParticipants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch participants on component load
  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/participants/${roomId}`
        );
        setParticipants(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch participants:", error);
      }
    };

    fetchParticipants();

    // Join room via Socket.IO
    socket.emit("joinRoom", { roomId, userId });

    // Handle user joined
    socket.on("userJoined", ({ userId }) => {
      setParticipants((prev) => [...prev, { userId, joinedAt: new Date() }]);
    });

    // Handle user left
    socket.on("userLeft", ({ userId }) => {
      setParticipants((prev) => prev.filter((user) => user.userId !== userId));
    });

    // Cleanup on component unmount
    return () => {
      socket.emit("leaveRoom", { roomId, userId });
      socket.off("userJoined");
      socket.off("userLeft");
    };
  }, [roomId, userId]);

  // Render participants list
  return (
    <div className="p-4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Room {roomId}
      </h2>

      {isLoading ? (
        <p className="text-center text-gray-600">Loading participants...</p>
      ) : (
        <ul className="space-y-4">
          {participants.map((participant) => (
            <li
              key={participant.userId}
              className="p-3 bg-gray-100 rounded-lg border border-gray-300 shadow-sm hover:bg-gray-200"
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800">
                  User ID: {participant.userId}
                </span>
                <span className="text-sm text-gray-500">
                  Joined At: {new Date(participant.joinedAt).toLocaleString()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Room;
