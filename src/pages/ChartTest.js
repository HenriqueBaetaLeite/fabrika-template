import React from 'react';
import { Rose } from '@ant-design/charts';
import MenuGlobal from '../components/MenuGlobal';
import { Layout, Typography } from 'antd';
const { Title } = Typography;

const ChartTest = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
  const config = {
    data,
    height: 400,
    legend: { position: 'bottom' },
    xField: 'year',
    yField: 'value',
    interactions: [{ type: 'element-active' }],
    point: {
      size: 8,
      shape: 'circle',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
  };
  return (
    <Layout>
      <MenuGlobal />
      <Layout style={{ height: '100vh' }}>
        <Title level={1}>Meu lindo gráfico!</Title>
        <Rose {...config} chartRef={(chart) => console.log('o que TEREMOS AQUI?', chart)} />
      </Layout>
    </Layout>
  );
};
export default ChartTest;
