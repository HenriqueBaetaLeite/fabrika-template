import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { Form, Input, Card, Row, Col, Divider, Space, Layout, Button, notification } from 'antd';

const { Header } = Layout;

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
    <Layout>
      <Row>
        <h2>EM Capital</h2>
      </Row>

      <Row align="middle">
        <Col span={12}>
          <Card>
            <h1>Gerencie seu fluxo de caixa</h1>
            <h3>Acesse de forma ágil e segura</h3>
          </Card>
        </Col>

        <Col span={12}>
          <Card>
            <Form className="p-2 m-2" onFinish={handleSubmit} onFinishFailed={handleSubmitFailed}>
              <h3 className="text-left">Fazer Login</h3>

              <Form.Item
                name="email"
                rules={[
                  { required: true, type: 'email', message: 'Por favor insira um email válido' },
                ]}
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
                <button type="submit" className="btn btn-warning m-1">
                  ENTRAR
                </button>
              </Input.Group>

              <Divider plain>ou</Divider>

              <button className="btn btn-primary m-2">
                <i className="fab fa-facebook-square m-1"></i>
                Entrar
              </button>
              <button className="btn btn-danger m-2">
                <i className="fab fa-google m-1"></i>
                Entrar
              </button>
              <p>Ainda não possui conta? Faça Parte!</p>
            </Form>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default Login;
