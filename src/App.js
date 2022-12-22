import { useState } from 'react';
import { Container } from './components/Container/Container'
import { InputContainer } from './components/InputContainer/InputContainer';
import { ContainerOfProducts } from './components/ContainerOfProducts/ContainerOfProducts';
import { drinks } from './drinksDataBase';
import { DrinkContainer } from './components/DrinkContainer/DrinkContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  const [listOfProducts, setlistOfProducts] = useState([])
  const listOfDrinks = drinks;

  return (
    <Container>
      <NavBar />
      <InputContainer setlistOfProducts={setlistOfProducts} listOfProducts={listOfProducts} />
      <ContainerOfProducts listOfProducts={listOfProducts} />
      <DrinkContainer listOfDrinks={listOfDrinks} listOfProducts={listOfProducts} />
    </Container>
  );
}

export default App;
