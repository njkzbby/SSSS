import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Styles = styled.div`
  .homePage {
    background: url("/assets/gora.png") no-repeat;
    overflow-y: scroll;
  }
`;

export default function Home() {
  return (
    <>
      <Styles>
        <div className="homePage">
          <img src="/assets/gora.png" alt="ss" />
        </div>
      </Styles>
    </>
  );
}
