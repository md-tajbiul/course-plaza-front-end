import React, { useContext } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand as={Link} to="/">Course-Plaza</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    <Nav>
    <NavDropdown title={loggedInUser.name} id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="/manage">Manage Course</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/orders">Orders</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">Settings</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/upload">Upload</Nav.Link>
      <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default NavBar;