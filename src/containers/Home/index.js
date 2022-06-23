import React, { useEffect } from "react";
import {
  Row,
  Col,
  Button,
  Table,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Layout } from "../../components/Layout";
import "../../assets/css/bootstrap-icons/bootstrap-icons.css";
import "../../assets/css/Home.css";
import { getAllLeads } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { HomeInput } from "../../components/UI/Input";

/**
 * @author
 * @function Home
 **/

export const Home = (props) => {
  const leads = useSelector((state) => state.leads);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLeads());
  }, []);

  const renderLeads = (leads) => {
    let leadItem = [];
    for (let lead of leads) {
      leadItem.push(
        <tr key={lead._id}>
          <td>
            <a href="">{lead.leadId}</a>
          </td>
          <td>{lead.createdAt.substring(0, 10)}</td>
          <td>{lead.business_name}</td>
          <td>{lead.industry}</td>
          <td>{lead.contact_person}</td>
          <td>{lead.contact_email}</td>
          <td>{lead.contact_number}</td>
          <td>{lead.service_type}</td>
          <td>{lead.service_subtype}</td>
          <td>{lead.region}</td>
          <td>{lead.created_by}</td>
          <td>{lead.creator_department}</td>
          <td>{lead.status}</td>
        </tr>
      );
    }
    return leadItem;
  };

  const renderClosedLeads = (leads) => {
    let leadItem = [];
    for (let lead of leads) {
      if (lead.status === "CLOSED") {
        leadItem.push(
          <tr key={lead._id}>
            <td>{lead.leadId}</td>
            <td>{lead.createdAt.substring(0, 10)}</td>
            <td>{lead.business_name}</td>
            <td>{lead.industry}</td>
            <td>{lead.contact_person}</td>
            <td>{lead.contact_email}</td>
            <td>{lead.contact_number}</td>
            <td>{lead.service_type}</td>
            <td>{lead.service_subtype}</td>
            <td>{lead.region}</td>
            <td>{lead.created_by}</td>
            <td>{lead.creator_department}</td>
            <td>{lead.status}</td>
          </tr>
        );
      }
    }
    return leadItem;
  };

  const totalLeadsCount = (leads) => {
    return leads.length;
  };

  const assignedLeadsCount = (leads) => {
    let count = [];
    for (let lead of leads) {
      if (lead.status === "ASSIGNED") {
        count.push(lead);
      }
    }
    return count.length;
  };

  const closedLeadsCount = (leads) => {
    let count = [];
    for (let lead of leads) {
      if (lead.status === "CLOSED") {
        count.push(lead);
      }
    }
    return count.length;
  };

  return (
    <Layout>
      <div className="home" style={{ borderTop: "1px solid #efefef" }}>
        <div>
          <Row className="leads">
            <h4 className="text-muted mt-1">Leads assigned to you</h4>
            <Col className="scroller table-container">
              <Table striped bordered hover size="sm" className="table">
                <thead className="table-head">
                  <tr>
                    <th>Lead ID</th>
                    <th>Date</th>
                    <th>Business</th>
                    <th>Industy</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Service</th>
                    <th>Sub Type</th>
                    <th>Region</th>
                    <th>created_By</th>
                    <th>Department</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>{renderLeads(leads.leads)}</tbody>
              </Table>
            </Col>
            <Col
              className=""
              style={{
                marginLeft: "10px",
              }}
            >
              <Row>
                <Form>
                  <Row>
                    <Col>
                      <HomeInput label="From" type="date" />
                      <Button
                        className="btn-sm"
                        variant="success"
                        type="submit"
                      >
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
              <Row
                style={{
                  borderTop: "1px solid rgb(194, 189, 189)",
                  borderBottom: "1px solid rgb(194, 189, 189)",
                }}
              >
                <h5 className="text-muted mt-2 mb-2">Summary</h5>
                <Col className="summaries">
                  <p className="summary-figure text-info">
                    {totalLeadsCount(leads.leads)}
                  </p>
                  <p className="summary-title">Total Leads</p>
                </Col>
                <Col className="summaries">
                  <p className="summary-figure text-warning">
                    {assignedLeadsCount(leads.leads)}
                  </p>
                  <p className="summary-title">Assigned Leads</p>
                </Col>
                <Col className="summaries">
                  <p className="summary-figure text-success">
                    {closedLeadsCount(leads.leads)}
                  </p>
                  <p className="summary-title">Closed Leads</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="leads">
            <Col style={{ marginLeft: "10px" }}>
              <h5 className="text-muted mt-2 mb-3">Selected Lead details</h5>
              <Row>
                <Form>
                  <Row>
                    <Col>
                      <HomeInput label="Lead Id" type="text" />
                      <HomeInput label="Business" type="text" />
                      <HomeInput label="Industry" type="text" />
                      <HomeInput label="Contact Person" type="text" />
                      <HomeInput label="Email" type="email" />
                      <HomeInput label="Phone" type="text" />
                      <HomeInput label="Region" type="text" />
                      <HomeInput label="Created by" type="text" />
                      <HomeInput label="Department" type="text" />
                    </Col>
                    <Col>
                      <HomeInput label="Service" type="text" />
                      <HomeInput label="Sub-Type" type="text" />
                      <HomeInput
                        label="More Info"
                        as="textarea"
                        row="3"
                        type="text"
                      />
                      <HomeInput label="Status" type="text" />
                      <HomeInput label="Assigned to" />
                      <HomeInput
                        label="Notes"
                        as="textarea"
                        row="5"
                        type="text"
                      />
                    </Col>
                  </Row>
                  <Button
                    className="btn-sm"
                    variant="success"
                    type="submit"
                    style={{ width: "160px" }}
                  >
                    Submit
                  </Button>
                </Form>
              </Row>
            </Col>
            <Col className="scroller table-container-closed">
              <h5 className="text-muted mt-2 mb-3">Your Closed Deals</h5>
              <Table striped bordered hover size="sm" className="table">
                <thead className="table-head">
                  <tr>
                    <th>Lead ID</th>
                    <th>Date</th>
                    <th>Business</th>
                    <th>Industy</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Service</th>
                    <th>Sub Type</th>
                    <th>Region</th>
                    <th>created_By</th>
                    <th>Department</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>{renderClosedLeads(leads.leads)}</tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};
