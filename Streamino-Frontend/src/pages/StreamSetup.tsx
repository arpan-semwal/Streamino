// src/pages/StreamSetup.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api';

const StreamSetup: React.FC = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const userId = user?._id;
  const streamKey = user?.streamKey;

  const handleGoLive = async () => {
    if (!title || !category) {
      alert('Title and category are required!');
      return;
    }

    try {
      await API.post('/streams/create', {
        title,
        category,
        userId,
      });

      setMessage('✅ Stream created! Use the Stream Key below in OBS.');
    } catch (err: any) {
      console.error("Stream Creation Error", err.response?.data || err.message);
      setMessage('❌ Failed to create stream');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-xl mx-auto bg-white shadow-lg p-8 rounded-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Setup Your Live Stream
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Stream Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="e.g. My Awesome Stream"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="">-- Select Category --</option>
            <option value="Gaming">Gaming</option>
            <option value="Music">Music</option>
            <option value="Education">Education</option>
            <option value="Just Chatting">Just Chatting</option>
          </select>
        </div>

        <button
          onClick={handleGoLive}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go Live
        </button>

        {message && (
          <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded text-sm text-green-800">
            <p>{message}</p>

            <p className="mt-2 font-semibold">📡 Your Stream Key:</p>
            <div className="bg-gray-200 p-2 mt-1 rounded text-gray-800 text-center">
              {streamKey}
            </div>

            <p className="mt-2 text-xs text-gray-600">
              Use this in OBS: <code>rtmp://YOUR_IP/live</code> with the key above.
            </p>

            <button
              onClick={() => navigate(`/watch/${streamKey}`)}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              View Your Live Stream
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StreamSetup;
