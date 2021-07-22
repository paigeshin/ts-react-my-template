import React from "react";
import styled from "styled-components";

// Components
import Hero from "../Layout/Landing/Hero";

const StyledWrapper = styled.div`
  max-width: 1800px;
  margin: 0 auto;
`;

const Landing: React.FC = () => {
  return (
    <StyledWrapper>
      <Hero />
    </StyledWrapper>
  );
};

export default Landing;
