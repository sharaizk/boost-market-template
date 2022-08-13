import React from "react";
import { StatContainer, Title, Count } from "./Elements";
const Stat = ({ count, title }) => {
  return (
    <StatContainer>
      <Count>{count}</Count>
      <Title>{title}</Title>
    </StatContainer>
  );
};

export default Stat;
