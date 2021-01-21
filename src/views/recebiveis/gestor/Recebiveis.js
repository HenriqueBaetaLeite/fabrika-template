import React, { lazy } from "react";

import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";

import { CChart } from "@coreui/react-chartjs";

import { CIcon } from "@coreui/icons-react";

const line = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  options: {
    legend: {
      display: false,
    },
  },
  datasets: [
    {
      label: "Fluxo Financeiro de Entradas",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const Recebiveis = () => {
  return (
    <>
      <CRow>
        <CCol className="my-2">
          <CCard className="text-center h-100">
            <div className="p-2 m-2">
              <h4 className="text-dark">Contas a Receber</h4>
            </div>
            <div className="d-flex justify-content-around">
              <p>25</p>
              <p>R$ 3.000,00</p>
            </div>
          </CCard>
        </CCol>
        <CCol className="my-2">
          <CCard className="text-center h-100">
            <div className="p-2 m-2">
              <CIcon
                style={{ cursor: "pointer" }}
                size={"2xl"}
                name="cil-plus"
                className="m-2"
              />
              <h4 className="text-dark">Cadastrar Nota Fiscal</h4>
            </div>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol className="my-2">
          <CCard className="text-center h-100">
            <div className="p-2 m-2">
              <h4 className="text-dark">Potencial de Antecipação</h4>
            </div>
            <div className="d-flex justify-content-around">
              <p>12</p>
              <p>R$ 1.000,00</p>
            </div>
          </CCard>
        </CCol>
        <CCol className="my-2">
          <CCard className="text-center h-100">
            <div className="p-2 m-2">
              <h4 className="text-dark">Custo Financeiro Estimado</h4>
            </div>
            <div className="d-flex justify-content-around">
              <p>12</p>
              <p>R$ 300,00</p>
            </div>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol className="my-2">
          <CCard className="text-center h-100">
            <div className="p-2 m-2 d-flex justify-content-around">
              <h4 className="text-dark">Fluxo Financeiro de Entradas</h4>
              <div>
                <span className="border m-2 p-1">30</span>
                <span className="border m-2 p-1">60</span>
                <span className="border m-2 p-1">180</span>
              </div>
            </div>
            <div className="d-flex justify-content-around">
              <CChart
                type="line"
                datasets={line.datasets}
                options={line.options}
              />
            </div>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Recebiveis;
