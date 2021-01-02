var ImageminPlugin = require('imagemin-webpack-plugin').default
const path = require("path");

const is_dev = process.env.NODE_ENV === "development";
const is_prod = !is_dev;
const filename = (ext) => is_dev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

// console.log("dir ",path.resolve( __dirname, "../src"))

module.exports = () => {
    return {
        module: {
            rules: [
                // {
                //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
                //     type: '/assets/img',
                // },
                {
                    // images / icons
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    loader: 'file-loader',
                    options: {
                        name: 'assets/img/[name].[ext]',
                    }
                },
                {
                    // Fonts
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader',
                    options: {
                      name: 'assets/font/[name].[ext]'
                    }
                },
            ],
        },
        plugins: [
            new ImageminPlugin(
                { 
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    optipng: {
                        optimizationLevel: 8
                    } 
                }
            )
        ],
    }
}