import styled from "styled-components";
import { THEME_PALETTE } from "../../assets/styles/colors";

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const FormLabel = styled.label.attrs({
  className: "text-sm outline-none font-semibold",
})`
  display: block;
`;

export const Field = styled.input.attrs({
  className: "w-full px-3 text-sm outline-none font-semibold",
})`
  border-radius: 5px;
  border: 1px solid ${THEME_PALETTE.gray_500};
  background: ${THEME_PALETTE.gray_400};
  max-width: 500px;
  height: 42px;
  transition: 0.3s all;
  color: ${THEME_PALETTE.black};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${THEME_PALETTE.gray_600};
  }
  :-ms-input-placeholder {
    color: ${THEME_PALETTE.gray_600};
  }

  &.invalid {
    border: 1px solid ${THEME_PALETTE.red_500};
  }
`;

export const ErrorMessage = styled.div.attrs({
  className: "text-xs font-medium",
})`
  color: ${THEME_PALETTE.red_500};
`;
