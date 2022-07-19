import React from "react";
import { Layout } from "../../components/Layout";
import { Row, Col, Button, Table, Form } from "react-bootstrap";
import { HomeInput } from "../../components/UI/Input";

/**
 * @author
 * @function Administration
 **/

export const Administration = (props) => {
  return (
    <Layout>
      <div className="" style={{ borderTop: "1px solid #efefef" }}>
        <Row>
          <Col>
            <h1
              style={{ marginLeft: "40px", marginTop: "60px", color: "gray" }}
            >
              Admin Page
            </h1>
          </Col>
          <Col
            className=""
            style={{
              marginRight: "10px",
              marginTop: "20px",
            }}
          >
            <Row>
              <Form>
                <Row>
                  <Col>
                    <HomeInput label="From" type="date" />
                    <Button className="btn-sm" variant="success" type="submit">
                      <i className="bi bi-search text-white"></i>
                    </Button>
                  </Col>
                  <Col>
                    <HomeInput label="To" type="date" />
                  </Col>
                  <Col>
                    <HomeInput label="Lead ID" type="text" />
                    <HomeInput label="Region" type="text" />
                    <HomeInput label="Service" type="text" />
                  </Col>
                </Row>
              </Form>
            </Row>
          </Col>
        </Row>
        <div
          style={{
            borderTop: "1px solid #efefef",
            margin: "30px 20px 0px 20px",
          }}
        ></div>
      </div>
    </Layout>
  );
};
