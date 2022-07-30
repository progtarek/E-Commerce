import styled from "styled-components";
import { StyledContainer } from "../../assets/styles/common";
import { THEME_PALETTE } from "../../assets/styles/colors";
import SearchIcon from "../../assets/img/icons/ic-search.svg";

export const HeaderLogoStyledContainer = styled(StyledContainer).attrs({
  className: "flex items-center justify-between",
})`
  height: 130px;
  border-bottom: 1px solid ${THEME_PALETTE.gray};
`;

export const ProductSearchInput = styled.input.attrs({
  className: "w-full px-3 text-sm outline-none pl-8 font-semibold",
})`
  border-radius: 12px;
  border: 1px solid ${THEME_PALETTE.gray_500};
  background: ${THEME_PALETTE.gray_400};
  max-width: 500px;
  height: 42px;
  transition: 0.3s all;
  background-image: url(${SearchIcon});
  color: ${THEME_PALETTE.black};
  background-repeat: no-repeat;
  background-position: 12px center;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${THEME_PALETTE.gray_600};
  }
  :-ms-input-placeholder {
    color: ${THEME_PALETTE.gray_600};
  }
`;
