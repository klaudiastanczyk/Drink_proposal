import * as S from "./Modal.styles";

export const Modal = ({ show, onClose }) => {
  console.log("klikam?", onClose);

  if (!show) {
    return null;
  } else
    return (
      <S.Modal>
        <div>
          <div>Wykonanie:</div>
          <div>Opis wykonania</div>
        </div>
        <button onClick={onClose}>close</button>
      </S.Modal>
    );
};
