const path = require('path');
// const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {

    plugins: [
        // new LiveReloadPlugin({
        //     appendScriptTag: true
        // })
    ],

    entry: './src/js/index.js',
    mode: 'development',
    // module: {
    //     rules: [
    //         {
    //             test: /\.less$/,
    //             loader: 'less-loader', // compiles Less to CSS
    //             options: {
    //                 sourceMap: true,
    //             }
    //         },
    //     ],
    // },
    resolve: {
        extensions: [ '.js', '.css' ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    watch: true
};
