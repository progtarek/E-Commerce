import { StyledLink } from "../../assets/styles/common";
import {
  TopBarStyledContainer,
  StyledParagraph,
} from "./TopBar.component.styles";

const TopBar = () => {
  return (
    <TopBarStyledContainer>
      <div className="flex items-center gap-7">
        <StyledLink className="text-xs">Chat with us</StyledLink>
        <StyledParagraph>+420 336 775 664</StyledParagraph>
        <StyledParagraph>info@freshnesecom.com</StyledParagraph>
      </div>
      <nav className="flex items-center gap-7">
        <StyledLink className="text-xs">Blog</StyledLink>
        <StyledLink className="text-xs">About Us</StyledLink>
        <StyledLink className="text-xs">Careers</StyledLink>
      </nav>
    </TopBarStyledContainer>
  );
};

export default TopBar;
