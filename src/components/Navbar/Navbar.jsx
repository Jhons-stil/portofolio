import React from "react";
import { Nav, NavItem, NavLink, Navbar, Container } from "reactstrap";

const Navigation = () => {
  return (
    <Navbar
      color="white"
      light
      expand="md"
      className="sticky-top shadow-sm py-2 bg-white bg-opacity-75"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Container>
        <div className="fw-bold text-primary" style={{ fontSize: "1.2rem" }}>
          HAIKAL<span className="text-dark">.DEV</span>
        </div>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink href="#sertifikat" className="fw-semibold px-3 text-dark">
              Sertifikat
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#pengalaman" className="fw-semibold px-3 text-dark">
              Pengalaman
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#proyek" className="fw-bold px-3 text-primary">
              Proyek
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
