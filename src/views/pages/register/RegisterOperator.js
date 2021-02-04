import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CRow,
} from "@coreui/react";

import logo from "../../../assets/emcash.png";

const inputStyles = {
  border: "1px solid black",
  borderRadius: "4px",
  color: "#231f20",
};

const RegisterOperator = () => {
  const history = useHistory();
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [funcao, setFuncao] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [emailInstitucional, setEmailInstitucional] = useState("");
  const [senha, setSenha] = useState("");
  const [cadastroOperador, setCadastroOperador] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setCadastroOperador({
      nomeCompleto,
      email,
      departamento,
      funcao,
      telefone,
      cpf,
      emailInstitucional,
      senha,
    });
    console.log("operador", cadastroOperador);
    // history.push("/registerdocs");
  };
  return (
    <div
      style={{ background: "white" }}
      className="c-app c-default-layout flex-row align-items-center"
    >
      <CContainer>
        <img src={logo} alt="logo" />
        <h3 className="text-center my-4">Cadastro Operador</h3>
        <h5 className="text-center my-4">
          Operador será responsável por acessar o portal após aprovação
        </h5>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CForm onSubmit={handleSubmit}>
              <CInputGroup className="mb-3">
                <CInput
                  style={inputStyles}
                  name="nome-completo"
                  type="text"
                  placeholder="Nome Completo"
                  onChange={(event) => setNomeCompleto(event.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInput
                  style={inputStyles}
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInput
                  style={inputStyles}
                  name="departamento"
                  type="text"
                  placeholder="Departamento"
                  onChange={(event) => setDepartamento(event.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInput
                  style={inputStyles}
                  name="funcao"
                  type="text"
                  placeholder="Função"
                  onChange={(event) => setFuncao(event.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInput
                  style={inputStyles}
                  name="telefone"
                  type="number"
                  placeholder="Celular/Telefone"
                  onChange={(event) => setTelefone(event.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInput
                  style={inputStyles}
                  name="cpf"
                  type="number"
                  placeholder="CPF"
                  onChange={(event) => setCpf(event.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInput
                  style={inputStyles}
                  name="email-institucional"
                  type="email"
                  placeholder="E-mail institucional"
                  onChange={(event) =>
                    setEmailInstitucional(event.target.value)
                  }
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInput
                  style={inputStyles}
                  name="senha"
                  type="password"
                  placeholder="Senha"
                  onChange={(event) => setSenha(event.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CButton type="submit" className="mx-auto my-2" color="primary">
                  Continuar
                </CButton>
              </CInputGroup>
            </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default RegisterOperator;
