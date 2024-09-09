/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    // themes: ["emerald"],
    themes: [
      // "light",
      // "lofi",
      {
        // mytheme: {
        //   primary: "#38bdf8",
        //   secondary: "#f87171",
        //   accent: "#2dd4bf",
        //   neutral: "#6b7280",
        //   "base-100": "#374151",
        //   info: "#0ea5e9",
        //   success: "#4ade80",
        //   warning: "#ef9e34",
        //   error: "#be123c",
        // },
        // myLofi: {
        //   primary: "#0d0d0d",
        //   secondary: "#1a1919",
        //   accent: "#fdba74",
        //   neutral: "#000000",
        //   "base-100": "#ffffff",
        //   info: "#0072f5",
        //   success: "#21ca51",
        //   warning: "#fbbf24",
        //   error: "#e11d48",
        // },
        myLightTheme: {
          primary: "#2563eb",
          secondary: "#f000b8",
          accent: "#1dcdbc",
          neutral: "#2b3440",
          "base-100": "#ffffff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  }
}

