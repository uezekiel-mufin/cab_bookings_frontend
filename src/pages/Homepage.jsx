import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-lime-800">
    <h1 className="text-5xl font-bold text-white mb-8">Welcome to CarBooky</h1>
    <p className="text-white text-xl mb-12">Book a ride in just a few clicks!</p>
    <div className="flex space-x-5">
      <Link to="/login" className="px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-lime-600 hover:to-pink-600 ease bg-gradient-to-br from-gray-500 to-pink-500 md:w-auto">
        Log in
      </Link>
      <Link to="/signup" className="px-10 py-4 text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-lime-600 hover:to-pink-600 ease bg-gradient-to-br from-gray-500 to-pink-500 md:w-auto">
        Sign up
      </Link>
    </div>

  </div>
);

export default Homepage;
