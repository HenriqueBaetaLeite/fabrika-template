import React, { useState } from "react";
import ModalTrash from "../../../utils/ModalRecebiveis/ModalTrash";
import ModalEdit from "../../../utils/ModalRecebiveis/ModalEdit";
import ModalDescription from "../../../utils/ModalRecebiveis/ModalDescription";

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

const RecebiveisAntecipados = () => {
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

  const fields = [
    { key: "Data", _style: { width: "20%" } },
    { key: "notaFiscal", label: "Nº Nota Fiscal", _style: { width: "20%" } },
    { key: "Cliente", _style: { width: "20%" } },
    {
      key: "description",
      label: "",
      _style: { width: "5%" },
      sorter: false,
      filter: false,
    },
  ];

  return (
    <>
      <CCard className="h-100 p-2">
        <h3 className="text-center">Recebíveis antecipados</h3>
        <CDataTable
          items={usersData}
          fields={fields}
          columnFilter
          // tableFilter
          // itemsPerPageSelect
          itemsPerPage={5}
          hover
          sorter
          pagination
          scopedSlots={{
            description: (item, index) => (
              <td>
                <ModalDescription />
              </td>
            ),
          }}
        />

        <p>Quantidade de notas fiscais: {usersData.length}</p>
        {/* <p className="float-right">Total a antecipar: R${}</p>
        <div>
          <button className="bt btn-primary float-right">
            Confirmar antecipação
          </button>
        </div> */}
      </CCard>
    </>
  );
};

export default RecebiveisAntecipados;
