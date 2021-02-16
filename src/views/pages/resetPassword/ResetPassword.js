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
  CRow,
  CToaster,
  CToast,
  CToastBody,
  CToastHeader,
} from "@coreui/react";

const inputStyle = {
  border: "1px solid black",
  borderRadius: "4px",
  color: "#231f20",
};

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [wrongEmail, setWrongEmail] = useState(false);

  const handleResetPassword = () => {
    alert(email);
    setEmail("");
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
                className="py-5 d-md-down-none"
                style={{
                  borderRadius: "0px",
                  border: "1px solid black",
                  width: "44%",
                  background: "black",
                  color: "white",
                }}
              >
                <CCardBody className="d-flex align-items-center text-center">
                  <div>
                    {/* <img src={logo} alt="logo emcash" className="my-3" /> */}
                    <h5>As melhores soluções para seu negócio estão aqui</h5>
                  </div>
                </CCardBody>
              </CCard>
              <CCard
                style={{ border: "1px solid black", borderRadius: "0px" }}
                className="p-4"
              >
                {wrongEmail && (
                  <CToast
                    color="danger"
                    key={1.2}
                    show={true}
                    autohide={4000}
                    fade={true}
                  >
                    <CToastHeader>Erro!</CToastHeader>
                    <CToastBody>
                      Por favor, verifique o e-mail informado!
                    </CToastBody>
                  </CToast>
                )}
                <CCardBody className="d-flex flex-column">
                  <CForm>
                    <h3 style={{ color: "#231f20" }}>Esqueceu a senha?</h3>
                    <p>
                      Não se preocupe, vamos mandar uma nova senha no e-mail
                      cadastrado.
                    </p>

                    <label style={{ color: "black" }}>E-mail</label>
                    <CInputGroup className="mb-3">
                      <CInput
                        value={email}
                        style={inputStyle}
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                        type="email"
                        placeholder="user@emcashcapital.com.br"
                        required
                      />
                    </CInputGroup>
                  </CForm>
                  <CButton
                    type="button"
                    color="info"
                    onClick={handleResetPassword}
                  >
                    Enviar
                  </CButton>
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
