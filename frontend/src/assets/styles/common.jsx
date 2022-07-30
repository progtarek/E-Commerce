import styled from "styled-components";
import { THEME_PALETTE } from "./colors";

export const StyledContainer = styled.div.attrs({
  className: "container mx-auto",
})`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

export const StyledLink = styled.a.attrs({
  className: "cursor-pointer",
})`
  color: ${THEME_PALETTE.green};
`;
