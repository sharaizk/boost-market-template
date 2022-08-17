import React, { useState } from "react";
import {
  ScreenContainer,
  LeftSection,
  RightSection,
  Tag,
  Title,
  TitleSection,
  ImageSection,
  Image,
} from "./Elements";
import { pathfinder } from "utils/assets.config";
import Accordian from "components/custom/FAQ";
const FAQSection = () => {
  const [accordian, setAccordian] = useState(
    "What is Apex Legends Rank Boosting and why should I use it?"
  );
  const toggle = (title) => {
    if (title === accordian) {
      setAccordian("");
      return;
    }
    setAccordian(title);
  };
  const items = [
    {
      id: 1101,
      title: "Apex Legends Rank Boosting Service vs On Your Own Play",
      content: "I'm a test",
      isActive: false,
    },
    {
      id: 1102,
      title: "What do you get from buying an Apex Legends boost from us",
      content: "I'm a test",
      isActive: false,
    },
    {
      id: 1103,
      title: "Save time and effort with our Apex Legends Boosting Service",
      content: "I'm a test",
      isActive: false,
    },
    {
      id: 1104,
      title: "What is Apex Legends Rank Boosting and why should I use it?",
      content:
        "The process of Apex Legends Boosting is a system where a professional Apex Legends player increases the ranked rating of an account by playing in place of another player by entering his account or playing with him on an alternate account. This allows you to raise your Apex Legends Rank, K/D ratio, and unlock achievements and badges to obtain a significant advantage over lower-level players or indeed other higher-ranked players.",
      isActive: true,
    },
    {
      id: 1105,
      title:
        "Get Apex Legends rank boost faster than you could do on your own with Boosting Market",
      content: "I'm a test",
      isActive: false,
    },
    {
      id: 1106,
      title: "Is your Apex Legends boosting service safe to use?",
      content: "I'm a test",
      isActive: false,
    },
    {
      id: 1107,
      title: "What kind of Apex Legends boosting services do you offer?",
      content: "I'm a test",
      isActive: false,
    },
    {
      id: 1108,
      title: "What makes your Apex Legends boost service the best around?",
      content: "I'm a test",
      isActive: false,
    },
  ];
  return (
    <ScreenContainer>
      <LeftSection>
        <TitleSection>
          <Tag>Experience Flow</Tag>
          <Title>
            Frequently Asked Questions<span>.</span>
          </Title>
        </TitleSection>
        <ImageSection>
          <Image src={pathfinder} alt="FAQ" />
        </ImageSection>
      </LeftSection>
      <RightSection>
        {items.map((item) => (
          <Accordian
            title={item.title}
            content={item.content}
            isActive={accordian === item.title}
            onClick={toggle}
          />
        ))}
      </RightSection>
    </ScreenContainer>
  );
};

export default FAQSection;
