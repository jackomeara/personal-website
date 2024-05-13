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
        margin: "0vh 1vw 1vh",
        boxShadow: "0px 4px 5px 2px gray",
      }}
      className="border-black border-4 flex-1"
    >
      {props.children}
    </div>
  );
}

export default Content;
