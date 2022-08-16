import React from "react";
import {
  FooterContainer,
  BannerContainer,
  CTATitle,
  CTAsub,
  TopContainer,
  BrandTitle,
  Brand,
  Logo,
  PaymentControllers,
  PaymentIcon,
  SecondContainer,
  ThirdContainer,
  LinksContainer,
  LinkTitle,
  Link,
  GamesContainer,
  Games,
  GameLogo,
  Disclaimer,
  Copyright,
} from "./Elements";
import {
  flame,
  logoInverted,
  paypal,
  stripe,
  ssl,
  skrill,
  paysafe,
  bitcoin,
  eth,
  Lcoin,
  rocketIcon,
  lolIcon,
  dotaIcon,
  overwatchIcon,
  fortniteIcon,
  valIcon,
  rs6Icon,
  ttIcon,
  csgoIcon,
  codWIcon,
  nwIcon,
} from "utils/assets.config";
const Footer = () => {
  const paymentIcons = [
    {
      id: 1001,
      src: paypal,
      width: "15%",
      mr: "auto",
    },
    {
      id: 1002,
      src: stripe,
      width: "9%",
      mr: "auto",
    },
    {
      id: 1003,
      src: ssl,
      width: "7.5%",
      mr: "auto",
    },
    {
      id: 1004,
      src: skrill,
      width: "9%",
      mr: "auto",
    },
    {
      id: 1005,
      src: paysafe,
      width: "16%",
      mr: "auto",
    },
    {
      id: 1006,
      src: bitcoin,
      width: "5.5%",
      mr: "2%",
    },
    {
      id: 1007,
      src: eth,
      width: "5.5%",
      mr: "2%",
    },
    {
      id: 1008,
      src: Lcoin,
      width: "5.5%",
      mr: "0",
    },
  ];

  const links = [
    {
      id: 1101,
      title: "Services",
      links: [
        "Rank Boosting",
        "Arena Rank Boosting",
        "Arena Placements",
        "Achievements Boosting",
        "Kill Boosting",
        "Win Boosting",
        "Level Boosting",
      ],
    },
    {
      id: 1102,
      title: "Extra",
      links: ["Loyalty", "Account Shop", "Refer a Friend"],
    },
    {
      id: 1103,
      title: "Support",
      links: ["Live Chat", "Discord Support", "FAQ"],
    },
    {
      id: 1104,
      title: "Legal",
      links: [
        "Terms of Services",
        "Privacy Policy",
        "Cookie Policy",
        "Refund Policy",
        "Champion Mastery",
      ],
    },
  ];
  return (
    <FooterContainer>
      <BannerContainer $image={flame}>
        <CTATitle>Don’t waste your time</CTATitle>
        <CTAsub>BOOST NOW!</CTAsub>
      </BannerContainer>
      <TopContainer>
        <Brand>
          <Logo src={logoInverted} alt="logo" />
          <BrandTitle>
            <span>BOOST</span>
            <br />
            <p>MARKET</p>
          </BrandTitle>
        </Brand>
        <PaymentControllers>
          {paymentIcons?.map((payment) => (
            <PaymentIcon
              key={payment.id}
              src={payment.src}
              alt="logo"
              $width={payment?.width}
              mr={payment?.mr}
            />
          ))}
        </PaymentControllers>
      </TopContainer>
      <SecondContainer>
        {links?.map((link) => {
          return (
            <LinksContainer>
              <LinkTitle key={link.id}>{link.title}</LinkTitle>
              {link.links.map((li) => (
                <Link>{li}</Link>
              ))}
            </LinksContainer>
          );
        })}
        <LinksContainer fl={0.325}>
          <GamesContainer>
            <LinkTitle>Other Games</LinkTitle>
            <Games>
              <GameLogo src={rocketIcon} />
              <GameLogo src={lolIcon} />
              <GameLogo src={dotaIcon} />
              <GameLogo src={overwatchIcon} />
              <GameLogo src={fortniteIcon} />
              <GameLogo src={valIcon} />
            </Games>
            <Games>
              <GameLogo src={rs6Icon} />
              <GameLogo src={ttIcon} />
              <GameLogo src={csgoIcon} />
              <GameLogo src={codWIcon} />
              <GameLogo src={nwIcon} />
            </Games>
          </GamesContainer>
        </LinksContainer>
      </SecondContainer>
      <ThirdContainer>
        <Disclaimer>
          This website is not endorsed or in any way affiliated with Amazon,
          Activision Inc, Electronic Arts Inc, Valve Corporation, Riot Games
          Inc, Respawn Entertainment, Bungie, Psyonix Studios or Epic Games and
          does not reflect the views or opinions of the aforementioned entities
          or anyone officially involved in producing or managing Overwatch,
          Fortnite, Call of Duty Franchise, League of Legends, Valorant,
          Destiny2, Rainbow Six Siege, Rocket League, Teamfight Tactics, Dota 2
          or Apex Legends. Overwatch, Fortnite, Call of Duty Franchise, League
          of Legends, Valorant, Destiny2, Rainbow Six Siege, Rocket League,
          Teamfight Tactics, Dota 2 or Apex Legends are trademarks or registered
          trademarks of the aforementioned entities in the U.S. and/or other
          countries. All submitted art content remains copyright of its original
          copyright holder.
        </Disclaimer>
        <Copyright>Copyright 2022 Boost Market</Copyright>
      </ThirdContainer>
    </FooterContainer>
  );
};

export default Footer;
