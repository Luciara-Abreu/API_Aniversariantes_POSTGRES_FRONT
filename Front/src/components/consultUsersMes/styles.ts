import styled from 'styled-components'


const Container = styled.div`
  width: 99.7%;
  height: 70vh;
  border-radius: 10px;
  overflow: hidden;
  overflow: hidden;
  color: azure;
  font: 10px;
  box-shadow: 1px 1px 13px 5px rgb(200 198 213);

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

const Title = styled.div`
  width: 69.9vw;
  height: 6.1vh;
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

const DiaSemana = styled.div`
width: 100%;
background: red;
  `


export {
  Container,  
  Title,
  DiaSemana
}