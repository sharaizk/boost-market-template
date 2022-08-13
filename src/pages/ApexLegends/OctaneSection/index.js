import React from "react";
import {
  OctaneContainer,
  LeftSection,
  RightSection,
  OctaneImg,
  Title,
  Stats,
  RatingContainer,
  TrustPilot,
} from "./Elements";
import { octaneImage, trustPilot } from "utils/assets.config";
import Stat from "components/custom/Stat";
import Rating from "components/custom/Rating";
const OctaneSection = () => {
  return (
    <OctaneContainer>
      <LeftSection>
        <OctaneImg src={octaneImage} alt="octane" />
      </LeftSection>
      <RightSection>
        <Title>
          Apex Legends Boost Services - The Quick And Reliable Choice
          <span>.</span>
        </Title>
        <Stats>
          <Stat count="12 342" title="Completed Orders" />
          <Stat count="6 343" title="Happy Customer" />
          <Stat count="16" title="Expert Gamers" />
        </Stats>
        <RatingContainer>
          <TrustPilot src={trustPilot} alt="trust pilot" />
          <Rating count={4.9} />
        </RatingContainer>
      </RightSection>
    </OctaneContainer>
  );
};

export default OctaneSection;
