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
  FeatureCardContainer,
} from "./Elements";
import { ninja, tracking, potion, shield } from "utils/assets.config";
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
          <FeatureCardContainer left={"-10"} top={"-50%"}>
            <FeatureCard
              title="Appear Offline"
              description={
                "The booster plays offline, so the process is undetectable from your friend list"
              }
              icon={ninja}
            />
            <FeatureCard
              title={"Order Tracking"}
              description="Spectate, chat with the booster, and follow your match history in the client's area."
              icon={tracking}
            />
          </FeatureCardContainer>
          <FeatureCardContainer left={"55"} top={"-40%"}>
            <FeatureCard
              title="Secured Data"
              description="Your account remains safe with our automated VPN system."
              icon={shield}
            />
            <FeatureCard
              title="Premium Support"
              description="Use our live support to receive premium help whenever you are in need."
              icon={potion}
            />
          </FeatureCardContainer>
        </RightSection>
      </FeaturesContainer>
    </ScreenContainer>
  );
};

export default KeyFeatures;
