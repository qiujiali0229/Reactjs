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
    devServer:{
		contentBase: __dirname ,
		port: 80,
		host: 'localhost',
		proxy: {
			'/api': {
				target: 'http://localhost:9000',
				pathRewrite: {
					'^/api': ''
				}
			} 
		}
	}
}
