const path = require('path');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: './src/index.js',
        sfsdk: './src/sfsdk.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist')
    }, 
    mode: 'development',
    devServer: {
        //contentBase: './dist',
        static:path.resolve(__dirname,'output'),
        compress: true,
        //hot: true, // 启用热替换
       // liveReload: 'webpack-dev-server/client?http://localhost:9000', // 启用自动刷新
        host: 'localhost',
        port: 9000, 
    },
    plugins: [
        new CleanWebpackPlugin(), //压缩时自动清理上次dist文件
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: true,
            hash: true,
            chunks: ['index']
        }),
       // new HotModuleReplacementPlugin() // 引入热替换插件
    ]
}
