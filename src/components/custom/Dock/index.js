import React, { useState } from "react";
import {
  DockContainer,
  IconContainer,
  IconImage,
  ToggleContainer,
} from "./Elements";
import {
  apexIcon,
  codWIcon,
  csgoIcon,
  dotaIcon,
  fortniteIcon,
  lolIcon,
  nwIcon,
  overwatchIcon,
  rocketIcon,
  rs6Icon,
  ttIcon,
  valIcon,
} from "utils/assets.config";
import { BiChevronRight } from "react-icons/bi";
import { useTheme } from "styled-components";
const Dock = () => {
  const theme = useTheme();
  const [selectedGame, setSelectedGame] = useState("apex");
  const [siderbar, toggleSidebar] = useState(false);
  const DockIcons = [
    {
      id: 301,
      title: "apex",
      icon: apexIcon,
    },
    {
      id: 302,
      title: "rocket",
      icon: rocketIcon,
    },
    {
      id: 303,
      title: "overwatch",
      icon: overwatchIcon,
    },
    {
      id: 304,
      icon: lolIcon,
      title: "lol",
    },
    {
      id: 305,
      icon: dotaIcon,
      title: "dota",
    },
    {
      id: 306,
      icon: fortniteIcon,
      title: "fortnite",
    },
    {
      id: 307,
      icon: valIcon,
      title: "val",
    },
    {
      id: 308,
      icon: rs6Icon,
      title: "rs6",
    },
    {
      id: 309,
      icon: ttIcon,
      title: "tt",
    },
    {
      id: 310,
      icon: csgoIcon,
      title: "csgo",
    },
    {
      id: 311,
      icon: codWIcon,
      title: "codw",
    },
    {
      id: 312,
      icon: nwIcon,
      title: "nw",
    },
  ];
  return (
    <>
      <DockContainer $sidebar={siderbar}>
        {DockIcons?.map((icon) => {
          return (
            <IconContainer
              $border={selectedGame === icon.title}
              onClick={() => setSelectedGame(icon.title)}
              key={icon.id}
            >
              <IconImage src={icon.icon} alt="icon" />
            </IconContainer>
          );
        })}
        <ToggleContainer $sidebar={siderbar}>
          <BiChevronRight
            onClick={() => toggleSidebar(!siderbar)}
            size={20}
            color={theme.secondary}
          />
        </ToggleContainer>
      </DockContainer>
    </>
  );
};

export default Dock;
