import React from 'react';
import { Layout, Button } from 'antd';
import 'antd/dist/antd.css';
// import 'antd/lib/style/themes/default.less';

const { Header } = Layout;

const Tests = () => (
  <div>
    <Layout>
      <Header>
        <Button type="primary">Button</Button>
      </Header>
    </Layout>
  </div>
);

export default Tests;
