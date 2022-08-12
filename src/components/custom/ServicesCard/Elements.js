import styled from "styled-components";

export const ServiceContainer = styled.div`
  height: max-content;
  cursor: pointer !important;
  width: 100%;
  background-color: ${(props) =>
    props.isActive ? props.theme.secondary : props.theme.tertiary};
  border-radius: 48px;
  padding: 5rem 0rem;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: -1;
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

export const Title = styled.label`
  color: ${(props) =>
    props.isActive ? props.theme.white : props.theme.secondary};
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 25%;
  @media screen and (max-width: 1440px) {
    font-size: 1rem;
  }
`;

export const Image = styled.img`
  width: 50%;
  height: auto;
`;

export const PopularContainer = styled.div`
  position: absolute;
  background-color: #ffd8da;
  color: ${(props) => props.theme.primary};
  font-weight: 600;
  padding: 5px 12px;
  border-radius: 20px;
  top: -3%;
  font-size: 0.85rem;
  z-index: 1000 !important;
`;
