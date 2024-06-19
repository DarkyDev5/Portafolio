import React from 'react';

const VideoBackgroundComponent: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
        disablePictureInPicture
        controlsList="nodownload"
      >
        <source src="/videosobre.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackgroundComponent;