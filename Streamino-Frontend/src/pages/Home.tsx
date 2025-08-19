import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#240046] to-[#3c096c] px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center bg-[#1e1e2e] bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 text-white p-6 sm:p-10 rounded-2xl shadow-xl max-w-2xl w-full"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#ff9a63] mb-4 leading-snug">
          🎥 Welcome to <span className="text-[#d67eff]">Streamino</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mb-8 px-2 sm:px-0">
          Discover and create live streams with ease. Join the community of content creators and viewers.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link
            to="/register"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-2 rounded-lg shadow hover:opacity-90 transition text-sm sm:text-base"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-[#1e1e2e] border border-white border-opacity-30 text-white px-6 py-2 rounded-lg shadow hover:bg-opacity-60 transition text-sm sm:text-base"
          >
            Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
