import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface Props {
  streamKey: string;
}

const StreamPlayer: React.FC<Props> = ({ streamKey }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const streamUrl = `http://172.30.39.165:8080/hls/${streamKey}.m3u8`; // replace IP
 
    if (video) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(streamUrl);
        hls.attachMedia(video);
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = streamUrl;
      } else {
        console.error('HLS not supported in this browser.');
      }
    }
  }, [streamKey]);

  return (
    <div className="flex justify-center px-4">
      <video
        ref={videoRef}
        controls
        autoPlay
        className="w-full max-w-4xl rounded-xl shadow-lg border border-gray-300"
      />
    </div>
  );
};

export default StreamPlayer;
