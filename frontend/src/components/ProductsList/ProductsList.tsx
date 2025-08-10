import { useState } from 'react';

import {products} from '@/DataBase/data';

import { ProductItem } from '@/components/ProductsList/ProductItem/ProductItem';

export const ProductList = () => {
    const [productsList, setProducts] = useState(products);

    const handleDeleteOrder = (id: number) => {
  setProducts(prev => prev.filter(product => product.id !== id));
};

  return (
    <div>
      <h1>Product List</h1>
      {productsList.map((product) => (
        <ProductItem key={product.id} product={product} onDelete = {handleDeleteOrder}/>
      ))}
    </div>
  );
}