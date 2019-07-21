const path = require('path');

module.exports = {
    // We will need the basic options to begin with.
    // 1. THE ENTRY POINT
    entry: './src/index.js',
    // 2. THE OUTPUT FILE
    output: {
        // webpack will automatically create a...
        filename: 'bundle.js',
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
            }
        ]
    }
};