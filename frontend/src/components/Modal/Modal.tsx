import { useEffect } from 'react';
import {
  Overlay,
  ModalContainer,
  ButtonClosed,
  StyledCloseIcon,
  ModalTitle,
  ProductsDelete,
  ModalBlockUp,
  BlockButton,
  ButtonEsc,
  ButtonDel,
} from './Modal.styled';

interface ModalProps {
  open: boolean;
  itemName: string;
  onClose: () => void;
  onConfirm: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  onConfirm,
  itemName,
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <Overlay>
      <ModalContainer>
        <ButtonClosed onClick={onClose}>
          <StyledCloseIcon />
        </ButtonClosed>
        <ModalBlockUp>
          <ModalTitle>Вы уверены что хотите удалить этот приход?</ModalTitle>
          <ProductsDelete>{itemName}</ProductsDelete>
        </ModalBlockUp>
        <BlockButton>
          <ButtonEsc onClick={onClose}>Отмена</ButtonEsc>
          <ButtonDel onClick={onConfirm}>Удалить</ButtonDel>
        </BlockButton>
      </ModalContainer>
    </Overlay>
  );
};
