const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const is_dev = process.env.NODE_ENV === "development";
const is_prod = !is_dev;
const filename = (ext) => is_dev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = () => {
    return {
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin(
                {
                  filename: `src/assets/js/${filename('css')}`
              })
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
    }
}