import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-200 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center bg-white p-6 sm:p-10 rounded-2xl shadow-xl max-w-2xl w-full"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 leading-snug">
          🎥 Welcome to <span className="text-indigo-600">Streamino</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 mb-8 px-2 sm:px-0">
          Discover and create live streams with ease. Join the community of content creators and viewers.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition text-sm sm:text-base"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-gray-600 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-700 transition text-sm sm:text-base"
          >
            Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
