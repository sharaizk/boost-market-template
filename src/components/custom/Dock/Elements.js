import styled from "styled-components";

export const DockContainer = styled.div`
  height: 85%;
  display: flex;
  width: 60px;
  justify-content: space-evenly;
  align-items: flex-start;
  border-radius: 0px 18px 18px 0px;
  background-color: #f0f2f5;
  padding: 0.5rem 0rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;

  @media screen and (max-width:1440px){
    height: 80%;
    width: 50px;
  }

  @media screen and (max-width: 786px) {
    left: ${({ $sidebar }) => ($sidebar ? "0%" : "-50px")};
    transition: left 0.2s ease;
    z-index: 2;
  }
  @media screen and (max-width: 480px) {
    height: 80%;
    width: 50px;
  }
`;

export const IconContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  position: relative;
  &::before {
    content: "";
    width: 6px;
    height: 75%;
    background-color: ${(props) =>
      props.$border ? props.theme.primary : "transparent"};
    border-radius: 0 100% 100% 0;
    position: absolute;
    top: 10%;
    left: 0;
    transition: background-color 0.2s ease;
  }
`;

export const IconImage = styled.img`
  height: 40px;
  width: 40px;
  margin-bottom: 0vh;
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

export const ToggleContainer = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    position: absolute;
    background-color: #f0f2f5;
    top: 45%;
    left: 100%;
    border-radius: 0 50% 50% 0;
    padding: 0.65rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    & svg {
      transform: ${({ $sidebar }) =>
        $sidebar ? "rotate(-180deg)" : "rotate(0deg)"};
      transform: all 0.2s ease;
    }
  }
`;
