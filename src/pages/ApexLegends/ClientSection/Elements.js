import styled from "styled-components";

export const ScreenContainer = styled.div`
  width: 100%;
  padding: 1rem 0 0rem 15vw;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  height: 70vh;
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
  flex: 0.125;
  padding: 0rem 15vw 0 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
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

export const Title = styled.h4`
  font-size: 2.9rem;
  line-height: 2.9rem;
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
    font-size: 2.5rem;
  }
`;