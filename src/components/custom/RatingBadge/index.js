import React from "react";
import styled from "styled-components";
const RatingBadge = ({ star, rating, isActive = false }) => {
  return (
    <RatingContainer isActive={isActive}>
      <Star src={star} alt="star" />
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
  width: 25%;
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
`;

const Star = styled.img``;
