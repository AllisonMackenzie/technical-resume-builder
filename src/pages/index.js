import React, { useContext } from "react";
import { useTheme } from "@emotion/react";
import Context from "../store/context";
import "../theme/global.css";

const IndexPage = () => {
  const { state } = useContext(Context);
  const theme = useTheme();

  return (
    <React.Fragment>
      <div>Test</div>
    </React.Fragment>
  );
};

export default IndexPage;
