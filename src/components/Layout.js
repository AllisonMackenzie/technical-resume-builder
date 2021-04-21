import React, { useContext } from "react";
import { Global, css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import NavBar from "../components/NavBar";
import Context from "../store/context";

const Layout = ({ children }) => {
  const { state } = useContext(Context);

  const theme = useTheme();

  return (
    <React.Fragment>
      <div>
        <Global
          styles={css`
            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }

            body {
              height: 100vh;
              font-family: "Hind", sans-serif;
              background-color: ${state.isDark
                ? theme.dark.background
                : theme.light.background};
            }

            h1 {
              color: ${state.isDark ? theme.dark.font : theme.light.font};
            }
          `}
        />
        {children}
      </div>
      <NavBar />
    </React.Fragment>
  );
};

export default Layout;
