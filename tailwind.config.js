/** @type {import('tailwindcss').Config} */
const tailwind = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorPrimary: "#8CAE68",
        colorBrand: "#EEE82C",
        colorCta: "#EEA243",
        colorPrimaryLight: "#F3F9E3",
        colorCtaTwo: "#60992D",
      },
      backgroundImage: {
        "hero-bg-1": "url('/hero-bg-portfolio.jpg')",
        "hero-bg-2": "url('/contact-clock.jpg')",
        "hero-bg-3": "url('/hero-bg-yellow.jpg')",
        "hero-bg-4": "url('/bg-yellow-2.jpg')",
      },
    },
  },
  plugins: [],
};
export default tailwind;
