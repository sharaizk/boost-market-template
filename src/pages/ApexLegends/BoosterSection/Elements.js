import styled from "styled-components";

export const ScreenContainer = styled.div`
  width: 100%;
  padding: 1rem 15vw;
  display: flex;
  justify-content: space-between;
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

  @media screen and (max-width: 480px) {
    height: 70vh;
  }
`;

export const TopSection = styled.div`
  flex: 0.2;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BottomSection = styled.div`
  flex: 0.7;
  width: 100%;
`;

export const TitleContainer = styled.div`
  flex: 0.7;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const Tag = styled.label`
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

export const TitleTag = styled.h4`
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
  @media screen and (max-width: 380px) {
    font-size: 2.5rem;
  }
`;

export const BtnContainer = styled.div`
  flex: 0.3;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled.button`
  outline: none;
  background-color: transparent;
  border-radius: 18px;
  padding: 1rem 2.5rem;
  border: 2px solid ${(props) => props.theme.primary};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;

`;
