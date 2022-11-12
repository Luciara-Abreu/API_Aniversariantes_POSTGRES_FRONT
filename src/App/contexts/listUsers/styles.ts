import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin: 0;
`
const ContainerSemana = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 1% 0 0 0.1%;
  gap: 0.2rem;
`
const Semanas = styled.div`
  width: 14vw;
  min-height: 28vw;
  //background-color: #545353;
  border-radius: 10px;
  overflow: hidden;
  color: azure;
  font: 10px;
  padding: 0 5px 20px 2px;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2);
  background: -webkit-linear-gradient(to left, #696868, #545353);
  background: -o-linear-gradient(to left, #696868, #545353);
  background: -moz-linear-gradient(to left, #696868, #545353);
  background: linear-gradient(to left, #696868, #545353);
`

const TileSemana = styled.div`
  width: 14vw;
  min-height: auto;
  background-color: #414040;
  border-radius: 10px;
  overflow: hidden;
  color: azure;
  font: 10px;
  padding: 10px 5px 10px 6px;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2);
`
const Data = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  -ms-wrap-flow: auto;
  font-size: 75%;
  gap: 3.5rem;
  `
  const ContainerData = styled.div`
  font-size: 75%;
  padding-bottom: 10%;

  .p{
    padding: 10% 0 10% 0;
    background: red;
  }
  `


export {
  Container,
  ContainerSemana,
  Semanas,  
  TileSemana,
  ContainerData,
  Data
}