import React from "react";
import VideoPlayer from "../Components/VideoPlayer/VideoPlayer";
import Options from "../Components/Options/Options";
import Notification from "../Components/Notification/Notification";

const VideoCall = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="appBar" position="static">
          <div>Video Chat</div>
        </div>

        {/* Video Palyer */}
        <VideoPlayer />

        {/* Options Component */}
        <div className="app_options">
          <Options>
            {/* Notification Component */}
            <Notification />
          </Options>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
