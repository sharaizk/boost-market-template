import React from "react";
import {
  ServicesContainer,
  WhatWeOffer,
  ServicesTag,
  CardsContainer,
  SideIcon,
  Icon,
} from "./Elements";
import ServicesCard from "components/custom/ServicesCard";
import Carousel from "react-elastic-carousel";
import {
  achievementBadge,
  arenaBoosting,
  killBoosting,
  rankBoosting,
  winBoosting,
  userIcon,
} from "utils/assets.config";
import Badge from "components/custom/Badge";
const OurServices = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1.15 },
    { width: 550, itemsToShow: 2.5 },
    { width: 850, itemsToShow: 3.5 },
    { width: 1150, itemsToShow: 5.45 },
    { width: 1440, itemsToShow: 5.75 },
    { width: 1750, itemsToShow: 5.75 },
  ];

  const services = [
    {
      id: 401,
      title: "Rank<br/>Boosting",
      image: rankBoosting,
      isPopular: false,
      isActive: true,
    },
    {
      id: 402,
      title: "Arena Rank<br/>Boosting",
      image: arenaBoosting,
      isPopular: true,
      isActive: false,
    },
    {
      id: 403,
      title: "Arena<br/>Placements",
      image: arenaBoosting,
      isPopular: false,
      isActive: false,
    },
    {
      id: 404,
      title: "Achievement<br/>Badges",
      image: achievementBadge,
      isPopular: false,
      isActive: false,
    },
    {
      id: 405,
      title: "Kill<br/>Boosting",
      image: killBoosting,
      isPopular: false,
      isActive: false,
    },
    {
      id: 406,
      title: "Win<br/>Boosting",
      image: winBoosting,
      isPopular: false,
      isActive: false,
    },
  ];

  return (
    <ServicesContainer>
      <SideIcon>
        <Badge count={"3€"} top="-50%" left="0%" bg="#FFD8DA">
          <Icon src={userIcon} />
        </Badge>
      </SideIcon>
      <WhatWeOffer>What We Offer</WhatWeOffer>
      <ServicesTag>
        Our Services<span>.</span>
      </ServicesTag>
      <CardsContainer>
        <Carousel
          breakPoints={breakPoints}
          renderArrow={() => <></>}
          renderPagination={() => <></>}
          itemPadding={[15, 10, 15, 0]}
        >
          {services?.map((service) => {
            return (
              <ServicesCard
                key={service.id}
                title={service.title}
                image={service.image}
                isPopular={service.isPopular}
                isActive={service.isActive}
              />
            );
          })}
        </Carousel>
      </CardsContainer>
    </ServicesContainer>
  );
};

export default OurServices;
