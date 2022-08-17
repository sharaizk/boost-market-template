import React from "react";
import {
  ScreenContainer,
  FeaturesContainer,
  LeftSection,
  RightSection,
  WhatWeOffer,
  FeaturesTag,
  FeaturesDescription,
  TryBtn,
} from "./Elements";
import FeatureCard from "components/custom/FeatureCard";
const KeyFeatures = () => {
  return (
    <ScreenContainer>
      <FeaturesContainer>
        <LeftSection>
          <WhatWeOffer>WHY US?</WhatWeOffer>
          <FeaturesTag>
            Our Key Features<span>.</span>
          </FeaturesTag>
          <FeaturesDescription>
            Forget about frustrating games, reach your deserved rank
            effortlessly. Whether you're purchasing League, Valorant, or Wild
            Rift Boosting, you are privileged to all premium features.
          </FeaturesDescription>
          <TryBtn>Try Now!</TryBtn>
        </LeftSection>
        <RightSection>
          <FeatureCard />
        </RightSection>
      </FeaturesContainer>
    </ScreenContainer>
  );
};

export default KeyFeatures;
