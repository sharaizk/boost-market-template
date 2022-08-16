import React from "react";
import { FooterContainer, BannerContainer, CTATitle, CTAsub } from "./Elements";
import { flame } from "utils/assets.config";
const Footer = () => {
  return (
    <FooterContainer>
      Footer
      <BannerContainer $image={flame}>
        <CTATitle>Don’t waste your time</CTATitle>
        <CTAsub>BOOST NOW!</CTAsub>
      </BannerContainer>
    </FooterContainer>
  );
};

export default Footer;
