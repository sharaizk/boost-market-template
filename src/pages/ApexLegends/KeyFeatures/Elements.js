import styled from "styled-components";

export const ScreenContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 45vh;
  margin-bottom: 20vh;
  @media screen and (max-width: 1440px) {
    height: 55vh;
  }
  @media screen and (max-width: 1400px) {
    height: 50vh;
  }
  @media screen and (max-width: 1024px) {
    padding: 1rem 7vw;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 0rem 5vw;
    flex-direction: column;
  }
`;

export const FeaturesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6% 7%;
  background-color: ${(props) => props.theme.tertiary};
  border-radius: 25px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10% 7%;
  }
`;

export const LeftSection = styled.div`
  flex: 0.5;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

export const RightSection = styled.div`
  flex: 0.36;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;

  @media screen and (max-width: 1440px) {
    flex: 0.4;
  }
  @media screen and (max-width: 1300px) {
    flex: 0.45;
  }
  @media screen and (max-width:768px){
    flex-direction: column;
    margin-top: 2vh;
    width: 100%;
  }
`;
export const WhatWeOffer = styled.label`
  font-size: 1.25rem;
  line-height: 1.25rem;
  color: ${(props) => props.theme.primary};
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  @media screen and (max-width: 1440px) {
    font-size: 0.9rem;
  }
`;

export const FeaturesTag = styled.h4`
  font-size: 2.9rem;
  white-space: nowrap;
  color: ${(props) => props.theme.secondary};
  font-weight: 700;
  & span {
    color: ${(props) => props.theme.primary};
  }

  @media screen and (max-width: 1440px) {
    font-size: 2.25rem;
  }
  @media screen and (max-width: 380px) {
    font-size: 2rem;
  }
`;

export const FeaturesDescription = styled.p`
  width: 100%;
  color: ${(props) => props.theme.secondary};
`;

export const TryBtn = styled.button`
  margin-top: 2vh;
  background: linear-gradient(85.81deg, #d33b4b 6.43%, #f4495a 95.61%);
  outline: none;
  border: none;
  border-radius: 10px;
  padding: 1rem 3rem;
  color: ${(props) => props.theme.white};
  font-weight: 600;
`;

export const FeatureCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex: 0.5;
  position: absolute;
  flex-direction: column;
  top: ${(props) => props.top};
  left: ${(props) => `${props.left}%` || "0%"};
  @media screen and (max-width:768px){
    position: relative;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`;
