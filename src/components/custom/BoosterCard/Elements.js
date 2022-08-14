import styled from "styled-components";

export const BoosterCardContainer = styled.div`
  height: max-content;
  cursor: pointer !important;
  width: 100%;
  background-color: ${(props) =>
    props.isActive ? props.theme.secondary : props.theme.tertiary};
  border-radius: 48px;
  padding: 3rem 0rem;
  display: flex;
  cursor: pointer;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: -1;
  margin-bottom: 20vh;
  box-shadow: ${(props) =>
    props.isActive ? `0px 8px 0px 0px ${props.theme.primary}` : "none"};
  -webkit-box-shadow: ${(props) =>
    props.isActive ? `0px 8px 0px 0px ${props.theme.primary}` : "none"};
  -moz-box-shadow: ${(props) =>
    props.isActive ? `0px 8px 0px 0px ${props.theme.primary}` : "none"};
  @media screen and (max-width: 1440px) {
    padding: 2.25rem 0rem;
  }
`;

export const BoosterTag = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) =>
    props.isActive ? props.theme.primary : props.theme.secondary};
  color: ${(props) => props.theme.white};
  font-weight: 600;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding: 5px 15px;
  text-transform: uppercase;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 50%;
  margin-bottom: 2vh;
  height: auto;
`;
export const Title = styled.h4`
  color: ${(props) =>
    props.isActive ? props.theme.white : props.theme.secondary};
  font-size: 1.5rem;
  margin-bottom: 2vh;
`;
export const ChildsContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2vh;
`;

export const Flag = styled.img`
  &:not(:last-child) {
    margin-right: 5px;
  }
`;
export const Legend = styled.div`
  width: 2.5vw;
  height: 6vh;
  background-color: ${(props) => (props.isActive ? " #2D2E33" : "#D7DADE")};
  padding: 5px 0 0 5px;
  border-radius: 10px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  margin-bottom: 2vh;

  &::before {
    content: "";
    background-image: ${(props) => `url(${props.bg})`};
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 12%;
    right: 0px;
    bottom: 0px;
    left: 0%;
    overflow: hidden;
    z-index: 1;
  }
  &:not(:last-child) {
    margin-right: 7.5px;
  }
  @media screen and (max-width: 768px) {
    width: 5vw;
  }
  @media screen and (max-width: 480px) {
    width: 8vw;
  }
`;

export const Reviews = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 2vh;
  color: ${(props) =>
    !props.isActive ? props.theme.secondary : props.theme.white};
`;
