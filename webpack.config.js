const path = require('path')
const webpack = require('webpack')

// Charger les plugins nécessaires
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// Main Webpack configuration
module.exports = {
    entry: './src/js/app.js', // Point d'entrée dans l'application
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        chunkFilename: 'vendor.js'
    },
    // Gestion des modules...
    module: {
        rules: [
            // Conversion du code ES6 par Babel
            {
                test: /\.js$/,
                exclude: '/node_modules',
                use: {
                    loader: 'babel-loader'
                }
            },
            // Prise en charge des fichiers scss, css...
            {
                test: /\.sc|ass$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.html$/i, // Expression régulière : tous les fichiers finissant par .html .HTML . Html
                loader: 'html-loader'
            }
        ]
    },
    // Plugins...
    plugins: [
        new CopyWebpackPlugin(
            {
                patterns: [
                    {
                        from: 'src/*.html',
                        flatten: true
                    }
                ]
            }
        ),
        // Optimisation du fichier index.html
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true, // Remove HTML comments
                collapseWhitespace: true, // Compresse les espaces
                removeEmptyAttributes: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: './src/css/[name].css',
            chunkFilename: './src/css/[id].css'
        })
    ]
}