import React, { useEffect, useState } from "react";
import {
  HeaderLogoStyledContainer,
  ProductSearchInput,
} from "./HeaderLogo.component.styles";
import { ReactComponent as BrandLogo } from "../../assets/img/logo.svg";
import { ReactComponent as ProfileIcon } from "../../assets/img/icons/ic-profile.svg";
import { ReactComponent as CartIcon } from "../../assets/img/icons/ic-cart.svg";
import { ReactComponent as AddIcon } from "../../assets/img/icons/ic-add.svg";
import { NavLink } from "react-router-dom";
import { loadProductsList } from "../../store/actions/products.actions";
import { resetProducts } from "../../store/reducers/products.reducer";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const HeaderLogo = () => {
  const [searchTerm, setSearchTerm] = useState();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const q = searchTerm;

      if (q && q.trim()?.length >= 3) {
        dispatch(loadProductsList(q));
      } else if (q?.trim()?.length === 0) {
        dispatch(resetProducts());
        dispatch(loadProductsList());
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, dispatch]);

  return (
    <HeaderLogoStyledContainer>
      <NavLink to="/">
        <BrandLogo />
      </NavLink>
      {location.pathname === "/" ? (
        <ProductSearchInput
          placeholder="Search for products ..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      ) : null}
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
