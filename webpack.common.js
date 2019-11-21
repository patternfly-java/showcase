const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/main/web', 'main.js'),
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: 'head',
            favicon: path.resolve(__dirname, 'src/main/web/favicon.ico'),
            template: path.resolve(__dirname, 'src/main/web/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.scss',
            chunkFilename: '[id].css'
        })
    ],

    module: {
        rules: [
            {
                test: /\.(svg|ttf|eot|woff|woff2)$/,
                include: [
                    path.resolve(__dirname, 'node_modules/@patternfly/patternfly/assets/fonts'),
                    path.resolve(__dirname, 'node_modules/@patternfly/patternfly/assets/pficon')
                ],
                use: {
                    loader: 'file-loader',
                    options: {
                        // Limit at 50k. larger files emited into separate files
                        limit: 5000,
                        outputPath: 'fonts',
                        name: '[name].[ext]',
                    }
                }
            },
            {
                test: /\.(svg)$/,
                include: [
                    path.resolve(__dirname, 'node_modules/@patternfly/patternfly/assets/images')
                ],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images',
                    }
                }
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/i,
                include: [
                    path.resolve(__dirname, 'src/main/web'),
                    path.resolve(__dirname, 'node_modules/@patternfly/patternfly/assets/images')
                ],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000,
                            outputPath: 'images',
                            name: '[name].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.ico$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.s[ac]ss$/i,
                include: [
                    path.resolve(__dirname, 'src/main/web'),
                    path.resolve(__dirname, 'node_modules/@patternfly/patternfly'),
                    path.resolve(__dirname, 'node_modules/color-themes-for-google-code-prettify/src/themes')
                ],
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'},
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader'}
                ]
            }
        ]
    },

    output: {
        filename: 'showcase.js',
        path: path.resolve(__dirname, 'src/main/resources/org/patternfly/showcase/public')
    }
};