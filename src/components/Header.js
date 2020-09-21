import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header (props) {
  return (
    <ReactFragment>
      <Navbar.Brand href= '#home'><h1>Survey</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'/>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav class ='mr auto'>
          <Nav.link href='home'>Home</Nav.link>
          <Nav.link href='#link'>Survey</Nav.link>
          <NavDropdown title='Dropdown' id='basic-navbar-nav'>
          <NavDropdown.Item href='#action/3.1' id='basic-navbar-nav'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>2nd thingy</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>3rd thingy</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>4th thingy</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </ReactFragment>
  );
}

export default Header;