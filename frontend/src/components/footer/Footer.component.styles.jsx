import styled from "styled-components";
import { THEME_PALETTE } from "../../assets/styles/colors";

export const StyledFooterContainer = styled.footer.attrs({
  className: "py-12 flex flex-col",
})`
  border-top: 1px solid ${THEME_PALETTE.gray};

  .copyright {
    border-top: 1px solid ${THEME_PALETTE.gray};
  }
`;

export const StyledFooterBlock = styled.div.attrs({
  className: "flex flex-col mb-7",
})`
  .block-title {
    font-family: "Poppins";
    font-weight: 600;
    font-size: 18px;
  }
`;
