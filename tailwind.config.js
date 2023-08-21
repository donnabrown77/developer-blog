/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const linkHeadingStyles = {
  color: colors.gray[100],
  borderBottomColor: "transparent",
  "&:hover": {
    color: `${colors.gray[900]}`,
  },
};

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: {
              background: "rgba(205, 200, 255, 0.05)",
            },
            "h2 a": linkHeadingStyles,
            "h3 a": linkHeadingStyles,
            "h4 a": linkHeadingStyles,
            "h5 a": linkHeadingStyles,
            "h6 a": linkHeadingStyles,
            blockquote: {
              fontSize: "90%",
              color: colors.zinc[500],
              borderLeftColor: colors.zinc[700],
              "p::before": { display: "none" },
              "p::after": { display: "none" },
            },
          },
          code: {
            "&::before": { content: `"" !important` },
            "&::after": { content: `"" !important` },
            fontWeight: "normal",
          },
          "[data-rehype-pretty-code-fragment]:nth-of-type(2) pre": {
            "[data-line]::before": {
              content: "counter(line)",
              counterIncrement: "line",
              display: "inline-block",
              width: "1rem",
              marginRight: "1rem",
              textAlign: "right",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class", // https://tailwindcss.com/docs/dark-mode
};
