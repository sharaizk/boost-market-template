import styled from "styled-components";

export const RatingBox = styled.div`
  height: 17px;
  width: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00be85;
  margin-right: 5px;
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
