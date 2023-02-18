const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true
  },

  entry: './src/UI-Kit/index.pug',
  // entry: './src/app.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  plugins: [
    new PugPlugin({
      // filename: 'index.html',
      pretty: true, // formatting HTML, useful for development mode
      // js: {
      //   // output filename of extracted JS file from source script
      //   filename: 'main.js',
      // },
      css: {
        // output filename of extracted CSS file from source style
        filename: 'style.css',
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader, // Pug loader
      },
      {
        test: /\.(css|sass|scss)$/,
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
      // {
      //   test: /\.(ttf|woff|woff2|svg)/,
      //   // use: 'file-loader'
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'fonts'
      //       }
      //     }
      //   ]
      // }
    ],
  },
};