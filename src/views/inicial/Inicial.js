import React, { lazy } from "react";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CWidgetBrand,
} from "@coreui/react";

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

        {/* DIVISÓRIA ENTRE CCARD CWIDGET */}
        {/* <CCol>
          <CWidgetBrand
            rightHeader="8"
            rightFooter="Notas Fiscais"
            leftHeader="R$1.000,00"
            leftFooter=""
          >
            <div className="p-2 m-2">
              <h4 className="text-dark">Clientes</h4>
            </div>
          </CWidgetBrand>
        </CCol>
        <CCol>
          <CWidgetBrand
            // className="bg-warning"
            // color="facebook"
            rightHeader="1"
            rightFooter="Nota Fiscal"
            leftHeader="R$200,00"
            leftFooter=""
          >
            <div className="p-2 m-2">
              <h4 className="text-dark">Fornecedores</h4>
            </div>
          </CWidgetBrand>
        </CCol> */}
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

        {/*
        <CCol>
          <CWidgetBrand
            // className="bg-warning"
            // color="facebook"
            rightHeader="6"
            rightFooter="Notas Fiscais"
            leftHeader="R$1.000,00"
            leftFooter=""
          >
            <div className="p-2 m-2">
              <h4 className="text-dark">
                Volume Financeiro Intermediado Acumulado
              </h4>
            </div>
          </CWidgetBrand>
        </CCol>
        <CCol>
          <CWidgetBrand
            // className="bg-warning"
            // color="facebook"
            rightHeader="3"
            rightFooter="Notas Fiscais"
            leftHeader="R$500,00"
            leftFooter=""
          >
            <div className="p-2 m-2">
              <h4 className="text-dark">
                Volume Financeiro Intermediado no Mês
              </h4>
            </div>
          </CWidgetBrand>
        </CCol> */}
      </CRow>
    </>
  );
};

export default Inicial;
