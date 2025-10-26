import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  // Точка входа
  entry: "./src/index.js",

  mode: "development",

  // Выходной файл
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "lib"),
    module: true, // ← указывает что выход - ES модуль
    library: {
      type: "module", // ← тип библиотеки - ES модуль
    },
  },
  experiments: {
    outputModule: true, // ← включаем экспериментальную фичу
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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
