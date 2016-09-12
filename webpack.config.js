var path = require('path');

module.exports = {
    context: __dirname,
    entry: './js/ClientApp.jsx',
    output: {
        path: path.join(__dirname, 'public'),
        filename:'bundle.js'
    },
    resolve:{
        extensions: ['','.js','.jsx','.json']
    },
    stats:{
      colors:true,
      reasons:true,
      chunks:false
    },
    devtool: 'source-map',
    module: {
        preloaders: [
            {
                test: /\.jsx?$/,
            }
        ],
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};