import React from "react";
import { Layout } from "../../components/Layout";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Input } from "../../components/UI/Input";

/**
 * @author
 * @function Register
 **/

export const Register = (props) => {
  return (
    <Layout>
      <div
        className=""
        style={{
          borderTop: "1px solid #efefef",
          marginRight: "20px",
        }}
      >
        <Row style={{ borderTop: "1px solid #efefef", position: "relative" }}>
          <Col
            style={{
              margin: "auto",
              width: "30%",
              position: "fixed",
              left: "30%",
              zIndex: "2",
              textAlign: "center",
              top: "15%",
              borderRadius: "20px",
              backgroundColor: "white",
              boxShadow: "5px 5px 5px 5px gray",
            }}
          >
            <div style={{ margin: "auto" }}>
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "600",
                  color: "gray",
                  margin: "0px",
                }}
              >
                Register New User
              </p>
            </div>

            <Form
              // onSubmit={userLogin}
              style={{ margin: "auto", maxWidth: "300px" }}
            >
              <Row>
                <Col>
                  <Input
                    id=""
                    placeholder="First Name"
                    type="text"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
                <Col>
                  <Input
                    id=""
                    placeholder="Last Name"
                    type="text"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
              </Row>
              <Input
                id=""
                placeholder="Enter email"
                type="text"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                class=""
                id="formBasicPassword"
                placeholder="Password"
                type="password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
              <Row>
                <Col md={4}>
                  <Input
                    id=""
                    placeholder="Staff ID"
                    type="text"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
                <Col>
                  <Input
                    id=""
                    placeholder="Division"
                    type="text"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
              </Row>
              <Input
                class=""
                id=""
                placeholder="Department"
                type="password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                class=""
                id=""
                placeholder="Role"
                type="password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
              <Row>
                <Col className="mb-3">
                  <Input
                    id=""
                    placeholder="Region"
                    type="text"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Select
                    aria-label="Default select example"
                    className=" mt-4 form"
                    id=""
                    style={{ fontSize: "12px" }}
                    // value={region}
                    // onChange={(e) => setRegion(e.target.value)}
                    required
                  >
                    <option>Select Acces Type</option>
                    <option value="user">User</option>
                    <option value="admin">admin</option>
                    <option value="sales">sales</option>
                  </Form.Select>
                </Col>
              </Row>
              <Button className="mb-3" variant="success" type="submit">
                Register
              </Button>
            </Form>
            {/* <p value={error} onChange={(e) => setError(e.target.value)}></p> */}
          </Col>
        </Row>
      </div>
    </Layout>
  );
};
