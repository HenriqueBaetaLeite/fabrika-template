import React from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";

const Inicial = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader className="text-center">
              <h2>Clientes</h2>
            </CCardHeader>
            <CCardBody className="d-flex justify-content-around">
              <div className="text-center">
                <h2>8</h2>
                <span>notas fiscais</span>
              </div>
              <div className="text-center">
                <h2>R$1000,00</h2>
                <span>Total das notas</span>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard>
            <CCardHeader className="text-center">
              <h2>Fornecedor</h2>
            </CCardHeader>
            <CCardBody className="d-flex justify-content-around">
              <div className="text-center">
                <h2>1</h2>
                <span>notas fiscais</span>
              </div>
              <div className="text-center">
                <h2>R$200,00</h2>
                <span>Total das notas</span>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader className="text-center">
              <h2>Volume financeiro Intermediado acumulado</h2>
            </CCardHeader>
            <CCardBody className="d-flex justify-content-around">
              <div className="text-center">
                <h2>6</h2>
                <span>notas fiscais</span>
              </div>
              <div className="text-center">
                <h2>R$1000,00</h2>
                <span>Total das notas</span>
              </div>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol>
          <CCard>
            <CCardHeader className="text-center">
              <h2>Volume financeiro Intermediado no mês</h2>
            </CCardHeader>
            <CCardBody className="d-flex justify-content-around">
              <div className="text-center">
                <h2>1</h2>
                <span>notas fiscais</span>
              </div>
              <div className="text-center">
                <h2>R$300,00</h2>
                <span>Total das notas</span>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Inicial;
