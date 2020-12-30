import React, { useState } from 'react';
import { Layout, Button, Menu, Switch } from 'antd';
import 'antd/dist/antd.css';
// import 'antd/lib/style/themes/default.less';

const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

const Tests = () => {
  const [theme, setTheme] = useState('dark');

  const changeTheme = (value) => {
    setTheme(value ? 'light' : 'dark');
    console.log(value, theme);
  };

  const handleMenu = ({ item, key, keyPath }) => {
    console.log(keyPath);
    console.log(key);
  };
  return (
    <div>
      <Layout>
        <Sider collapsible collapsedWidth={0}>
          <div className="btn btn-danger">LOGO</div>

          <Menu theme={theme} mode="inline" className="mb-3 mt-3" onClick={handleMenu}>
            <Menu.Item key="opt1">Opção 1</Menu.Item>
            <Menu.Item key="opt2">Opção 2</Menu.Item>
            <Menu.Item key="opt3">Opção 3</Menu.Item>
            <SubMenu key="sub1" title="Teams">
              <Menu.Item key="team1">Team 1</Menu.Item>
              <Menu.Item key="team2">Team 2</Menu.Item>
            </SubMenu>
          </Menu>
          <Switch onChange={changeTheme} checkedChildren="Dark" unCheckedChildren="Light" />
        </Sider>
        <Layout>
          <Header style={{ height: '20vh', background: '#fff' }}>
            <Button type="primary">Button</Button>
          </Header>

          <Content style={{ height: '70vh' }}>Content</Content>
          <Footer style={{ height: '10vh', background: '#fff' }}>
            <p>Copyright - Fábrika de Softwares</p>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Tests;
