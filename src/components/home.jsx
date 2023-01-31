import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Styles = styled.div`
  .homePage {
    background: url("/assets/gora.png") no-repeat;
    margin-left: 75px;
  }
`;

export default function Home() {
  return (
    <>
      <Styles>
        <div className="homePage">
          <img src="/assets/gora.png" />
        </div>
      </Styles>
    </>
  );
}
