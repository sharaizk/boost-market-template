import React from "react";
import {
  AccordianContainer,
  AccordianTitle,
  AccordianContent,
} from "./Elements";
import { ImPlus, ImMinus } from "react-icons/im";
import { useTheme } from "styled-components";
const Accordian = ({ title, content, isActive, onClick }) => {
  const theme = useTheme();
  return (
    <>
      <AccordianContainer isActive={isActive} onClick={() => onClick(title)}>
        <AccordianTitle isActive={isActive}>
          <p>{title}</p>
          {!isActive ? (
            <ImPlus color={theme.primary} />
          ) : (
            <ImMinus color={theme.primary} />
          )}
        </AccordianTitle>
        {isActive && <AccordianContent>{content}</AccordianContent>}
      </AccordianContainer>
    </>
  );
};

export default Accordian;
