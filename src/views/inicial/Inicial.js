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

const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));
const WidgetsBrand = lazy(() => import("../widgets/WidgetsBrand.js"));

const Inicial = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CWidgetBrand
            // className="bg-warning"
            // color="facebook"
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
        </CCol>
      </CRow>

      <CRow>
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
        </CCol>
      </CRow>
    </>
  );
};

export default Inicial;
