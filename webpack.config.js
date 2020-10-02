const path = require('path');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
           use: 'babel-loader'
        }, {test: /\.css?$/, use: 'css-loader'}]
    },
    mode: 'development'
}