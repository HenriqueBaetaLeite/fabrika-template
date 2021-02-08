import React, { useState } from "react";

import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
} from "@coreui/react";

const ModalEdit = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  return (
    <>
      <i onClick={toggle} className="cil-pencil" style={{ cursor: "pointer" }}>
        {/* Launch demo modal */}
      </i>
      <CModal show={modal} onClose={toggle}>
        <CModalHeader className="mx-auto">
          <h2>Editar nota cadastrada</h2>
        </CModalHeader>
        <CModalBody>
          A alteração do pedido de antecipação do recebível irá requisitar
          confirmação do cliente parceiro
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={toggle}>
            Cancelar
          </CButton>
          <CButton color="primary">Confirmar</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default ModalEdit;
