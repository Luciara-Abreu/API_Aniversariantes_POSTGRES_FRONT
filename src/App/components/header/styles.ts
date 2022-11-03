import styled from "styled-components";

const HeaderContainer = styled.div`
  margin: 0;
  padding: 0.3% 0.3%; 
  box-sizing: border-box;
  background: #d8c3c3;  
  box-sizing: border-box;
`
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  //background: red; // cor para visualização de exemplo
`
const Button =styled.div`
width: auto;
gap: 1rem;
`
export {
  HeaderContainer,
  ButtonContainer,
  Button
}
