import React from "react";
import {
  TopHeader,
  Booster,
  BoosterImg,
  BoosterCount,
  LinksContainer,
  StyledLink,
} from "./Elements";
import { BoosterHoodie } from "utils/assets.config";
import { topRoutes } from "routes/navconfig.routes";
import LanguageSelector from "components/custom/LanguageSelector";
const MiniHeader = () => {
  return (
    <TopHeader>
      <Booster>
        <BoosterImg src={BoosterHoodie} alt="Booster Hoodie" />
        <BoosterCount>
          <span>26</span> Boosters
        </BoosterCount>
      </Booster>
      <LinksContainer>
        {topRoutes?.map((route) => {
          return (
            <StyledLink to={route.path} key={route.id}>
              {route.title}
            </StyledLink>
          );
        })}
        <LanguageSelector />
      </LinksContainer>
    </TopHeader>
  );
};

export default MiniHeader;
