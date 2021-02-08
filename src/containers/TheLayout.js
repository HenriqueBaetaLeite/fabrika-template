import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";

const TheLayout = () => {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("userLogin")) history.push("/login");
  }, []);

  return (
    <div className="c-app c-default-layout" color="primary">
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;
