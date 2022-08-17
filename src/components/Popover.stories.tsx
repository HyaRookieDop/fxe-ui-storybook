import { Meta } from "@storybook/vue3";
import {Tag ,Popover} from "fxe-semi-ui";
import { PopoverProps } from "fxe-semi-ui/lib/popover";
import { strings } from "@douyinfe/semi-foundation/tooltip/constants";
import { h } from "vue";

export default {
  title: "Popover",
};

export const PopoverDefault = {
  argTypes: {
    trigger:{
        control: "select",
        defaultValue: "hover",
        options:["hover","click","custom"]
    },
    autoAdjustOverflow: {
      control: "boolean",
      defaultValue: true,
      description: "弹出层被遮挡时是否自动调整方向",
    },
    arrowPointAtCenter: {
      control: "boolean",
      defaultValue: true,
      description: '“小三角”是否指向元素中心，需要同时传入"showArrow=true',
    },
    showArrow: {
      control: "boolean",
      defaultValue: true,
      description: "是否显示箭头三角形",
    },
    clickToHide: {
      control: "boolean",
      defaultValue: false,
      description: "点击弹出层及内部任一元素时是否自动关闭弹层",
    },
    mouseEnterDelay: {
      control: "number",
      defaultValue: 50,
      description:
        "鼠标移入后，延迟显示的时间，单位毫秒（仅当 trigger 为 hover/focus 时生效）",
    },
    mouseLeaveDelay: {
      control: "number",
      defaultValue: 50,
      description:
        "鼠标移出后，延迟消失的时间，单位毫秒（仅当 trigger 为 hove/focus 时生效），不小于 mouseEnterDelay",
    },
    motion: {
      control: "boolean",
      defaultValue: true,
      description: "是否展示弹出层动画",
    },
    position: {
      control: "select",
      defaultValue: "top",
      description: "弹出层展示位置",
      options: strings.POSITION_SET,
    },
    spacing: {
      control: "number",
      defaultValue: 8,
      description: "弹出层与 children 元素的距离，单位 px",
    },
    content: {
      control: "text",
      defaultValue: "this is a popover",
    },
    zIndex: {
      control: "number",
      defaultValue: 1060,
    },
    style:{
        control: "object",
        defaultValue: {
            backgroundColor: 'rgba(var(--semi-blue-4),1)',
            borderColor: 'rgba(var(--semi-blue-4),1)',
            color: 'var(--semi-color-white)',
            borderWidth: 1,
            borderStyle: 'solid',
        }
    }
  },
  render: (args) => {
    return {
      setup() {
        return {
          args,
        };
      },
      render() {
        return (
          <div id="tooltip-container" style={{ textAlign: "center" }}>
            <Popover
              {...args}
              content={<article style={{ padding: 4 }}>{args.content}</article>}
            >
              <Tag>Popover</Tag>
            </Popover>
          </div>
        );
      },
    };
  },
} as Meta<PopoverProps>;
