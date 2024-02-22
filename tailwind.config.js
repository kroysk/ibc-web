/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    fontFamily: {
      'display': ["Rubik"],
      'body': ["Rubik"],
    },
    extend: {
      colors: {
          ibc_blue: {
            100: "#D0ECF7",
            200: "#9FC5D8",
            300: "#6F9EB8",
            400: "#3E7699",
            500: "#0D4F79",
          },
          ibc_kobalt: {
            100: "#D7F0F4",
            200: "#A6D4E0",
            300: "#75B8CC",
            400: "#439CB8",
            500: "#1280A4",
          },
          ibc_yellow: {
            100: "#EFE4D5",
            200: "#EDD5B2",
            300: "#EDD5B2",
            400: "#E8B86B",
            500: "#E6A947",
          },
          ibc_red: {
            100: "#F4DDD7",
            200: "#E8BAAC",
            300: "#DC9781",
            400: "#D07356",
            500: "#C4502B",
          },
          ibc_gray: {
            100: "#EAEAEA",
            200: "#C7C7C7",
            300: "#A4A4A4",
            400: "#818181",
            500: "#5E5E5E",
          },
          ibc_lila: {
            100: "#DBD8FF",
            500: "#695CFF",
          }
      },
      boxShadow: {
        ibc: "6px 6px 16px 0px rgba(67, 156, 184, 0.15)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}

