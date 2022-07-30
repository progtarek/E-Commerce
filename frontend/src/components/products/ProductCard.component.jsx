import {
  StyledProductCard,
  StyledProductCardTitle,
  StyledProductCardImage,
  StyledProductCardDescription,
  StyledProductCardFooter,
  StyledProductCardAction,
  StyledProductCardDangerAction,
} from "./ProductCard.component.styles";

import { ReactComponent as TrashIcon } from "../../assets/img/icons/ic-trash.svg";
import { ReactComponent as EditIcon } from "../../assets/img/icons/ic-edit.svg";
import { NavLink } from "react-router-dom";

const ProductCard = ({ title, description, price, imageURL, uniqueName }) => {
  return (
    <StyledProductCard>
      <StyledProductCardImage imageURL={imageURL}></StyledProductCardImage>
      <StyledProductCardTitle>{title}</StyledProductCardTitle>
      <StyledProductCardDescription>{description}</StyledProductCardDescription>
      <StyledProductCardFooter>
        <div className="card-price">{price} USD</div>
        <div className="card-actions">
          <StyledProductCardAction>
            <NavLink to={"/edit/" + uniqueName}>
              <EditIcon className="h-6" />
            </NavLink>
          </StyledProductCardAction>
          <StyledProductCardDangerAction>
            <TrashIcon className="h-6" />
          </StyledProductCardDangerAction>
        </div>
      </StyledProductCardFooter>
    </StyledProductCard>
  );
};

export default ProductCard;
