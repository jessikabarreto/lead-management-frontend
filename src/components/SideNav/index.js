import React from "react";
import "../../assets/css/SideNav.css";

/**
 * @author
 * @function SideNav
 **/

export const SideNav = (props) => {
  const Rule = ({ color }) => (
    <hr
      style={{
        backgroundColor: color,
        height: "1px",
      }}
    />
  );

  return (
    <>
      <div className="sidenav sidenav-a" style={{ width: props.width }}>
        <a href="#section" className="closebtn" onClick={props.closeNav}>
          <i className="bi bi-x-square"></i>
        </a>
        <Rule color="gray" />
        <a href="#section">
          <i className="bi bi-house-fill"></i>
          Home
        </a>
        <a href="#section">
          <i className="bi bi-menu-button-wide-fill"></i>
          Lead Capture
        </a>
        <a href="#section">
          <i className="bi bi-list-stars"></i>
          Lead Tracker
        </a>
        <a href="#section">
          <i className="bi bi-folder-check"></i>
          Administration
        </a>
        <a href="#section">
          <i className="bi bi-clipboard-data"></i>
          Dashboard
        </a>
      </div>
      <div className="sidenav sidenav-i" style={{ width: props.width }}>
        <a href="#section" className="closebtn" onClick={props.closeNav}>
          <i className="bi bi-x-square"></i>
        </a>
        <Rule color="gray" />
        <a href="#section">
          <i className="bi bi-house-fill"></i>
        </a>
        <a href="#section">
          <i className="bi bi-menu-button-wide-fill"></i>
        </a>
        <a href="#section">
          <i className="bi bi-list-stars"></i>
        </a>
        <a href="#section">
          <i className="bi bi-folder-check"></i>
        </a>
        <a href="#section">
          <i className="bi bi-clipboard-data"></i>
        </a>
      </div>
    </>
  );
};
