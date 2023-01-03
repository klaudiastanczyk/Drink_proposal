import * as S from "./DrinkCard.styles";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

export const DrinkCard = ({ name, ingredients, price }) => {
  const [showReceipe, setShowReceipe] = useState(false);

  return (
    <S.DrinkCard onClick={() => setShowReceipe(true)}>
      <S.NameContainer>
        <S.NameText>{name}</S.NameText>
      </S.NameContainer>
      <S.IngredientsContainer>
        <S.IngredientsText>
          <S.List>
            {ingredients.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </S.List>
        </S.IngredientsText>
      </S.IngredientsContainer>
      <S.PriceContainer>
        <S.PriceText>{price}$</S.PriceText>
      </S.PriceContainer>
      <Modal show={showReceipe} onClose={() => setShowReceipe(false)}></Modal>
    </S.DrinkCard>
  );
};