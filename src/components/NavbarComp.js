import React from "react";
import { Container, Offcanvas, Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { FaNewspaper, FaPersonBooth, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logoutUser } from '../firebaseConfig';

const NavbarComp = () => {
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.username)
 
  async function logout() {
      await logoutUser()
      navigate('/login');
  }
  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#">Newspaper Distribution System</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/add-vendor"><FaPersonBooth style={{fontSize: "40px", padding: "5px"}}/>Vendor</Nav.Link>
              <Nav.Link href="/all-newspaper"><FaNewspaper style={{fontSize: "40px", padding: "5px"}}/>Newspaper</Nav.Link>
              <Nav.Link onClick={logout}><FaSignOutAlt style={{fontSize: "40px", padding: "5px"}}/>Sign-Out</Nav.Link>
              
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;