import {
  StyledProductCard,
  StyledProductCardTitle,
  StyledProductCardImage,
  StyledProductCardDescription,
  StyledProductCardFooter,
  StyledProductCardAction,
  StyledProductCardDangerAction,
} from "./ProductCart.component.styles";

import { ReactComponent as TrashIcon } from "../../assets/img/icons/ic-trash.svg";
import { ReactComponent as EditIcon } from "../../assets/img/icons/ic-edit.svg";

const ProductCard = () => {
  return (
    <StyledProductCard>
      <StyledProductCardImage></StyledProductCardImage>
      <StyledProductCardTitle>Product title</StyledProductCardTitle>
      <StyledProductCardDescription>
        Space for a small product description
      </StyledProductCardDescription>
      <StyledProductCardFooter>
        <div className="card-price">12.3 USD</div>
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
