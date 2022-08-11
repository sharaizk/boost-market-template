import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem 0 0rem 15vw;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  height: 60vh;
  margin-bottom: 10vh;
  @media screen and (max-width: 1024px) {
    padding: 1rem 7vw;
  }
  @media screen and (max-width: 768px) {
    padding: 0rem 5vw;
  }
`;

export const WhatWeOffer = styled.label`
  font-size: 1.25rem;
  line-height: 1.25rem;
  color: ${(props) => props.theme.primary};
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
`;

export const ServicesTag = styled.h4`
  font-size: 2.9rem;
  margin-top: 1vh;
  color: ${(props) => props.theme.secondary};
  font-weight: 700;
  & span {
    color: ${(props) => props.theme.primary};
  }

  @media screen and (max-width: 380px) {
    font-size: 2.5rem;
  }
`;

export const CardsContainer = styled.div`
  flex: 0.95;
  width: 100%;
  margin-top: 4.5vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0;
`;