import React, { useEffect, useState } from "react";
import { Row, Col, Button, Table, Form } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import "../../assets/css/bootstrap-icons/bootstrap-icons.css";
import "../../assets/css/Home.css";
import { getAllLeads, getSingleLead } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { HomeInput } from "../../components/UI/Input";

/**
 * @author
 * @function Home
 **/

export const Home = (props) => {
  const leads = useSelector((state) => state.leads);
  const singleLeadItem = useSelector((state) => state.singleLead.singleLead);
  const dispatch = useDispatch();

  // console.log(singleLeadItem);
  useEffect(() => {
    dispatch(getAllLeads());
  }, []);

  const test = (leads) => {
    const leadSingleItem = {};
    for (let lead of leads) {
      leadSingleItem.leadId = lead.leadId;
    }
    return leadSingleItem;
  };

  const renderLeads = (leads) => {
    let leadItem = [];
    for (let lead of leads) {
      leadItem.push(
        <tr key={lead._id}>
          <td>
            <a
              href=""
              id="lead"
              onClick={(e) => {
                e.preventDefault();
                dispatch(getSingleLead(getLeadId(lead.leadId)));
              }}
            >
              {lead.leadId}
            </a>
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

  const getLeadId = (item) => {
    const leadPair = {};
    leadPair.leadId = item;
    console.log(leadPair);
    return leadPair;
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
                      <HomeInput
                        label="Lead Id"
                        type="text"
                        value={singleLeadItem.leadId}
                        onChange={(e) => {}}
                      />
                      <HomeInput
                        label="Business"
                        type="text"
                        value={singleLeadItem.business_name}
                        onChange={(e) => {}}
                      />
                      <HomeInput
                        label="Industry"
                        type="text"
                        value={singleLeadItem.industry}
                        onChange={(e) => {}}
                      />
                      <HomeInput
                        label="Contact Person"
                        type="text"
                        value={singleLeadItem.contact_person}
                        onChange={(e) => {}}
                      />
                      <HomeInput
                        label="Email"
                        type="email"
                        value={singleLeadItem.contact_email}
                        onChange={(e) => {}}
                      />
                      <HomeInput
                        label="Phone"
                        type="text"
                        value={singleLeadItem.contact_number}
                        onChange={(e) => {}}
                      />
                      <HomeInput
                        label="Region"
                        type="text"
                        value={singleLeadItem.region}
                        onChange={(e) => {}}
                      />
                      <HomeInput
                        label="Created by"
                        type="text"
                        value={singleLeadItem.created_by}
                        onChange={(e) => {}}
                      />
                      <HomeInput
                        label="Department"
                        type="text"
                        value={singleLeadItem.creator_department}
                        onChange={(e) => {}}
                      />
                    </Col>
                    <Col>
                      <HomeInput
                        label="Service"
                        type="text"
                        value={singleLeadItem.service_type}
                        onChange={(e) => {}}
                      />
                      <HomeInput
                        label="Sub-Type"
                        type="text"
                        value={singleLeadItem.service_subtype}
                        onChange={(e) => {}}
                      />
                      <HomeInput
                        label="More Info"
                        as="textarea"
                        row="3"
                        type="text"
                        placeHolder="Capture discusion details with customer"
                        required
                      />
                      <HomeInput
                        label="Status"
                        type="text"
                        value={singleLeadItem.status}
                        onChange={(e) => {}}
                      />
                      <HomeInput
                        label="Assigned to"
                        value={singleLeadItem.sales_person}
                        onChange={(e) => {}}
                      />
                      <HomeInput
                        label="Notes"
                        as="textarea"
                        row="7"
                        type="text"
                        value={singleLeadItem.notes}
                        onChange={(e) => {}}
                      />
                    </Col>
                  </Row>
                  <Button
                    className="btn-sm"
                    variant="success"
                    type="submit"
                    style={{ width: "160px" }}
                  >
                    Close Lead
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
