import React from "react";
import styled from "styled-components";
const FeatureCard = ({ title, icon, description }) => {
  return (
    <Container>
      <Icon src={icon} />
      <DescriptionContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </DescriptionContainer>
    </Container>
  );
};

export default FeatureCard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  padding: 5vh 1.75vw;
  margin-bottom: 3vh;
  background-color: ${(props) => props.theme.secondary};
  @media screen and (max-width:768px) {
    flex-direction: row;
    padding: 1rem 2rem;
    justify-content: space-between;
  }
`;

const Icon = styled.img`
  width: 25%;
  flex: 0.3;
  margin-bottom: 2vh;
  @media screen and (max-width:768px) {
    width: 15%;
    flex: 0.1;
  }
`;

export const DescriptionContainer = styled.div`
  height: 100%;
  flex: 0.5;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width:768px) {
    width:100%!important; 
    flex: 0.8;
  }
`;

const Title = styled.label`
  color: ${(props) => props.theme.white};
  font-weight: 500;
  font-size: 1rem;
  flex: 0.3;
  margin-bottom: 2vh;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.white};
  color: #bdc4cd;
  font-size: 0.8rem;
  opacity: 75%;
  width: 19ch;
  @media screen and (max-width:768px) {
    width: 100%;
  }
`;
