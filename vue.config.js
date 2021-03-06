module.exports = {
  // cli3 代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
  //代理，看解决跨域问题
  devServer: {
    host: "localhost",
    port: 8080,

    proxy: {
      '/api': {//匹配所有以‘/api’开头的请求路径
        target: 'http://localhost:8001',//代理目标的基础路径
        changeOrigin: true,//支持跨域
        pathRewrite: {//重写路径：去掉路径中开头的'/api'
          '^/api': ''
        }
      }
    }

  }
}