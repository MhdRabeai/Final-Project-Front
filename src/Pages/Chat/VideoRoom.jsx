import React, { useEffect, useRef, useState } from "react";
import socket from "../../Services/socket"; // تأكد من أنك تستخدم نفس الكائن socket.io الذي تستخدمه للدردشة
import Peer from "peerjs"; // مكتبة PeerJS أو WebRTC الأصلية

const VideoRoom = () => {
  const [peer, setPeer] = useState(null);
  const [myStream, setMyStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [isCalling, setIsCalling] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [incomingCall, setIncomingCall] = useState(null);

  const videoRef = useRef(null); // مرجع للفيديو المحلي
  const remoteVideoRef = useRef(null); // مرجع للفيديو البعيد

  useEffect(() => {
    // الحصول على دفق الوسائط (الفيديو والصوت) من الكاميرا
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setMyStream(stream);
        if (videoRef.current) videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error accessing media devices:", err));

    // استقبال إشعار الاتصال الوارد
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
      if (remoteVideoRef.current) remoteVideoRef.current.srcObject = stream;
    });

    setPeer(newPeer);
    setIsCalling(true);
  };

  // قبول المكالمة الواردة
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
      if (remoteVideoRef.current) remoteVideoRef.current.srcObject = stream;
    });

    newPeer.signal(signalData);
    setPeer(newPeer);
    setIsCalling(true);
  };
  // إنهاء المكالمة
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

  // إيقاف الفيديو
  const toggleVideo = () => {
    const videoTrack = myStream.getVideoTracks()[0];
    videoTrack.enabled = !videoTrack.enabled;
    setIsVideoOff(!isVideoOff);
  };
  return (
    <div>
      <h1>Video Chat</h1>

      {/* عرض الفيديو المحلي */}
      <video ref={videoRef} autoPlay muted />

      {/* عرض الفيديو البعيد */}
      {isConnected && <video ref={remoteVideoRef} autoPlay />}

      {/* إشعار المكالمة الواردة */}
      {incomingCall && !isCalling && !isConnected && (
        <div>
          <h3>Incoming call from {incomingCall}</h3>
          <button onClick={() => acceptCall(incomingCall)}>Accept</button>
          <button onClick={() => setIncomingCall(null)}>Reject</button>
        </div>
      )}

      {/* حالة الاتصال */}
      {isConnected ? (
        <p>Connected</p>
      ) : isCalling ? (
        <p>Calling...</p>
      ) : (
        <p>Waiting for call...</p>
      )}

      {/* التحكم في المكالمات */}
      <div>
        {isCalling && (
          <>
            <button onClick={endCall}>End Call</button>
            <button onClick={toggleMute}>{isMuted ? "Unmute" : "Mute"}</button>
            <button onClick={toggleVideo}>
              {isVideoOff ? "Turn Video On" : "Turn Video Off"}
            </button>
          </>
        )}
        {!isCalling && !isConnected && (
          <button onClick={() => startCall("targetUserId")}>Start Call</button>
        )}
      </div>
    </div>
  );
};

export default VideoRoom;
