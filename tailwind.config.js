/* eslint-disable no-unused-vars */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'reserve-bg': "url('/public/images/teslas.webp')",
      }),
      backgroundColor: (theme) => ({
        'reserve-color': 'rgba(101, 163, 13, 0.3)',
      }),
      backgroundSize: {
        'auto-100': 'auto 100%',
      },
    },
  },
  plugins: [],
};
