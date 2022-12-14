import {Button, ButtonGroup, Space} from "fxe-semi-ui";
import { strings } from "@douyinfe/semi-foundation/button/constants";
import { h, VNode } from "vue";
import { IconCamera, IconSidebar, IconChevronDown } from "fxe-semi-icons";
import { Type } from "fxe-semi-ui/lib/button/Button";

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
          <strong>???????????????</strong>
          <Button icon={<IconCamera></IconCamera>}></Button>
        </div>
        <div>
          <strong>???????????????</strong>
          <Button
            icon={<IconCamera />}
            theme="solid"
            style={{marginRight:"10px"}}
            aria-label="??????"
          />
          <Button icon={<IconCamera />} theme="light" aria-label="??????" />
        </div>
        <div>
          <strong>?????????????????????</strong>
          <Button
            icon={<IconSidebar />}
            theme="solid"
            style={{marginRight:"10px"}}
          >
            ??????
          </Button>
          <Button icon={<IconChevronDown />} theme="solid" iconPosition="right">
            ????????????
          </Button>
        </div>
      </Space>
    </div>
  );
};
