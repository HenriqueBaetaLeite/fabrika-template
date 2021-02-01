import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter style={{ background: "#e29b62" }} fixed={false}>
      <div className="mfs-auto">
        <a
          style={{ color: "#231f20" }}
          href="https://github.com/HenriqueBaetaLeite"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fábrika de Softwares{" "}
        </a>
        <span style={{ color: "#231f20" }} className="mr-1">
          &copy; 2021
        </span>
      </div>
      {/* <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">CoreUI for React</a>
      </div> */}
    </CFooter>
  );
};

export default React.memo(TheFooter);
