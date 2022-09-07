<!--

 * @Author: Bertram
 * @LastEditors: Bertram
-->





## vant-vue2

基于vant+vue2.x的单页面项目。

原生页面，项目在pc端测试正常。

**说明**：项目只是个人练习项目，主要包括页面布局，vue路由控制多组件切换，动态获取数据。用户验证组件，购物组件等后续添加。

## npm初始化

```
{
  "name": "testcli",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "@better-scroll/core": "^2.4.2",
    "@vant/touch-emulator": "^1.4.0",
    "axios": "^0.27.2",
    "better-scroll": "^2.4.2",
    "core-js": "^3.8.3",
    "moment": "^2.29.4",
    "swiper": "^6.8.1",
    "vant": "^2.12.48",
    "vue": "^2.6.14",
    "vue-router": "^3.5.1",
    "vuex": "^3.6.2",
    "vuex-persistedstate": "^4.1.0"
  },
  "devDependencies": {
    "@babel/core": "^7.12.16",
    "@babel/eslint-parser": "^7.12.16",
    "@vue/cli-plugin-babel": "~5.0.0",
    "@vue/cli-plugin-eslint": "~5.0.0",
    "@vue/cli-plugin-router": "~5.0.0",
    "@vue/cli-plugin-vuex": "~5.0.0",
    "@vue/cli-service": "~5.0.0",
    "@vue/eslint-config-standard": "^6.1.0",
    "eslint": "^7.32.0",
    "eslint-plugin-import": "^2.25.3",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^5.1.0",
    "eslint-plugin-vue": "^8.0.3",
    "lint-staged": "^11.1.2",
    "sass": "^1.32.7",
    "sass-loader": "^12.0.0",
    "vue-template-compiler": "^2.6.14"
  },
  "gitHooks": {
    "pre-commit": "lint-staged"
  }
}

```

## 项目目录

```
|--public                // 公共资源
|  |--index.html         // 承载页面
|--src                   // 源码主目录
|  |--assets             // 资源文件
|  |--components         // 自定义的组件
|  |--router             // 路由配置，用于页面的跳转配置
|  |--store              // vuex的文件，主要用于项目里边的一些状态保存
|  |--util               // 公共的工具类
|  |--views              // 视图组件
|  |--App.vue            // 根组件
|  |--main.js            // 入口文件
|  |--package.json       // 项目依赖描述
|--.browserslistrc       // 配置使用CSS兼容性插件的使用范围
|--.editorconfig         // 配置格式化代码
|--.eslintrc.js          // 配置ESLint
|--.gitignore            // git上传需要忽略的文件格式
|--bable.config.js       // 使用一些预设
|--jsconfig.json         // webpack配置别名后，vscode正确识别路径
|--lint-staged.config.js // 配置ESlint
|--package-lock.json     // 版本管理使用的文件
|--package.json          // 项目描述即依赖
|--README.md             // 项目说明
|--vue.config.js         // vue可选配置文件
```

## 运行程序

项目地址：（git clone）

```
https://github.com/Bertram-djh/demo.git
```

通过npm安装第三方依赖模块（需已安装Node.js）

node版本：18.7.0

npm版本：8.17.0

```
//启动
npm run serve
//发布
npm run build
```

## 实现的功能

```
1、首页：
	1）首页轮播
	2）电影信息动态获取，下拉懒加载。loading插件应用。
	3）点击跳转详情
2、影院：
	1）vuex持久化，缓存。减少重复请求次数。
	2）better-scroll优化滚动条
	3）模糊查询
3、咨询：动态获取咨询
4、我的：
	....
```

