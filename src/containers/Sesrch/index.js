import React from "react";
import { Layout } from "../../components/Layout";
import { Row, Col, Button, Table, Form } from "react-bootstrap";
import { HomeInput } from "../../components/UI/Input";

/**
 * @author
 * @function Search
 **/

export const Search = (props) => {
  return (
    <Layout>
      <div className="" style={{ borderTop: "1px solid #efefef" }}>
        <Row>
          <Col>
            <h1
              style={{ marginLeft: "40px", marginTop: "60px", color: "gray" }}
            >
              Search Page
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
                    <HomeInput label="Lead ID" type="text" />
                    <HomeInput label="Region" type="text" />
                    <HomeInput label="Service" type="text" />
                    <HomeInput label="Status" type="text" />
                  </Col>
                  <Col>
                    <HomeInput label="To" type="date" />
                  </Col>
                  <Col>
                    <Button className="btn-sm" variant="success" type="submit">
                      Search{" "}
                      <i className="bi bi-search text-white ms-2 me-0"></i>
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Row>
          </Col>
        </Row>
        <div
          style={{
            borderTop: "1px solid #efefef",
            margin: "10px 20px 0px 20px",
          }}
        >
          test
        </div>
      </div>
    </Layout>
  );
};
