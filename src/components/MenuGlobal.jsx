import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Menu, Layout, Switch, Typography } from 'antd';

import { TeamOutlined, MailOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Title, Text, Link } = Typography;

const MenuGlobal = () => {
  const history = useHistory();
  const [theme, setTheme] = useState('dark');

  const changeTheme = (value) => {
    setTheme(value ? 'light' : 'dark');
    console.log(value, theme);
  };

  const handleMenu = ({ key, keyPath }) => {
    console.log(keyPath);
    console.log(key);
    switch (key) {
      case 'opt1':
        history.push('/chart');
        break;
      default:
        break;
    }
  };

  return (
    <Sider collapsible collapsedWidth={0}>
      <div className="mt-3 mb-3 btn btn-success">
        <img src="dsdksjdk" alt="logo" />
        </div>

      <Menu theme={theme} mode="inline" className="mb-3 mt-3" onClick={handleMenu} inlineCollapsed>
        <Menu.Item icon={<MailOutlined />} key="opt1">
          Opção 1
        </Menu.Item>
        <Menu.Item key="opt2">Opção 2</Menu.Item>
        <Menu.Item key="opt3">Opção 3</Menu.Item>
        <SubMenu icon={<TeamOutlined />} key="sub1" title="Teams">
          <Menu.Item key="team1">Team 1</Menu.Item>
          <Menu.Item key="team2">Team 2</Menu.Item>
        </SubMenu>
      </Menu>
      <Switch onChange={changeTheme} checkedChildren="Dark" unCheckedChildren="Light" />
    </Sider>
  );
};

export default MenuGlobal;
