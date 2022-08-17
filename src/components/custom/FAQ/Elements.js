import styled from "styled-components";

export const AccordianContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 1.25rem 1.3rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 25px;
  margin-bottom: 2vh;
  transition: all 0.1s;
  cursor: pointer;
  background-color: ${(props) =>
    props.isActive ? props.theme.secondary : props.theme.tertiary};
`;

export const AccordianTitle = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  color: ${(props) =>
    props.isActive ? props.theme.tertiary : props.theme.secondary};
  & p {
    max-width: 49ch;
  }
`;

export const AccordianContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: #bdc4cd;
  margin-top: 1.75vh;
  font-size: 0.65rem;
  line-height: 1.5rem;
`;
