import { Button, Space, Tag, TagGroup } from "fxe-semi-ui";
import { TagGroupProps } from "fxe-semi-ui/lib/tag/interface";
import { h, ref } from "vue";

const tagList: TagGroupProps["tagList"] = [
  { color: "white", children: "抖音" },
  { color: "white", children: "火山小视频" },
  { color: "white", children: "剪映" },
  { color: "white", children: "皮皮虾" },
];
const src =
  "https://p6-passport.byteacctimg.com/img/user-avatar/6104349602f714e5322dc26cf7508df4~300x300.image";
const tagList2: TagGroupProps["tagList"] = [
  { color: "white", children: "Feeee", avatarSrc: src },
  { color: "white", children: "Hotsoon", avatarSrc: src },
  { color: "white", children: "Capcut", avatarSrc: src },
  { color: "white", children: "Pipixia", avatarSrc: src },
];
const divStyle = {
  backgroundColor: "var(--semi-color-fill-0)",
  height: "35px",
  width: "300px",
  display: "flex",
  alignItems: "center",
  padding: "0 10px",
  marginBottom: "30px",
};
const tagGroupStyle = {
  display: "flex",
  alignItems: "center",
  width: "350px",
};

/*
 * @Author: hya ilovecoding@foxmail.com
 * @Date: 2022-08-17 17:16:34
 * @LastEditors: hya ilovecoding@foxmail.com
 * @LastEditTime: 2022-08-17 17:17:40
 * @FilePath: /semi-vue-ui-storybook/src/components/Tag.stories.tsx
 * @Description: f
 *
 */
export default {
  title: "Tag",
};

export const TagDefault = {
  render() {
    return {
      setup() {
        const visible = ref(false);
        function setVisible() {
          console.log("visible.value");

          visible.value = !visible.value;
        }

        return () => {
          return (
            <Space vertical>
              <Space>
                <Tag> default tag </Tag>
                <Tag closable> Closable Tag </Tag>
                <Tag closable onClose={(value, e) => e.preventDefault()}>
                  Closable Tag, Prevent Default
                </Tag>
              </Space>
              <Space wrap>
                <Tag color="grey"> grey tag </Tag>
                <Tag color="blue"> blue tag </Tag>
                <Tag color="red"> red tag </Tag>
                <Tag color="green"> green tag </Tag>
                <Tag color="orange"> orange tag </Tag>
                <Tag color="teal"> teal tag </Tag>
                <Tag color="violet"> violet tag </Tag>
                <Tag color="white"> white tag </Tag>
              </Space>
              <Space>
                <Tag color="blue" type="light">
                  light tag
                </Tag>
                <Tag color="blue" type="ghost">
                  ghost tag
                </Tag>
                <Tag color="blue" type="solid">
                  solid tag
                </Tag>
              </Space>
              <Space align="start">
                <Tag avatarSrc={src}>ferris</Tag>
                <Tag avatarSrc={src} size="large">
                  ferris
                </Tag>
                <Tag avatarSrc={src} size="large" closable={true}>
                  ferris
                </Tag>
                <Tag avatarSrc={src} avatarShape="circle">
                  ferris
                </Tag>
                <Tag avatarSrc={src} avatarShape="circle" size="large">
                  ferris
                </Tag>
                <Tag
                  avatarSrc={src}
                  avatarShape="circle"
                  size="large"
                  closable={true}
                >
                  ferris
                </Tag>
              </Space>
              <div>
                <Button onClick={() => setVisible()}>
                  {visible.value ? "Hide Tag" : "Show Tag"}
                </Button>
                <div style={{ marginTop: 10 }}>
                  <Tag visible={visible.value}>Invisible tag </Tag>
                </div>
              </div>
              <div style={divStyle}>
                <TagGroup
                  maxTagCount={3}
                  style={tagGroupStyle}
                  tagList={tagList}
                  size="large"
                />
              </div>
              <div style={divStyle}>
                <TagGroup
                  maxTagCount={2}
                  style={tagGroupStyle}
                  tagList={tagList2}
                  size="large"
                  avatarShape="circle"
                  showPopover
                />
              </div>
            </Space>
          );
        };
      },
    };
  },
};
