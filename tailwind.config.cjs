/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      tablet: "640px",
      desktop: "1024px",
      wide: "1280px",
      laptop: "1024px",
    },
    extend: {},
  },
  plugins: [],
};
