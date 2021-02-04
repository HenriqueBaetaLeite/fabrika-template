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
  CSelect,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import logo from "../../../assets/emcash.png";

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
    await setCadastroPJ({
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
  };

  console.log("primeiro log!", nomeFantasia);
  console.log("pj", cadastroPJ);

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
            <CForm
              autoComplete={false}
              onSubmit={handleSubmit}
              className="d-flex justify-content-around"
            >
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
                    onChange={(event) => setRazaoSocial(event.target.value)}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInput
                    style={inputStyles}
                    name="cnpj"
                    type="number"
                    placeholder="CNPJ"
                    onChange={(event) => setCnpj(event.target.value)}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInput
                    style={inputStyles}
                    name="data-fundacao"
                    type="date"
                    placeholder="Data fundação"
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
                    onChange={(event) => setCep(event.target.value)}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInput
                    style={inputStyles}
                    name="logradouro"
                    type="text"
                    placeholder="Logradouro"
                    onChange={(event) => setLogradouro(event.target.value)}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInput
                    style={inputStyles}
                    name="bairro"
                    type="text"
                    placeholder="Bairro"
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
                    onChange={(event) => setCidade(event.target.value)}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  {/* <CSelect
                  placeholder="UF"
                    value="oi"
                    options={[
                      { value: "js", label: "JavaScript" },
                      { value: "html", label: "HTML" },
                    ]}
                    style={inputStyles}
                    name="uf"
                    type="text"
                    placeholder="UF"
                    onChange={(event) => setUf(event.target.value)}
                  ></CSelect> */}
                  <CInput
                    style={inputStyles}
                    name="uf"
                    type="text"
                    placeholder="UF"
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
            </CForm>
          </CCol>
        </CRow>
        <CRow>
          <CButton
            type="submit"
            // onClick={() => history.push("/registeroperator")}
            onClick={handleSubmit}
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
