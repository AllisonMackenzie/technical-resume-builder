import React, { useContext } from "react";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import Context from "../store/context";

const Toggle = () => {
  const { state, dispatch } = useContext(Context);
  const theme = useTheme();

  return (
    <React.Fragment>
      <input
        onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
        type="checkbox"
        defaultChecked={state.isDark ? true : false}
        id="switch"
        css={css`
          &[type="checkbox"] {
            height: 0;
            width: 0;
            visibility: hidden;
          }

          &:checked + label {
            background: ${theme.light.font};
          }

          &:checked + label::after {
            left: calc(100% - 5px);
            transform: translateX(-100%);
          }
        `}
      />
      <label
        htmlFor="switch"
        css={css`
          cursor: pointer;
          text-indent: -9999px;
          width: 62.5px;
          height: 25px;
          background: ${theme.light.font};
          display: block;
          border-radius: 100px;
          position: relative;

          &::after {
            content: "";
            position: absolute;
            top: 1px;
            left: 5px;
            width: 22.5px;
            height: 22.5px;
            background: #fff;
            border-radius: 90px;
            transition: 0.3s;
            background-color: ${theme.dark.font};
          }

          &:active::after {
            width: 30px;
          }
        `}
      ></label>
    </React.Fragment>
  );
};

export default Toggle;
