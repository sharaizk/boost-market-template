import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import {
  BottomSection,
  ScreenContainer,
  Tag,
  Title,
  TopSection,
  BtnContainer,
  MoveButton,
  LeftSection,
  RightSection,
} from "./Elements";
import Carousel from "react-elastic-carousel";
import ClientCard from "components/custom/ClientCard";
import ReviewCard from "components/custom/ReviewCard";
const ClientSection = () => {
  const clients = [
    {
      id: 601,
      title: "Rinn****",
      review:
        "it’s good just depends what game your boosting because it’s quicker on valorant than rainbow six segie. but that’s it.",
      rating: "5",
    },
  ];
  return (
    <ScreenContainer>
      <TopSection>
        <Tag>Reviews</Tag>
        <Title>
          What Clients Says<span>.</span>
        </Title>
      </TopSection>
      <BottomSection>
        <LeftSection>
          <BtnContainer>
            <MoveButton>
              <BiChevronLeft size={20} />
            </MoveButton>
            <MoveButton>
              <BiChevronRight size={20} />
            </MoveButton>
          </BtnContainer>
          <Carousel
            itemsToShow={1}
            renderArrow={() => <></>}
            renderPagination={() => <></>}
            itemPadding={[10, 0, 20, 50]}
          >
            {clients?.map((client) => {
              return (
                <ClientCard
                  key={client.id}
                  title={client.title}
                  review={client.review}
                  rating={client.rating}
                />
              );
            })}
          </Carousel>
        </LeftSection>
        <RightSection>
          <ReviewCard />
        </RightSection>
      </BottomSection>
    </ScreenContainer>
  );
};

export default ClientSection;
