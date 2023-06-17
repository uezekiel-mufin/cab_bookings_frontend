import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
  <div className="flex flex-col relative px-4 items-center justify-center min-h-screen bg-lime-900">
    <h1 className=" text-center text-4xl leading-10 tracking-widest lg:text-5xl font-bold text-lime-100 mb-4">
      Welcome to CarBooky
    </h1>
    <p className="text-lime-200 text-xl mb-12">
      Book a ride in just a few clicks!
    </p>
    <div className="flex flex-col md:flex-row mt-12 md:mt-4 absolute bottom-8 left-0 md:static justify-center items-center px-10 gap-4 w-full md:w-auto">
      <Link
        to="/login"
        className="px-10 py-4  w-full font-semibold text-center text-white transition duration-300 rounded-lg hover:from-lime-600 text-2xl hover:to-pink-600 ease bg-gradient-to-br from-gray-500 to-pink-500 md:w-[250px]"
      >
        Log in
      </Link>
      <Link
        to="/signup"
        className="px-10 py-4 text-2xl w-full font-semibold text-center text-white transition duration-300 rounded-lg hover:from-lime-600 hover:to-pink-600 ease bg-gradient-to-br from-gray-500 to-pink-500 md:w-[250px]"
      >
        Sign up
      </Link>
    </div>
  </div>
);

export default Homepage;
