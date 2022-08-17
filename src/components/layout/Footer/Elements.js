import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 90vh;
  width: 100%;
  padding: 10% 15vw 0 15vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 40px 40px 0 0;
  position: relative;
  margin-top: 50vh;
  @media screen and (max-width: 1024px) {
    padding: 15% 1vw 0 6vw;
  }
  @media screen and (max-width: 768px) {
    padding: 20% 5vw 10% 5vw;
    height: 100%;
    max-height: 100%;
  }
  @media screen and (max-width: 480px) {
    padding: 35% 5vw 15% 5vw;
  }
`;

export const BannerContainer = styled.div`
  background: linear-gradient(85.81deg, #e62546 0%, #ff3254 95.61%);
  height: 38%;
  width: 70%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  overflow: hidden;
  z-index: 1;
  top: 0%;
  left: 15%;

  transform: translate(0%, -60%);
  &::before {
    content: "";
    background-image: ${(props) => `url(${props.$image})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0%;
    overflow: hidden;
    z-index: -1;
  }
  @media screen and (max-width: 768px) {
    height: 25%;
  }
  @media screen and (max-width: 480px) {
    border-radius: 25px;
    height: 15%;
  }
`;

export const CTATitle = styled.label`
  font-style: normal;
  font-weight: 300;
  margin-bottom: 1.2rem;
  font-size: 1.05rem;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CTAsub = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 900;
  font-size: 4rem;
  line-height: 3.5rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-bottom: 2px solid #fff;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const TopContainer = styled.div`
  flex: 0.2;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 5vh;
  }
`;

export const Brand = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 1024px) and (min-width: 780px) {
    flex: 0.17;
  }
  @media screen and (max-width: 768px) {
    align-self: flex-start;
  }
`;
export const Logo = styled.img`
  width: 22.5%;
  height: auto;
  margin-right: 1vw;

  @media screen and (max-width: 480px) {
    width: 25%;
    margin-right: 3vw;
  }
`;
export const BrandTitle = styled.h2`
  font-size: 800;
  font-family: "Hellix-Bold" !important;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-size: 1.2rem;
  color: ${(props) => props.theme.white};
  line-height: 1.2rem;
  text-align: justify;
  & span {
    color: ${(props) => props.theme.primary};
    letter-spacing: 3px;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1rem;
    & span {
      font-size: 1.175rem;
      line-height: 1.15rem;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    line-height: 1rem;
    & span {
      font-size: 1.2rem;
      line-height: 1.2rem;
    }
  }
`;

export const PaymentControllers = styled.div`
  flex: 0.6;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const PaymentIcon = styled.img`
  width: ${(props) => props.$width};
  height: auto;
  margin-right: ${(props) => props.mr};
`;

export const SecondContainer = styled.div`
  flex: 0.3;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 5vh;
  }
`;

export const ThirdContainer = styled.div`
  flex: 0.4;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LinksContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: ${(props) => props.fl || 0.15};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const GamesContainer = styled.div`
  height: 100%;
  flex: 0.7;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  align-self: flex-end;
  @media screen and (max-width: 768px) {
    align-self: flex-start;
  }
`;

export const Games = styled.div`
  flex: 0.4;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const GameLogo = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 0.5vw;
  border-radius: 25%;
  @media screen and (max-width: 1440px) {
    height: 30px;
    width: 30px;
  }
  @media screen and (max-width: 480px) {
    height: 30px;
    width: 30px;
  }
  @media screen and (max-width: 380px) {
    height: 25px;
    width: 25px;
  }
`;

export const LinkTitle = styled.h6`
  color: ${(props) => props.theme.primary};
  font-size: 1rem;
  margin-bottom: 2vh;
  @media screen and (max-width: 1440px) {
    font-size: 0.8rem;
  }
`;

export const Link = styled.label`
  color: #bdc4cd;
  font-size: 0.9rem;

  margin-bottom: 0.75vh;
  opacity: 75%;
  @media screen and (max-width: 1440px) {
    font-size: 0.7rem;
  }
`;

export const Disclaimer = styled.div`
  font-size: 0.825rem;
  color: #bdc4cd;
  opacity: 75%;
  border: 1px solid #2d2e33;
  border-radius: 24px;

  padding: 1.5rem;
  @media screen and (max-width: 1440px) {
    font-size: 0.7rem;
    padding: 1rem;
  }
`;

export const Copyright = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 0.825rem;
  line-height: 20px;
  text-align: right;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #bdc4cd;
  margin-bottom: 2vh;
  @media screen and (max-width: 1440px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 0;

    margin-top: 2vh;
  }
`;
