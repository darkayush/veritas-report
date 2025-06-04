import React from 'react';

function Cover() {
  return (
    <div className="w-full md:h-screen overflow-hidden">
      <video
        src="/home/Veritas_Cover.mp4"
        autoPlay
        muted
        playsInline
        className="w-full  object-contain"
      ></video>
    </div>
  );
}

export default Cover;