import React, { useState } from "react";
import { CCard, CCol, CRow } from "@coreui/react";

import { CChart } from "@coreui/react-chartjs";

import { CIcon } from "@coreui/icons-react";

const bar = {
  options: {
    legend: {
      display: false,
    },
  },
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Entradas",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const options = {
  legend: {
    display: false,
  },
  // tooltips: {
  //   enabled: false,
  //   custom: customTooltips
  // },
  maintainAspectRatio: false,
};

const Carteira = () => {
  return (
    <>
      {/* <CCard className="text-center h-100 p-2">
        <h3>Gestor de Carteira</h3>
      </CCard> */}
      <CRow>
        <CCol className="my-2">
          <CCard className="text-center h-100">
            <div className="p-2 m-2">
              <h4 className="text-dark">Volume de Recebíveis Negociados</h4>
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
              <h4 className="text-dark">
                Custo Médio Financeiro das Operações
              </h4>
            </div>
            <div className="d-flex justify-content-around">
              <p>1,28%</p>
              <p>a.m.</p>
            </div>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol className="my-2">
          <CCard className="text-center h-100">
            <div className="p-2 m-2">
              <h4 className="text-dark">Recebíveis Antecipados em Aberto</h4>
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
              <h4 className="text-dark">
                Custo Médio dos Recebíveis em Aberto
              </h4>
            </div>
            <div className="d-flex justify-content-around">
              <p>1,35%</p>
              <p>a.m.</p>
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
                type="bar"
                datasets={bar.datasets}
                options={bar.options}
                labels="indexes"
              />
            </div>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Carteira;
