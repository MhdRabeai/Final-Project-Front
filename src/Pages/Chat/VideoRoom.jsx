import React, { useEffect, useRef, useState } from "react";
import socket from "../../Services/socket";
import Peer from "peerjs";

const VideoRoom = () => {
  const [peer, setPeer] = useState(null);
  const [myStream, setMyStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [isCalling, setIsCalling] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [incomingCall, setIncomingCall] = useState(null);

  const videoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setMyStream(stream);
        if (videoRef.current) videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error accessing media devices:", err));

    socket.on("incomingCall", (callerId) => {
      setIncomingCall(callerId);
    });

    socket.on("callAccepted", () => {
      setIsConnected(true);
    });

    return () => {
      socket.off("incomingCall");
      socket.off("callAccepted");
    };
  }, []);

  const startCall = (callerId) => {
    const newPeer = new Peer({
      initiator: true,
      trickle: false,
      stream: myStream,
    });

    newPeer.on("signal", (data) => {
      socket.emit("callUser", { userId: callerId, signalData: data });
    });

    newPeer.on("stream", (stream) => {
      setRemoteStream(stream);
    });

    setPeer(newPeer);
    setIsCalling(true);
  };

  const acceptCall = (signalData) => {
    const newPeer = new Peer({
      initiator: false,
      trickle: false,
      stream: myStream,
    });

    newPeer.on("signal", (data) => {
      socket.emit("acceptCall", { signalData: data });
    });

    newPeer.on("stream", (stream) => {
      setRemoteStream(stream);
    });

    newPeer.signal(signalData);
    setPeer(newPeer);
    setIsCalling(true);
  };

  const endCall = () => {
    peer.destroy();
    setIsCalling(false);
    setIsConnected(false);
    setRemoteStream(null);
  };

  const toggleMute = () => {
    const audioTrack = myStream.getAudioTracks()[0];
    audioTrack.enabled = !audioTrack.enabled;
    setIsMuted(!isMuted);
  };

  const toggleVideo = () => {
    const videoTrack = myStream.getVideoTracks()[0];
    videoTrack.enabled = !videoTrack.enabled;
    setIsVideoOff(!isVideoOff);
  };

  return (
    <div class="max-w-4xl mx-auto p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <h1 class="text-3xl font-semibold text-center mb-6">Video Chat</h1>

      <div class="relative mb-4">
        <video
          ref={videoRef}
          autoPlay
          muted
          class="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {isConnected && remoteStream && (
        <div class="relative mb-4">
          <video
            ref={remoteVideoRef}
            autoPlay
            srcObject={remoteStream}
            class="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      )}

      {incomingCall && !isCalling && !isConnected && (
        <div class="bg-blue-600 p-4 rounded-lg mb-4">
          <h3 class="text-xl font-semibold">
            Incoming call from {incomingCall}
          </h3>
          <div class="mt-4 flex gap-4 justify-center">
            <button
              onClick={() => acceptCall(incomingCall)}
              class="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Accept
            </button>
            <button
              onClick={() => setIncomingCall(null)}
              class="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Reject
            </button>
          </div>
        </div>
      )}

      <div class="text-center mt-4">
        {isConnected ? (
          <p class="text-lg text-green-500">Connected</p>
        ) : isCalling ? (
          <p class="text-lg text-yellow-400">Calling...</p>
        ) : (
          <p class="text-lg text-gray-400">Waiting for call...</p>
        )}
      </div>

      <div class="mt-6 flex justify-center gap-6">
        {isCalling && (
          <>
            <button
              onClick={endCall}
              class="bg-red-600 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              End Call
            </button>
            <button
              onClick={toggleMute}
              class="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              {isMuted ? "Unmute" : "Mute"}
            </button>
            <button
              onClick={toggleVideo}
              class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              {isVideoOff ? "Turn Video On" : "Turn Video Off"}
            </button>
          </>
        )}
        {!isCalling && !isConnected && (
          <button
            onClick={() => startCall("targetUserId")}
            class="bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
          >
            Start Call
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoRoom;
