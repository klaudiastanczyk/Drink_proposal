import * as S from './DrinkCard.styles';

export const DrinkCard = ({name, ingredients, price}) => {
  return (
    <S.DrinkCard>
      <S.NameContainer>{name}</S.NameContainer>
      <S.IngredientsContainer>{ingredients}</S.IngredientsContainer>
      <S.PriceContainer>{price}</S.PriceContainer>
    </S.DrinkCard>
  )
}