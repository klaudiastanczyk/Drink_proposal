import { useState } from 'react';
import * as S from './InputContainer.styles';

export const InputContainer = ({setlistOfProducts, listOfProducts}) => {
  const [value, setValue] = useState('');
  const addProduct = () => {
    if(value !== ''){setlistOfProducts([...listOfProducts, value])
    setValue('')
  } else {
    alert('Nie może być puste')
  }
  }

  return (
    <S.InputContainer>
      <S.Input onKeyUp={(e) => {
        if(e.key ==="Enter"){
          addProduct()
        }
      }} placeholder="Enter your ingredients" value={value} onChange={(e) => {
        setValue(e.target.value)
      }}></S.Input>
      <S.Button onClick={() => {
        addProduct()
      }}>Check!</S.Button>
    </S.InputContainer>
  )
}