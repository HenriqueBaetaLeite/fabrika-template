import React, { useState } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CDataTable,
  CButton,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

const CadastrarRecebivel = () => {
  const usersData = [
    {
      nomeDoArquivo: "John Doe",
      nomeDoUsuário: 23728372,
      DataHoraImportação: "2018/01/01",
      tipoImportação: "Guest",
      períodoImportação: "Pending",
      download: "teste",
    },
    {
      nomeDoArquivo: "Samppa Nori",
      nomeDoUsuário: 23728372,
      DataHoraImportação: "2018/01/01",
      tipoImportação: "Member",
      períodoImportação: "Active",
      download: "teste",
    },
    {
      nomeDoArquivo: "Estavan Lykos",
      nomeDoUsuário: 23728372,
      DataHoraImportação: "2018/02/01",
      tipoImportação: "Staff",
      períodoImportação: "Banned",
      download: "teste",
    },
  ];

  const [details, setDetails] = useState([]);
  const [items, setItems] = useState(usersData);

  const fields = [
    { key: "nomeDoArquivo", _style: { width: "20%" } },
    {
      key: "nomeDoUsuário",
      _style: { width: "20%" },
    },
    { key: "Data/Hora importação", _style: { width: "20%" } },
    { key: "Tipo importação", _style: { width: "20%" } },
    { key: "Período importação", _style: { width: "20%" } },
    { key: "Download", _style: { width: "20%" } },
  ];

  return (
    <>
      <CCard className="mx-auto h-100 p-2">
        <h3 className="text-center">Cadastrar recebíveis</h3>

        <p>
          Cadastre sua nota através do nosso template ou pela leitura do código
          de barras
        </p>
        <CCardBody>
          <div>
            <a className="m-2" href="#">
              <i
                className="cil-data-transfer-down m-1"
                style={{ color: "black" }}
              ></i>
              Baixar template
            </a>
            <a className="m-2" href="#">
              <i
                className="cil-data-transfer-up m-1"
                style={{ color: "black" }}
              ></i>
              Importar template
            </a>
            <span>ou</span>
            <button className="btn btn-primary mx-2">leitor</button>
            <span>ou</span>
            <a className="m-2" href="#">
              Importar xml
            </a>
            <span>ou</span>
            <a className="m-2" href="#">
              digite o código de acesso
            </a>
          </div>

          <div className="my-3">
            <CDataTable
              items={usersData}
              fields={fields}
              // itemsPerPage={5}
              hover
              scopedSlots={{
                Download: (item, index) => (
                  <td>
                    <i
                      style={{ cursor: "pointer" }}
                      className="cil-data-transfer-down"
                    ></i>
                  </td>
                ),
              }}
              // sorter
            />
          </div>
        </CCardBody>
      </CCard>
    </>
  );
};

export default CadastrarRecebivel;