import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
`
const ContainerSemana = styled.div`
  width: 180%;
  min-height: 31vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 0 0 0 0.1%;
  gap: 0.3rem;

  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2);
  background: -webkit-linear-gradient(to left, #696868, #afa9a9);
  background: -o-linear-gradient(to left, #696868, #afa9a9);
  background: -moz-linear-gradient(to left, #696868, #afa9a9);
  background: linear-gradient(to left, #696868, #afa9a9); 
`
const Semanas = styled.div`
  width: 100%;
  overflow: hidden;
  gap: 5rem;
  color: azure;
  font: 10px;
  border-radius: 10px;
  padding: 1px 0 0 5px;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2);
  background: -webkit-linear-gradient(to left, #696868, #545353);
  background: -o-linear-gradient(to left, #696868, #545353);
  background: -moz-linear-gradient(to left, #696868, #545353);
  background: linear-gradient(to left, #696868, #545353); 
`

const TileSemana = styled.div`
  width: 22.6vw;
  height: 6vh;
  display: flex;
  border-radius: 10px;
  color: azure;
  font: 10px;
  border-radius: 10px;  
  margin: -1px 0px 0px -9px;
  padding: 10px 5px 10px 10px;
  text-shadow:0px 0px 3px #f05be6;
  box-shadow:0px 4px 21px #000000;
  justify-content: center;
  align-items: center; 
`
const SubTitles = styled.div`  
    display: flex;  
    justify-content: space-between;
    margin: 2px 0px -12px 0;
    p.Name{
      width: 72%;
      text-shadow:0px 0px 3px #f05be6;
  } 
    p.birthdate{
      width: 28%;
      text-shadow:0px 0px 3px #f05be6;
  } 
  `
const HR = styled.div`
  margin:0;
  text-shadow:0px 0px 3px #f05be6;  
  padding: 0px 0 6px 0;
  `
const Data = styled.div`
  display: flex;  
  justify-content: space-between;

  div.ContainerName{
    width: 72%;
    font-family: Nunito, sans-serif;
  font-size: 15px;
    }
  div.ContainerBirthdate{
    width: 28%;
    font-family: Nunito, sans-serif;
  font-size: 15px;
  }

  ul{
  list-style: none;  
}
  `


export {
  Container,
  ContainerSemana,
  Semanas,  
  TileSemana,
  SubTitles,
  HR,  
  Data
}