import {
  StyledFooterContainer,
  StyledFooterBlock,
} from "./Footer.component.styles";
import { StyledContainer, StyledLink } from "../../assets/styles/common";

const INTOUCH_LIST = ["About Us", "Careers", "Press Releases", "Blog"];
const CONNECTIONS_LIST = [
  "Facebook",
  "Twitter",
  "Instagram",
  "Youtube",
  "LinkedIn",
];
const EARNING_LIST = [
  "Become an Affiliate",
  "Advertise your product",
  "Sell on Market",
];
const ACCOUNT_LIST = [
  "Your account",
  "Returns Centre",
  "100 % purchase protection",
  "Chat with us",
  "Help",
];

const Footer = () => {
  return (
    <StyledContainer>
      <StyledFooterContainer>
        <div className="flex justify-between">
          <StyledFooterBlock>
            <h4 className="block-title mb-4">Get Intouch</h4>
            {INTOUCH_LIST.map((item, i) => (
              <StyledLink className="text-xs mb-4" key={i}>
                {item}
              </StyledLink>
            ))}
          </StyledFooterBlock>

          <StyledFooterBlock>
            <h4 className="block-title mb-4">Connections</h4>
            {CONNECTIONS_LIST.map((item, i) => (
              <StyledLink className="text-xs mb-4" key={i}>
                {item}
              </StyledLink>
            ))}
          </StyledFooterBlock>

          <StyledFooterBlock>
            <h4 className="block-title mb-4">Earnings</h4>
            {EARNING_LIST.map((item, i) => (
              <StyledLink className="text-xs mb-4" key={i}>
                {item}
              </StyledLink>
            ))}
          </StyledFooterBlock>

          <StyledFooterBlock>
            <h4 className="block-title mb-4">Account</h4>
            {ACCOUNT_LIST.map((item, i) => (
              <StyledLink className="text-xs mb-4" key={i}>
                {item}
              </StyledLink>
            ))}
          </StyledFooterBlock>
        </div>
        <div className="copyright pt-12 text-xs">
          Copyright © 2022 freshness.com
        </div>
      </StyledFooterContainer>
    </StyledContainer>
  );
};

export default Footer;
