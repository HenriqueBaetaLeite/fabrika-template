import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CButton, CContainer, CForm, CInputGroup } from "@coreui/react";

import CIcon from "@coreui/icons-react";

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
      className="c-app c-default-layout flex-row align-items-center text-dark"
    >
      <CContainer className="d-flex flex-column">
        <img src={logo} alt="logo" width="200px" />
        <h3 className="text-center my-4">Documentação necessária</h3>

        <CForm
          method="post"
          action="/registerdocs"
          onSubmit={handleSubmit}
          className="mx-auto my-3"
        >
          <CInputGroup>
            <h2>Documentos dos sócios</h2>
            <label htmlFor="docs-socios">
              <CIcon
                name="cilPaperclip"
                size="2xl"
                className="mx-2"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              id="docs-socios"
              style={{ visibility: "hidden" }}
            />
          </CInputGroup>
          <CInputGroup>
            <h2>Contrato Social</h2>
            <label htmlFor="contrato-social">
              <CIcon
                name="cilPaperclip"
                size="2xl"
                className="mx-2"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              id="contrato-social"
              style={{ visibility: "hidden" }}
            />
          </CInputGroup>
          <CInputGroup>
            <h2>Cartão CNPJ</h2>
            <label htmlFor="cnpj">
              <CIcon
                name="cilPaperclip"
                size="2xl"
                className="mx-2"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input type="file" id="cnpj" style={{ visibility: "hidden" }} />
          </CInputGroup>
          <CInputGroup>
            <h2>Comprovante endereço</h2>
            <label htmlFor="endereco">
              <CIcon
                name="cilPaperclip"
                size="2xl"
                className="mx-2"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input type="file" id="endereco" style={{ visibility: "hidden" }} />
          </CInputGroup>
          <CInputGroup className="mb-3">
            <CButton type="submit" className="mx-auto my-2" color="primary">
              Continuar
            </CButton>
          </CInputGroup>
        </CForm>
      </CContainer>
    </div>
  );
};

export default RegisterDocs;
