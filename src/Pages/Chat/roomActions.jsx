import axios from "axios";

const apiUrl = "http://localhost:4000/api/rooms";

export const createRoom = async (name, password, ownerId) => {
  try {
    const response = await axios.post(`${apiUrl}/create`, {
      name,
      password,
      ownerId,
    });
    return response.data;
  } catch (error) {
    throw new Error("Error creating room");
  }
};

export const joinRoom = async (e, roomName, password) => {
  e.preventFefault();
  try {
    const response = await axios.post(`${apiUrl}/join-room`, {
      roomName,
      password,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Error joining room");
  }
};

export const checkRoomStatus = async (roomId) => {
  try {
    const response = await axios.get(`${apiUrl}/status/${roomId}`);
    console.log("response");
    return response.data;
  } catch (error) {
    throw new Error("Error checking room status");
  }
};

export const requestRoomAccess = async (roomId) => {
  try {
    const response = await axios.post(`${apiUrl}/request-access/${roomId}`);
    return response.data;
  } catch (error) {
    throw new Error("Error requesting access");
  }
};

export const approveAccess = async (requestId) => {
  try {
    const response = await axios.post(`${apiUrl}/approve-access/${requestId}`);
    return response.data;
  } catch (error) {
    throw new Error("Error approving access");
  }
};
