import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { Form, Input, Card, Layout, notification, Typography, Button } from 'antd';

const { Title, Text, Link } = Typography;

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmitFailed = (error) => {
    console.log('erro de submit', error);
    const messageError = error.errorFields.map((err) => err.errors + '. ');
    setPassword('');
    setEmail('');
    notification.open({
      message: 'Campo(s) Inválido(s)!',
      description: messageError,
      onClick: () => {
        notification.destroy();
        console.log('Notification Clicked!');
      },
    });
  };

  const handleSubmit = (values) => {
    console.log(values);

    setEmail('');
    setPassword('');
    history.push('/tests');
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Card className="w-75 mx-auto mt-3">
        <Form className="p-2 m-2" onFinish={handleSubmit} onFinishFailed={handleSubmitFailed}>
          <Title level={1} className="text-left">Login</Title>

          <Form.Item
            name="email"
            rules={[{ required: true, type: 'email', message: 'Por favor insira um email válido' }]}
          >
            <Input onChange={handleChange} placeholder="email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Por favor insira um password',
              },
            ]}
          >
            <Input.Password onChange={handleChange} placeholder="senha" />
          </Form.Item>

          <Input.Group className="d-flex justify-content-between align-items-center">
            <small className="text-secondary m-2" style={{ textDecoration: 'underline' }}>
              Esqueceu sua senha?
            </small>
            <Button type="primary" htmlType="submit" className="btn btn-warning m-1">
              ENTRAR
            </Button>
          </Input.Group>

          <Text>
            Ainda não possui conta?<Link href="/chart"> Faça Parte!</Link>
          </Text>
        </Form>
      </Card>
    </Layout>
  );
};

export default Login;
