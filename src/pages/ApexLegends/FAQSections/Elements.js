import styled from "styled-components";

export const ScreenContainer = styled.div`
  width: 100%;
  padding: 1rem 15vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  height: 100vh;
  min-height: 110vh;
  max-height: 100%;

  margin-bottom: 10vh;
  transition: all 0.3s ease;
  @media screen and (max-width: 1440px) {
    height: 95vh;
    min-height: 110vh;
  }
  @media screen and (max-width: 1024px) {
    padding: 1rem 7vw;
  }
  @media screen and (max-width: 768px) {
    padding: 0rem 5vw;
    height: 100%;
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    height: 100%;
  }
`;

export const LeftSection = styled.div`
  height: 100%;
  width: 100%;
  flex: 0.25;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width:768px) {
    flex-direction: row;
    margin-bottom: 2vh;
  }
`;
export const RightSection = styled.div`
  height: 100%;
  width: 100%;
  flex: 0.7;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;
export const TitleSection = styled.div`
  width: 100%;
  height: 100%;
  flex: 0.1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

`;

export const ImageSection = styled.div`
  width: 100%;
  height: 100%;
  flex: 0.7;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  vertical-align: middle;
`;

export const Tag = styled.label`
  font-size: 0.9rem;
  line-height: 1.25rem;
  color: ${(props) => props.theme.primary};
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  text-transform: capitalize;
  margin-bottom: 2vh;
  @media screen and (max-width: 1440px) {
    font-size: 0.8rem;
  }
`;

export const Title = styled.h4`
  font-size: 2.9rem;
  margin-top: 1vh;
  color: ${(props) => props.theme.secondary};
  font-weight: 700;
  & span {
    color: ${(props) => props.theme.primary};
  }

  @media screen and (max-width: 1440px) {
    font-size: 2.25rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
