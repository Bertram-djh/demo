/*
 * @Author: DJH
 * @Date: 2022-08-22 18:00:34
 * @LastEditors: DJH
 * @LastEditTime: 2022-08-26 12:25:41
 * @Description: file content
 * @FilePath: \testcli\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-new': 'off'
  }
}
