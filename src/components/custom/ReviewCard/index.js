import React from "react";
import styled from "styled-components";
import { reviewlogo } from "utils/assets.config";
import Star from "../Star";
const ReviewCard = () => {
  return (
    <Container>
      <Logo src={reviewlogo} />
      <Title>Excellent!</Title>
      <Ratings>
        <Star fill="#fff" amount={100} />
        <Star fill="#fff" amount={100} />
        <Star fill="#fff" amount={100} />
        <Star fill="#fff" amount={100} />
        <Star fill="#fff" amount={75} />
      </Ratings>
      <StatContainer>
        <Section>
          <Stat>4.86</Stat>
          <StatTitle>AVERAGE</StatTitle>
        </Section>
        <Divider />
        <Section>
          <Stat>2066</Stat>
          <StatTitle>Reviews</StatTitle>
        </Section>
      </StatContainer>
    </Container>
  );
};

export default ReviewCard;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20% 10%;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 50px;
`;
const Logo = styled.img`
  width: 100%;
  @media screen and (max-width: 900px) {
    width: 50%;
    margin-bottom: 2vh;
  }
`;

const Title = styled.h4`
  flex: 0.2;
  font-family: "Poppins";
  font-weight: 500;
  text-align: center;
  font-size: 1.4rem;
  color: ${(props) => props.theme.white};
  flex: none;
  order: 0;
  flex-grow: 0;
  @media screen and (max-width: 900px) {
    margin-bottom: 2vh;
  }
`;

const Ratings = styled.div`
  display: flex;
  flex: 0.4;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 20px;
  gap: 6px;
  width: 60%;
  height: 30px;
  background: ${(props) => props.theme.primary};
  border-radius: 23px;
  flex: none;
  order: 1;
  flex-grow: 0;
  @media screen and (max-width: 900px) {
    margin-bottom: 2vh;
    width: 50%;
  }
`;

const StatContainer = styled.div`
  flex: 0.3;
  width: 100%;
  order: 4;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Section = styled.div`
  flex: 0.4;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Stat = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  text-align: center;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const StatTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 0.6rem;
  line-height: 1rem;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #bdc4cd;
  flex: none;
`;

const Divider = styled.div`
  height: 20px;
  width: 1px;
  background-color: ${(props) => props.theme.tertiary};
  opacity: 25%;
`;
