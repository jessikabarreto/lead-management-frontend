import React from "react";
import { Layout } from "../../components/Layout";

/**
 * @author
 * @function
 **/

export const Dashboard = (props) => {
  return (
    <Layout>
      <div
        className="text-center home"
        style={{ borderTop: "1px solid #efefef" }}
      >
        <h1>Dashboard</h1>
      </div>
    </Layout>
  );
};
