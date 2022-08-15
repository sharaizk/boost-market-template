import React from "react";
import {
  ScreenContainer,
  TopSection,
  Tag,
  Title,
  BottomSection,
  LevelContainer,
} from "./Elements";
import LevelCard from "components/custom/LevelCard";
import { serviceIcon, paymentIcon, rankupIcon } from "utils/assets.config";
const ProcessSection = () => {
  return (
    <ScreenContainer>
      <TopSection>
        <Tag>Rank-up Process</Tag>
        <Title>
          How It Works<span>.</span>
        </Title>
      </TopSection>
      <BottomSection>
        <LevelContainer>
          <LevelCard
            isActive={true}
            src={serviceIcon}
            title="Select Service"
            description="Select and customize your desired service."
          />
          <LevelCard
            isActive={false}
            src={paymentIcon}
            title="Complete Payment"
            description="Choose your preferred payment method."
          />
          <LevelCard
            isActive={false}
            src={rankupIcon}
            title="Rank up"
            description="Follow your order and live chat with your booster."
          />
        </LevelContainer>
      </BottomSection>
    </ScreenContainer>
  );
};

export default ProcessSection;
