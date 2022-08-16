import { h } from "vue";
import { Meta } from "@storybook/vue3";
import { strings } from "@douyinfe/semi-foundation/checkbox/constants";
import { Checkbox } from "fxe-semi-ui";
import { CheckboxGroupProps, CheckboxProps } from "fxe-semi-ui/lib/checkbox";

export default {
  title: "Checkbox",
};

export const CheckboxDefault = {
  argTypes: {
    defaultChecked: {
      control: "boolean",
      defaultValue: false,
      description: "是否默认选中",
    },
    extra: {
      control: "text",
      description: "辅助文本",
      defaultValue: "",
    },
    style: {
      control: "object",
      defaultValue: {},
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
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
          <div>
            <Checkbox {...args}>Checkbox 示例</Checkbox>
            <div>
              <p>默认声明Checkbox组</p>
              <Checkbox.Group>
                <Checkbox value="A">A</Checkbox>
                <Checkbox value="B">B</Checkbox>
                <Checkbox value="C">C</Checkbox>
                <Checkbox value="D">D</Checkbox>
                <Checkbox value="E">E</Checkbox>
              </Checkbox.Group>
            </div>
          </div>
        );
      },
    };
  },
} as Meta<CheckboxProps>;

export const ChecboxGroupDefault = {
  argTypes: {
    options: {
      control: "object",
      defaultValue: [
        {
          label: "追求极致",
          value: "1",
          extra: "不断提高要求",
        },
        {
          label: "务实敢为",
          value: "2",
          extra:
            "直接体验，深入事实",
        },
        {
          label: "开放谦逊",
          value: "3",
          extra:
            "合作成大事;格局大",
        },
        {
          label: "坦诚清晰",
          value: "4",
          extra:
            "敢当面表达真实想法",
          disabled:true
        },
      ],
    },
    defaultValue: {
      control: "object",
      defaultValue: ["1","2","3"],
    },
    style: {
      control: "object",
      defaultValue: {},
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    type:{
      control: "select",
      options: [strings.TYPE_DEFAULT,strings.TYPE_CARD,strings.TYPE_PURECARD],
      defaultValue: strings.TYPE_DEFAULT
    },
    direction:{
      control: "select",
      options: strings.DIRECTION_SET,
      defaultValue: strings.DEFAULT_DIRECTION
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
          <Checkbox.Group {...args}></Checkbox.Group>
        );
      },
    };
  },
} as Meta<CheckboxGroupProps>;
