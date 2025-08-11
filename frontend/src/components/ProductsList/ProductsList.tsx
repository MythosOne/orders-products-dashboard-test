import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/redux/store';
import { fetchProducts, deleteProduct } from '@/redux/productsSlice';

import { ProductItem } from '@/components/ProductsList/ProductItem/ProductItem';

export const ProductList = () => {
  const [filterType, setFilterType] = useState<string>('all');

  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const uniqueTypes = Array.from(new Set(products.map((p) => p.type)));

  const filteredProducts =
    filterType === 'all'
      ? products
      : products.filter((product) => product.type === filterType);

  const handleDeleteProduct = (id: number) => {
    dispatch(deleteProduct(id));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Product List / {filteredProducts.length}</h1>

      <label>
        Filter by type:{' '}
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All</option>
          {uniqueTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      {filteredProducts.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onDelete={handleDeleteProduct}
        />
      ))}
    </div>
  );
};
