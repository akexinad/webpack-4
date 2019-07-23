const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // We will need the basic options to begin with.
    // 1. THE ENTRY POINT
    entry: './src/index.js',
    // 2. THE OUTPUT FILE
    output: {
        // webpack will automatically create a...
        filename: 'bundle.[contenthash].js',
        // inside...
        // NOTE
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    // 3. THE MODE
    mode: 'none',
    module: {
        rules:[
            {
                // test uses regex to check what file is supposed to be loaded.
                test: /\.(png|jpg)$/,
                // the loader that is needed to load that specific file type.
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    // webpack loads the loaders from right to left.
                    // First it looks at sass, then converts it to css, then converts to style text in the html page.
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/env' ],
                        plugins: [ 'transform-class-properties' ]
                    }
                }
            }
        ]
    },
    plugins: [
        // these pulgins minify your files.
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                // this means to remove all files together with sub-directories
                // no matter how many nesting levels
                '**/*',
                path.join(process.cwd(), 'build/**/*')
            ]
        })
    ]
};