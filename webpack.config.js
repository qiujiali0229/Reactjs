module.exports = {
    entry : __dirname + '/js/app.js',
    output : {
        path : __dirname + '/build/',
        filename : 'bundle.js'
    },
    module:{
        loaders: [
            {
                test: /\.js$/,
                loader:"jsx-loader"
            }
        ]
    }
}
