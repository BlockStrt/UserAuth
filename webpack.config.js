const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
    bundle: path.resolve(__dirname, 'views/index.ejs')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].ejs',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    },
                },
            },
            {
                test: /\.(ejs)$/i,
                type: 'asset/resource'
            }
        ],
    }, 
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Webpack App',
                filename: 'index.js',
                template: 'build/template.html'
            }),
        ],
}


// module.exports = (env, argv) => {
//     return ({
//         output: {
//               path: path.resolve(__dirname, 'public'),
//               publicPath: '/',
//               filename: 'index.js'
//             },
//     mode: argv.mode,
//     target: 'node',
//     node: {
//       // Need this when working with express, otherwise the build fails
//       __dirname: true,
//       __filename: true,
//     },
//     externals: [ 
//         nodeExternals({whitelist: [/\.(?|ejs)$)],}),], // Need this to avoid error when working with Express
//     module: {
//       rules: [
//         {
//           // Transpiles ES6-8 into ES5
//           test: /\.js$/,
//           exclude: /node_modules/,
//           use: {
//             loader: "babel-loader"
//           }
//         },
//         {
//          test: /\.ejs$/,
//          loader: 'ejs-loader',
//          options: {
//            esModule: false
//          }
//        }
//       ]
//     }
//   })
// }