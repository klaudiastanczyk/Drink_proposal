import * as S from "./DrinkCard.styles";

export const DrinkCard = ({ name, ingredients, price }) => {
  console.log(ingredients);

  return (
    <S.DrinkCard>
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
      <S.PriceContainer>{price}$</S.PriceContainer>
    </S.DrinkCard>
  );
};
