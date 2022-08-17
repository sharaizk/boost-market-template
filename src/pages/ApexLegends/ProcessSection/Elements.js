import styled from "styled-components";

export const ScreenContainer = styled.div`
  width: 100%;
  padding: 1rem 15vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  height: 90vh;
  max-height: 100%;
  margin-bottom: 10vh;
  @media screen and (max-width: 1440px) {
    height: 95vh;
  }
  @media screen and (max-width: 1024px) {
    padding: 1rem 7vw;
  }
  @media screen and (max-width: 768px) {
    padding: 0rem 5vw;
    height: 100%;
  }

  @media screen and (max-width: 480px) {
    height: 100%;
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
  font-size: 1.4rem;
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
    font-size: 2rem;
  }
`;

export const MiddleSection = styled.div`
  flex: 0.3;
  margin-top: 2vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const LevelContainer = styled.div`
  flex: 0.325;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Icon = styled.img`
  width: 100%;
`;

export const BottomSection = styled.div`
  flex: 0.575;
  background-color: ${(props) => props.theme.tertiary};
  width: 100%;
  padding: 6% 8%;
  border-radius: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 4vh;
  }
`;

export const LeftSection = styled.div`
  height: 100%;
  flex: 0.6;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

export const RightSection = styled.div`
  display: flex;
  height: 100%;
  flex: 0.4;

  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 4vh;
  }
`;

export const Tag2 = styled.label`
  font-size: 1.2rem;
  line-height: 1.25rem;
  color: ${(props) => props.theme.primary};
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
`;
export const Title2 = styled.h4`
  font-size: 2.25rem;
  line-height: 1.9rem;
  white-space: nowrap;
  color: ${(props) => props.theme.secondary};
  font-weight: 700;
  & span {
    color: ${(props) => props.theme.primary};
  }

  @media screen and (max-width: 1440px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const Detail = styled.p`
  color: #6c7179;
  font-size: 1.2rem;
  width: 40ch;
  font-weight: 400;
  @media screen and (max-width: 1440px) {
    font-size: 0.85rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const UnList = styled.ul`
  /* margin-left: 2%; */
  list-style: none;
`;

export const List = styled.li`
  color: #6c7179;
  font-size: 1.2em;

  font-weight: 400;
  ::before {
    content: "•";
    color: red;
    display: inline-block;
    width: 1em;
    font-size: 1.3rem;
  }
  @media screen and (max-width: 1440px) {
    font-size: 0.85em;
  }
`;

export const Btn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3.5% 12%;
  gap: 24px;
  outline: none;
  cursor: pointer;
  border: none;
  left: 0px;

  top: 338px;
  margin-top: 2vh;
  font-size: 1.2rem;
  color: #fff;
  background: linear-gradient(85.81deg, #d33b4b 6.43%, #f4495a 95.61%);
  border-radius: 20px;
  @media screen and (max-width: 1440px) {
    padding: 4% 15%;
  }
`;

export const Img = styled.img`
  width: 115%;
  height: auto;
`;
