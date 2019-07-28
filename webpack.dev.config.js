const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // We will need the basic options to begin with.
    // 1. THE ENTRY POINT
    entry: {
        'hello': './src/hello.js',
        'watch': './src/watch.js'
    },
    // 2. THE OUTPUT FILE
    output: {
        // webpack will automatically create a...
        // We can remove content hashing in development since there is no need
        // to handle browser caching.
        filename: '[name].bundle.js',
        // inside...
        // NOTE
        path: path.resolve(__dirname, './dist'),
        // With the html webpack plugin the index.html file gets put in
        // the dist folder
        publicPath: ''
    },
    // 3. THE MODE
    mode: 'development',

    // CONFIG TO RUN OFF OF A DEV SERVER SO YOU DON'T HAVE TO KEEP REFRESHING.
    // Remember to npm install webpack-dev-server
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 9000
    },
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
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    // webpack loads the loaders from right to left.
                    // First it looks at sass, then converts it to css, then converts to style text in the html page.
                    'style-loader', 'css-loader', 'sass-loader'
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
            },
            {
                test: /\.hbs$/,
                use: {
                    loader: 'handlebars-loader',
                }
            }
        ]
    },
    plugins: [
        // these pulgins minify your files.
        // No need for minification in dev mode.
        // new TerserPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: 'styles.[contenthash].css'
        // }),
        // This cleans up all your built files.
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                // this means to remove all files together with sub-directories
                // no matter how many nesting levels
                '**/*',
                path.join(process.cwd(), 'build/**/*')
            ]
        }),
        // This automatically updates your index.html file with the latest md5 hassh bundle and css file.
        new HtmlWebpackPlugin({
            // custom options on what you want for your index.html file.
            title: 'HELLO WEBPACK',
            // NOTE that chunks correspond to the entry point.
            chunks: ['hello'],
            filename: 'hello.html',
            template: 'src/page-template.hbs',
        }),
        new HtmlWebpackPlugin({
            // custom options on what you want for your index.html file.
            title: 'LOOK AT THIS WATCH',
            // NOTE that chunks correspond to the entry point.
            chunks: ['watch'],
            filename: 'watch.html',
            template: 'src/page-template.hbs',
        })
    ]
};