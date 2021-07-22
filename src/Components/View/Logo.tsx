import React from "react";
import styled from "styled-components";
import logoMeyou from "../../Resources/logo/logo_meyou.png";
import logoM from "../../Resources/logo/logo_m.png";

const StyledLogo = styled.img.attrs((props: LogoProps) => {
  return {
    src: props.logoType === "LOGO_MEYOU" ? logoMeyou : logoM,
  };
})<LogoProps>`
  width: ${(props) => props.theme.logo["logo-width-mobile"]};
  height: ${(props) => props.theme.logo["logo-height-mobile"]};
  @media ${(props) => props.theme.mediaQueries.desktop} {
    width: ${(props) => props.theme.logo["logo-width-desktop"]};
    height: ${(props) => props.theme.logo["logo-height-desktop"]};
  }
`;

type LogoType = "LOGO_MEYOU" | "LOGO_M";
interface LogoProps {
  logoType: LogoType;
}

// Responsibility: Rendering Logo
const Logo: React.FC<LogoProps> = ({ logoType }) => {
  return <StyledLogo logoType={logoType} />;
};

export default Logo;
