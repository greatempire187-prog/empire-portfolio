/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 60px rgba(15, 23, 42, 0.35)',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top, rgba(16, 185, 129, 0.14), transparent 36%), radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.18), transparent 28%), radial-gradient(circle at 80% 10%, rgba(234, 179, 8, 0.18), transparent 24%)',
      },
      colors: {
        glass: 'rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
};
