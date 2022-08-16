/*
 * @Author: hya ilovecoding@foxmail.com
 * @Date: 2022-08-11 18:44:42
 * @LastEditors: hya ilovecoding@foxmail.com
 * @LastEditTime: 2022-08-16 11:30:03
 * @FilePath: /semi-vue-ui-storybook/.storybook/main.cjs
 * @Description: 
 * 
 */
const { mergeConfig } = require('vite');
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "storybook-builder-vite"
  },
  // async viteFinal(config) {
  //   // Merge custom configuration into the default config
  //   return mergeConfig(config, {
  //     css: {
  //       preprocessorOptions: {
  //         scss: {
  //           additionalData: `
  //             @import "~@douyinfe/semi-theme-default/scss/global.scss";
  //             @import "~@douyinfe/semi-theme-default/scss/index.scss";
  //           `,
  //         }
  //       }
  //     },
  //     resolve: {
  //       alias: [
  //         {find: /^~/, replacement: ''}
  //       ]
  //     }
  //   });
  // }
}