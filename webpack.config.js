const path = require("path");
const { merge } = require('webpack-merge');
const css = require('./webpack-modules/css')
const js = require('./webpack-modules/js')
const image_and_fonts = require('./webpack-modules/image_and_fonts')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const is_dev = process.env.NODE_ENV === "development";
const is_prod = !is_dev;

// если я продакшене то вывожу нормальные имена, если нет то вывожу имя с хешем чтобы браузер не кешировал файлы
const filename = (ext) => is_dev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const common =  merge([
  {
    context: path.resolve(__dirname, "src"),// указываю webpack в какой папке у меня влежат исходники
    entry: './assets/js/main.js',// путь откуда я беру файл относительно папки src
    mode: "development",
    output: {
        filename: `./assets/js/${filename("js")}`,
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',//  как его назвать после при сборке
            template: path.resolve(__dirname,'./src/index.html'),// откудаго берём
            minify: {
                collapseWhitespace: is_prod,
                removeComments: is_prod,
                removeRedundantAttributes: is_prod,
                removeScriptTypeAttributes: is_prod,
                removeStyleLinkTypeAttributes: is_prod,
                useShortDoctype: is_prod
            }
        })
    ],
    resolve: {
      alias: {
        '@': 'src'
        // images: path.resolve(__dirname, 'dist/assets/img/'),
      },
    },
  },
  css(),
  // js(),
  image_and_fonts()  
])

module.exports = common