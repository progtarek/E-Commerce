import styled from "styled-components";
import { StyledContainer } from "../../assets/styles/common";
import { THEME_PALETTE } from "../../assets/styles/colors";

export const TopBarStyledContainer = styled(StyledContainer).attrs({
  className: "flex items-center justify-between",
})`
  height: 48px;
  border-bottom: 1px solid ${THEME_PALETTE.gray};
`;

export const StyledParagraph = styled.p.attrs({
  className: "m-0 text-xs",
})`
  color: ${THEME_PALETTE.black};
`;
