import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // enable class‑based dark mode (toggle with a button)
  theme: {
    extend: {
      colors: {
        // fine‑tune the palette to match the example site
        primary: colors.indigo[600],
        secondary: colors.slate[600],
        accent: colors.pink[500],
      },
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
