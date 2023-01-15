import { useEffect, useState } from "react";
import * as S from "./Modal.styles";

export const Modal = ({ show, onClose, wykonanie, name }) => {
  const [drinkInformation, setDrinkInformation] = useState();
  const getDrinkInformationFromAPI = () => {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;

    fetch(URL)
      .then((raw) => raw.json())
      .then((respond) => {
        setDrinkInformation(respond);
        console.log("respond", respond);
      });
  };

  useEffect(() => {
    getDrinkInformationFromAPI();
  }, []);

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
        <S.ModalBody
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <S.ModalHeader>{name}</S.ModalHeader>
          <S.ReceipeDescription>
            {drinkInformation.drinks[0].strInstructions}
          </S.ReceipeDescription>
          
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
