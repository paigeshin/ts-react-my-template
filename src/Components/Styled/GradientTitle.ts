import styled from "styled-components";

type Direction = "left-start-pink" | "right-start-pink";

interface GradientTitleProps {
  direction: Direction;
}

export const GradientTitle = styled.h1<GradientTitleProps>`
  background: linear-gradient(
    to right,
    ${(props) =>
      props.direction === "left-start-pink"
        ? props.theme.gradient["pink-purple-blue"]
        : props.theme.gradient["blue-purple-pink"]}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
