import * as S from './ContainerOfProducts.styles';

export const ContainerOfProducts = ({listOfProducts}) => {
  return (
    <S.ContainerOfProducts>{
      listOfProducts.map(x => 
        <S.List key={x}>{x}</S.List>)
      }</S.ContainerOfProducts>
  )
}