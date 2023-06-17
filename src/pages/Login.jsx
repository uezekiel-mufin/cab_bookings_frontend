import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="py-16 space-y-8 bg-lime-50 h-screen overflow-auto">
      <h2 className="flex justify-center text-3xl md:text-3xl text-lime-800 font-bold">
        Login
      </h2>
      <form
        onSubmit={handleSubmit(handleLoginSubmit)}
        className="w-full grid grid-cols-1 gap-4 mb-20 px-4 md:px-10 text-lime-800 lg:px-20 xl:px-40 md:gap-x-8"
      >
        <div>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            {...register('email', {
              required: true,
              message: 'Please enter a valid Email',
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            {...register('password', {
              required: true,
              message: 'Please enter the Password',
            })}
          />
        </div>
        <button
          type="submit"
          className="bg-lime-700
            w-full flex gap-2 items-center transition-all duration-300 text-white rounded-md justify-center text-2xl px-8 py-2"
        >
          Login
        </button>
      </form>
      <p className="flex justify-center">
        Don&apos;t have an account?&nbsp;
        <Link to="/signup" className="text-blue-800 font-italic">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
