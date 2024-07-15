/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        "custom-full": "120%", // or any other value you prefer
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["luxury", "sunset"],
  },
};
