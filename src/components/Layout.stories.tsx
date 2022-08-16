/*
 * @Author: hya ilovecoding@foxmail.com
 * @Date: 2022-08-16 16:20:45
 * @LastEditors: hya ilovecoding@foxmail.com
 * @LastEditTime: 2022-08-16 17:01:14
 * @FilePath: /semi-vue-ui-storybook/src/components/Layout.stories.tsx
 * @Description: 
 * 
 */

import { Layout, Space } from "fxe-semi-ui";
import { h } from "vue";


const { Header, Content, Footer, Sider } = Layout;
import "./index.scss";

export default {
  title: "Layout",
};

const onbreakpoint = (screen, bool) => {
  console.log(screen, bool);
};

export const LayoutDefault = () => (
  <div>
    <Space vertical style={{ width: "100%" }}>
      <Layout class="components-layout-demo">
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>

      <Layout class="components-layout-demo">
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

      <Layout class="components-layout-demo">
        <Header>Header</Header>
        <Layout>
          <Content>Content</Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

      <Layout class="components-layout-demo">
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>

      <Layout class="components-layout-demo">
        <Header>Header</Header>
        <Layout>
          <Sider breakpoint={["md"]} onBreakpoint={onbreakpoint}>
            Sider
          </Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </Space>
  </div>
);
