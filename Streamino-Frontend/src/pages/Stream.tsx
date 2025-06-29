// src/components/Stream.tsx
import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const Stream: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const streamUrl = 'http://172.30.39.165:8080/hls/test.m3u8';

    if (video) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(streamUrl);
        hls.attachMedia(video);

        hls.on(Hls.Events.ERROR, (event, data) => {
          console.error('HLS.js error:', data);
        });

        return () => {
          hls.destroy(); // Clean up when component unmounts
        };
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native support (e.g. Safari)
        video.src = streamUrl;
      } else {
        console.error('HLS is not supported in this browser.');
      }
    }
  }, []);

  return (
    <div>
      <h2>Live Stream</h2>
      <video ref={videoRef} controls autoPlay width="640" height="360" />
    </div>
  );
};

export default Stream;
