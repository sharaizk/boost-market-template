import React from "react";
import {
  ScreenContainer,
  TopSection,
  BottomSection,
  TitleContainer,
  Tag,
  TitleTag,
  BtnContainer,
  Button,
} from "./Elements";

import {
  uk,
  germany,
  sweden,
  wraith,
  crypto,
  bloodhound,
  gibraltar,
  caustic,
  lancerx,
  petrosin,
  killerqueen,
  popinchuk,
  // lancerx2,
} from "utils/assets.config";
import Carousel from "react-elastic-carousel";
import BoosterCard from "components/custom/BoosterCard";
const BoosterSection = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1.15 },
    { width: 550, itemsToShow: 2.5 },
    { width: 850, itemsToShow: 3.5 },
    { width: 1150, itemsToShow: 4.4 },
    { width: 1440, itemsToShow: 4.5 },
    { width: 1750, itemsToShow: 4.75 },
  ];
  const boosters = [
    {
      id: 501,
      title: "LancerX",
      flags: [uk, germany, sweden],
      legends: [crypto, bloodhound, wraith, gibraltar, caustic],
      avatar: lancerx,
      isVip: true,
      isActive: false,
      rating: 5.0,
      reviews: 36,
    },
    {
      id: 502,
      title: "Petrosin",
      flags: [germany],
      legends: [bloodhound, wraith, gibraltar],
      avatar: petrosin,
      isVip: true,
      isActive: true,
      rating: 4.8,
      reviews: 85,
    },
    {
      id: 503,
      title: "Killer Queen",
      flags: [sweden, germany],
      legends: [crypto, bloodhound, wraith, gibraltar, caustic],
      avatar: killerqueen,
      isVip: true,
      isActive: false,
      rating: 5.0,
      reviews: 67,
    },
    {
      id: 504,
      title: "Poppinchuk",
      flags: [uk, germany],
      legends: [crypto, bloodhound, wraith, caustic],
      avatar: popinchuk,
      isVip: false,
      isActive: false,
      rating: 4.9,
      reviews: 42,
    },
    {
      id: 505,
      title: "LancerX",
      flags: [uk, germany, sweden],
      legends: [crypto, bloodhound, wraith, gibraltar, caustic],
      avatar: lancerx,
      isVip: false,
      isActive: false,
      rating: 5.0,
      reviews: 36,
    },
  ];
  return (
    <ScreenContainer>
      <TopSection>
        <TitleContainer>
          <Tag>Our Boosters</Tag>
          <TitleTag>Browse the best of the best.</TitleTag>
        </TitleContainer>
        <BtnContainer>
          <Button>See All Boosters</Button>
        </BtnContainer>
      </TopSection>
      <BottomSection>
        <Carousel
          breakPoints={breakPoints}
          renderArrow={() => <></>}
          renderPagination={() => <></>}
          itemPadding={[15, 15, 15, 0]}
        >
          {boosters?.map((booster) => {
            return (
              <BoosterCard
                isActive={booster.isActive}
                title={booster.title}
                flags={booster.flags}
                legends={booster.legends}
                avatar={booster.avatar}
                isVip={booster.isVip}
                rating={booster.rating}
                reviews={booster.reviews}
              />
            );
          })}
        </Carousel>
      </BottomSection>
    </ScreenContainer>
  );
};

export default BoosterSection;
