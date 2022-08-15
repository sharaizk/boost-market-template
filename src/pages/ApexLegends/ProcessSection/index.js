import React from "react";
import {
  ScreenContainer,
  TopSection,
  Tag,
  Title,
  MiddleSection,
  LevelContainer,
  IconContainer,
  Icon,
  BottomSection,
  LeftSection,
  RightSection,
  Tag2,
  Title2,
  Detail,
  UnList,
  List,
  Btn,
  Img,
} from "./Elements";
import LevelCard from "components/custom/LevelCard";
import {
  serviceIcon,
  paymentIcon,
  rankupIcon,
  arrowSVG,
} from "utils/assets.config";
import { checkout } from "utils/assets.config";
const ProcessSection = () => {
  return (
    <ScreenContainer>
      <TopSection>
        <Tag>Rank-up Process</Tag>
        <Title>
          How It Works<span>.</span>
        </Title>
      </TopSection>
      <MiddleSection>
        <LevelContainer>
          <LevelCard
            isActive={true}
            src={serviceIcon}
            title="Select Service"
            description="Select and customize your desired service."
          />
          <IconContainer>
            <Icon src={arrowSVG} />
          </IconContainer>
          <LevelCard
            isActive={false}
            src={paymentIcon}
            title="Complete Payment"
            description="Choose your preferred payment method."
          />
          <IconContainer>
            <Icon src={arrowSVG} />
          </IconContainer>
          <LevelCard
            isActive={false}
            src={rankupIcon}
            title="Rank up"
            description="Follow your order and live chat with your booster."
          />
        </LevelContainer>
      </MiddleSection>
      <BottomSection>
        <LeftSection>
          <Tag2>01.</Tag2>
          <Title2>Select Your Desired Service</Title2>
          <Detail>
            First, select your method of ranking up. There are various ways to
            reach your desired goal. Choose the one which fits most to your
            needs.
          </Detail>
          <UnList>
            <List>Free additional customizations.</List>
            <List>Intuitive and straightforward purchase process.</List>
          </UnList>
          <Btn>Try Now!</Btn>
        </LeftSection>
        <RightSection>
          <Img src={checkout} alt="checkout" />
        </RightSection>
      </BottomSection>
    </ScreenContainer>
  );
};

export default ProcessSection;
