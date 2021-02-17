import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CSelect,
  CInput,
  CInputGroup,
  CRow,
} from "@coreui/react";

import logo from "../../../assets/emcash.png";
import api from "src/service/api";

const inputStyles = {
  border: "1px solid black",
  borderRadius: "4px",
  color: "#231f20",
};

const RegisterPJ = () => {
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [razaoSocial, setRazaoSocial] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [dataFundacao, setDataFundacao] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [banco, setBanco] = useState("");
  const [agencia, setAgencia] = useState("");
  const [conta, setConta] = useState("");
  const [cadastroPJ, setCadastroPJ] = useState({});
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submit!!");
    setCadastroPJ({
      nomeFantasia,
      razaoSocial,
      cnpj,
      dataFundacao,
      cep,
      logradouro,
      bairro,
      complemento,
      cidade,
      uf,
      banco,
      agencia,
      conta,
    });
    history.push({
      pathname: "/registeroperator",
      state: { cadastroPJ: nomeFantasia, teste: "será que vem esrt streing?" },
    });
  };

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
            <CForm autoComplete={false} onSubmit={handleSubmit}>
              <div className="d-flex justify-content-around">
                <div>
                  <CInputGroup className="mb-3">
                    <CInput
                      style={inputStyles}
                      name="nome-fantasia"
                      type="text"
                      placeholder="Nome Fantasia"
                      required
                      onChange={(event) => setNomeFantasia(event.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput
                      style={inputStyles}
                      name="razao-social"
                      type="text"
                      placeholder="Razão Social"
                      required
                      onChange={(event) => setRazaoSocial(event.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput
                      style={inputStyles}
                      name="cnpj"
                      type="number"
                      placeholder="CNPJ"
                      required
                      onChange={(event) => setCnpj(event.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput
                      style={inputStyles}
                      name="data-fundacao"
                      type="date"
                      placeholder="Data fundação"
                      required
                      onChange={(event) => setDataFundacao(event.target.value)}
                    />
                  </CInputGroup>
                </div>
                <div>
                  <CInputGroup className="mb-3">
                    <CInput
                      style={inputStyles}
                      name="cep"
                      type="number"
                      placeholder="CEP"
                      required
                      onChange={(event) => setCep(event.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput
                      style={inputStyles}
                      name="logradouro"
                      type="text"
                      placeholder="Logradouro"
                      required
                      onChange={(event) => setLogradouro(event.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput
                      style={inputStyles}
                      name="bairro"
                      type="text"
                      placeholder="Bairro"
                      required
                      onChange={(event) => setBairro(event.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput
                      style={inputStyles}
                      name="complemento"
                      type="text"
                      placeholder="Complemento"
                      onChange={(event) => setComplemento(event.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput
                      style={inputStyles}
                      name="cidade"
                      type="text"
                      placeholder="Cidade"
                      required
                      onChange={(event) => setCidade(event.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput
                      style={inputStyles}
                      name="uf"
                      type="text"
                      placeholder="UF"
                      required
                      onChange={(event) => setUf(event.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput
                      style={inputStyles}
                      name="banco"
                      type="text"
                      placeholder="Banco"
                      onChange={(event) => setBanco(event.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput
                      style={inputStyles}
                      name="agencia"
                      type="number"
                      placeholder="Agência"
                      onChange={(event) => setAgencia(event.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInput
                      style={inputStyles}
                      name="conta"
                      type="number"
                      placeholder="Conta"
                      onChange={(event) => setConta(event.target.value)}
                    />
                  </CInputGroup>
                </div>
              </div>
              <div className="text-center">
                <CButton type="submit" className="mx-auto my-4" color="primary">
                  Continuar
                </CButton>
              </div>
            </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default RegisterPJ;
