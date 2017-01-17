module.exports = {
  entry :__dirname+'/js/app.js',
  output : {
      path : __dirname+'/build',
      filename : 'bundle.js'
  },
  module:{
      loaders: [
          {
              test: /\.js$/,
              loader:"jsx-loader"
          }
      ]
  },
  devServer: {
    contentBase: __dirname + '/build',
    port: 80,
    host: 'localhost'
  }
}
