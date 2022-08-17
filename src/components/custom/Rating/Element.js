import styled from "styled-components";

export const RatingBox = styled.div`
  height: 22.5px;
  width: 22.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00be85;
  margin-right: 3px;

  @media screen and (max-width: 1440px) {
    height: 17px;
    width: 17px;
    margin-right: 5px;
  }
`;

export const RatingImage = styled.img`
  width: 60%;
  vertical-align: middle;
`;

export const RatingText = styled.p`
  font-size: 1.2rem;
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
