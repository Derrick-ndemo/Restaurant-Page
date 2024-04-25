const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { OptimizationStages } = require('webpack');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images', // Specify the output directory for images
                        },
                    },
                ],
            }
        ],
    },
    devtool: 'inline-source-map', // debug tool
    devServer: {
        static: '/dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    // Optimization: {
    //     runtimeChunk: 'single',
    // },
}