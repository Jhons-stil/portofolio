import React from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white pt-5 pb-4 mt-5">
        <Container>
          <Row className="align-items-center">
            {/* Kolom Nama & Slogan */}
            <Col md="4" className="text-center text-md-start mb-4 mb-md-0">
              <h5 className="fw-bold mb-1">Haikal Hakam</h5>
              <p className="small text-secondary">
                Fullstack Developer | Backend | Frontend
              </p>
            </Col>

            {/* Kolom Link Cepat/Sosial Media */}
            <Col md="4" className="text-center mb-4 mb-md-0">
              <div className="d-flex justify-content-center gap-3">
                <a
                  href="https://github.com/Jhons-stil"
                  target="_blank"
                  className="text-white text-decoration-none small hover-link"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/haikalhakam"
                  target="_blank"
                  className="text-white text-decoration-none small hover-link"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:haikalhakam13@gmail.com"
                  className="text-white text-decoration-none small hover-link"
                >
                  Email
                </a>
              </div>
            </Col>

            {/* Kolom Copyright & Tech Stack */}
            <Col md="4" className="text-center text-md-end">
              <p className="mb-0 small">
                © {new Date().getFullYear()} Built with{" "}
                <span className="text-primary fw-bold">Reactstrap</span> &{" "}
                <span className="text-info fw-bold">Vite</span>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
