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

const cardOneStyle = {
  borderRadius: "0px",
  border: "1px solid black",
  width: "44%",
  background: "#e29b62",
  color: "black",
};

const ResetPassword = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [wrongEmail, setWrongEmail] = useState(false);
  const [successReset, setSuccessReset] = useState(false);

  const handleResetPassword = () => {
    alert(email);
    setEmail("");
  };

  const redirectToLogin = () => {
    history.push("/login");
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
              <CCard className="py-5 d-md-down-none" style={cardOneStyle}>
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
                    <h4 style={{ color: "#231f20" }}>
                      {successReset
                        ? "Senha resetada com sucesso!"
                        : "Esqueceu a senha?"}
                    </h4>
                    <p>
                      {successReset
                        ? "Por favor verifique o seu e-mail para conseguir a nova senha."
                        : "Não se preocupe, vamos mandar uma nova senha no e-mail cadastrado."}
                    </p>

                    {successReset ? null : (
                      <>
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
                      </>
                    )}
                  </CForm>
                  <CButton
                    type="button"
                    color="primary"
                    onClick={
                      successReset ? redirectToLogin : handleResetPassword
                    }
                  >
                    {successReset ? "Volta ao Login" : "Enviar"}
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

export default ResetPassword;
