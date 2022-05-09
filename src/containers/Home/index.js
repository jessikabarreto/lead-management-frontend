import React from "react";
import { Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import "../../assets/css/bootstrap-icons/bootstrap-icons.css";

/**
 * @author
 * @function Home
 **/

export const Home = (props) => {
  return (
    <Layout>
      <div className="text-center" style={{ borderTop: "1px solid #efefef" }}>
        <div>
          <Row xs={1} md={2} className="">
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
              md={9}
              style={{
                border: "1px solid grey",
                margin: "auto",
                borderRadius: "10px",
                background: "#efefef",
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
