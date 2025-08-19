// src/pages/Stream.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/api';

interface Stream {
  _id: string;
  title: string;
  category: string;
  streamKey: string;
  userId: {
    
    username: string;
  };
}

const Stream: React.FC = () => {
  const [streams, setStreams] = useState<Stream[]>([]);

  useEffect(() => {
    const fetchStreams = async () => {
      try {
        const res = await API.get('/streams/live');
        setStreams(res.data);
      } catch (error) {
        console.error("Error fetching live streams", error);
      }
    };

    fetchStreams();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">🎬 Live Streams</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {streams.map((stream) => (
          <div key={stream._id} className="bg-white rounded-xl shadow-lg p-4">
            <div className="bg-gray-300 h-48 rounded-md mb-3 flex items-center justify-center text-gray-600">
              📺 Thumbnail Placeholder
            </div>

            <h2 className="text-xl font-semibold">{stream.title}</h2>
            <p className="text-sm text-gray-500">By: {stream.userId.username}</p>
            <p className="text-sm text-gray-500">Category: {stream.category}</p>

            <Link
              to={`/watch/${stream.streamKey}`}
              className="mt-4 inline-block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Watch
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stream;
