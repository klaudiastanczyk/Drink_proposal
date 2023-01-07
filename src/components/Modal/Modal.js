import * as S from "./Modal.styles";

export const Modal = ({ show, onClose, wykonanie }) => {
  if (!show) {
    return null;
  } else
    return (
      <S.Modal
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <S.ModalBody onClick={(e) => {e.stopPropagation()}}>
          <S.ModalHeader>Wykonanie:</S.ModalHeader>
          <S.ReceipeDescription>{wykonanie}</S.ReceipeDescription>
        </S.ModalBody>
        <S.ButtonClose
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          Close
        </S.ButtonClose>
      </S.Modal>
    );
};
