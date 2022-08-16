/*
 * @Author: hya ilovecoding@foxmail.com
 * @Date: 2022-08-16 18:14:27
 * @LastEditors: hya ilovecoding@foxmail.com
 * @LastEditTime: 2022-08-16 19:02:52
 * @FilePath: /semi-vue-ui-storybook/.storybook/build/main.js
 * @Description: 
 * 
 */

module.exports = {
  "stories": [
    "../../src/**/*.stories.mdx",
    "../../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/preset-scss",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-actions'
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "webpack5"
  }
}