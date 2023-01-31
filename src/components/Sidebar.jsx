import React, { useState } from "react";
import styled from "styled-components";
import "./Sidebar.scss";

const Styles = styled.div`
  .sideBar {
    background-color: green;
    z-index: -1;
    transition: width 0.4s;
    width: 75px;
  }
  .icons {
    padding: 12px;
  }
  .isShow {
    width: 280px;
  }
`;

function Sidebar() {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  return (
    <>
      <Styles>
        <div
          className={`position-fixed h-100 sideBar${show ? " isShow" : ""}`}
          variant="green"
        >
          <div
            className={`burger ${show ? "burger--opened" : ""}`}
            onClick={toggleShow}
          >
            <div className="burger__inner burger__inner--first"></div>
            <div className="burger__inner burger__inner--second"></div>
            <div className="burger__inner burger__inner--third"></div>
          </div>
        </div>
      </Styles>
    </>
  );
}

export default Sidebar;
