import React, { useState } from "react";
import { Nav, NavItem, NavLink, Navbar, Container } from "reactstrap";
import "./Navbar.css";

const Navigation = () => {
  const [activeNav, setActiveNav] = useState("#proyek");
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
            <NavLink
              href="#sertifikat"
              onClick={() => setActiveNav("#sertifikat")}
              className={`fw-semibold px-3 text-dark ${activeNav === "#sertifikat" ? "Active" : ""}`}
            >
              Sertifikat
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#pengalaman"
              onClick={() => setActiveNav("#pengalaman")}
              className={`fw-semibold px-3 text-dark ${activeNav === "#pengalaman" ? "Active" : ""}`}
            >
              Pengalaman
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#proyek"
              onClick={() => setActiveNav("#proyek")}
              className={`fw-semibold px-3 text-dark ${activeNav === "#proyek" ? "Active" : ""}`}
            >
              Proyek
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
