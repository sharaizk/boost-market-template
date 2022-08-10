import styled from "styled-components";

export const AvatarContainer = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${props=>props.theme.primary};
`;

export const AvatarImage = styled.img`
  vertical-align: middle;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
