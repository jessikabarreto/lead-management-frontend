import React from "react";
import { Layout } from "../../components/Layout";
import { Row, Col } from "react-bootstrap";
import {
  ClipboardX,
  Folder2Open,
  FolderCheck,
  ListCheck,
  Receipt,
} from "react-bootstrap-icons";
import "../../assets/css/Dashboard.css";
import { StatCard } from "../../components/UI/StatCards";
import {
  Chart,
  RegionChart,
  StatusChart,
  DateChart,
  ServiceSubChart,
} from "../../components/Charts";
import {
  TotalLeadsCount,
  OpenLeadsCount,
  OpenPercent,
  AssignLeadsCount,
  AssignPercent,
  ClosedLeadsCount,
  ClosedPercent,
  DisqualifyLeadsCount,
  DisqualifyPercent,
} from "../../components/Logic/Dashboard";

/**
 * @author
 * @function
 **/

export const Dashboard = (props) => {
  return (
    <Layout>
      <div
        className=""
        style={{
          borderTop: "1px solid #efefef",
          marginLeft: "10px",
          marginRight: "20px",
        }}
      >
        <h1 className="mt-3 text-muted">Dashboard</h1>
        <Row className="mb-4">
          <StatCard
            id="total-card"
            number={<TotalLeadsCount />}
            title="Total Leads"
            icon={<Receipt className="m-0" color="white" size={30} />}
          />
          <StatCard
            id="open-card"
            number={<OpenLeadsCount />}
            percent={<OpenPercent />}
            title="Open Leads"
            icon={<Folder2Open className="m-0" color="white" size={30} />}
          />
          <StatCard
            id="assigned-card"
            number={<AssignLeadsCount />}
            percent={<AssignPercent />}
            title="Assigned Leads"
            icon={<ListCheck className="m-0" color="white" size={30} />}
          />
          <StatCard
            id="closed-card"
            number={<ClosedLeadsCount />}
            percent={<ClosedPercent />}
            title="Closed Leads"
            icon={<FolderCheck className="m-0" color="white" size={30} />}
          />
          <StatCard
            id="disqualify-card"
            number={<DisqualifyLeadsCount />}
            percent={<DisqualifyPercent />}
            title="Disqualified"
            icon={<ClipboardX className="m-0" color="white" size={30} />}
          />
        </Row>

        <div
          style={{
            borderTop: "1px solid #efefef",
            margin: "10px 20px 0px 20px",
          }}
        >
          <Row className="mt-3">
            <Col className="mb-3 col-7">
              <Row>
                <Col className="mb-3 col-5">
                  <Chart />
                </Col>
                <Col className="mb-3 ms-5 col-5">
                  <RegionChart />
                </Col>
              </Row>
            </Col>
            <Col className="mb-3 col-5">
              <StatusChart />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="m-3">
              <ServiceSubChart />
            </Col>
            <Col className="m-3">
              <DateChart />
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};
