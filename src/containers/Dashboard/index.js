import React from "react";
import { Layout } from "../../components/Layout";
import { Row, Col, Button, Table, Form } from "react-bootstrap";
import {
  BarChartLineFill,
  BookmarkCheck,
  ClipboardX,
  Folder2Open,
  FolderCheck,
  ListCheck,
  Receipt,
} from "react-bootstrap-icons";
import "../../assets/css/Dashboard.css";
import { StatCard } from "../../components/UI/StatCards";

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
        <Row>
          <StatCard
            id="total-card"
            number="300"
            title="Total Leads"
            icon={<Receipt className="m-0" color="white" size={30} />}
          />
          <StatCard
            id="open-card"
            number="100"
            percent="(30%)"
            title="Open Leads"
            icon={<Folder2Open className="m-0" color="white" size={30} />}
          />
          <StatCard
            id="assigned-card"
            number="50"
            percent="(17%)"
            title="Assigned Leads"
            icon={<ListCheck className="m-0" color="white" size={30} />}
          />
          <StatCard
            id="closed-card"
            number="130"
            percent="(43%)"
            title="Closed Leads"
            icon={<FolderCheck className="m-0" color="white" size={30} />}
          />
          <StatCard
            id="disqualify-card"
            number="20"
            percent="(7%)"
            title="Disqualified"
            icon={<ClipboardX className="m-0" color="white" size={30} />}
          />
        </Row>

        <div
          style={{
            borderTop: "1px solid #efefef",
            margin: "10px 20px 0px 20px",
          }}
        ></div>
      </div>
    </Layout>
  );
};
