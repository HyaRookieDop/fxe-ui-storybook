/*
 * @Author: hya ilovecoding@foxmail.com
 * @Date: 2022-08-16 18:14:44
 * @LastEditors: hya ilovecoding@foxmail.com
 * @LastEditTime: 2022-08-16 18:14:52
 * @FilePath: /semi-vue-ui-storybook/.storybook/build/preview.js
 * @Description: 
 * 
 */
export const parameters = {
    // layout: 'centered',
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  }