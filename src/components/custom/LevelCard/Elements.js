import styled from "styled-components";

export const Card = styled.div`
  flex: 0.31;
  height: 100%;
  cursor: pointer;
  background-color: ${(props) =>
    props.isActive ? props.theme.secondary : props.theme.tertiary};
  border-radius: 42px;
  /* margin-bottom: 20vh; */
  box-shadow: ${(props) =>
    props.isActive ? `0px 8px 0px 0px ${props.theme.primary}` : "none"};
  -webkit-box-shadow: ${(props) =>
    props.isActive ? `0px 8px 0px 0px ${props.theme.primary}` : "none"};
  -moz-box-shadow: ${(props) =>
    props.isActive ? `0px 8px 0px 0px ${props.theme.primary}` : "none"};
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.25rem 2rem;

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isActive ? "flex" : "none")};
    flex: 1;
  }
`;

export const SVG = styled.svg`
  fill: ${(props) => props.theme.primary};
  z-index: 1;
  height: 16px;
  position: absolute;
  top: 104.5%;
  left: 50%;
  transform: translate(-50%, 0%);
`;

export const LeftSection = styled.div`
  flex: 0.15;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const RightSection = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Title = styled.label`
  flex: 0.3;
  margin-bottom: 1.5vh;
  color: ${(props) =>
    props.isActive ? props.theme.white : props.theme.secondary};
`;

export const Description = styled.p`
  flex: 0.7;
  color: ${(props) =>
    props.isActive ? props.theme.white : props.theme.secondary};
  font-size: 0.875rem;
  opacity: 50%;
`;
