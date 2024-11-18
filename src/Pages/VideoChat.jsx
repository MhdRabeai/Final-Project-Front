import React, { useState } from "react";

const VideoChat = () => {
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);

  const toggleAudio = () => setIsAudioOn(!isAudioOn);
  const toggleVideo = () => setIsVideoOn(!isVideoOn);
  const endCall = () => alert("Call ended");

  return (
    <div className="container mx-auto p-4 h-screen flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center bg-green-500 text-white p-4 rounded-lg mb-4">
        <h1 className="text-xl font-semibold">Doctor-Patient Video Chat</h1>
        <p>Connected to: Dr. Smith</p>
      </div>

      {/* Video Area */}
      <div className="flex flex-grow flex-col md:flex-row gap-4">
        {/* Doctor's Video */}
        <div className="flex-1 bg-gray-800 rounded-lg relative">
          {isVideoOn ? (
            <div className="h-full bg-gray-500 rounded-lg">
              <p className="text-white text-center mt-4">Doctor's Video</p>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center bg-black text-white">
              Video is off
            </div>
          )}
          <div className="absolute bottom-2 left-2 text-white bg-gray-800 px-2 py-1 rounded">
            Dr. Smith
          </div>
        </div>

        {/* Patient's Video */}
        <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-700 rounded-lg overflow-hidden relative self-start md:self-center">
          {isVideoOn ? (
            <div className="h-full bg-gray-400 rounded-lg">
              <p className="text-white text-center mt-2">Your Video</p>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center bg-black text-white">
              Video is off
            </div>
          )}
          <div className="absolute bottom-2 left-2 text-white bg-gray-800 px-2 py-1 rounded">
            You
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={toggleAudio}
          className={`p-4 rounded-full ${
            isAudioOn ? "bg-green-500" : "bg-green-500"
          } text-white hover:opacity-80`}
        >
          {isAudioOn ? "Mute" : "Unmute"}
        </button>
        <button
          onClick={toggleVideo}
          className={`p-4 rounded-full ${
            isVideoOn ? "bg-green-500" : "bg-gray-600"
          } text-white hover:opacity-80`}
        >
          {isVideoOn ? "Stop Video" : "Start Video"}
        </button>
        <button
          onClick={endCall}
          className="p-4 rounded-full bg-green-500 text-white hover:opacity-80"
        >
          End Call
        </button>
      </div>
    </div>
  );
};

export default VideoChat;
