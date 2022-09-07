/*
 * @Author: Bertram
 * @LastEditors: Bertram
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  lintOnSave: true, // 暂时关闭代码格式检测

  // 配置反向代理
  devServer: {
    proxy: {
      '/api': {
        target: 'https://i.maoyan.com',
        changeOrigin: true
      },
      '/text': {
        target: 'https://m.maizuo.com',
        changeOrigin: true,
        pathRewrite: {
          '^/text': '' // 将开头的/text替换成空再拼接地址
        }
      }
    }
  }
}
