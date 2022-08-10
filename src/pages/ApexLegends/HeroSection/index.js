import React from "react";
import {
  HeroContainer,
  BannerContainer,
  RightSection,
  LeftSection,
  Title,
  Description,
  Button,
  IconsContainer,
  LifeLineImage
} from "./Elements";
import { flame1 } from "utils/assets.config";
import { FaPlaystation, FaXbox, FaWindows, FaMobileAlt } from "react-icons/fa";
import { lifeLine } from "utils/assets.config";
const HeroSection = () => {
  return (
    <HeroContainer>
      <BannerContainer $image={flame1}>
        <RightSection>
          <Title>Apex Legends Boost</Title>
          <Description>
            Boosting Market is the most reliable way to boost your account in
            Apex. We offer a variety of services in Apex from rank boost to
            leveling
          </Description>
          <Button>Boost Now!</Button>
          <IconsContainer>
            <FaPlaystation size={35} color="#51535A" />
            <FaXbox size={30} color="#51535A"/>
            <FaWindows size={33} color="#51535A"/>
            <FaMobileAlt size={30} color="#51535A"/>
          </IconsContainer>
        </RightSection>
        <LeftSection>
          <LifeLineImage src={lifeLine} alt="lifeline"/>
        </LeftSection>
      </BannerContainer>
    </HeroContainer>
  );
};

export default HeroSection;
