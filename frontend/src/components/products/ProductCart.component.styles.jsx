import styled from "styled-components";
import { THEME_PALETTE } from "../../assets/styles/colors";

export const StyledProductCard = styled.div.attrs({
  className: "flex flex-col p-4",
})`
  border: 1px solid ${THEME_PALETTE.gray_500};
  border-radius: 12px;
  }
`;

export const StyledProductCardImage = styled.div`
  height: 180px;
  background-color: ${THEME_PALETTE.green_200};
  border-radius: 12px;
`;

export const StyledProductCardTitle = styled.div.attrs({
  className: "mt-4 cursor-pointer",
})`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 15px;
`;

export const StyledProductCardDescription = styled.div.attrs({
  className: "text-xs",
})`
  font-weight: 400;
  color: ${THEME_PALETTE.gray_700};
`;

export const StyledProductCardFooter = styled.div.attrs({
  className: "flex justify-between items-center mt-4",
})`
  .card {
    &-price {
      font-family: "Poppins";
      font-weight: 600;
      font-size: 18px;
    }

    &-actions {
      display: flex;
      gap: 10px;
    }
  }
`;

export const StyledProductCardAction = styled.button.attrs({
  className:
    "flex justify-center items-center h-9 w-9 transition ease-in-out delay-150 duration-300",
})`
  background-color: ${THEME_PALETTE.green};
  border: 2px solid ${THEME_PALETTE.green_700};
  border-radius: 5px;

  &:hover {
    background-color: ${THEME_PALETTE.green_700};
  }
`;

export const StyledProductCardDangerAction = styled(StyledProductCardAction)`
  background-color: ${THEME_PALETTE.red_500};
  border: 2px solid ${THEME_PALETTE.red_700};

  &:hover {
    background-color: ${THEME_PALETTE.red_700};
  }
`;
