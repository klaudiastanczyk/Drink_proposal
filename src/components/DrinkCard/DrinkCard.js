import * as S from "./DrinkCard.styles";

export const DrinkCard = ({ name, ingredients, price }) => {
  return (
    <S.DrinkCard>
      <S.NameContainer>
        <S.NameText>{name}</S.NameText>
      </S.NameContainer>
      <S.IngredientsContainer>{ingredients}</S.IngredientsContainer>
      <S.PriceContainer>{price}</S.PriceContainer>
    </S.DrinkCard>
  );
};
