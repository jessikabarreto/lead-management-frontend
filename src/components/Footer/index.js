import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../../assets/images/safaricom-Logo.png";

/**
 * @author
 * @function Footer
 **/

export const Footer = (props) => {
  return (
    <div className="footer fixed-bottom" style={{ background: "white" }}>
      <Row>
        <Col md={10}>
          <div style={{ borderTop: "1px solid green" }}>
            <p
              className="text-center"
              style={{ marginTop: "10px", color: "gray" }}
            >
              &copy; Safaricom PLC 2022
            </p>
          </div>
        </Col>
        <Col md={2}>
          <img src={logo} className="nav-logo" alt="" />
        </Col>
      </Row>
    </div>
  );
};
