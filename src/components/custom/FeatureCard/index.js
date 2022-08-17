import React from "react";
import styled from "styled-components";
const FeatureCard = () => {
  return <Container>FeatureCards</Container>;
};

export default FeatureCard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  width: 180px;
  height: 210px;
  border-radius: 24px;
  padding: 1rem;
  top: -50%;
  left: -10%;
  background-color: ${(props) => props.theme.secondary};
`;
