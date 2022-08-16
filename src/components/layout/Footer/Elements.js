import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 90vh;
  width: 100%;
  padding: 0.5rem 9vw 0 15vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 40px 40px 0 0;
  position: relative;
  margin-top: 50vh;
  @media screen and (max-width: 1024px) {
    padding: 1rem 1vw 0 6vw;
  }
  @media screen and (max-width: 768px) {
    padding: 0.5rem 5vw;
  }
`;

export const BannerContainer = styled.div`
  background: linear-gradient(85.81deg, #e62546 0%, #ff3254 95.61%);
  height: 38%;
  width: 70%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  overflow: hidden;
  z-index: 1;
  top: 0%;
  transform: translate(0%, -60%);
  &::before {
    content: "";
    background-image: ${(props) => `url(${props.$image})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0%;
    overflow: hidden;
    z-index: -1;
  }
`;

export const CTATitle = styled.label`
  /* font-family: "Gilroy"; */
  font-style: normal;
  font-weight: 300;
  margin-bottom: 1.2rem;
  font-size: 1rem;
  line-height: 30px;

  text-align: center;
  letter-spacing: 0.02em;

  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const CTAsub = styled.p`
  /* text-decoration: underline; */
  font-family: "Poppins";
  font-style: normal;
  font-weight: 900;
  font-size: 4rem;
  line-height: 3.5rem;
  /* identical to box height, or 108% */

  letter-spacing: 0.03em;
  text-transform: uppercase;

  /* White */
  border-bottom: 2px solid #fff;

  color: #ffffff;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
