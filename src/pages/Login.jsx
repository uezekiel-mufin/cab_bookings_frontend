/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginUser } from '../redux/slices/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginSubmit = async ({ email, password }) => {
    const user = {
      email,
      password,
    };
    console.log(user);
    const result = await dispatch(loginUser(user));
    if (result?.payload?.message === 'You are logged in') {
      toast.success('Login successful');
    }
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
              required: 'Please enter your email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Please enter a valid email address',
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            {...register('password', {
              required: 'Please enter the Password',
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
