const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js',
        product: './src/Category/category.js',
        category: './src/Product/product.js',
        header: './src/Shared/Header/header.js',
    },
    output: {
        path: path.resolve(__dirname, '../public/'),
        filename: '[name].bundle.js'
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, '../public/'),
        historyApiFallback: true,
        open: true,
        hot: true,
        watchContentBase: true,
        inline: true,
        port: 3000
    },
    devtool: 'eval-cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../public/assets',
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attributes: true,
                        minimize: true,
                    },
                },
            },
        ]
    },
    plugins: [
        // CleanWebpackPlugin will do some clean up/remove folder before build
        // In this case, this plugin will remove 'dist' and 'build' folder before re-build again
        new CleanWebpackPlugin(),

        // The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index'],
            inject: 'body',
            hash: true
        }),

        new HtmlWebpackPlugin({
            template: './src/Category/category.html',
            filename: 'category.html',
            chunks: ['category'],
            inject: 'body',
            hash: true
        }),

        new HtmlWebpackPlugin({
            template: './src/Category/category.html',
            filename: 'category.html',
            chunks: ['category'],
            inject: 'body',
            hash: true
        }),

        new HtmlWebpackPlugin({
            template: './src/Shared/Header/header.html',
            filename: 'header.html',
            chunks: ['header'],
            inject: 'body',
            hash: true
        })
    ]
};