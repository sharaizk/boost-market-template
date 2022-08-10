import styled from "styled-components";

export const BadgeContainer = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const BadgeNoti = styled.sup`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(25%, -30%);
  transform-origin: 100% 0%;
  background-color: red;
  z-index: auto;
  min-width: 10px;
  height: 12px;
  padding: 1px 5px;
  color: #fff;
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  white-space: nowrap;
  text-align: center;
  background: ${props=>props.theme.primary};
  border-radius: 10px;
`;
