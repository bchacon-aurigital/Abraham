/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'cp-regular': ['"Copperplate Regular"', 'sans-serif'],
        'cp-bold': ['"Copperplate Bold"', 'sans-serif'],
        'futura-bold': ['"Futura Bold"', 'sans-serif'],
        'futura-medium-condensed': ['"Futura Medium Condensed"', 'sans-serif'],
        'futura-medium': ['"Futura Medium"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
