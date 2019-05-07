const path = require('path');
const webpack = require('webpack');

/*
 * Webpack Plugins
 */
const ManifestPlugin = require('webpack-manifest-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// take debug mode from the environment
const debug = (process.env.NODE_ENV !== 'production');

// Development asset host (webpack dev server)
const publicHost = debug ? 'http://localhost:2992' : '';

module.exports = {
    // configuration
    context: __dirname,
    entry: {
        app_js: path.join(__dirname, 'src', 'app')
    },
    node: {
        fs: 'empty'
    },
    output: {
        path: path.join(__dirname, 'app', 'static', 'build'),
        publicPath: `${publicHost}/static/build/`,
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].js',
    },
    resolve: {
        extensions: ['.ts', '.js', '.jsx'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devtool: 'source-map',
    devServer: {
        headers: {'Access-Control-Allow-Origin': '*'},
    },
    module: {
        rules: [
            {test: /\.html$/, loader: 'raw-loader'},
            {
                test: /\.s?[ac]ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(ttf|eot|svg|png|jpe?g|gif|ico|woff|manifest)(\?.*)?$/i,
                loader: 'file-loader',
                options: {
                    context: path.join(__dirname, 'src'),
                    name: '[path][name].[hash].[ext]',
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {presets: ['env'], cacheDirectory: true}
            },
            {
                test: /\.vue$/,
                use: [
                    { loader: 'vue-loader' },
                    {
                        loader: 'vue-svg-inline-loader',
                        options: {
                            svgo: {
                                plugins: [
                                    {
                                        prefixIds: true
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules|\.d\.ts$/,
                options: {
                appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.d\.ts$/,
                loader: 'ignore-loader'
            },
        ],
    },
    plugins: [
        new ManifestPlugin({fileName: path.join(__dirname, 'app', 'webpack', 'manifest.json'), writeToFileEmit: debug}),
        new VueLoaderPlugin()
    ].concat(debug ? [] : [
        // production webpack plugins go here
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            }
        }),
    ]),
};