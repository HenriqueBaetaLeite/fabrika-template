import React, { useState } from "react";
import { CCol, CContainer, CRow } from "@coreui/react";

import logo from "../../../assets/emcash.png";
import img from "../../../assets/finish.png";

const RegisterFinished = () => {
  return (
    <div
      style={{ background: "white" }}
      className="c-app c-default-layout flex-row align-items-center"
    >
      <CContainer>
        <img src={logo} alt="logo" />
        <h3 className="text-center my-4">Obrigado por se cadastrar!</h3>
        <h4 className="text-center my-4">
          Entraremos em contato para dar continuidade no cadastro
        </h4>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6" className="text-center">
            <img
              className="mx-auto"
              width="200px"
              src={img}
              alt="imagem de finalização de cadastro"
            />
          </CCol>
          <p>
            Qualquer dúvida ou sugestão favor entrar em contato através do
            e-mail contat@em.cash
          </p>
        </CRow>
      </CContainer>
    </div>
  );
};

export default RegisterFinished;
