import { FC } from "react";
import styled from "styled-components";

interface Heading1Props {
  title: string|null;
}

export const Heading1: FC<Heading1Props> = ({ title }) => {
  return <StyledH1>
    { `Welcome to the ${title} homepage`}
  </StyledH1>
};

const StyledH1 = styled.h1``;