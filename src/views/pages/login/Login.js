import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import logo from "../../../assets/emcash.png";

const Login = () => {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (userName === "fabrika" && password === "fabrika") {
      localStorage.setItem("userLogin", userName);

      return history.push("/inicial");
    }
    alert("Wrong email or password");
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    switch (name) {
      case "email":
        setUserName(value);
        break;
      default:
        setPassword(value);
        break;
    }
  };

  return (
    <div
      style={{ background: "#78777c" }}
      className="c-app c-default-layout flex-row align-items-center"
    >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard
                style={{ border: "1px solid black", borderRadius: "0px" }}
                className="p-4"
              >
                <CCardBody>
                  <CForm onSubmit={handleLogin} style={{ color: "#231f20" }}>
                    <h1>Login</h1>
                    <p>Digite seu usuário e senha para acessar o portal</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        {/* <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText> */}
                      </CInputGroupPrepend>
                      <CInput
                        style={{
                          border: "1px solid black",
                          borderRadius: "4px",
                        }}
                        name="email"
                        onChange={handleChange}
                        type="text"
                        placeholder="E-mail"
                        required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        {/* <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText> */}
                      </CInputGroupPrepend>
                      <CInput
                        style={{
                          border: "1px solid black",
                          borderRadius: "4px",
                        }}
                        name="password"
                        onChange={handleChange}
                        type="password"
                        placeholder="Senha"
                        required
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton
                          type="submit"
                          // onClick={handleLogin}
                          color="primary"
                          className="px-4"
                        >
                          Acessar
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="">
                        <CButton color="blue" className="px-0">
                          Esqueci minha senha
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="py-5 d-md-down-none"
                style={{
                  borderRadius: "0px",
                  border: "1px solid black",
                  width: "44%",
                  background: "#e29b62",
                  color: "#231f20",
                }}
              >
                <CCardBody className="text-center">
                  <div>
                    {/* <h2>EMCASH</h2> */}
                    <img src={logo} alt="logo emcash" className="my-3" />
                    <h5>Gerencie o seu fluxo de caixa</h5>
                    <p>Acesse de forma ágil e segura</p>

                    <Link to="/registerpj">
                      <CButton
                        style={{ color: "white" }}
                        className="mt-4"
                        active
                        tabIndex={-1}
                      >
                        Registre-se
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
