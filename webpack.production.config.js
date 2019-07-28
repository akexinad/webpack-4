const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
        filename: '[name].[contenthash].js',
        // inside...
        // NOTE
        path: path.resolve(__dirname, './dist'),
        // With the html webpack plugin the index.html file gets put in
        // the dist folder
        publicPath: '/static/'
    },
    // 3. THE MODE
    mode: 'production',
    // When our componenents share common dependencies, we need to tell webpack to optimize these dependencies so they are not duplicated in the respective bundle files that are built and make the files too large.
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 10000,
            automaticNameDelimiter: '_'
        }
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
        // THE TERSER PLUGIN IS INCLUDED BY DEFAULT IN PROD MODE.
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
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
            filename: 'hello.html',
            // Specifying common dependencies that is in the vendors bundle file.
            chunks: ['hello', 'vendors~hello~watch'],
            title: 'Hello World',
            description: 'this is a description for hello world',
            template: 'src/page-template.hbs'
        }),
        new HtmlWebpackPlugin({
            // custom options on what you want for your index.html file.
            filename: 'watch.html',
            chunks: ['watch', 'vendors~hello~watch'],
            title: 'Watches',
            description: 'this is a description for watches',
            template: 'src/page-template.hbs'
        })
    ]
};