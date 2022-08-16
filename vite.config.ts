/*
 * @Author: hya ilovecoding@foxmail.com
 * @Date: 2022-08-11 18:35:43
 * @LastEditors: hya ilovecoding@foxmail.com
 * @LastEditTime: 2022-08-16 11:37:12
 * @FilePath: /semi-vue-ui-storybook/vite.config.ts
 * @Description:
 *
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
      }
    }
  },
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
});
