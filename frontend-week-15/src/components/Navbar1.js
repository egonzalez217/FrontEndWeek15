import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbar1() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container id="navbar-1">
        <Navbar.Brand href="#home">Week 15</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Have</NavDropdown.Item>
              <NavDropdown.Item href="#">A</NavDropdown.Item>
              <NavDropdown.Item href="#">Good</NavDropdown.Item>
              <NavDropdown.Item href="#">Day</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">😁</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
