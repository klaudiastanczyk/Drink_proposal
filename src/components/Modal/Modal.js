import * as S from "./Modal.styles";

export const Modal = ({ show, onClose }) => {

  if (!show) {
    return null;
  } else
    return (
      <S.Modal>
        <S.ModalBody>
          <S.ModalHeader>Wykonanie:</S.ModalHeader>
          <S.ReceipeDescription>Opis wykonania</S.ReceipeDescription>
        </S.ModalBody>
        <S.ButtonClose
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          Close the window and enjoy your drink!
        </S.ButtonClose>
      </S.Modal>
    );
};
