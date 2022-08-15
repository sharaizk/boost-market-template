import React from "react";
import {
  Card,
  LeftSection,
  RightSection,
  SVG,
  Img,
  Title,
  Description,
} from "./Elements";
const LevelCard = ({ isActive = true, src, title, description }) => {
  return (
    <Card isActive={isActive}>
      {isActive && (
        <SVG xmlns="http://www.w3.org/2000/svg" viewBox="100 250 600 216.5">
          <path
            d="M 0 250 L 800 250 Q 556 282 453 357 Q 404 394 348 357 Q 222 273 0 250"
            fill="#FC485A"
          />
        </SVG>
      )}
      <LeftSection>
        <Img src={src} alt="icon" />
      </LeftSection>
      <RightSection>
        <Title isActive={isActive}>{title}</Title>
        <Description isActive={isActive}>{description}</Description>
      </RightSection>
    </Card>
  );
};

export default LevelCard;
