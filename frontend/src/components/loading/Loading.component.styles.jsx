import styled from "styled-components";
import { THEME_PALETTE } from "../../assets/styles/colors";

export const StyledLoading = styled.div`
  border: 5px solid ${THEME_PALETTE.gray_500};
  border-radius: 50%;
  border-top: 5px solid ${THEME_PALETTE.green};
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
