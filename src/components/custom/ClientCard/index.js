import React from "react";
import styled from "styled-components";
import { qoute } from "utils/assets.config";
import RatingBadge from "../RatingBadge";
import { star2 } from "utils/assets.config";
const ClientCard = ({ title, review, rating }) => {
  return (
    <CardContainer>
      <Title qoute={qoute}>{title}</Title>
      <Review>{review}</Review>
      <RatingBadge star={star2} rating={rating} width={'18%'} />
    </CardContainer>
  );
};

export default ClientCard;

const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  flex-direction: column;
`;

const Title = styled.h4`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 44px;
  position: relative;
  color: ${(props) => props.theme.primary};
  margin-bottom: 5vh;

  &::before {
    content: "";
    background-image: ${(props) => `url(${props.qoute})`};
    background-size: contain;
    background-position: left center;
    background-repeat: no-repeat;
    position: absolute;
    top: -20%;
    right: 0px;
    bottom: 0px;
    left: -32.5%;
    overflow: hidden;
    z-index: -1;
  }
`;

const Review = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 2rem;
  text-align: left;
  width: 40ch;
  margin-bottom: 5vh;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
  }
`;
