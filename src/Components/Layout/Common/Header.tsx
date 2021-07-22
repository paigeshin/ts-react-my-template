import React from "react";
import styled from "styled-components";
import Logo from "../../View/Logo";
import { Link } from "react-router-dom";

//images
import background from "../../../Resources/backgrounds/header.png";

const StyledHeaderWrapper = styled.div<HeaderProps>`
  position: ${(props) => (props.absolute ? "absolute" : "static")};
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: ${(props) => props.theme.header["header-padding-mobile"]};
  align-items: center;
  border-bottom: 1px white solid;
  @media ${(props) => props.theme.mediaQueries.desktop} {
    padding: ${(props) => props.theme.header["header-padding-desktop"]};
  }
`;

interface HeaderProps {
  absolute?: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <StyledHeaderWrapper absolute={props.absolute}>
      <div>
        <Logo logoType="LOGO_MEYOU" />
      </div>
      <div>
        <nav>
          <Link to="/login">로그인</Link>
        </nav>
      </div>
    </StyledHeaderWrapper>
  );
};

export default Header;
