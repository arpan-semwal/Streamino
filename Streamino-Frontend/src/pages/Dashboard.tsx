import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleGoLive = () => {
    navigate("/stream/create");
  };

  const handleWatch = () => {
    navigate(`/watch/${user.streamKey}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          🎮 Welcome, {user?.fullName || "Streamer"}!
        </h2>

        <div className="bg-gray-50 p-4 rounded-lg mb-6 text-sm text-gray-700">
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Username:</strong> {user?.username}</p>
          <p><strong>Stream Key:</strong> <code className="break-words">{user?.streamKey}</code></p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleGoLive}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Go Live
          </button>

          <button
            onClick={handleWatch}
            className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition"
          >
            Watch Your Stream
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
