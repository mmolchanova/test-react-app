var path = require('path')

module.exports = {
    devtool: 'source-map',
    //точка входа
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        //описывает преобразование ф-лов, прежде, чем они попадут в финальную сборку
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            }
        ]
    }
} 