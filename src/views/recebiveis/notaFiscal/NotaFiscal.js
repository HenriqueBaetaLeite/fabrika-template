import React, { lazy } from "react";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CLabel,
  CInput,
  CFormGroup,
  CButton,
} from "@coreui/react";

import { CChart } from "@coreui/react-chartjs";

import { CIcon } from "@coreui/icons-react";

const line = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "",
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

const NotaFiscal = () => {
  return (
    <>
      <CRow>
        <CCard className="h-100">
          <CForm>
            <div className="p-2 m-2">
              <h4 className="text-dark">Importação de Arquivos</h4>
            </div>
            <CFormGroup className="d-flex m-2">
              <CCol className="my-2">
                <CInput
                  type="date"
                  id="nf-dateIn"
                  name="nf-dateIn"
                  placeholder="Data início"
                />
              </CCol>

              <CCol className="my-2">
                <CInput
                  type="date"
                  id="nf-dateOut"
                  name="nf-dateOut"
                  placeholder="Data Fim"
                />
              </CCol>

              <CCol className="my-2">
                <CButton type="button" className="btn btn-primary">
                  Filtrar
                </CButton>
              </CCol>
            </CFormGroup>
          </CForm>
        </CCard>
      </CRow>

      <CRow>
        <CCol>
          <CCard className="text-center h-100">
            <div>
              <h2>
                aqui virá uma tabela com as notas fiscais existentes, podendo
                fazer download
              </h2>
              <h3>
                Além de um botão com opçao de fazer upload de uma nota fiscal
              </h3>
            </div>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default NotaFiscal;
