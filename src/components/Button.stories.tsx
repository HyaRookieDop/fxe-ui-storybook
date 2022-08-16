import {Button, ButtonGroup, Space} from "fxe-semi-ui";
import { strings } from "@douyinfe/semi-foundation/button/constants";
import { h, VNode } from "vue";
import { IconCamera, IconSidebar, IconChevronDown } from "fxe-semi-icons";
import { Type } from "fxe-semi-ui/lib/es/button/Button";

export default {
  title: "Button",
};

export const ButtonDefault = {
  argTypes: {
    type: {
      control: "select",
      options: strings.btnTypes,
      defaultValue: "primary",
    },
    size: {
      control: "select",
      options: strings.sizes,
      defaultValue: "default",
    },
    theme: {
      control: "select",
      options: strings.themes,
      defaultValue: "light",
    },
    circle: {
      control: "boolean",
      defaultValue: false,
    },
    block: {
      control: "boolean",
      defaultValue: false,
    },
    loading: {
      control: "boolean",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
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
        return <Button {...args}>Button</Button>;
      },
    };
  },
};

export const buttonGroup = {
  argTypes: {
    type: {
      control: "select",
      options: strings.btnTypes,
      defaultValue: "primary",
    },
    size: {
      control: "select",
      options: strings.sizes,
      defaultValue: "default",
    },
    theme: {
      control: "select",
      options: strings.themes,
      defaultValue: "light",
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
        const ButtonTypes = {} as Record<Type, () => VNode>;
        strings.btnTypes.forEach((v) => {
          ButtonTypes[v] = () => <Button type={v}>{v}</Button>;
        });
        return (
          <ButtonGroup {...args}>
            {Object.values(ButtonTypes).map((v) => v())}
          </ButtonGroup>
        );
      },
    };
  },
};

export const ButtonIcon = () => {
  return (
    <div>
      <Space vertical wrap>
        <div>
          <strong>默认状态：</strong>
          <Button icon={<IconCamera></IconCamera>}></Button>
        </div>
        <div>
          <strong>更改主题：</strong>
          <Button
            icon={<IconCamera />}
            theme="solid"
            style={{marginRight:"10px"}}
            aria-label="截屏"
          />
          <Button icon={<IconCamera />} theme="light" aria-label="截屏" />
        </div>
        <div>
          <strong>更改图标位置：</strong>
          <Button
            icon={<IconSidebar />}
            theme="solid"
            style={{marginRight:"10px"}}
          >
            收起
          </Button>
          <Button icon={<IconChevronDown />} theme="solid" iconPosition="right">
            展开选项
          </Button>
        </div>
      </Space>
    </div>
  );
};
