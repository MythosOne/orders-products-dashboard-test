import { ProductsList } from '@/components/ProductsList/ProductsList';
import {ProductsPage} from "./Products.styled"

export const Products = () => {
  return (
    <ProductsPage>
      <ProductsList/>
    </ProductsPage>
  );
}