/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#087653",
        darkgreen: "#064D3B",
        emeraldAccent: "#15966F",
        brand: {
          text: "#202824",
          subtext: "#737B75",
          border: "#E5EAE6",
          mutedBg: "#FFFFFF",
        },
      },
      fontFamily: {
        heading: ["Manrope", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        body: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)",
        card: "0 4px 20px -2px rgba(8, 118, 83, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        dropdown: "0 10px 30px -5px rgba(6, 77, 59, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)",
      },
      scale: {
        102: "1.02",
      },
    },
  },
  plugins: [],
};
