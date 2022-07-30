import React from "react";
import {
  HeaderLogoStyledContainer,
  ProductSearchInput,
} from "./HeaderLogo.component.styles";
import { ReactComponent as BrandLogo } from "../../assets/img/logo.svg";
import { ReactComponent as ProfileIcon } from "../../assets/img/icons/ic-profile.svg";
import { ReactComponent as CartIcon } from "../../assets/img/icons/ic-cart.svg";
import { ReactComponent as AddIcon } from "../../assets/img/icons/ic-add.svg";
import { NavLink } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <HeaderLogoStyledContainer>
      <NavLink to="/">
        <BrandLogo />
      </NavLink>
      <ProductSearchInput placeholder="Search for products ..." />
      <div className="actions flex items-center gap-7">
        <NavLink to="/add">
          <AddIcon className="cursor-pointer h-7 w-7" />
        </NavLink>
        <ProfileIcon className="cursor-pointer h-6 w-6" />
        <CartIcon className="cursor-pointer h-6 w-6" />
      </div>
    </HeaderLogoStyledContainer>
  );
};

export default HeaderLogo;
