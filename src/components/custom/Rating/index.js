import React from "react";
import { RatingBox, RatingImage, RatingText } from "./Element";
import { miniStar } from "utils/assets.config";
const Rating = ({ count }) => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((star, i) => {
        return (
          <RatingBox>
            <RatingImage key={`star${i}`} src={miniStar} />
          </RatingBox>
        );
      })}
      <RatingText>{count}</RatingText>
    </>
  );
};

export default Rating;
