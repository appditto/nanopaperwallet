// postcss.config.js
const purgecss = require("postcss-purgecss");

module.exports = {
  plugins: [
    require("autoprefixer"),
    purgecss({
      content: [
        "./src/**/*.vue",
        "./src/**/*.js",
        "./src/**/*.ts"
      ],
    })
  ]
};