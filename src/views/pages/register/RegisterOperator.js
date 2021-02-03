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

import logo from "../../../assets/emcash.png";

const RegisterOperator = () => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/registerdocs");
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
                <CInput type="text" placeholder="Nome Completo" required />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInput type="email" placeholder="Email" required />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInput type="text" placeholder="Departamento" required />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInput type="text" placeholder="Função" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInput type="number" placeholder="Celular/Telefone" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInput type="number" placeholder="CPF" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInput type="email" placeholder="E-mail institucional" />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInput type="password" placeholder="Senha" />
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
