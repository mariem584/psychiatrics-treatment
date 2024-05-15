import React, { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import img1 from "../../images/logo_white.png";
import "./navbar.css";
function NavScrollExample() {
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  const toggleShopDropdown = () => {
    setShopDropdownOpen(!shopDropdownOpen);
  };

  return (
    <Navbar expand="lg" >
      <Container fluid>
        <Navbar.Brand className="imagey" href="#">
          <img src={img1} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0"
            style={{
              maxHeight: "100px",
              background: "",
              marginRight: "40px",
            }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/"
              className="navLinks"
              style={{ color: "white", borderBottom:"3px solid #ffc0b5"}}
              href="#action1"
            >
              Home
            </Nav.Link>

            <NavDropdown
              title="About"
              className="backgroundd"
              id="navbarScrollingDropdown"
              show={aboutDropdownOpen}
              onMouseEnter={toggleAboutDropdown}
              onMouseLeave={toggleAboutDropdown}
              onClick={toggleAboutDropdown}
              showArrow={false} 
            >
              <NavDropdown.Item as={Link} to="/about us" href="#action3">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/team" href="#action4">
                Team
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact" href="#action4">
                Contact
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/location" href="#action4">
                Location
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              style={{ color: "white" }}
              to="/testimonials"
              href="#action2"
              className="navLinks"
            >
              Testimonials
            </Nav.Link>
            <Nav.Link
              as={Link}
              style={{ color: "white" }}
              to="/services"
              href="#action2"
              className="navLinks"
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={Link}
              style={{ color: "white" }}
              to="/single service"
              href="#action2"
              className="navLinks"
            >
              Single Service
            </Nav.Link>
            <NavDropdown
              title="Shop"
              className="backgroundd"
              id="navbarScrollingDropdownn"
              show={shopDropdownOpen}
              onMouseEnter={toggleShopDropdown}
              onMouseLeave={toggleShopDropdown}
              onClick={toggleShopDropdown}
              // showArrow={false} 
            >
              <NavDropdown.Item as={Link} to="/product" href="#action3">
                Product
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cart" href="#action4">
                Cart
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="checkout" href="#action4">
                Checkout
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/my account" href="#action4">
                My Account
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* <Button> */}
          <button
            style={{
              marginRight: "40px",
              background: "#ffc0b5",
              border: "none",
              borderRadius: "30px",
              padding: "15px",
              paddingLeft: "35px",
              paddingRight: "35px",
            }}
          >
            <BsTelephoneFill /> |&nbsp;{" "}
            <span style={{ paddingTop: "15px" }}> 020 8003 4154</span>
          </button>
          {/* </Button> */}
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default NavScrollExample;
