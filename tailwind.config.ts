/** @type {import('tailwindcss').Config} */

const Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
  },
  plugins: [import('prettier-plugin-tailwindcss')],
};

export default Config;