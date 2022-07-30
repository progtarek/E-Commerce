import styled from "styled-components";
import { THEME_PALETTE } from "../../assets/styles/colors";

export const StyledButton = styled.button.attrs({
  className:
    "flex justify-center items-center h-10 transition ease-in-out delay-150 duration-300 px-3",
})`
  background-color: ${THEME_PALETTE.green};
  border: 2px solid ${THEME_PALETTE.green_700};
  border-radius: 5px;
  color: white;

  &:hover {
    background-color: ${THEME_PALETTE.green_700};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
