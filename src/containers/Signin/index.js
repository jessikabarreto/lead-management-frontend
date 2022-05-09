import React from "react";
import Layout from "../../components/Layout";
import { Form, Button, Row, Col } from "react-bootstrap";
import image from "../../assets/images/landing_page_image.png";
import { Input } from "../../components/UI/Input";

/**
* @author
* @function Signin

**/

export const Signin = (props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Row style={{ borderTop: "1px solid #efefef" }}>
        <Col md={4} style={{ height: "100%", margin: "auto" }}>
          <div style={{ marginLeft: "10px", maxwidth: "400px" }}>
            <p
              style={{
                fontSize: "45px",
                fontWeight: "600",
                color: "gray",
                margin: "0px",
              }}
            >
              Enterprise Leads
            </p>
            <p
              style={{
                fontSize: "45px",
                fontWeight: "600",
                color: "green",
                margin: "0px",
              }}
            >
              Management Tool
            </p>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "400",
                color: "gray",
                margin: "0px",
                letterSpacing: "4px",
              }}
            >
              MAXIMIZING CUSTOMER TOUCHPOINTS
            </p>
          </div>

          <Form style={{ marginLeft: "10px", maxWidth: "300px" }}>
            <Input
              id=""
              placeholder="Enter email"
              type="text"
              value=""
              onChange={() => {}}
            />
            <Input
              class="mb-3"
              id="formBasicPassword"
              placeholder="Password"
              type="password"
              value=""
              onChange={() => {}}
            />{" "}
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={8}>
          <img
            src={image}
            alt=""
            style={{
              display: "block",
              maxWidth: "100%",
              maxHeight: "1100px",
              margin: "auto",
              paddingBottom: "20px",
            }}
          />
        </Col>
      </Row>
    </Layout>
  );
};
