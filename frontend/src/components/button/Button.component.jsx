import { StyledButton } from "./Button.component.styles";

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}> {children}</StyledButton>;
};

export default Button;
