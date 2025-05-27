/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "white/20": "rgba(255, 255, 255, 0.2)",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        lightgold: "var(--lightgold)",
        baseblack: "var(--baseblack)",
        approxblack: "var(--approxblack)",
        basewhite: "var(--basewhite)",
        red: "var(--red)",
        blue: "var(--blue)",
      },
    },
    screens: {
      xxs: "320px",
      xss: "400px",
      xs: "576px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
      "3xl": "1536px",
      "4xl": "1740px",
      "5xl": "1920px",
      "6xl": "2200px",
    },
    container: {
      center: true,
      margin: "0 auto",
      screens: {
        xxs: "310px",
        xss: "380px",
        xs: "546px",
        sm: "620px",
        md: "718px",
        lg: "992px",
        xl: "1180px",
        "2xl": "1420px",
        "3xl": "1516px",
        "4xl": "1700px",
        "5xl": "1900px",
        "6xl": "2180px",
      },
    },
  },
  plugins: [],
};
