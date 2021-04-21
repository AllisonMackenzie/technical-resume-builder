import React, { useContext } from "react";
import { useTheme } from "@emotion/react";
import Context from "../store/context";
import Layout from "../components/Layout";
import "../theme/global.css";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout>Hello</Layout>
    </React.Fragment>
  );
};

export default IndexPage;
