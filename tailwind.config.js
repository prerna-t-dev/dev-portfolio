const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'title': ['clamp(3rem, 14vw, 9rem)'],
        'heading-1': ['clamp(2.5rem, 6.5vw, 10rem)'],
        'heading-2': ['clamp(2.4rem, 8vw, 10rem)'],
        'heading-3': ['clamp(2rem, 5vw, 2.75rem)'], 
        'special': ['clamp(2rem, 4vw, 3.25rem)'],
        'works-title': ['clamp(1.25rem, 2vw, 1.5rem)'],
        'body-1': ['clamp(1.1rem, 2vw, 1.3rem)'], 
        'body-2': ['clamp(1rem, 1.5vw, 1.5rem)'],
        'body-3': '1.1rem',
        'body-4': ['clamp(0.75rem, 3vw, 1rem)'],
      },
      fontFamily: {
        'general': ['GeneralSans-Variable', 'sans-serif'],
        'grotesk': ['CabinetGrotesk-Variable', 'sans-serif'],
      },
      colors: {
        'transparent': 'transparent',
        'primary-200': '#F2F2F2',
        'primary-300': '#E6E6E6',
        'primary-400': '#D9D9D9',
        'secondary-100': '#FAFAF9',
        'secondary-200': '#E8E8E3',
        'secondary-300': '#DDDDD5',
        'secondary-400': '#D1D1C7',
        'secondary-500': '#AEAE9D',
        'secondary-600': '#8C8C73',
        'secondary-700': '#70705C',
        'accent-400': '#0E0E0C',
        'accent-300': '#262626',
        'accent-200': '#4D4D4D',
        'accent-100': '#666666',
        'subtle-purple': '#b3a2c7', // Light purple
        'subtle-pink': '#f2a1b3', // Light pink
        'subtle-blue': '#a1c4fd', // Light blue
        'subtle-purple-light': '#c8bdd8', // Lighter purple
        'subtle-pink-light': '#f7b8c8', // Lighter pink
        'subtle-blue-light': '#b8d4fe', // Lighter blue
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in forwards", 
        floatUpDown: "floatUpDown 3s ease-in-out infinite",
        starAnimation: "starAnimation 10s linear infinite",
        shimmer: "shimmer 2s linear infinite"
      },
      keyframes: {
        floatUpDown: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        starAnimation: {
          "0%": { opacity: 0.8 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0.8 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        }
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
