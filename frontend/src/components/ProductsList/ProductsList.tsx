import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/redux/store';
import { fetchOrders, deleteProduct } from '@/redux/ordersSlice';
import { ProductItem } from '@/components/ProductsList/ProductItem/ProductItem';

import {
  FilterLabel,
  FilterSelect,
  NoProductsText,
  ProductList,
} from './ProductsList.styled';

export const ProductsList = () => {
  const [filterType, setFilterType] = useState<string>('all');

  const dispatch = useDispatch<AppDispatch>();
  const { orders, loading, error } = useSelector(
    (state: RootState) => state.orders,
  );

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

const allProducts = useMemo(
  () =>
    orders.flatMap((order) =>
      order.products.map((p) => ({
        ...p,
        orderId: order._id,
        orderTitle: order.title,
      })),
    ),
  [orders],
);

  const uniqueTypes = Array.from(new Set(allProducts.map((p) => p.type)));

  const filteredProducts = useMemo(
  () =>
    filterType === 'all'
      ? allProducts
      : allProducts.filter((product) => product.type === filterType),
  [allProducts, filterType],
);

  const handleDeleteProduct = (orderId: string, productId: number) => {
    dispatch(deleteProduct({ orderId, productId }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (orders.length === 0) return <div>No orders available.</div>;

  return (
    <>
      <FilterLabel>
        Тип продукта
        <FilterSelect
          aria-label="Тип продукта"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          disabled={allProducts.length === 0}
        >
          <option value="all">All</option>
          {uniqueTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </FilterSelect>
      </FilterLabel>

      {filteredProducts.length === 0 ? (
        <NoProductsText>No products found.</NoProductsText>
      ) : (
        <ProductList>
          {filteredProducts.map((product) => (
            <li key={`${product.orderId}-${product.id}`}>
              <ProductItem
                orderId={product.orderId}
                product={product}
                onDelete={() =>
                  handleDeleteProduct(product.orderId, product.id)
                }
              />
            </li>
          ))}
        </ProductList>
      )}
    </>
  );
};
