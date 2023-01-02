import { DrinkCard } from "../DrinkCard/DrinkCard";
import * as S from "./DrinkContainer.styles";

export const DrinkContainer = ({ listOfDrinks, listOfProducts }) => {
  const drinksWithAvailableIngredients = listOfDrinks.filter((eachObject) => {
    const { ingredients } = eachObject;
    const filteredIngredients = ingredients.filter((singleIngredients) => {
      if (listOfProducts.includes(singleIngredients)) {
        return singleIngredients;
      }
    });
    if (filteredIngredients.length > ingredients.length * 0.3) {
      return eachObject;
    }
  });

  return (
    <S.DrinkContainer>
      {drinksWithAvailableIngredients.map((drink) => (
        <DrinkCard
          name={drink.name}
          ingredients={drink.ingredients}
          price={drink.price}
          key={drink.name}
        />
      ))}
    </S.DrinkContainer>
  );
};
