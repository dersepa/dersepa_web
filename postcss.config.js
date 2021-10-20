module.exports = {
  plugins: {
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    },

    "@fullhuman/postcss-purgecss": {
      content: [
        "./pages/**/*.{js,jsx,ts,tsx,css}",
        "./components/**/*.{js,jsx,ts,tsx,css}",
        "./node_modules/bootstrap/**/*.{js,jsx,ts,tsx,css}",
        "./node_modules/@material-ui/**/*.{js,jsx,ts,tsx,css}",
        "./node_modules/reactstrap/**/*.{js,jsx,ts,tsx.css}",
      ],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:\/]+/g) || [],
    },
  },
};
