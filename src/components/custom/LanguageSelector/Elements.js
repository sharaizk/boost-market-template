import styled from "styled-components";

export const SelectContainer = styled.div`
  height: 100%;
  flex: 0.4;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

export const SelectFlag = styled.img`
  max-width: 1.225rem;
  height: 1rem;
  border-radius: 50px;
  border: 1px solid #000000;
  margin-right: 5px;
  object-fit: cover;
`;

export const SelectLanguage = styled.label`
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 1.25rem;
  cursor: pointer;
`;

export const DropContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
