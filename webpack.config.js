var Webpack = require('webpack'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    precss = require('precss');

var eslintrcPath = path.resolve(__dirname, '.eslintrc'),
    nodeModulesPath = path.resolve(__dirname, 'node_modules'),
    buildPath = path.resolve(__dirname, 'src', 'build'),
    mainPath = path.resolve(__dirname, 'src', 'index.js');

var config = {
    devtool: 'eval',
    watch: true,
    entry: {
        app: [
            'webpack-hot-middleware/client',
            mainPath
        ]
    },
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        preLoaders: [
            {
                test: /\.js(x)?$/,
                loader: 'eslint',
                exclude: nodeModulesPath
            }
        ],
        loaders: [
            {
                test: /\.js(x)?$/,
                loader: 'babel',
                exclude: nodeModulesPath
            },
            {
                test: /\.(css|scss)$/,
                loaders: ['style', 'css', 'sass', 'postcss']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url?limit=8192'
            },
            {
                test : /\.(woff|woff2|ttf|eot)$/,
                loader: 'url'
            }
        ]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        //new Webpack.optimize.CommonsChunkPlugin('vendors.bundle.js'),
        new Webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss']
    },
    eslint: {
        configFile: eslintrcPath
    },
    postcss: function () {
        return [autoprefixer, precss];
    }
};

module.exports = config;