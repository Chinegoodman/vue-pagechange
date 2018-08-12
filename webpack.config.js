var proxy = require('http-proxy-middleware');
module.exports = {
    devServer: {
        proxy: {
            '/apihost': { // api表示当前项目请求的key
                // target: 'http://xxxxxxxx:8000', // 代理服务器路径
                target: 'http://www.ooo0o.com', // 代理服务器路径
                pathRewrite: { '^/apihost': '/' }, // 重写路径
                changeOrigin: true
            }
        }
    }
}