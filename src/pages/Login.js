import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { Form, Input, Card, Layout, Divider, Space } from 'antd';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    setEmail('');
    setPassword('');
    history.push('/tests');
  };

  return (
    <main className="container d-flex">
      <Space>
        <Card>
          <h1>Gerencie seu fluxo de caixa</h1>
          <h3>Acesse de forma ágil e segura</h3>
        </Card>

        <form className="card p-2 m-2" onSubmit={handleSubmit}>
          <Card>
            <h3 className="text-left">Fazer Login</h3>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Por favor insira um email válido', type: 'email' },
              ]}
            >
              <Input placeholder="email" />
            </Form.Item>

            <Input
              value={email}
              onChange={handleChange}
              name="email"
              placeholder="email"
              className="m-1"
            />

            <Input
              value={password}
              name="senha"
              type="password"
              placeholder="senha"
              className="m-1"
              onChange={handleChange}
            />

            <small className="text-secondary m-2" style={{ textDecoration: 'underline' }}>
              Esqueceu sua senha?
            </small>
            <button className="btn btn-warning m-1">ENTRAR</button>

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
          </Card>
        </form>
      </Space>
    </main>
  );
};

export default Login;
