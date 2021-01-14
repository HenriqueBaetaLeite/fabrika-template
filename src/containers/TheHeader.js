import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CHeader, CToggler, CHeaderNav } from "@coreui/react";

// routes config
import routes from "../routes";

import { TheHeaderDropdownSettings, TheHeaderDropdownMssg } from "./index";

const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };

  return (
    <CHeader className="d-flex justify-content-between">
      {/* Esse 2 primeiros elementos são o botão para "abrir e fechar" o menu */}
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      {/* Aqui temos os 2 "botões": msgs, settings */}
      <CHeaderNav className="px-3">
        <p>Empresa X</p>
        <p>Usuário Y</p>
        <TheHeaderDropdownMssg />
        <TheHeaderDropdownSettings />
      </CHeaderNav>
    </CHeader>
  );
};

export default TheHeader;
