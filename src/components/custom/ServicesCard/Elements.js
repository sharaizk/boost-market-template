import styled from "styled-components";

export const ServiceContainer = styled.div`
  height: max-content;
  width: 100%;
  background-color: ${(props) =>
    props.isActive ? props.theme.secondary : props.theme.tertiary};
  border-radius: 48px;
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: -1;
`;

export const Title = styled.label`
  color: ${(props) =>
    props.isActive ? props.theme.white : props.theme.secondary};
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 25%;
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
