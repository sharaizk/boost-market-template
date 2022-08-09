import styled from "styled-components";

export const NavBarContainer = styled.nav`
  height: 100px;
  width: 100%;
  padding: 0.5rem 17vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 0.5rem 5vw;
  }
`;

export const Brand = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Logo = styled.img`
  width: 30%;
  height: auto;
  margin-right: 1.3vw;

  @media screen and (max-width: 480px) {
    width: 50%;
    margin-right: 3vw;
  }
`;
export const BrandTitle = styled.h2`
  font-size: 800;
  font-family: "Hellix-Bold" !important;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-size: 1.2rem;
  line-height: 1.2rem;
  text-align: justify;
  & span {
    color: ${(props) => props.theme.primary};
    letter-spacing: 3px;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    line-height: 1rem;
    & span {
      font-size: 1.2rem;
      line-height: 1.2rem;
    }
  }
`;

export const NavSection = styled.div`
  flex: 0.75;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LinksContainer = styled.ul`
  height: 100%;
  flex: 0.6;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BtnContainer = styled.div`
  height: 100%;
  flex: 0.3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
