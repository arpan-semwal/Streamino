// src/pages/WatchStream.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import StreamPlayer from '../components/StreamPlayer';

const WatchStream: React.FC = () => {
  const { streamKey } = useParams();

  if (!streamKey) return <p>⚠️ No stream key found in URL</p>;

  return <StreamPlayer streamKey={streamKey} />;
};

export default WatchStream;
