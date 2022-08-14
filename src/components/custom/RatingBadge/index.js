import React from "react";
import styled from "styled-components";
import Star from "../Star";
import { useTheme } from "styled-components";
const RatingBadge = ({ rating, isActive = false, width }) => {
  const theme = useTheme();
  const fill=!isActive ? theme.primary : theme.white
  return (
    <RatingContainer $width={width} isActive={isActive}>
      <Star fill={fill} amount={100} />
      <p>{rating}</p>
    </RatingContainer>
  );
};

export default RatingBadge;

const RatingContainer = styled.div`
  background-color: ${(props) =>
    props.isActive ? props.theme.primary : props.theme.secondary};
  font-family: "Poppins";
  color: ${(props) => props.theme.white};
  font-style: normal;
  width: ${(props) => props.$width || "30%"};
  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 0.5rem 1rem;
  border-radius: 24px;
  & p {
    margin-top: 1px;
  }

  @media screen and (max-width:480px){
    width: 30%;
  }
`;

// const Star = styled.img``;
