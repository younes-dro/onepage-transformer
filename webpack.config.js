// var webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry : "./app.js",
  output : {
    filename: "public/bundle.js"
  },
  module:{
    rules: [
        {
          exclude: /node_modules/,
          use:{
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/react'
              ],
              plugins: [
                '@babel/plugin-proposal-class-properties'
              ]
            }
          }
      },
      {
    test:/\.css$/,
    use:['style-loader','css-loader']
},
        {
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/'
      }
    }
  ]
},
        {
  test: /\.(gif|png|jpe?g|svg)$/i,
  use: [
    'file-loader',
    {
      loader: 'image-webpack-loader',
      options: {
        bypassOnDebug: true, // webpack@1.x
        disable: true, // webpack@2.x and newer
      },
    },
  ],
}
    ]
  }
};
