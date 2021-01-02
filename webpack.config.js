const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const is_dev = process.env.NODE_ENV === "development";
const is_prod = !is_dev;

// если я продакшене то вывожу нормальные имена, если нет то вывожу имя с хешем чтобы браузер не кешировал файлы
const filename = (ext) => is_dev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
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
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(
          {
          filename: `src/assets/js/${filename('css')}`
        }
        )
    ],
    module: {
      rules: [
        // {
        //   test: /\.css$/i,
        //   use: ["style-loader", "css-loader"], 
        // },
        // {
        //   //sass scss
        //   test: /\.s[ac]ss$/i,
        //   use: [ "style-loader",  "css-loader", "sass-loader", ],
        // },
        {
          // css
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader'
            },
            // MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true 
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                // config: { path: `./postcss.config.js` }
              }
            }
          ]
        },
        {
          // sass
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader'
            },
            // MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true 
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                // config: { path: `./postcss.config.js` }
              }
            },
            { 
              loader: "sass-loader", 
              options: {} 
            }
          ]
        }
      ],
    }
};