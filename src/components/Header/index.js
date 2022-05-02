import React from "react";
import { Navbar } from "react-bootstrap";
import "../../assets/css/Header.css";
import logo from "../../assets/images/safaricom-Logo.png";

/**
 * @author
 * @function Header
 **/

export const Header = (props) => {
  return (
    <Navbar className="navbar">
      <Navbar.Brand href="#home">
        <img src={logo} className="nav-logo" alt="" />
        Enterprise Leads Management Tool
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Welcome <a href="#login">Kemuel</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
