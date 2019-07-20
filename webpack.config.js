module.exports = {
    // We will need the basic options to begin with.
    // 1. THE ENTRY POINT
    entry: './src/index.js',
    // 2. THE OUTPUT FILE
    output: {
        // webpack will automatically create a...
        filename: 'bundle.js',
        // inside...
        path: './dist'
    },
    // 3. THE MODE
    mode: 'none'
}