'use client'

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
          <Image src="/images/logoSmall.png" width={70} height={70} alt="images" />
          <Navbar.Brand href="#home" className="text-light">
            <span id="text-span-1">Cryp</span>toon
          </Navbar.Brand>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex align-items-center" id="nav-link-1">
            <Link href="/Dashboard" className="text-light">
              Dashboard
            </Link>
            <Link href="/" className="text-light">
              Products
            </Link>
            <Link href="/" className="text-light">
              Support
            </Link>
            <Link href="/" className="text-light">
              FAQ
            </Link>
          </Nav>
          <Nav id="nav-link-2" className="d-flex align-items-center">
            <Link href="/Login">SIGN IN</Link>
            <Link href="/SignUp">
              <Button variant="warning">REGISTER</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
