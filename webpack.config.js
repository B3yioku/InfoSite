const webpack = require('webpack');

module.exports = {
  mode: 'development', // Change to 'production' for production builds

  // Define your entry points
  entry: {
    index: './index.js', // Make sure this points to your actual JS file
  },
  
  // Define the output for the bundle
  output: {
    filename: 'index.pack.js',
  },
  
  // Resolve extensions to avoid specifying them in import statements
  resolve: {
    extensions: ['.js', '.json'],
    alias: {},
  },
  
  // Module rules (only one module.rules array is needed)
  module: {
    rules: [
      {
        test: /\.js$/, // Use babel-loader for JS files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', // This is the correct preset for Babel 7
              '@babel/preset-react', // If you're using React, otherwise remove this
            ],
          },
        },
      },
    ],
  },
  
  // Plugins
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        // Additional loader options if needed
      },
    }),
  ],
};