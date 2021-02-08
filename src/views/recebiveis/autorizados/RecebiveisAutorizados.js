import React, { useState } from "react";

import Table from "../../table/Table";

import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
  CBadge,
  CButton,
  CCollapse,
} from "@coreui/react";

import { CChart } from "@coreui/react-chartjs";

import { CIcon } from "@coreui/icons-react";

const RecebiveisAutorizados = () => {
  const usersData = [
    {
      Data: "2018/01/01",
      nºNotaFiscal: 23728372,
      Cliente: "John Doe",
      dataNotaFiscal: "02/02/2021",
      dataVencimento: "02/02/2021",
      valorNota: "R$xxx",
      valorDisponívelAAntecipar: "R$yyyy",
      parcelas: 3,
      valorSelecionadoA: "R$zzz",
      dataLiberação: "02/02/2021",
      custoFinanceiroTotal: "R$wwww",
      valorLíquido: "....",
    },
    {
      Data: "2018/01/01",
      nºNotaFiscal: 23728372,
      Cliente: "Samppa Nori",
      dataNotaFiscal: "02/02/2021",
      dataVencimento: "02/02/2021",
      valorNota: "R$xxx",
      valorDisponívelAAntecipar: "R$yyyy",
      parcelas: 54,
      valorSelecionadoA: "R$zzz",
      dataLiberação: "02/02/2021",
      custoFinanceiroTotal: "R$wwww",
      valorLíquido: "R$rrrr",
    },
    {
      Data: "2018/02/01",
      nºNotaFiscal: 23728372,
      Cliente: "Estavan Lykos",
      dataNotaFiscal: "02/02/2021",
      dataVencimento: "02/02/2021",
      valorNota: "R$xxx",
      valorDisponívelAAntecipar: "R$yyyy",
      parcelas: 54,
      valorSelecionadoA: "R$zzz",
      dataLiberação: "02/02/2021",
      custoFinanceiroTotal: "R$wwww",
      valorLíquido: "R$rrrr",
    },
    {
      Data: "2018/02/01",
      nºNotaFiscal: 237283723792,
      Cliente: "Chetan Mohamed",
      dataNotaFiscal: "02/02/2021",
      dataVencimento: "02/02/2021",
      valorNota: "R$xxx",
      valorDisponívelAAntecipar: "R$yyyy",
      parcelas: 54,
      valorSelecionadoA: "R$zzz",
      dataLiberação: "02/02/2021",
      custoFinanceiroTotal: "R$wwww",
      valorLíquido: "R$rrrr",
    },
    {
      Data: "2018/03/01",
      nºNotaFiscal: 237283723792,
      Cliente: "Derick Maximinus",
      dataNotaFiscal: "02/02/2021",
      dataVencimento: "02/02/2021",
      valorNota: "R$xxx",
      valorDisponívelAAntecipar: "R$yyyy",
      parcelas: 54,
      valorSelecionadoA: "R$zzz",
      dataLiberação: "02/02/2021",
      custoFinanceiroTotal: "R$wwww",
      valorLíquido: "R$rrrr",
    },
    {
      Data: "2018/01/21",
      nºNotaFiscal: 237283723792,
      Cliente: "Friderik Dávid",
      dataNotaFiscal: "02/02/2021",
      dataVencimento: "02/02/2021",
      valorNota: "R$xxx",
      valorDisponívelAAntecipar: "R$yyyy",
      parcelas: 54,
      valorSelecionadoA: "R$zzz",
      dataLiberação: "02/02/2021",
      custoFinanceiroTotal: "R$wwww",
      valorLíquido: "R$rrrr",
    },
    {
      Data: "2018/01/01",
      nºNotaFiscal: 237283723792,
      Cliente: "Yiorgos Avraamu",
      dataNotaFiscal: "02/02/2021",
      dataVencimento: "02/02/2021",
      valorNota: "R$xxx",
      valorDisponívelAAntecipar: "R$yyyy",
      parcelas: 54,
      valorSelecionadoA: "R$zzz",
      dataLiberação: "02/02/2021",
      custoFinanceiroTotal: "R$wwww",
      valorLíquido: "R$rrrr",
    },
    {
      Data: "2018/02/01",
      nºNotaFiscal: 237283723792,
      Cliente: "Avram Tarasios",
      dataNotaFiscal: "02/02/2021",
      dataVencimento: "02/02/2021",
      valorNota: "R$xxx",
      valorDisponívelAAntecipar: "R$yyyy",
      parcelas: 54,
      valorSelecionadoA: "R$zzz",
      dataLiberação: "02/02/2021",
      custoFinanceiroTotal: "R$wwww",
      valorLíquido: "R$rrrr",
    },
    {
      Data: "2018/02/01",
      nºNotaFiscal: 237283723792,
      Cliente: "Quintin Ed",
      dataNotaFiscal: "02/02/2021",
      dataVencimento: "02/02/2021",
      valorNota: "R$xxx",
      valorDisponívelAAntecipar: "R$yyyy",
      parcelas: 54,
      valorSelecionadoA: "R$zzz",
      dataLiberação: "02/02/2021",
      custoFinanceiroTotal: "R$wwww",
      valorLíquido: "R$rrrr",
    },
    {
      Data: "2018/03/01",
      nºNotaFiscal: 237283723792,
      Cliente: "Enéas Kwadwo",
      dataNotaFiscal: "02/02/2021",
      dataVencimento: "02/02/2021",
      valorNota: "R$xxx",
      valorDisponívelAAntecipar: "R$yyyy",
      parcelas: 54,
      valorSelecionadoA: "R$zzz",
      dataLiberação: "02/02/2021",
      custoFinanceiroTotal: "R$wwww",
      valorLíquido: "R$rrrr",
    },
    {
      Data: "2018/01/21",
      nºNotaFiscal: 237283723792,
      Cliente: "Agapetus Tadeáš",
      dataNotaFiscal: "02/02/2021",
      dataVencimento: "02/02/2021",
      valorNota: "R$xxx",
      valorDisponívelAAntecipar: "R$yyyy",
      parcelas: 54,
      valorSelecionadoA: "R$zzz",
      dataLiberação: "02/02/2021",
      custoFinanceiroTotal: "R$wwww",
      valorLíquido: "R$rrrr",
    },
    {
      Data: "2018/01/01",
      nºNotaFiscal: 237283723792,
      Cliente: "Carwyn Fachtna",
      dataNotaFiscal: "02/02/2021",
      dataVencimento: "02/02/2021",
      valorNota: "R$xxx",
      valorDisponívelAAntecipar: "R$yyyy",
      parcelas: 54,
      valorSelecionadoA: "R$zzz",
      dataLiberação: "02/02/2021",
      custoFinanceiroTotal: "R$wwww",
      valorLíquido: "R$rrrr",
    },
    {
      Data: "2018/02/01",
      nºNotaFiscal: 237283723792,
      Cliente: "Nehemiah Tatius",
      dataNotaFiscal: "02/02/2021",
      dataVencimento: "02/02/2021",
      valorNota: "R$xxx",
      valorDisponívelAAntecipar: "R$yyyy",
      parcelas: 54,
      valorSelecionadoA: "R$zzz",
      dataLiberação: "02/02/2021",
      custoFinanceiroTotal: "R$wwww",
      valorLíquido: "R$rrrr",
    },
    {
      Data: "2018/02/01",
      nºNotaFiscal: 237283723792,
      Cliente: "Ebbe Gemariah",
      dataNotaFiscal: "02/02/2021",
      dataVencimento: "02/02/2021",
      valorNota: "R$xxx",
      valorDisponívelAAntecipar: "R$yyyy",
      parcelas: 54,
      valorSelecionadoA: "R$zzz",
      dataLiberação: "02/02/2021",
      custoFinanceiroTotal: "R$wwww",
      valorLíquido: "R$rrrr",
    },
  ];

  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(usersData)

  return (
    <>
      <CCard className="h-100 p-2">
        <h3 className="text-center">Recebíveis autorizados</h3>
        <p>Recebíveis aprovados pelos clientes</p>
        <CCard className="m-2">
          {/* <CDataTable
            items={usersData}
            columnFilter
            itemsPerPage={5}
            hover
            // sorter
            // pagination
          /> */}
        </CCard>

        <Table
          header={["oi", "ei", "ola"]}
          data={[
            { name: "oi", title: "ei", last: 3, botao: <button>teste</button> },
            { name: "hi", title: "hello", last: 7, botao: null },
          ]}
        />

        <p>data</p>

        <p>Quantidade de notas fiscais: {usersData.length}</p>
        <p>Total a antecipar: R${}</p>
        <button className="bt btn-primary">Confirmar antecipação</button>
      </CCard>
    </>
  );
};

export default RecebiveisAutorizados;
