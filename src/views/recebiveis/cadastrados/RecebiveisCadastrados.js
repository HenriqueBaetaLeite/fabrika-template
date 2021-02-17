import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { apiEx } from "../../../service/api";

import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const RecebiveisCadastrados = () => {
  const [dataTable, setDataTable] = useState([]);
  const usersData = [
    {
      Data: "John Doe",
      nºNotaFiscal: 23728372,
      Cliente: "2018/01/01",
      dataNotaFiscal: "Guest",
      dataVencimento: "Pending",
      valorNota: 2328327,
      valorDisponívelA: "R$339",
    },
    {
      Data: "Samppa Nori",
      nºNotaFiscal: 23728372,
      Cliente: "2018/01/01",
      dataNotaFiscal: "Member",
      dataVencimento: "Active",
      valorNota: 2328327,
      valorDisponívelA: "R$339",
    },
    {
      Data: "Estavan Lykos",
      nºNotaFiscal: 23728372,
      Cliente: "2018/02/01",
      dataNotaFiscal: "Staff",
      dataVencimento: "Banned",
      valorNota: 2328327,
      valorDisponívelA: "R$339",
    },
    {
      Data: "Chetan Mohamed",
      nºNotaFiscal: 237283723792,
      Cliente: "2018/02/01",
      dataNotaFiscal: "Admin",
      dataVencimento: "Inactive",
      valorNota: 2328327,
      valorDisponívelA: "R$339",
    },
    {
      Data: "Derick Maximinus",
      nºNotaFiscal: 237283723792,
      Cliente: "2018/03/01",
      dataNotaFiscal: "Member",
      dataVencimento: "Pending",
      valorNota: 2328327,
      valorDisponívelA: "R$339",
    },
    {
      Data: "Friderik Dávid",
      nºNotaFiscal: 237283723792,
      Cliente: "2018/01/21",
      dataNotaFiscal: "Staff",
      dataVencimento: "Active",
      valorNota: 2328327,
      valorDisponívelA: "R$339",
    },
    {
      Data: "Yiorgos Avraamu",
      nºNotaFiscal: 237283723792,
      Cliente: "2018/01/01",
      dataNotaFiscal: "Member",
      dataVencimento: "Active",
      valorNota: 2328327,
      valorDisponívelA: "R$339",
    },
    {
      Data: "Avram Tarasios",
      nºNotaFiscal: 237283723792,
      Cliente: "2018/02/01",
      dataNotaFiscal: "Staff",
      dataVencimento: "Banned",
      valorNota: 2328327,
      valorDisponívelA: "R$339",
    },
    {
      Data: "Quintin Ed",
      nºNotaFiscal: 237283723792,
      Cliente: "2018/02/01",
      dataNotaFiscal: "Admin",
      dataVencimento: "Inactive",
      valorNota: 2328327,
      valorDisponívelA: "R$339",
    },
    {
      Data: "Enéas Kwadwo",
      nºNotaFiscal: 237283723792,
      Cliente: "2018/03/01",
      dataNotaFiscal: "Member",
      dataVencimento: "Pending",
      valorNota: 2328327,
      valorDisponívelA: "R$339",
    },
    {
      Data: "Agapetus Tadeáš",
      nºNotaFiscal: 237283723792,
      Cliente: "2018/01/21",
      dataNotaFiscal: "Staff",
      dataVencimento: "Active",
      valorNota: 2328327,
      valorDisponívelA: "R$339",
    },
    {
      Data: "Carwyn Fachtna",
      nºNotaFiscal: 237283723792,
      Cliente: "2018/01/01",
      dataNotaFiscal: "Member",
      dataVencimento: "Active",
      valorNota: 2328327,
      valorDisponívelA: "R$339",
    },
  ];

  useEffect(() => {
    fetch("https://swapi.dev/api/planets")
      .then((data) => data.json())
      .then((resp) => setDataTable(resp.results));
  }, []);

  // console.log(dataTable.filter((el) => el !== el["residents"]));

  return (
    <>
      <CRow>
        <CCard className="h-100">
          <div className="p-2 m-2">
            <h3 className="text-center">Recebíveis cadastrados</h3>
            <p>Recebíveis aguardando confirmação do cliente parceiro</p>
          </div>
          <Link to="/recebiveis/cadastro">
            <CIcon className="float-right" name="cilPlus"></CIcon>
          </Link>
          <CCard className="m-2">
            <CDataTable
              items={dataTable}
              // fields={fields}
              columnFilter
              // tableFilter
              // footer
              // itemsPerPageSelect
              // itemsPerPage={5}
              hover
              // sorter
              // pagination
            />
          </CCard>
          <p>Quantidade de notas fiscais: {dataTable.length}</p>
        </CCard>
      </CRow>
    </>
  );
};

export default RecebiveisCadastrados;