import React from "react";
import { Row, Col } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import "../../assets/css/bootstrap-icons/bootstrap-icons.css";
import "../../assets/css/Home.css";

/**
 * @author
 * @function Home
 **/

export const Home = (props) => {
  return (
    <Layout>
      <div
        className="text-center home"
        style={{ borderTop: "1px solid #efefef" }}
      >
        <div>
          <Row className="leads">
            <Col className="" md={3}></Col>
            <Col
              className=""
              md={9}
              style={{
                border: "1px solid grey",
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
