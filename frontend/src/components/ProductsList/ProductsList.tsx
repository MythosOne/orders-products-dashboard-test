import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/redux/store';
import { fetchOrders, deleteProduct } from '@/redux/ordersSlice';

import { ProductItem } from '@/components/ProductsList/ProductItem/ProductItem';

export const ProductList = () => {
  const [filterType, setFilterType] = useState<string>('all');
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const dispatch = useDispatch<AppDispatch>();
  const { orders, loading, error } = useSelector((state: RootState) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  
  useEffect(() => {
    if (!selectedOrderId && orders.length > 0) {
      setSelectedOrderId(orders[0]._id);
    }
  }, [orders, selectedOrderId]);

  
  const selectedOrder = orders.find(order => order._id === selectedOrderId);

  const products = selectedOrder?.products || [];

  const uniqueTypes = Array.from(new Set(products.map((p) => p.type)));

  const filteredProducts =
    filterType === 'all'
      ? products
      : products.filter((product) => product.type === filterType);

  const handleDeleteProduct = (productId: number) => {
    if (!selectedOrderId) return;
    dispatch(deleteProduct({ orderId: selectedOrderId, productId }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (orders.length === 0) {
    return <div>No orders available.</div>;
  }

  return (
    <div>
      <h1>Products in Order: {selectedOrder?.title || '—'}</h1>

      <label>
        Select Order:{' '}
        <select
          value={selectedOrderId || ''}
          onChange={(e) => setSelectedOrderId(e.target.value)}
        >
          {orders.map((order) => (
            <option key={order._id} value={order._id}>
              {order.title}
            </option>
          ))}
        </select>
      </label>

      <br />

      <label>
        Filter by type:{' '}
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          disabled={products.length === 0}
        >
          <option value="all">All</option>
          {uniqueTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            orderId={selectedOrderId!}
            product={product}
            onDelete={() => handleDeleteProduct(product.id)}
          />
        ))
      )}
    </div>
  );
};