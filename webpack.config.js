const path = require('path');
const webpack = require('webpack');
const ip = require('ip');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

PLUGINS = [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
        title: "My minigame boilerplate",
        favicon: './favicon.ico',
        inject: true,
        chunks: ['settings', 'app'],
        filename: 'index.html',
        meta: {
            viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
            description: 'My minigame boilerplate description',
            robots: 'index, follow',
            keywords: 'my, minigame, boilerplate, keywords',
            copyright: 'Nienormalny 2019'
        }
    })
];

module.exports = {
    optimization: {
        minimizer: [
            new TerserPlugin({
            terserOptions: {
                compress: {
                    drop_console: true,
                },
            },
            }),
        ],
    },
    devServer: {
        disableHostCheck: true,
        contentBase: './build'
    },
    entry: {
        settings: './src/require.js',
        app: './src/app.js'
    },
    output: {
        filename: './build/[name].js'
    },
    plugins: PLUGINS,
    module: {
        rules: [{
                test: /\.js/,
                exclude: /(node_modules)/,
                use: ['babel-loader']
            },
            {
                test: /\.json/,
                exclude: /(node_modules)/,
                type: "javascript/auto",
                use: "json-loader"
            },
            {
                test: /\.html/,
                exclude: /(node_modules)/,
                use: [
                    'aframe-super-hot-html-loader', //used to load html files with <require path="..."></require>
                    {
                        loader: 'super-nunjucks-loader',
                        options: {
                            globals: {
                                DEBUG_LOG: !!process.env.DEBUG_LOG,
                                DEBUG_KEYBOARD: !!process.env.DEBUG_KEYBOARD,
                                DEBUG_INSPECTOR: !!process.env.DEBUG_INSPECTOR,
                                HOST: ip.address(),
                                IS_PRODUCTION: process.env.NODE_ENV === 'production'
                            },
                            path: path.resolve(__dirname, 'src')
                        }
                    },
                    {
                        loader: 'html-require-loader',
                        options: {
                            root: path.resolve(__dirname, 'src')
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /(node_modules)/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg)/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        modules: [path.join(__dirname, 'node_modules')]
    }
}