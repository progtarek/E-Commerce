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

const ProductCard = ({ title, description, price, imageURL }) => {
  return (
    <StyledProductCard>
      <StyledProductCardImage imageURL={imageURL}></StyledProductCardImage>
      <StyledProductCardTitle>{title}</StyledProductCardTitle>
      <StyledProductCardDescription>{description}</StyledProductCardDescription>
      <StyledProductCardFooter>
        <div className="card-price">{price} USD</div>
        <div className="card-actions">
          <StyledProductCardAction>
            <EditIcon className="h-6" />
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
