/**
 * accepts child tsx content and wraps in border
 */
import React from "react";

type Props = {
  children: React.ReactNode[] | React.ReactNode;
};

function Content(props: Props) {
  return (
    <div
      style={{
        height: "87vh",
        padding: "2vh 2vw",
        margin: "0vh 1vw 1vh",
        border: "solid 2px blue",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </div>
  );
}

export default Content;
