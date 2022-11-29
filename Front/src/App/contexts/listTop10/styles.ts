import styled from 'styled-components'


const Container = styled.div`
  width: 100%;
  height: 70vh;
  border-radius: 10px;
  overflow: hidden;
  padding: 20px 55px 0px 55px;  
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

const TitleTop10 = styled.div`
  width: 60.5vw;
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


  @media (max-width: 768px)and (min-width: 481px) {
  width: 72.5vw;
  height: 6vh;
}
@media (max-width: 480px)and (min-width: 320px) {
  width: 95.5vw;
  height: 6vh;
}
`

const HR = styled.div`
  margin:0;
  text-shadow:0px 0px 3px #f05be6;  
  margin: -11px 17px 4px 21px;
  `

const Data = styled.div`
  display: flex;  
  justify-content: space-between;
  
  ul{
  list-style: none;  
  }

  &.ContainerName{
    width: 25vw;  
    font-family: Nunito, sans-serif;
    font-size: 15px;
    margin-left: 20px;
    padding-left: 10px;
    }

  &.ContainerBirthdate{
    width: 7vw;
    font-family: Nunito, sans-serif;
    font-size: 15px;
  }

  &.ContainerEmail{
    width: 10vw;
    font-family: Nunito, sans-serif;
    font-size: 15px;
    margin-left:-50px;
  }

  &.ContainerWhatsApp{
    width: 10vw;
    font-family: Nunito, sans-serif;
    font-size: 15px; 
    margin: 0 10px;
  }
  `


  const SubTitles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-top: 5px; 
  
p.Name{
  width: 25vw;  
    font-family: Nunito, sans-serif;
    font-size: 15px;
    margin-left: 20px;
    padding-left: 10px;
  }
p.birthdate{
  width: 7vw;
  font-family: Nunito, sans-serif;
  font-size: 15px; 
  }

p.email{
  width: 10vw;
  font-family: Nunito, sans-serif;
  font-size: 15px;
  margin-left:-50px;
  }

p.whatsApp{
  width: 10vw;
  font-family: Nunito, sans-serif;
  font-size: 15px; 
  margin: 0 10px;
  }
  `

  const BesideInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
 `


export {
  Container,  
  TitleTop10,
  SubTitles,
  HR,  
  Data,
  BesideInputContainer
}