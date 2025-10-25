const path = require("path");

module.exports = {
  // Точка входа
  entry: "./src/index.js",

  // Выходной файл
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "lib"),
  },
};
