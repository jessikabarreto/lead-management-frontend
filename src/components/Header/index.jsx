import React from "react";
import { Navbar } from "react-bootstrap";
import "../../assets/css/Header.css";
import logo from "../../assets/images/safaricom-Logo.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions";

/**
 * @author
 * @function Header
 **/

export const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const userName = auth.user.firstname;
  const lastName = auth.user.lastname;
  const dispatch = useDispatch();

  const signout = () => {
    dispatch(logout());
  };

  return (
    <React.Fragment>
      <Navbar className="navbar fixed-top">
        <Navbar.Brand href="/" className="brand">
          <img src={logo} className="nav-logo" alt="Logo" />
          Enterprise Leads Management Tool
        </Navbar.Brand>
        <Navbar.Toggle>test</Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="user">
            Welcome: {userName} {lastName}
          </Navbar.Text>
          <Navbar.Text>
            <button
              type="button"
              className="btn btn-link p-0 border-0 bg-transparent"
              onClick={signout}
              aria-label="Logout"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <i className="bi bi-box-arrow-right"></i>
            </button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};
