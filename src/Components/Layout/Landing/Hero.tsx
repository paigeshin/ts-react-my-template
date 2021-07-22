import React, { Fragment } from "react";
import styled from "styled-components";

// Components
import Header from "../Common/Header";

// Images
import background from "../../../Resources/backgrounds/hero.png";
import textBackground from "../../../Resources/backgrounds/hero_text.png";
import heroFrontImage from "../../../Resources/images/hero.png";
import playStoreImage from "../../../Resources/images/playstore.png";
import appStoreImage from "../../../Resources/images/appstore.png";
import { GradientTitle } from "../../Styled/GradientTitle";

const StyledHeroWrapper = styled.div`
  display: inline-block;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 80vh;
  @media ${(props) => props.theme.mediaQueries.desktop} {
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
    min-width: 1280px;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: calc(100% - 105px);
  overflow: hidden;
  @media ${(props) => props.theme.mediaQueries.desktop} {
    display: flex;
    height: calc(100% - 120px);
  }
`;

const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  img {
    position: absolute;
    bottom: 0;
    left: -10%;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    object-fit: scale-down;
    object-position: bottom;
  }
  @media ${(props) => props.theme.mediaQueries.desktop} {
    left: 0;
    width: 50%;
    z-index: 100;
    flex-shrink: 0;
    img {
      left: 0%;
      width: 100%;
      bottom: 0;
      object-position: bottom right;
    }
  }
`;

const StyledTextContainer = styled.div`
  display: none;
  @media ${(props) => props.theme.mediaQueries.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    & > div {
      width: calc(100% + 15%);
      white-space: nowrap;
      position: relative;
      left: -12%;
      bottom: 3%;
      background: url(${textBackground});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      padding: 3rem 8rem;
      /* min-width: 45rem; */
    }
    h1 {
      font-size: 3rem;
      margin: 0;
    }
    p {
      font-size: 1rem;
      line-height: 2rem;
      text-align: left;
      margin: 1rem 0;
    }
  }
`;

const Hero: React.FC = () => {
  return (
    <Fragment>
      <StyledHeroWrapper>
        <Header />
        <StyledContainer>
          <StyledImageContainer>
            <img src={heroFrontImage} alt="hero" />
          </StyledImageContainer>
          <StyledTextContainer>
            <div>
              <GradientTitle direction="left-start-pink">
                미유 :[Meyou]
              </GradientTitle>
              <p>
                스타와 나만의 비밀 편지
                <br />
                친구처럼 때로는 연인처럼
                <br />
                언제 어디서나 함께하는 일상공유
              </p>
              <div>
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={appStoreImage} alt="AppStore" />
                </a>
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={playStoreImage} alt="PlaySTORE" />
                </a>
              </div>
            </div>
          </StyledTextContainer>
        </StyledContainer>
      </StyledHeroWrapper>
    </Fragment>
  );
};

export default Hero;
