import React from "react";
import {
  HeaderLogoStyledContainer,
  ProductSearchInput,
} from "./HeaderLogo.component.styles";
import { ReactComponent as BrandLogo } from "../../assets/img/logo.svg";
import { ReactComponent as ProfileIcon } from "../../assets/img/icons/ic-profile.svg";
import { ReactComponent as CartIcon } from "../../assets/img/icons/ic-cart.svg";

const HeaderLogo = () => {
  return (
    <HeaderLogoStyledContainer>
      <BrandLogo />
      <ProductSearchInput placeholder="Search for products ..." />
      <div className="actions flex items-center gap-7">
        <ProfileIcon className="cursor-pointer" />
        <CartIcon className="cursor-pointer" />
      </div>
    </HeaderLogoStyledContainer>
  );
};

export default HeaderLogo;
