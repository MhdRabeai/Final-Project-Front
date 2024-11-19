import axios from "axios";

const apiUrl = "http://localhost:4000/api/rooms";

export const createRoom = async (name, password) => {
  try {
    const response = await axios.post(`${apiUrl}/create`, { name, password });
    return response.data;
  } catch (error) {
    throw new Error("Error creating room");
  }
};

export const joinRoom = async (roomId, password) => {
  try {
    const response = await axios.post(`${apiUrl}/join-room/${roomId}`, {
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error("Error joining room");
  }
};

export const checkRoomStatus = async (roomId) => {
  try {
    const response = await axios.get(`${apiUrl}/status/${roomId}`);
    return response.data; // يعيد معلومات الغرفة بما في ذلك ما إذا كانت خاصة أو عامة
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
