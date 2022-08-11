import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem 15vw;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: calc(100vh - 30vh);
  position: relative;
  @media screen and (max-width: 1024px) {
    padding: 1rem 7vw;
  }
  @media screen and (max-width: 768px) {
    padding: 0rem 5vw;
  }
`;

export const BannerContainer = styled.div`
  background-color: ${(props) => props.theme.secondary};
  height: 80%;
  width: 100%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    background-image: ${(props) => `url(${props.$image})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center right;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0%;
    overflow: hidden;
    z-index: 0;
  }

  @media screen and (max-width: 1024px) {
    &::before {
      background-position: center;
      left: 15%;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    &::before {
      top: 35%;
      background-position: right bottom;
    }
  }

  @media screen and (max-width: 480px) {
    border-radius: 25px;
    &::before {
      top: 50%;
      background-position: right bottom;
    }
  }
`;

export const RightSection = styled.div`
  height: 100%;
  flex: 0.55;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 6rem;
  @media screen and (max-width: 1440px) {
    padding: 0 3rem;
  }
  @media screen and (max-width: 900px) {
    padding: 1rem 3rem;
  }
`;

export const Title = styled.h3`
  font-size: 4rem;
  color: ${(props) => props.theme.white};
  white-space: nowrap;
  margin-bottom: 2vh;

  @media screen and (max-width: 1440px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.75rem;
  }
  @media screen and (max-width: 360px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  color: ${(props) => props.theme.white};
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 4vh;
  width: 48ch;
  max-width: 100%;
  @media screen and (max-width: 1440px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    text-align: justify;
    width: 100%;
  }
`;
export const LeftSection = styled.div`
  height: 100%;
  flex: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  padding: 1.5vh 5vw;
  border-radius: 12px;
  background-color: #d33b4b;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  font-family: "Poppins";
  line-height: 24px;
  box-shadow: 0px 3px 0px 2px rgba(183, 37, 52, 1);
  -webkit-box-shadow: 0px 3px 0px 2px rgba(183, 37, 52, 1);
  -moz-box-shadow: 0px 3px 0px 2px rgba(183, 37, 52, 1);
  margin-bottom: 6vh;
`;
export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & svg {
    margin-right: 2vw;
  }
`;

export const LifeLineImage=styled.img`
width: 115%;
height: auto;
margin-top:40%;
margin-right: 30%;
`

