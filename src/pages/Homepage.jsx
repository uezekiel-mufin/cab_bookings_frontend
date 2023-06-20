import React from 'react';
import { AiOutlineCar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Homepage = () => (
  <div className="flex flex-col relative px-4 items-center justify-center h-screen bg-lime-900">
    <h1 className=" text-center text-4xl gap-1 flex-wrap justify-center flex items-center leading-10 tracking-widest lg:text-5xl font-bold text-lime-100 mb-4">
      Welcome to
      <span className="flex items-center">
        CarBooky
        <AiOutlineCar className=" text-2xl text-lime-100  " />
      </span>
    </h1>
    <p className="text-lime-200 text-base md:text-xl mb-32 md:mb-12">
      Book a ride in just a few clicks!
    </p>
    <div className="flex flex-col md:flex-row mt-12 md:mt-4 absolute bottom-12 left-0 md:static justify-center items-center px-10 gap-4 w-full md:w-auto">
      <Link
        to="/login"
        className="px-10 py-2 md:py-4  w-full font-semibold text-center text-white transition duration-300 rounded-lg hover:from-lime-600 text-2xl hover:to-pink-600 ease bg-gradient-to-br from-gray-500 to-pink-500 md:w-[250px]"
      >
        Log in
      </Link>
      <Link
        to="/signup"
        className="px-10 py-2 md:py-4 text-2xl w-full font-semibold text-center text-white transition duration-300 rounded-lg hover:from-lime-600 hover:to-pink-600 ease bg-gradient-to-br from-gray-500 to-pink-500 md:w-[250px]"
      >
        Sign up
      </Link>
    </div>
  </div>
);

export default Homepage;
