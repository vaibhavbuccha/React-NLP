import React from "react";
import { Typography } from "antd";
import "./index.css";
const Title = () => {
  const { Title } = Typography;
  return (
    <div className="flex">
      <Title italic={true} className="white-color">
        Lets{" "}
      </Title>{" "}
      &nbsp;&nbsp;
      <Title mark={true}>learn</Title>
      &nbsp;&nbsp;
      <Title underline={true} className="white-color">
        something!
      </Title>
    </div>
  );
};

export default Title;
