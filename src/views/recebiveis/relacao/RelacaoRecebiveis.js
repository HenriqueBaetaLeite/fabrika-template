import React, { useState } from "react";
import ModalTrash from "../../../utils/ModalRecebiveis/ModalTrash";
import ModalEdit from "../../../utils/ModalRecebiveis/ModalEdit";

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

const RelacaoRecebiveis = () => {
  const usersData = [
    {
      id: 0,
      Cliente: "John Doe",
      notaFiscal: 23728372,
      Data: "2018/01/01",
      role: "Guest",
      status: "Pending",
    },
    {
      id: 1,
      Cliente: "Samppa Nori",
      notaFiscal: 23728372,
      Data: "2018/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 2,
      Cliente: "Estavan Lykos",
      notaFiscal: 23728372,
      Data: "2018/02/01",
      role: "Staff",
      status: "Banned",
    },
    {
      id: 3,
      Cliente: "Chetan Mohamed",
      notaFiscal: 237283723792,
      Data: "2018/02/01",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 4,
      Cliente: "Derick Maximinus",
      notaFiscal: 237283723792,
      Data: "2018/03/01",
      role: "Member",
      status: "Pending",
    },
    {
      id: 5,
      Cliente: "Friderik Dávid",
      notaFiscal: 237283723792,
      Data: "2018/01/21",
      role: "Staff",
      status: "Active",
    },
    {
      id: 6,
      Cliente: "Yiorgos Avraamu",
      notaFiscal: 237283723792,
      Data: "2018/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 7,
      Cliente: "Avram Tarasios",
      notaFiscal: 237283723792,
      Data: "2018/02/01",
      role: "Staff",
      status: "Banned",
    },
    {
      id: 8,
      Cliente: "Quintin Ed",
      notaFiscal: 237283723792,
      Data: "2018/02/01",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 9,
      Cliente: "Enéas Kwadwo",
      notaFiscal: 237283723792,
      Data: "2018/03/01",
      role: "Member",
      status: "Pending",
    },
    {
      id: 10,
      Cliente: "Agapetus Tadeáš",
      notaFiscal: 237283723792,
      Data: "2018/01/21",
      role: "Staff",
      status: "Active",
    },
    {
      id: 11,
      Cliente: "Carwyn Fachtna",
      notaFiscal: 237283723792,
      Data: "2018/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 12,
      Cliente: "Nehemiah Tatius",
      notaFiscal: 237283723792,
      Data: "2018/02/01",
      role: "Staff",
      status: "Banned",
    },
    {
      id: 13,
      Cliente: "Ebbe Gemariah",
      notaFiscal: 237283723792,
      Data: "2018/02/01",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 14,
      Cliente: "Eustorgios Amulius",
      notaFiscal: 237283723792,
      Data: "2018/03/01",
      role: "Member",
      status: "Pending",
    },
    {
      id: 15,
      Cliente: "Leopold Gáspár",
      notaFiscal: 237283723792,
      Data: "2018/01/21",
      role: "Staff",
      status: "Active",
    },
    {
      id: 16,
      Cliente: "Pompeius René",
      notaFiscal: 237283723792,
      Data: "2018/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 17,
      Cliente: "Paĉjo Jadon",
      notaFiscal: 237283723792,
      Data: "2018/02/01",
      role: "Staff",
      status: "Banned",
    },
    {
      id: 18,
      Cliente: "Micheal Mercurius",
      notaFiscal: 237283723792,
      Data: "2018/02/01",
      role: "Admin",
      status: "Inactive",
    },
    {
      id: 19,
      Cliente: "Ganesha Dubhghall",
      notaFiscal: 237283723792,
      Data: "2018/03/01",
      role: "Member",
      status: "Pending",
    },
    {
      id: 20,
      Cliente: "Hiroto Šimun",
      notaFiscal: 237283723792,
      Data: "2018/01/21",
      role: "Staff",
      status: "Active",
    },
    {
      id: 21,
      Cliente: "Vishnu Serghei",
      notaFiscal: 237283723792,
      Data: "2018/01/01",
      role: "Member",
      status: "Active",
    },
    {
      id: 22,
      Cliente: "Zbyněk Phoibos",
      notaFiscal: 237283723792,
      Data: "2018/02/01",
      role: "Staff",
      status: "Banned",
    },
    {
      id: 23,
      Cliente: "Aulus Agmundr",
      "Nº Nota Fiscal": 237283723792,
      Data: "2018/01/01",
      role: "Member",
      status: "Pending",
    },
    {
      id: 42,
      Cliente: "Ford Prefect",
      "Nº Nota Fiscal": 237283723792,
      Data: "2001/05/25",
      role: "Alien",
      status: "Don't panic!",
    },
  ];

  const [details, setDetails] = useState([]);
  const [items, setItems] = useState(usersData);

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    { key: "Data", _style: { width: "20%" } },
    { key: "notaFiscal", label: "Nº Nota Fiscal", _style: { width: "20%" } },
    { key: "Cliente", _style: { width: "20%" } },
    {
      key: "show_details",
      label: "",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
    {
      key: "check_box",
      label: "",
      _style: { width: "5%" },
      sorter: false,
      filter: false,
    },
    {
      key: "edit",
      label: "",
      _style: { width: "5%" },
      sorter: false,
      filter: false,
    },
    {
      key: "delete",
      label: "",
      _style: { width: "5%" },
      sorter: false,
      filter: false,
    },
  ];

  return (
    <>
      <CCard className="text-center h-100 p-2">
        <h3>Relação dos Recebíveis</h3>
        <CDataTable
          items={usersData}
          fields={fields}
          columnFilter
          tableFilter
          footer
          itemsPerPageSelect
          itemsPerPage={5}
          hover
          sorter
          pagination
          scopedSlots={{
            check_box: (item, index) => (
              <td>
                <input type="checkbox" />
              </td>
            ),
            edit: (item, index) => (
              <td>
                <ModalEdit />
              </td>
            ),
            delete: (item, index) => (
              <td>
                <ModalTrash />
              </td>
            ),
            show_details: (item, index) => (
              <td className="py-2">
                <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={() => {
                    toggleDetails(index);
                  }}
                >
                  {details.includes(index) ? "Hide" : "Show"}
                </CButton>
              </td>
            ),
            details: (item, index) => (
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                  <h4>{item.Cliente}</h4>
                  <p className="text-muted">User since: {item.Data}</p>
                  <CButton size="sm" color="info">
                    User Settings
                  </CButton>
                  <CButton size="sm" color="danger" className="ml-1">
                    Delete
                  </CButton>
                </CCardBody>
              </CCollapse>
            ),
          }}
        />
      </CCard>
    </>
  );
};

export default RelacaoRecebiveis;
