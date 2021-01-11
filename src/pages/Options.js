import React from 'react';
import { Layout, Row, Col, Button, Space } from 'antd';
import MenuGlobal from '../components/MenuGlobal';

const Options = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <MenuGlobal />
      <Layout>
        <h2>Conteúdo</h2>
        <Space align="center" size={50} wrap={true} direction="vertical">
          <Row>
            <Col span={24}>
              <Button type="primary">Grid 1-1</Button>
            </Col>
          </Row>
          <Row>
            <Space>
              <Col span={12}>
                <Button type="primary">Grid 1-2</Button>
              </Col>
              <Col span={12}>
                <Button type="primary">Grid 2-2</Button>
              </Col>
            </Space>
          </Row>
          <Row>
            <Space>
              <Col span={8}>
                <Button type="primary">Grid 3-1</Button>
              </Col>
              <Col span={8}>
                <Button type="primary">Grid 3-2</Button>
              </Col>
              <Col span={8}>
                <Button type="primary">Grid 3-3</Button>
              </Col>
            </Space>
          </Row>
        </Space>
      </Layout>
    </Layout>
  );
};

export default Options;
