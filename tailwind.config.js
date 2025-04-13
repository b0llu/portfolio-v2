/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffffff',
          dark: '#121212',
        },
        text: {
          light: '#171717',
          dark: '#f2f2f2',
          secondary: {
            light: '#525252',
            dark: '#a0a0a0',
          },
        },
        accent: {
          light: '#2563eb',
          dark: '#60a5fa',
          hover: {
            light: '#1d4ed8',
            dark: '#93c5fd',
          }
        },
      },
    },
  },
  plugins: [],
};