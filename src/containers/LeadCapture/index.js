import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import { Input, Select } from "../../components/UI/Input";

/**
 * @author
 * @function LeadCapture
 **/

export const LeadCapture = (props) => {
  return (
    <Layout>
      <div className="" style={{ borderTop: "1px solid #efefef" }}>
        <h1 style={{ marginLeft: "40px", marginTop: "60px", color: "gray" }}>
          Leads Capture
        </h1>
        <div
          style={{
            borderTop: "1px solid #efefef",
            margin: "30px 20px 0px 20px",
          }}
        >
          <Form style={{ marginTop: "50px" }}>
            <Row>
              <Col>
                <Input
                  label="Business Name"
                  class="mb-3"
                  id=""
                  placeholder="Enter Business Name"
                  type="text"
                  value=""
                  required
                  onChange={(e) => {}}
                />
                <Input
                  label="Contact Person"
                  class="mb-3"
                  id=""
                  placeholder="Enter Contact Person"
                  type="text"
                  value=""
                  required
                  onChange={(e) => {}}
                />
                <Input
                  label="Region"
                  class="mb-3"
                  id=""
                  placeholder="Enter Region"
                  type="text"
                  value=""
                  required
                  onChange={(e) => {}}
                />
                <Button
                  className="btn-sm"
                  variant="success"
                  type="submit"
                  style={{ width: "160px" }}
                >
                  Submit
                </Button>
              </Col>
              <Col>
                <Input
                  label="Industry"
                  class="mb-3"
                  id=""
                  placeholder="Enter Industry"
                  type="text"
                  value=""
                  required
                  onChange={(e) => {}}
                />
                <Input
                  label="Contact Email"
                  class="mb-3"
                  id=""
                  placeholder="Enter Contact Email address"
                  type="email"
                  value=""
                  required
                  onChange={(e) => {}}
                />
                <Row>
                  <Col>
                    <Select label="Service Type" />
                    <Form.Select
                      aria-label="Default select example"
                      style={{ fontSize: "12px" }}
                      onChange={(e) => {}}
                      required
                    >
                      <option>Select Service</option>
                      <option value="1">Fixed Data</option>
                      <option value="2">GSM</option>
                      <option value="3">ICT</option>
                      <option value="4">MPESA</option>
                      <option value="5">IoT</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Select label="Service Sub-Type" />
                    <Form.Select
                      aria-label="Default select example"
                      style={{ fontSize: "12px" }}
                      onChange={(e) => {}}
                      required
                    >
                      <option>Select Sub-Type</option>
                      <option value="1">Fixed - Fibre</option>
                      <option value="2">Ficed - LTE</option>
                      <option value="3">GSM - Mobile Data</option>
                      <option value="4">GSM - Mobile Voice</option>
                      <option value="5">GSM - Bulk SMS</option>
                      <option value="6">GSM - SMS & VAS</option>
                      <option value="7">GSM - Roaming</option>
                      <option value="8">GSM - Shiriki</option>
                      <option value="9">GSM - Corporate Value Pack</option>
                      <option value="10">GSM - Corporate Advantage</option>
                      <option value="11">GSM - Education Data-Pass</option>
                      <option value="12">ICT - Cloud</option>
                      <option value="13">ICT - Collocation</option>
                      <option value="14">ICT - Digital Service</option>
                      <option value="15">ICT - Managed Security</option>
                      <option value="16">ICT - Consulting</option>
                      <option value="17">ICT - G-Suite</option>
                      <option value="18">ICT - Office 365</option>
                      <option value="19">MPESA - Buy Goods Till</option>
                      <option value="20">MPESA - Paybil-C2B</option>
                      <option value="21">MPESA - Paybill-B2C</option>
                      <option value="22">MPESA - Paybil-B2B</option>
                      <option value="23">IoT - M-Gas</option>
                      <option value="24">IoT - Telematics</option>
                      <option value="25">IoT - Smart-Water</option>
                      <option value="26">IoT - Smart-Meter</option>
                      <option value="27">IoT - SIM Management</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Input
                  label="Contact Phone"
                  class="mb-3"
                  id=""
                  placeholder="Enter Contact number"
                  type="text"
                  value=""
                  required
                  onChange={(e) => {}}
                />
                <Input
                  label="Additionl Notes"
                  as="textarea"
                  rows="5"
                  class="mb-3"
                  id=""
                  placeholder="Enter Notes"
                  type="text"
                  value=""
                  required
                  onChange={(e) => {}}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  rows="5"
                  class="mb-3"
                  id=""
                  placeholder="Creator_name"
                  type="hidden"
                  value=""
                  required
                  onChange={(e) => {}}
                />
              </Col>
              <Col>
                <Input
                  rows="5"
                  class="mb-3"
                  id=""
                  placeholder="EK_no"
                  type="hidden"
                  value=""
                  required
                  onChange={(e) => {}}
                />
              </Col>
              <Col>
                <Input
                  rows="5"
                  class="mb-3"
                  id=""
                  placeholder="creator_email"
                  type="hidden"
                  value=""
                  required
                  onChange={(e) => {}}
                />
              </Col>
              <Col>
                <Input
                  rows="5"
                  class="mb-3"
                  id=""
                  placeholder="department"
                  type="hidden"
                  value=""
                  required
                  onChange={(e) => {}}
                />
              </Col>
              <Col>
                <Input
                  rows="5"
                  class="mb-3"
                  id=""
                  placeholder="creatore_position"
                  type="hidden"
                  value=""
                  required
                  onChange={(e) => {}}
                />
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </Layout>
  );
};
