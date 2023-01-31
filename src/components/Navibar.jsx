import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const Styles = styled.div`
  .headerColor {
    z-index: 20;
    background-color: green;
    box-shadow: 0px 0px 3px black;
    position: sticky;
    top: 0;
  }
  .sticky-nav {
    position: sticky;
    top: 0;
  }
`;

export default function NaviBar() {
  return (
    <>
      <Styles>
        <div className="headerColor">
          <Navbar collapseOnSelect className="sticky-nav" expand="lg">
            <Navbar.Brand href="/" className="LogoName ml-2">
              NJFTNL
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className={["me-auto", "font-large"]}></Nav>
              <Nav className="justify-content-end">
                <Button className="btn-custom me-2">Log In</Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Styles>
    </>
  );
}
