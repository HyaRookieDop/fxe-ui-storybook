import { strings } from "@douyinfe/semi-foundation/radio/constants";
import { Meta } from "@storybook/vue3";
import { Radio } from "fxe-semi-ui";
import { RadioGroupProps, RadioProps } from "fxe-semi-ui/lib/radio";
import { h } from "vue";

export default {
  title: "Radio",
};

export const RadioDefault = {
  argTypes: {
    mode: {
      control: "select",
      options: strings.MODE,
      defaultValue: "",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    displayMode: {
      control: "select",
      options: ["vertical", ""],
      defaultValue: "",
    },
    type: {
      control: "select",
      options: [
        strings.TYPE_DEFAULT,
        strings.TYPE_BUTTON,
        strings.TYPE_CARD,
        strings.TYPE_PURECARD,
      ],
      defaultValue: strings.TYPE_DEFAULT,
      description: "radio的样式类型",
    },
    extra: {
      control: "text",
      description: "副文本，只对type='default'生效",
      defaultValue: "",
    },
    style: {
      control: "object",
      defaultValue: {},
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
          <Radio aria-label="单选示例" {...args}>
            Radio
          </Radio>
        );
      },
    };
  },
} as Meta<RadioProps>;

export const RadioGroupDefault = {
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
          extra: "直接体验，深入事实",
        },
        {
          label: "开放谦逊",
          value: "3",
          extra: "合作成大事;格局大",
        },
        {
          label: "坦诚清晰",
          value: "4",
          extra: "敢当面表达真实想法",
          disabled: true,
        },
      ],
    },
    defaultValue: {
      control: "object",
      defaultValue: "1",
    },
    mode: {
      control: "select",
      options: strings.MODE,
      defaultValue: "",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    type: {
      control: "select",
      options: [strings.TYPE_DEFAULT, strings.TYPE_CARD, strings.TYPE_PURECARD,strings.TYPE_BUTTON],
      defaultValue: strings.TYPE_DEFAULT,
    },
    direction: {
      control: "select",
      options: strings.DIRECTION_SET,
      defaultValue: strings.DEFAULT_DIRECTION,
    },
    style: {
      control: "object",
      defaultValue: {},
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
          <Radio.Group
            aria-label="单选组示例"
            {...args}
          ></Radio.Group>
        );
      },
    };
  },
} as Meta<RadioGroupProps>;
