import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ListGroup,
  ListGroupItem,
  Badge,
} from "reactstrap";

const ExperienceAndCerts = () => {
  const [modal, setModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const toggle = (cert) => {
    setSelectedCert(cert);
    setModal(!modal);
  };

  const certificates = [
    {
      id: 1,
      title: "Junior Web Programmer",
      issuer: "PT. Suka Teknologi Global",
      img: "/webJunior.jpg",
      units: [
        "Mengimplementasikan User Interface",
        "Menggunakan Struktur Data",
        "Menulis Kode dengan Best Practices",
        "Debugging & Dokumentasi Program",
      ],
    },
    {
      id: 2,
      title: "Workshop Dunia Kerja",
      issuer: "LPK Sukarobot Academy",
      img: "/LPK.png",
      units: ["Etika Profesi", "Persiapan Karir", "Adaptasi Industri"],
    },
  ];

  const workExperience = [
    {
      id: 1,
      role: "Mahasiswa di PeTIK (Hasil UTS)",
      company: "Lembaga PeTIK",
      period: "2025 - 2026",
      desc: "Membangun proyek HKL Rentcar menggunakan HTML dan Bootstrap sebagai syarat kelulusan UTS. Fokus pada desain responsif dan logika bisnis penyewaan kendaraan.",
    },
    {
      id: 2,
      role: "Junior Web Developer (Training)",
      company: "Project Base Learning",
      period: "2025",
      desc: "Mengembangkan berbagai modul aplikasi web menggunakan stack modern (Vite + React) dan menerapkan standar industri yang dipelajari selama masa pendidikan.",
    },
    {
      id: 3,
      role: "",
      company: "Project Base Learning",
      period: "2025",
      desc: "Mengembangkan berbagai modul aplikasi web menggunakan stack modern (Vite + React) dan menerapkan standar industri yang dipelajari selama masa pendidikan.",
    },
    {
      id: 4,
      role: "Fullstack Web Developer (Student)",
      company: "Lembaga PeTIK",
      period: "2025 - Sekarang",
      desc: "Sedang menempuh pendidikan intensif Fullstack Development. Berhasil membangun proyek HKL Rentcar (UTS) menggunakan HTML dan Bootstrap, serta mengembangkan aplikasi berbasis React.js dan Node.js dengan integrasi database MySQL.",
    },
    {
      id: 5,
      role: "Operator Produksi & Desain Grafis (PKL)",
      company: "Percetakan Oke Print",
      period: "2024 - 2025",
      desc: "Bertanggung jawab dalam mengoperasikan mesin cetak digital skala besar dan A3. Melakukan kontrol kualitas desain menggunakan Canva dan memastikan akurasi hasil cetak sesuai permintaan klien.",
    },
    {
      id: 6,
      role: "Divisi Kominfo (OSIS)",
      company: "OSIS SMK & SMP",
      period: "2022 - 2024",
      desc: "Mengelola konten media sosial Instagram sekolah dan merancang berbagai aset visual publikasi menggunakan Canva. Membangun fondasi komunikasi digital dan dokumentasi kegiatan sekolah.",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "HKL Rentcar - Website Penyewaan Mobil",
      tech: ["HTML", "Bootstrap", "JavaScript"],
      category: "UTS Project",
      desc: "Sistem penyewaan kendaraan dengan fitur responsif, katalog mobil, dan formulir pemesanan. Fokus pada UI/UX yang user-friendly.",
      link: "#",
    },
    {
      id: 2,
      title: "Fullstack API Management",
      tech: ["Node.js", "Express", "MySQL"],
      category: "Backend Practice",
      desc: "Pengembangan arsitektur backend untuk mengelola data secara dinamis menggunakan RESTful API dan integrasi database relasional.",
      link: "#",
    },
    {
      id: 3,
      title: "Modern UI Component",
      tech: ["React.js", "Vite", "Bootstrap", "Reactstrap"],
      category: "Frontend Practice",
      desc: "Implementasi antarmuka web modern dengan performa tinggi menggunakan Vite dan styling Booststrap & Reactstrap.",
      link: "#",
    },
    {
      id: 4,
      title: "Authentication System (JWT)",
      tech: ["Node.js", "Express", "JSON Web Token", "MySQL"],
      category: "Backend Security",
      desc: "Implementasi sistem autentikasi aman menggunakan JWT (JSON Web Token). Mempelajari cara mengelola login, enkripsi password, dan pengamanan endpoint API dari akses yang tidak terautorisasi.",
      link: "https://github.com/Jhons-stil/projek-jwt.git",
    },
    {
      id: 5,
      title: "Backend Core System (UTS Project)",
      tech: ["Node.js", "Express", "MySQL"],
      category: "Backend Development",
      desc: "Hasil UTS PeTIK yang mencakup pembangunan struktur server, REST API, dan integrasi database relasional yang efisien.",
      link: "https://github.com/Jhons-stil/backend.git",
    },
  ];
  return (
    <Container className="py-5">
      {/* SECTION SERTIFIKAT */}
      <div id="sertifikat" className="mb-5">
        <h2 className="fw-bold mb-4">Sertifikasi Kompetensi</h2>
        <Row>
          {certificates.map((cert) => (
            <Col md="6" lg="4" key={cert.id} className="mb-3">
              <Card className="border-0 shadow-sm h-100">
                <CardImg
                  top
                  src={cert.img}
                  alt={cert.title}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <CardBody>
                  <CardTitle tag="h6" className="fw-bold">
                    {cert.title}
                  </CardTitle>
                  <small className="text-muted d-block mb-3">
                    {cert.issuer}
                  </small>
                  <Button
                    color="primary"
                    outline
                    size="sm"
                    onClick={() => toggle(cert)}
                  >
                    Lihat Unit Kompetensi
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <hr className="my-5" />

      {/* SECTION PENGALAMAN (TANPA FOTO) */}
      <div id="pengalaman">
        <h2 className="fw-bold mb-4">Pengalaman Kerja & Pendidikan</h2>
        <div className="ps-3 border-start border-primary border-3">
          {workExperience.map((exp) => (
            <div key={exp.id} className="mb-5 position-relative">
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#0d6efd",
                  borderRadius: "50%",
                  position: "absolute",
                  left: "-25px",
                  top: "7px",
                }}
              />
              <h5 className="fw-bold mb-1">{exp.role}</h5>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-primary fw-semibold ">{exp.company}</span>
                <small className="text-muted">{exp.period}</small>
              </div>
              <p className="text-secondary" style={{ maxWidth: "800px" }}>
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-5" />

      {/* SECTION PROJECTS */}
      <div id="proyek" className="mb-5">
        <h2 className="fw-bold mb-4">Proyek Unggulan</h2>
        <Row>
          {projects.map((project) => (
            <Col md="6" lg="4" key={project.id} className="mb-4">
              <Card
                className="border-0 shadow-sm h-100"
                style={{ borderRadius: "12px" }}
              >
                <CardBody className="d-flex flex-column">
                  <div className="mb-2">
                    <Badge
                      color="primary"
                      className="text-uppercase"
                      style={{ fontSize: "0.7rem" }}
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle tag="h5" className="fw-bold">
                    {project.title}
                  </CardTitle>
                  <p className="text-secondary small mb-3">{project.desc}</p>
                  <div className="mb-4">
                    {project.tech.map((t, index) => (
                      <Badge className="border me-1 mb-1" key={index}>
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    color="primary"
                    size="sm"
                    className="w-100 mt-auto"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ borderRadius: "8px" }}
                  >
                    Lihat di GitHub
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Modal isOpen={modal} toggle={() => setModal(!modal)} centered>
        <ModalHeader toggle={() => setModal(!modal)} className="fw-bold">
          {selectedCert?.title}
        </ModalHeader>
        <ModalBody>
          <img
            src={selectedCert?.img}
            className="img-fluid rounded mb-3 shadow-sm"
            alt="cert"
          />
          <h6>Unit Kompetensi:</h6>
          <ListGroup flush>
            {selectedCert?.units.map((unit, index) => (
              <ListGroupItem key={index} className="px-0 py-1 border-0 small">
                ✅ {unit}
              </ListGroupItem>
            ))}
          </ListGroup>
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default ExperienceAndCerts;
