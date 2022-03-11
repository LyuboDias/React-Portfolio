// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path: __dirname + '/dist',
//         publicPath: '/',
//         filename: 'bundle.js'
//     },
//     devServer: {
//         contentBase: './dist',
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: [
//                     "babel-loader",
//                 ],
//             },
//             {
//                 test: /\.scss$/,
//                 use: [
//                     'style-loader',
//                     'css-loader',
//                     // 'sass-loader',
//                 ],
//             },
//             {
//                 test: /\.(gif|svg|jpg|png)$/,
//                 loader: "file-loader",
//             },
//         ]
//     },
//     resolve: {
//         extensions: ['.js', '.jsx']
//     },
//     mode: 'production' // | 'development' | 'none'
// };
