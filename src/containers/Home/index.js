import React from "react";
import { Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import "../../assets/css/bootstrap-icons/bootstrap-icons.css";
import "../../assets/css/Home.css";
import { closeNav, openNav } from "./script";

/**
 * @author
 * @function Home
 **/

export const Home = (props) => {
  return (
    <Layout>
      <div id="mySidenav" className="sidenav">
        <a to="javascript:void(0)" className="closebtn" onClick={closeNav()}>
          &times;
        </a>
        <a to="#">About</a>
        <a to="#">Services</a>
        <a to="#">Clients</a>
        <a to="#">Contact</a>
      </div>
      <div className="text-center" style={{ borderTop: "1px solid #efefef" }}>
        <div>
          <Row xs={1} md={2} className="">
            <span
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={openNav()}
            >
              &#9776; open
            </span>
            <Col
              className="position-fixed"
              md={3}
              style={{
                maxWidth: "300px",
                height: "100%",
                overflow: "auto",
                borderRight: "1px solid grey",
                marginRight: "20px",
                background: "#efefef",
              }}
            >
              <ul style={{ listStyle: "none", textAlign: "left" }}>
                <li style={{ margin: "20px 20px 20px 0px" }}>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "gray",
                      fontSize: "20px",
                    }}
                  >
                    <i
                      className="bi bi-house-fill"
                      style={{
                        fontSize: "20px",
                        color: "gray",
                        marginRight: "10px",
                      }}
                    ></i>
                    Home
                  </Link>
                </li>
                <li style={{ margin: "20px 20px 20px 0px" }}>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "gray",
                      fontSize: "20px",
                    }}
                  >
                    <i
                      className="bi bi-menu-button-wide-fill"
                      style={{
                        fontSize: "20px",
                        color: "gray",
                        marginRight: "10px",
                      }}
                    ></i>
                    Lead Capture
                  </Link>
                </li>
                <li style={{ margin: "20px 20px 20px 0px" }}>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "gray",
                      fontSize: "20px",
                    }}
                  >
                    {" "}
                    <i
                      className="bi bi-list-stars"
                      style={{
                        fontSize: "20px",
                        color: "gray",
                        marginRight: "10px",
                      }}
                    ></i>
                    Lead Tracker
                  </Link>
                </li>
                <li style={{ margin: "20px 20px 20px 0px" }}>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "gray",
                      fontSize: "20px",
                    }}
                  >
                    {" "}
                    <i
                      className="bi bi-folder-check"
                      style={{
                        fontSize: "20px",
                        color: "gray",
                        marginRight: "10px",
                      }}
                    ></i>
                    Administration
                  </Link>
                </li>
                <li style={{ margin: "20px 20px 20px 0px" }}>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "gray",
                      fontSize: "20px",
                    }}
                  >
                    {" "}
                    <i
                      className="bi bi-clipboard-data"
                      style={{
                        fontSize: "20px",
                        color: "gray",
                        marginRight: "10px",
                      }}
                    ></i>
                    Dashboard
                  </Link>
                </li>
              </ul>
            </Col>
            <Col
              className="position-relative"
              md={9}
              style={{
                border: "1px solid grey",
                margin: "auto",
                borderRadius: "10px",
                background: "#efefef",
                float: "right",
              }}
            >
              test
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};
