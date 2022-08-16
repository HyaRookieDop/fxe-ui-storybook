import { strings } from "@douyinfe/semi-foundation/tooltip/constants";
import { Meta } from "@storybook/vue3";
import { h, ref } from "vue";
import { Button, ButtonGroup, Input, Space, Tooltip } from "fxe-semi-ui";
import { TooltipProps } from "fxe-semi-ui/lib/es/tooltip/interface";

export default {
  title: "Tooltip",
};

export const TooltipDefault = {
  argTypes: {
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
      defaultValue:
        "触发展示的时机,设为 custom 时，需要配合 visible 属性使用，此时显示与否完全受控",
    },
    zIndex: {
      control: "number",
      defaultValue: 1060,
    },
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
            <Tooltip {...args}>
              <Button style={{ color: "#20BAD6" }}>悬停显示</Button>
              {/* {args.trigger === "click" && <Button>点击显示</Button>} 
              {args.trigger === "focus" && (
                <Input style={{ width: 100 }} placeholder="聚焦显示" />
              )} */}
              {/* {args.trigger === "custom" && (
                <ButtonGroup>
                  <Button onClick={() => this.setVisible(true)}>
                    受控显示
                  </Button>
                  <Button onClick={() => this.setVisible(false)}>
                    受控隐藏
                  </Button>
                </ButtonGroup>
              )}   */}
            </Tooltip>
          </div>
        );
      },
    };
  },
} as Meta<TooltipProps>;

export const TooltipTrigger = {
  render: () => {
    return {
      setup() {
        const visible = ref(false);
        return {
          visible,
        };
      },
      render() {
        return (
          <Space vertical>
            <Tooltip content={"hi Tooltip"}>
              <Button>悬停显示</Button>
            </Tooltip>

            <Tooltip content={"hi Tooltip"} trigger="click">
              <Button>点击显示</Button>
            </Tooltip>

            <Tooltip content={"hi Tooltip"} trigger="focus">
              <Input>聚焦显示</Input>
            </Tooltip>
            <Tooltip
              content={"hi Tooltip"}
              trigger="custom"
              // @ts-ignore
              visible={this.visible}
            >
              <span style={{ display: "inline-block" }}>
                <ButtonGroup>
                  <Button
                    onClick={() => {
                      // @ts-ignore
                      this.visible = true;
                    }}
                  >
                    受控显示
                  </Button>

                  <Button
                    onClick={() => {
                      // @ts-ignore
                      this.visible = false;
                    }}
                  >
                    受控隐藏
                  </Button>
                </ButtonGroup>
              </span>
            </Tooltip>
          </Space>
        );
      },
    };
  },
};
