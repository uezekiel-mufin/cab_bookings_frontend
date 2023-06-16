import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpComponent = () => {
  const [Name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    // Here, you can perform sign-up logic, such as making an API request to register the user
    console.log('Signing up:', {
      Name, email, password,
    });
    // Reset form fields
    Name('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPasswordError('');
  };

  return (
    <div className="py-6 space-y-8 bg-lime-50 h-screen overflow-auto">
      <h2 className="flex justify-center text-2xl md:text-3xl text-lime-800 font-bold">Sign Up</h2>
      <form onSubmit={handleSignUp} className="w-full grid grid-cols-1 gap-1 mb-20 px-4 md:px-10 text-lime-800 lg:px-20 xl:px-40 md:gap-x-2">
        <label htmlFor="Name">
          Name:
          <input
            type="text"
            id="Name"
            value={Name}
            onChange={(e) => Name(e.target.value)}
            required
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password:
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {passwordError && <p>{passwordError}</p>}
        <button
          type="submit"
          className="bg-lime-700
            w-full flex gap-2 items-center transition-all duration-300 text-white rounded-md justify-center text-2xl px-8 py-2"
        >
          Sign Up
        </button>
      </form>

      <p className="flex justify-center">
        Already have an account?&nbsp;
        <Link to="/login" className="text-blue-800 font-italic">Log in</Link>
      </p>

    </div>
  );
};

export default SignUpComponent;
