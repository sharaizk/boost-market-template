import styled from "styled-components";
import { Link } from "react-router-dom";

export const TopHeader = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.tertiary};
  padding: 0.5rem 17vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 0.5rem 5vw;
  }
`;

export const Booster = styled.div`
  /* flex: 0.1; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const BoosterImg = styled.img`
  width: 12.5%;
  height: auto;
  margin-right: 5px;
`;

export const BoosterCount = styled.label`
  font-size: 0.8rem;
  line-height: 0.9rem;
  font-weight: 500;
  & span {
    color: ${(props) => props.theme.primary};
  }
`;

export const LinksContainer = styled.div`
  height: 100%;
  flex: 0.3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex: 0.4;
  }
  @media screen and (max-width: 480px) {
    flex: 0.9;
  }
  @media screen and (max-width: 380px) {
    flex: 1;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 0.8rem;
  line-height: 1.25rem;
  color: ${(props) => props.theme.secondary};
  text-decoration: none;
  white-space: nowrap;
  font-weight: 500;
`;
