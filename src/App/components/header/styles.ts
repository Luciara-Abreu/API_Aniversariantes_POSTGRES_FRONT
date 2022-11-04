import styled from "styled-components";

const HeaderContainer = styled.div`
  margin: 0;
  padding: 0.3% 0.3%; 
  box-sizing: border-box;
  background: #d8c3c3;  
  box-sizing: border-box;
`
const ContainerMenu = styled.div`
  width: 100%;
  margin: 3% 0 0.5% 0;
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.2rem;
  //background: red; // cor para visualização de exemplo
`
const ContainerUp =styled.div`
  width: 100%;
  display: flex;
  grid-template-columns: 1fr 1fr;
  gap: 0.2rem;
`
const Title =styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
gap: 2rem;
`
const Date =styled.div`
width: 50%;
margin: 1%;
display: flex;
justify-content: center;
gap: 1rem;
`
export {
  HeaderContainer,
  ContainerMenu,
  Title,
  Date,
  ContainerUp

}