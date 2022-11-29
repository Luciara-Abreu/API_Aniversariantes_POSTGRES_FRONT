import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
`
const ContainerSemana = styled.div`
  width: 350%;
  height: 70vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0.1rem;

  background: -webkit-linear-gradient(to left, #bdebf5, #dbbee9);
  background: -o-linear-gradient(to left, #bdebf5, #dbbee9);
  background: -moz-linear-gradient(to left, #bdebf5, #dbbee9);
  background: linear-gradient(to left, #bdebf5, #dbbee9);
`
const Semanas = styled.div`
  width: 100%;
  overflow: hidden;
  color: azure;
  font: 10px;
  border-radius: 10px;
  padding: 1px 0 0 5px;
  box-shadow: 5 5px 10px 5px rgb(239 227 238);
  background: -webkit-linear-gradient(to left, #696868, #545353);
  background: -o-linear-gradient(to left, #696868, #545353);
  background: -moz-linear-gradient(to left, #696868, #545353);
  background: linear-gradient(to left, #696868, #545353); 

@media (max-width: 768px)and (min-width: 481px) {
  width: 430px;
  height: 89.5vw;
}
@media (max-width: 480px)and (min-width: 320px) {
  //width: 378px; 
  width: 394px; 
  height: 134vw;
}
`

const TileSemana = styled.div`
  width: 35vw;
  height: 6vh;
  display: flex;
  color: azure;
  font: 10px;
  margin: -1px 0px 0px -9px;
  padding: 10px 5px 10px 10px;
  text-shadow:0px 0px 3px #f05be6;
  box-shadow:0px 4px 21px #000000;
  justify-content: center;
  align-items: center; 


  @media (max-width: 768px)and (min-width: 481px) {
  width: 72.5vw;
  height: 6vh;
}
@media (max-width: 480px)and (min-width: 320px) {
  width: 95.5vw;
  height: 6vh;
}
`
const SubTitles = styled.div`  
    display: flex;  
    justify-content: space-between;
    margin: 3px 0px -12px 0;
    p.Name{
      width: 77%;
      margin: 0 10px 0 10px;
      padding: 0 0 0 10px;
      text-shadow:0px 0px 3px #f05be6;
  } 
    p.birthdate{
      width: 23%;
      margin: 0 10px 0 10px;
      text-shadow:0px 0px 3px #f05be6;
  } 
  `
const HR = styled.div`
  margin:0;
  text-shadow:0px 0px 3px #f05be6;  
  margin: 0 14px 6px 18px;
  `
const Data = styled.div`
  display: flex;  
  justify-content: space-between;

  div.ContainerName{
    width: 77%;
    margin: 0 10px 0 10px;
    padding: 0 0 0 10px;
    font-family: Nunito, sans-serif;
    font-size: 15px;
    }
  div.ContainerBirthdate{
    width: 23%;
      margin: 0 10px 0 10px;
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