const path = require('path');
const PugPlugin = require('pug-plugin');
const isDevMode = process.env.NODE_ENV === 'development';

module.exports = {
    mode: 'development',
    target: 'web',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },

    entry: './src/index.pug',
    // entry: "./src/app.js",

    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    plugins: [
        new PugPlugin({
            pretty: isDevMode ? true : false,
        }),
    ],

    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: PugPlugin.loader,
            },
            {
                test: /\.(sass|scss|css)$/,
                use: ['css-loader', 'sass-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                type: 'asset/resource',
                generator: {
                    // output filename of fonts
                    filename: 'assets/fonts/[name][ext][query]',
                },
            },
        ],
    },
};
