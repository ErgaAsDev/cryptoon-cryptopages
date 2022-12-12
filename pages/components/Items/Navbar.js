import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container className="text-light">
        <Navbar.Brand href="#home">
          <Image src="/images/logoSmall.png" width={70} height={70} />
          <Navbar.Brand href="#home" className="text-light">
            <span id="text-span-1">Cryp</span>toon
          </Navbar.Brand>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="nav-link-1">
            <Nav.Link href="#home" className="text-light">
              Dashboard
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              Products
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              Support
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              FAQ
            </Nav.Link>
          </Nav>
          <Nav id="nav-link-2">
            <Nav.Link href="#deets" className="text-light">
              SIGN IN
            </Nav.Link>
            <Link href="/">
              <Button variant="warning">REGISTER</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
