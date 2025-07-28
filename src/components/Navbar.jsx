import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import "./Navbar.css"

export default function NavigationBar() {
  return (
    <Navbar expand="lg" sticky="top" className="glass-navbar shadow-lg p-3 rounded-3">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3 text-gradient">Vedanth M.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-5 gap-3 text-light">
            <Nav.Link href="#home"><FaHome className="me-1" />Home</Nav.Link>
            <Nav.Link href="#about"><FaUser className="me-1" />About</Nav.Link>
            <Nav.Link href="#skills"><FaTools className="me-1" />Skills</Nav.Link>
            <Nav.Link href="#projects"><FaProjectDiagram className="me-1" />Projects</Nav.Link>
            <Nav.Link href="#contact"><FaEnvelope className="me-1" />Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
