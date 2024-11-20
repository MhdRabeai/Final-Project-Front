import React, { useState, useEffect } from "react";
import {
  createRoom,
  joinRoom,
  checkRoomStatus,
  requestRoomAccess,
} from "./roomActions";
import socket, { joinRoom as socketJoinRoom } from "../../Services/socket";
import { useUserInfo } from "../../Services/UserContext";
import { Bounce, toast } from "react-toastify";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdPassword } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const RoomPage = () => {
  const navigate = useNavigate();
  const { user } = useUserInfo();
  const [roomName, setRoomName] = useState("");
  const [password, setPassword] = useState("");
  const [roomId, setRoomId] = useState(null);
  const [isJoined, setIsJoined] = useState(false);
  const [roomStatus, setRoomStatus] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!user?.role === "doctor") {
      navigate("/");
    }
    if (roomId) {
      checkRoomStatus(roomId)
        .then((status) => setRoomStatus(status))
        .catch(() => setError("Error checking room status"));
    }
  }, [roomId]);

  useEffect(() => {
    socket.on("messageReceived", (message) =>
      console.log("New message:", message)
    );
    socket.on("accessGranted", (message) => setSuccessMessage(message));
    return () => socket.disconnect();
  }, []);

  const handleCreateRoom = async () => {
    if (user && user["role"] === "doctor") {
      setIsLoading(true);
      try {
        const room = await createRoom(roomName, password, user["_id"]);
        setRoomId(room._id);
        socketJoinRoom(room._id, room.ownerId);
        setIsJoined(true);
        console.log(room);
        // console.log(await room.json());
        return toast.success("Room created successfully!", {
          position: "bottom-right",
          autoClose: 1000,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } catch {
        return toast.error("Error creating room", {
          position: "bottom-right",
          autoClose: 750,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        // setError("Error creating room");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleJoinRoom = async () => {
    setIsLoading(true);
    try {
      if (roomStatus?.isPrivate) {
        toast.error(
          "This room is private. You need an invitation or password.",
          {
            position: "bottom-right",
            autoClose: 750,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
      } else {
        await joinRoom(roomName, password);
        socketJoinRoom(roomId, user?._id);
        setIsJoined(true);
        return toast.success("You have joined the room!", {
          position: "bottom-right",
          autoClose: 1000,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (err) {
      return toast.error(err.message, {
        position: "bottom-right",
        autoClose: 750,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRequestAccess = async () => {
    setIsLoading(true);
    try {
      await requestRoomAccess(roomId);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Call Room
        </h1>
        {isLoading && <p className="text-blue-500 mb-4">Loading..</p>}
        <form>
          <div>
            <div className="sm:col-span-3">
              <label
                htmlFor="registerForm"
                className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200 font-medium"
              >
                Room name:
              </label>
            </div>

            <div className="sm:col-span-9">
              <div className="relative">
                <input
                  type="text"
                  className="peer py-2 px-4 ps-11 block w-full
                          border-2  border-gray-200 rounded-lg text-sm 
                          focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent 
                           dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  placeholder="Enter Room Name..."
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none ">
                  <IoChatbubbleEllipsesOutline className="size-4 text-gray-500" />
                </div>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="af-account-password"
                className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-neutral-200"
              >
                Password:
              </label>
            </div>

            <div className="sm:col-span-9">
              <div className="flex mb-2">
                <div className="flex-1">
                  <div className="relative">
                    <input
                      name="password"
                      type="password"
                      className="peer py-2 px-4 ps-11 block w-full
                          border-2  border-gray-200 rounded-lg text-sm 
                          focus:border-[#4f9451] focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent 
                           dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Enter Password..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none ">
                      <MdPassword className="fill-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {user?.role === "doctor" && (
                <button
                  type="button"
                  onClick={handleCreateRoom}
                  className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                >
                  Create
                </button>
              )}
              <button
                type="button"
                onClick={handleJoinRoom}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Join
              </button>
              <button
                type="button"
                onClick={handleRequestAccess}
                className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600"
              >
                Login request
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RoomPage;
