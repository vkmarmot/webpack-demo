const path = require("path");

module.exports = {
  // Точка входа
  entry: "./src/index.js",

  mode: "development",

  // Выходной файл
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "lib"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // применяется к .css файлам
        use: [
          "style-loader", // внедряет CSS в DOM
          "css-loader", // преобразует CSS в JS модуль
        ],
      },
    ],
  },
};
