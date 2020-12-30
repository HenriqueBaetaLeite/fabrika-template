import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Button, Menu, Switch, Typography } from 'antd';
import 'antd/dist/antd.css';
// import 'antd/lib/style/themes/default.less';

import MenuGlobal from '../components/MenuGlobal';

const { Header, Content, Footer, Sider } = Layout;
const { Title, Text, Link } = Typography;
const { SubMenu } = Menu;

const Tests = () => {
  const history = useHistory();

  return (
    <div>
      <Layout>
        <MenuGlobal />
        <Layout>
          <Header style={{ height: '15vh', background: '#fff' }}>Header</Header>

          <Content style={{ height: '75vh' }}>Content</Content>

          <Footer style={{ height: '10vh', background: '#fff' }}>
            <p>Copyright - Fábrika de Softwares</p>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Tests;
