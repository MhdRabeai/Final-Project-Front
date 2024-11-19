import React, { useState, useEffect } from "react";
import {
  createRoom,
  joinRoom,
  checkRoomStatus,
  requestRoomAccess,
} from "./roomActions";
import socket, { joinRoom as socketJoinRoom } from "../../Services/socket";

const RoomPage = () => {
  const [roomName, setRoomName] = useState("");
  const [password, setPassword] = useState("");
  const [roomId, setRoomId] = useState(null);
  const [isJoined, setIsJoined] = useState(false);
  const [roomStatus, setRoomStatus] = useState(null); // لتخزين حالة الغرفة
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (roomId) {
      // تحقق من حالة الغرفة عند التبديل أو عند إدخال roomId
      checkRoomStatus(roomId)
        .then((status) => {
          setRoomStatus(status);
        })
        .catch((err) => {
          setError("Error checking room status");
        });
    }
  }, [roomId]);

  useEffect(() => {
    socket.on("messageReceived", (message) => {
      console.log("New message:", message);
    });

    socket.on("accessGranted", (message) => {
      setSuccessMessage(message);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleCreateRoom = async () => {
    setIsLoading(true);
    try {
      const room = await createRoom(roomName, password);
      setRoomId(room._id);
      socketJoinRoom(room._id, room.ownerId);
      setIsJoined(true);
      setSuccessMessage("Room created successfully!");
    } catch (err) {
      setError("Error creating room");
    } finally {
      setIsLoading(false);
    }
  };

  const handleJoinRoom = async () => {
    setIsLoading(true);
    try {
      if (roomStatus && roomStatus.isPrivate) {
        alert("This room is private. You need an invitation or password.");
      } else {
        await joinRoom(roomId, password);
        socketJoinRoom(roomId, "userId"); // افترض أن "userId" هنا تم تعيينه مسبقًا
        setIsJoined(true);
        setSuccessMessage("You have joined the room!");
      }
    } catch (err) {
      setError("Error joining room");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRequestAccess = async () => {
    setIsLoading(true);
    try {
      await requestRoomAccess(roomId);
      alert("Request sent to room owner");
    } catch (err) {
      setError("Error requesting access");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Room Page</h1>
      {isLoading && <p>Loading...</p>}
      {!isJoined ? (
        <div>
          <input
            type="text"
            placeholder="Room Name"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleCreateRoom}>Create Room</button>
          <button onClick={handleJoinRoom}>Join Room</button>
          {roomStatus && roomStatus.isPrivate && (
            <p>
              This is a private room. Please request access or enter the
              password.
            </p>
          )}
          <button onClick={handleRequestAccess}>Request Access</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        </div>
      ) : (
        <p>You have joined the room!</p>
      )}
    </div>
  );
};

export default RoomPage;
