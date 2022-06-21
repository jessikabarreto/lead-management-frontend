import React from "react";
import { Navbar } from "react-bootstrap";
import "../../assets/css/Header.css";
import logo from "../../assets/images/safaricom-Logo.png";
import { useSelector } from "react-redux";

/**
 * @author
 * @function Header
 **/

export const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  return (
    <Navbar className="navbar fixed-top">
      <Navbar.Brand href="/">
        <img src={logo} className="nav-logo" alt="" />
        Enterprise Leads Management Tool
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Welcome <a href="#login">{auth.user.firstname}</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};
