import {
  BoosterCardContainer,
  BoosterTag,
  Avatar,
  Title,
  ChildsContainer,
  Flag,
  Legend,
  Reviews,
} from "./Elements";
import { star2, starw } from "utils/assets.config";
import RatingBadge from "../RatingBadge";
const BoosterCard = ({
  title,
  flags,
  legends,
  avatar,
  isVip,
  isActive,
  rating,
  reviews,
}) => {
  return (
    <BoosterCardContainer isActive={isActive}>
      {isVip && <BoosterTag isActive={isActive}>Vip Booster</BoosterTag>}
      <Avatar src={avatar} alt="avatar" />
      <Title isActive={isActive}>{title}</Title>
      <ChildsContainer>
        {flags?.map((flag, i) => {
          return <Flag key={`flag${i}`} src={flag} alt="flag" />;
        })}
      </ChildsContainer>
      <ChildsContainer>
        {legends?.map((legend, i) => {
          return <Legend isActive={isActive} key={`legend${i}`} bg={legend} />;
        })}
      </ChildsContainer>
      <RatingBadge
        star={isActive ? starw : star2}
        rating={rating}
        isActive={isActive}
      />
      <Reviews isActive={isActive}>{reviews} Reviews</Reviews>
    </BoosterCardContainer>
  );
};

export default BoosterCard;
