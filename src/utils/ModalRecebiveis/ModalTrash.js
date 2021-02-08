import React, { useState } from "react";

import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
} from "@coreui/react";

const ModalTrash = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  return (
    <>
      <i onClick={toggle} className="cil-trash" style={{ cursor: "pointer" }}>
        {/* Launch demo modal */}
      </i>
      <CModal show={modal} onClose={toggle}>
        <CModalHeader className="mx-auto">
          <h2>Confirmo a exclusão</h2>
        </CModalHeader>
        <CModalBody>
          Ao excluir da listagem o recebível cadastrado o mesmo voltará para
          "recebíves cadastrados"
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={toggle}>
            Negar
          </CButton>
          <CButton color="primary">Confirmar</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default ModalTrash;
