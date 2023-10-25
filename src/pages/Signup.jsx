/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Circles } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signUpUser } from '../redux/slices/userSlice';

const SignUpComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);

  const handleSignUp = async ({ name, email, password, confirmPassword }) => {
    setLoading(true);
    const result = await dispatch(
      signUpUser({
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      }),
    );
    if (result.payload.message) {
      setLoading(false);
      reset();
      toast.success('Welcome to Carbooky.');
      navigate('/cabs');
    }
  };
  const password = watch('password');
  return (
    <div className="py-6 pt-20 space-y-8 bg-lime-50 h-screen flex flex-col items-center overflow-auto ">
      <h2 className="flex justify-center text-3xl md:text-4xl text-lime-800 font-bold">
        Sign Up
      </h2>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="w-full grid grid-cols-1 gap-1 min-w-full  md:min-w-[600px] max-w-[800px] mb-20 px-4 md:px-10 text-lime-800 lg:px-20 xl:px-40 md:gap-x-2"
      >
        <div>
          <label htmlFor="fullName">
            Full Name:
            <input
              type="text"
              id="fullName"
              {...register('name', {
                required: 'Please enter your full name',
                pattern: {
                  value: /^[A-Za-z]+\s[A-Za-z]+$/,
                  message:
                    'Please enter a valid full name (first name and last name)',
                },
              })}
            />
          </label>
          {errors.fullName && (
            <span className="text-red-500">{errors.fullName.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Please enter your email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address',
                },
              })}
            />
          </label>
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              {...register('password', {
                required: 'Please enter your password',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
              })}
            />
          </label>
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="confirmPassword">
            Confirm Password:
            <input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (value) =>
                  value === password || 'Passwords do not match',
              })}
            />
          </label>
          {errors.confirmPassword && (
            <span className="text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        {loading ? (
          <div className="flex justify-center w-full">
            <Circles
              height="50"
              width="50"
              color="rgba(101, 163, 13, 1)"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={loading}
            />
          </div>
        ) : (
          <button
            type="submit"
            className="bg-lime-700
          w-full flex gap-2 items-center transition-all duration-300 text-white rounded-md justify-center text-2xl px-8 py-2"
          >
            Sign Up
          </button>
        )}
      </form>

      <p className="flex justify-center">
        Already have an account?&nbsp;
        <Link to="/login" className="text-blue-800 font-italic">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignUpComponent;
