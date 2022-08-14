import React from "react";
import styled from "styled-components";
function Star({ fill, amount }) {
  return (
    <SVG xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
      <defs>
        <linearGradient id={fill + amount}>
          <stop offset={`${amount}%`} stopColor={`${fill}`}></stop>
          <stop offset={`${100 - amount}%`} stopColor="rgba(255,255,255,0.25)"></stop>
        </linearGradient>
      </defs>
      <path
        fill={`url(#${fill + amount})`}
        d="M15.029 7.476L12.647 9.89l.562 3.41c.1.61-.14 1.225-.621 1.588a1.51 1.51 0 01-1.644.124L8 13.403l-2.944 1.61a1.51 1.51 0 01-1.644-.123 1.655 1.655 0 01-.621-1.589l.562-3.41L.971 7.476A1.67 1.67 0 01.576 5.81a1.58 1.58 0 011.26-1.106l3.292-.497L6.6 1.105A1.557 1.557 0 018 .2c.594 0 1.137.35 1.4.905l1.472 3.103 3.291.497a1.58 1.58 0 011.26 1.106 1.67 1.67 0 01-.394 1.665z"
      ></path>
    </SVG>
  );
}

export default Star;

const SVG = styled.svg`
  height: 1rem;
  width: 1rem;
`;
