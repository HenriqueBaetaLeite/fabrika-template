import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
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

const RegisterPJ = () => {
  const history = useHistory();
  return (
    <div
      style={{ background: "white" }}
      className="c-app c-default-layout flex-row align-items-center"
    >
      <CContainer>
        <img src={logo} alt="logo" />
        <h3 className="text-center my-4">Cadastro PJ portal EmCash</h3>
        <CRow className="d-flex justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CForm className="d-flex justify-content-around">
              <div>
                <CInputGroup className="mb-3">
                  <CInput
                    style={{
                      border: "1px solid black",
                      borderRadius: "4px",
                    }}
                    type="text"
                    placeholder="Nome Fantasia"
                    // autoComplete="username"
                    required
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInput
                    style={{
                      border: "1px solid black",
                      borderRadius: "4px",
                    }}
                    type="text"
                    placeholder="Razão Social"
                    autoComplete="email"
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInput
                    style={{
                      border: "1px solid black",
                      borderRadius: "4px",
                    }}
                    type="number"
                    placeholder="CNPJ"
                    autoComplete="new-password"
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInput
                    style={{
                      border: "1px solid black",
                      borderRadius: "4px",
                    }}
                    type="number"
                    placeholder="Data fundação"
                    autoComplete="new-password"
                  />
                </CInputGroup>
              </div>
              <div>
                <CInputGroup className="mb-3">
                  <CInput
                    style={{
                      border: "1px solid black",
                      borderRadius: "4px",
                    }}
                    type="number"
                    placeholder="CEP"
                    autoComplete="new-password"
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInput
                    style={{
                      border: "1px solid black",
                      borderRadius: "4px",
                    }}
                    type="number"
                    placeholder="Logradouro"
                    autoComplete="new-password"
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInput
                    style={{
                      border: "1px solid black",
                      borderRadius: "4px",
                    }}
                    type="number"
                    placeholder="Bairro"
                    autoComplete="new-password"
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInput
                    style={{
                      border: "1px solid black",
                      borderRadius: "4px",
                    }}
                    type="number"
                    placeholder="Complemento"
                    autoComplete="new-password"
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInput
                    style={{
                      border: "1px solid black",
                      borderRadius: "4px",
                    }}
                    type="number"
                    placeholder="Cidade"
                    autoComplete="new-password"
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInput
                    style={{
                      border: "1px solid black",
                      borderRadius: "4px",
                    }}
                    type="number"
                    placeholder="UF"
                    autoComplete="new-password"
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInput
                    style={{
                      border: "1px solid black",
                      borderRadius: "4px",
                    }}
                    type="number"
                    placeholder="Banco"
                    autoComplete="new-password"
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInput
                    style={{
                      border: "1px solid black",
                      borderRadius: "4px",
                    }}
                    type="number"
                    placeholder="Agência"
                    autoComplete="new-password"
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInput
                    style={{
                      border: "1px solid black",
                      borderRadius: "4px",
                    }}
                    type="number"
                    placeholder="Conta"
                    autoComplete="new-password"
                  />
                </CInputGroup>
              </div>
            </CForm>
          </CCol>
        </CRow>
        <CRow>
          <CButton
            onClick={() => history.push("/registeroperator")}
            className="mx-auto my-4"
            color="primary"
          >
            Continuar
          </CButton>
        </CRow>
      </CContainer>
    </div>
  );
};

export default RegisterPJ;
