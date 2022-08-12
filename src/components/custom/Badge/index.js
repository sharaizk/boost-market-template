import React from "react";
import { BadgeContainer, BadgeNoti } from "./Elements";
const Badge = ({ children, count, onClick, top = "0", left = "0", bg }) => {
  return (
    <BadgeContainer onClick={onClick}>
      {children}
      <BadgeNoti $top={top} $left={left} bg={bg}>
        {count}
      </BadgeNoti>
    </BadgeContainer>
  );
};

export default Badge;
