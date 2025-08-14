import { useState, useRef, useEffect, memo } from 'react';
import {
  OrderItemContainer,
  OrderTitle,
  StyledListIcon,
  ProductsListButton,
  CountProducts,
  Label,
  OrderDateContainer,
  ShortOrderDate,
  LongOrderDate,
  SumOrderContainer,
  SumOrderUSD,
  SumOrderUAH,
  StyledDeleteIcon,
  ButtonDelete,
} from './OrderItem.styled';
import { Modal } from '@/components/Modal/Modal';

export interface Price {
  value: number;
  symbol: string;
  isDefault: number;
}

export interface Product {
  id: number;
  title: string;
  type: string;
  specification: string;
  price: Price[];
  order: number;
}

export interface Order {
  _id: string;
  title: string;
  date: string;
  description: string;
  products: Product[];
}

interface OrderItemProps {
  order: Order;
  onDelete: (_id: string) => void;
  onToggleProducts: (_id: string) => void;
  selectedOrderId: string | null;
}

export const OrderItem: React.FC<OrderItemProps> = memo(
  ({ order, onDelete, onToggleProducts }) => {
    const { _id, title, date, products } = order;

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [shrink, setShrink] = useState(false);
    const containerRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
      const resizeObserver = new ResizeObserver(() => {
        if (containerRef.current) {
          setShrink(containerRef.current.offsetWidth < 500);
        }
      });

      if (containerRef.current) resizeObserver.observe(containerRef.current);

      return () => resizeObserver.disconnect();
    }, []);

    const handleDelete = () => setIsOpenModal(true);
    const handleCloseModal = () => setIsOpenModal(false);
    const handleConfirmDelete = () => {
      onDelete(_id);
      setIsOpenModal(false);
    };

    const sumProductsUSD = products.reduce((acc: number, product: Product) => {
      const priceUSD = product.price.find((p) => p.isDefault === 0);
      return acc + (priceUSD?.value || 0);
    }, 0);

    const sumProductsUAH = products.reduce((acc: number, product: Product) => {
      const priceUAH = product.price.find((p) => p.isDefault === 1);
      return acc + (priceUAH?.value || 0);
    }, 0);

    return (
      <>
        <OrderItemContainer ref={containerRef}>
          {!shrink && <OrderTitle>{title}</OrderTitle>}

          <ProductsListButton onClick={() => onToggleProducts(_id)}>
            <StyledListIcon />
          </ProductsListButton>
          <CountProducts>
            {products.length} <br />
            <Label>Продукта</Label>
          </CountProducts>
          <OrderDateContainer>
            <ShortOrderDate>
              {new Date(date)
                .toLocaleDateString('ru-RU', {
                  month: '2-digit',
                  year: 'numeric',
                })
                .split('.')
                .join('/')}
            </ShortOrderDate>
            <LongOrderDate>
              {new Date(date)
                .toLocaleDateString('ru-RU', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                })
                .replace(/\./g, '')
                .replace(' г', '')
                .replace(/\s+/g, '/')}
            </LongOrderDate>
          </OrderDateContainer>
          {!shrink && (
            <SumOrderContainer>
              <SumOrderUSD>{sumProductsUSD} $</SumOrderUSD>
              <SumOrderUAH>{sumProductsUAH} UAH</SumOrderUAH>
            </SumOrderContainer>
          )}
          {!shrink && (
            <ButtonDelete onClick={handleDelete}>
              <StyledDeleteIcon />
            </ButtonDelete>
          )}
        </OrderItemContainer>

        <Modal
          open={isOpenModal}
          onClose={handleCloseModal}
          onConfirm={handleConfirmDelete}
          itemName={title}
        />
      </>
    );
  },
);
