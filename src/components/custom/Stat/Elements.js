import styled from "styled-components";

export const StatContainer = styled.div`
  height: 100%;
  flex: 0.3;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const Count = styled.h5`
  font-size: 2.75rem;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
    white-space: nowrap;
  }
  @media screen and (max-width: 380px) {
    font-size: 1.3rem;
    white-space: nowrap;
  }
`;

export const Title = styled.label`
  color: #6c7179;
  font-size: 0.9rem;
  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 380px) {
    font-size: 0.6rem;
    white-space: nowrap;
  }
`;
