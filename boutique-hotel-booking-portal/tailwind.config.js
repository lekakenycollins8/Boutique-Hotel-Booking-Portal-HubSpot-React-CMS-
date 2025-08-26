/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.jsx",
    "./src/components/modules/**/*.jsx",
    "./src/components/partials/**/*.jsx",
    "./src/components/islands/**/*.jsx",
    "./src/*.jsx",
    "./templates/**/*.{html,hubl}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      }
    },
  },
  plugins: [],
};
