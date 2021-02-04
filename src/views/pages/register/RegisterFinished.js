import React, { useState } from "react";
import { CCol, CContainer, CRow } from "@coreui/react";

import logo from "../../../assets/emcash.png";
import img from "../../../assets/finish-img.png";

const RegisterFinished = () => {
  return (
    <div
      style={{ background: "white" }}
      className="c-app c-default-layout flex-row align-items-center"
    >
      <CContainer className="">
        <img src={logo} alt="logo emcash" className="" />
        <h3 className="text-center my-4">Obrigado por se cadastrar!</h3>
        <h4 className="text-center my-4">
          Entraremos em contato para dar continuidade no cadastro
        </h4>
        <div className="text-center my-4">
          <img width="200px" src={img} alt="finalização de cadastro" />
        </div>
        <p className="text-center">
          Qualquer dúvida ou sugestão favor entrar em contato através do e-mail
          contat@em.cash
        </p>
      </CContainer>
    </div>
  );
};

export default RegisterFinished;
