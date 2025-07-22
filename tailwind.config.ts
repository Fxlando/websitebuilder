import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blob-yellow': '#FFCE3D',
        'blob-yellow-accent': '#FFC93C',
        'blob-yellow-light': '#FFE799',
        'background-white': '#FFFFFF',
        'background-light': '#FAFAFA',
        'text-black': '#111111',
        'text-gray': '#666666',
        'border-light': '#E5E5E5',
      },
      fontFamily: {
        'chakra': ['Chakra Petch', 'sans-serif'],
        'space': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
};

export default config; 