import ProductsList from "../components/products/ProductsList.component";
import { StyledContainer } from "../assets/styles/common";

const Home = () => {
  return (
    <StyledContainer className="py-7">
      <ProductsList />
    </StyledContainer>
  );
};

export default Home;
