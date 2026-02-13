import React from "react";
import { Button, Col, Container, Row } from "reactstrap";

const Main = () => {
  return (
    <div>
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center py-5">
            <Col md="6">
              <h1 className="display-4 fw-bold">Halo, Saya Haikal Hakam</h1>
              <p className="lead text-muted">
                Membangun pengalaman web masa depan dengan Vite & React.js.
                Fullstack Developer yang menggabungkan presisi kode backend
                dengan estetika antarmuka modern.
              </p>
              <Button
                color="primary"
                size="lg"
                className="rounded-pill px-4 shadow-sm"
                href="../public/CV-ATS.pdf"
                rel="noopener noreferrer"
              >
                Lihat CV Saya
              </Button>
            </Col>
            <Col md="6" className="text-center">
              <img
                src="../public/profile.jpeg"
                alt="Profile"
                className="img-fluid rounded-circle shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Main;
