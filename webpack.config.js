/* eslint-disable */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Для того, чтобы создавать отдельный css файл, я так понял этот плагин читает код
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // Для минификации css файлов
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        app: './app/src/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist')
    },
    devtool: 'inline-source-map', // Карты для показа ошибок в исходных файлах
    devServer: {
        contentBase: './app/dist'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            },

            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "eslint-loader"
                    }
                ],
            },
            {
                test: /\.(png|svg|jp(e*)g|gif|mp3|mp4)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[name].[ext]'
                    }
                }]
            }
        ]
    },
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({}), new UglifyJsPlugin()],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "style.css",
            chunkFilename: "style.css"
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './app/src/index.html'
        })
    ]
};