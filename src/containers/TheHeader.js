import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { TheHeaderDropdownSettings, TheHeaderDropdownNotif } from "./index";

import { CHeader, CToggler, CHeaderNav } from "@coreui/react";

// routes config
// import routes from "../routes";

const TheHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const [company, setCompany] = useState("Empresa Acme Inc.");
  const [userName, setUserName] = useState("John Doe");

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
    <CHeader
      // style={{ color: "#231f20" }}
      className="d-flex justify-content-between"
    >
      {/* Esse 2 primeiros elementos são o botão para "abrir e fechar" o menu (responsivo) */}
      <CHeaderNav>
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
      </CHeaderNav>

      <CHeaderNav>
        <h3>{company}</h3>
      </CHeaderNav>

      <h5 className="m-2">{userName}</h5>
      <CHeaderNav>
        {/* Aqui temos os 2 "botões": notifications, settings */}
        <TheHeaderDropdownNotif />
        <TheHeaderDropdownSettings />
      </CHeaderNav>
    </CHeader>
  );
};

export default TheHeader;
