/*
 * @Author: DJH
 * @Date: 2022-08-22 18:00:34
 * @LastEditors: DJH
 * @LastEditTime: 2022-08-24 17:42:12
 * @Description: file content
 * @FilePath: \testcli\vue.config.js
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  lintOnSave: false, // 暂时关闭代码格式检测

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
