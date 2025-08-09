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

export const Modal = () => {
  return (
    <ModalContainer>
        <ButtonClosed>Удалить</ButtonClosed>
      <ModalBlockUp>
        <ModalTitle>Вы уверены что хотите удалить это приход?</ModalTitle>
        <ProductsDelete>Продукт удаления</ProductsDelete>
      </ModalBlockUp>
      <ModalBlockDown>
        <BlockButton>
          <ButtonEsc>Отмена</ButtonEsc>
          <ButtonDel>Удалить</ButtonDel>
        </BlockButton>
      </ModalBlockDown>
    </ModalContainer>
  );
};
