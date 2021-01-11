import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Menu, Layout, Switch } from 'antd';

import { TeamOutlined, MailOutlined, HomeOutlined, SnippetsOutlined } from '@ant-design/icons';

import '../styles/Menu.css';

const { SubMenu } = Menu;
const { Sider } = Layout;

const MenuGlobal = () => {
  const history = useHistory();
  const [theme, setTheme] = useState('dark');
  const [collapsed, setCollapsed] = useState(true);

  const changeTheme = (value) => {
    setTheme(value ? 'light' : 'dark');
    console.log(value, theme);
  };

  const handleCollapseMenu = () => {
    setCollapsed(!collapsed);
    console.log(collapsed);
  };

  const handleMenu = ({ key, keyPath }) => {
    console.log(keyPath);
    console.log(key);
    switch (key) {
      case 'opt1':
        history.push('/tests');
        break;
      case 'opt2':
        history.push('/chart');
        break;
      case 'opt3':
        history.push('/options');
        break;
      default:
        break;
    }
  };

  return (
    <Sider className="sider" collapsible onCollapse={handleCollapseMenu} collapsed={collapsed}>
      <Menu
        defaultOpenKeys={['opt1']}
        theme={theme}
        mode="inline"
        className="mb-3 mt-3"
        onClick={handleMenu}
        inlineCollapsed
      >
        <Menu.Item icon={<HomeOutlined />} key="opt1">
          Home
        </Menu.Item>
        <Menu.Item icon={<MailOutlined />} key="opt2">
          Gráfico
        </Menu.Item>
        <Menu.Item icon={<SnippetsOutlined />} key="opt3">
          Opção 3
        </Menu.Item>
        <SubMenu icon={<TeamOutlined />} key="sub1" title="Teams">
          <Menu.Item key="team1">Team 1</Menu.Item>
          <Menu.Item key="team2">Team 2</Menu.Item>
        </SubMenu>
        <Switch
          onChange={changeTheme}
          style={{ top: '100px', left: '0.5em' }}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </Menu>
    </Sider>
  );
};

export default MenuGlobal;
