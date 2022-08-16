/*
 * @Author: hya ilovecoding@foxmail.com
 * @Date: 2022-08-16 16:20:01
 * @LastEditors: hya ilovecoding@foxmail.com
 * @LastEditTime: 2022-08-16 19:30:28
 * @FilePath: /semi-vue-ui-storybook/src/components/Divider.stories.tsx
 * @Description: 
 * 
 */

import {strings} from "@douyinfe/semi-foundation/divider/constants";
import { Divider } from "fxe-semi-ui";
import {h} from "vue";

export default {
    title: "Divider"
}

export const DividerDefault = {
    argTypes: {
        layout: {
            control: "select",
            options: strings.LAYOUT,
            defaultValue: strings.LAYOUT[1]
        },
        dashed: {
            control: "boolean",
            defaultValue: false
        },
        align: {
            control: "select",
            options: ['left', 'right', 'center'],
            defaultValue: "center"
        },
        margin: {
            control: "number",
            description: "单位：px",
            defaultValue: 0
        },
        text: {
            control: "text",
            defaultValue: ""
        },
        style: {
            control: "object",
            defaultValue: {}
        },
    },
    render(args) {
        return {
            setup() {
                return {
                    args
                }
            },
            render() {
                return <Divider {...args}>Divider</Divider>
            }
        }
    }
}