import styled from "styled-components";
export const OctaneContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem 15vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  height: 47vh;
  margin-bottom: 10vh;
  @media screen and (max-width: 1440px) {
    height: 50vh;
  }
  @media screen and (max-width: 1400px) {
    height: 38vh;
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

export const LeftSection = styled.div`
  flex: 0.3;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const OctaneImg = styled.img`
  max-width: 100%;
  height: auto;
`;

export const RightSection = styled.div`
  flex: 0.6;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5% 0;
  align-items: flex-start;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 1.75rem;
  font-weight: 700;
  & span {
    color: ${(props) => props.theme.primary};
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 2vh;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Stats = styled.div`
  flex: 0.2;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-bottom: 2vh;
  }
`;

export const RatingContainer = styled.div`
  flex: 0.2;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TrustPilot = styled.img`
  width: 17%;
  vertical-align: middle;
  margin-right: 5px;
`;
