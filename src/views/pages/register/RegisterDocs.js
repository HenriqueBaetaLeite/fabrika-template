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

const RegisterDocs = () => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/registerfinished");
  };
  return (
    <div
      style={{ background: "white" }}
      className="c-app c-default-layout flex-row align-items-center"
    >
      <CContainer>
        <img src={logo} alt="logo" />
        <h3 className="text-center my-4">Documentação necessária</h3>

        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CForm onSubmit={handleSubmit}>
              <CInputGroup className="mb-3">
                <CInput type="text" placeholder="Senha" />
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

export default RegisterDocs;
