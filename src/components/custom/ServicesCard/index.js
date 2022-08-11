import React from "react";
import { ServiceContainer, Title, Image, PopularContainer } from "./Elements";
import ReactHtmlParser from "react-html-parser";
const ServicesCard = ({ title, isPopular, image, isActive }) => {
  return (
    <ServiceContainer isActive={isActive}>
      <Title isActive={isActive}>{ReactHtmlParser(title)}</Title>
      <Image src={image} alt="card image" />
      {isPopular && <PopularContainer>Most Popular</PopularContainer>}
    </ServiceContainer>
  );
};

export default ServicesCard;
