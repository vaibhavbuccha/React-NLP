import React from "react";
import Style from "./Body.module.css";

const Body = ({ children }) => {
  return <div className={Style.main}>{children}</div>;
};

export default Body;
