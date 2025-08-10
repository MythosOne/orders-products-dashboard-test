import {
  ModalContainer,
  ButtonClosed,
  ModalTitle,
  ProductsDelete,
  ModalBlockUp,
  ModalBlockDown,
  BlockButton,
  ButtonEsc,
  ButtonDel,
} from './Modal.styled';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, onConfirm }) => {
  if (!open) return null;

  return (
    <ModalContainer>
      <ButtonClosed onClick={onClose}>Удалить</ButtonClosed>
      <ModalBlockUp>
        <ModalTitle>Вы уверены что хотите удалить это приход?</ModalTitle>
        <ProductsDelete>Продукт удаления</ProductsDelete>
      </ModalBlockUp>
      <ModalBlockDown>
        <BlockButton>
          <ButtonEsc onClick={onClose}>Отмена</ButtonEsc>
          <ButtonDel onClick={onConfirm}>Удалить</ButtonDel>
        </BlockButton>
      </ModalBlockDown>
    </ModalContainer>
  );
};
