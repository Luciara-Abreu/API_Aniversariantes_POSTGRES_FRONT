import styled from "styled-components";

const HeaderContainer = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
`
    const ContainerUp =styled.div`    
    width: 100%;
    height: 70px;
    display: flex;
    overflow: hidden;
    justify-content: space-between; 
    align-items: center;
    padding: 10px;
    box-shadow: 0px 5px 20px #000;
 
    //background gradiente
    background: -webkit-linear-gradient(to left, #b721ff, #333);
    background: -o-linear-gradient(to left, #b721ff, #333);
    background: -moz-linear-gradient(to left, #b721ff, #333);
    background: linear-gradient(to left, #b721ff, #333);    
    `
  const Title =styled.div`
  color: #fff;
  text-shadow:0px 0px 3px #f05be6;
  font-size: 35px;
  font-weight: bold;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    font-size: 30px;
}
  @media screen and (max-width: 396px) {
    font-size: 22px;
}
  `
  const Date =styled.div`
  display: flex;
  justify-content: center;

@media screen and (max-width: 600px) {
  width: 50px;
}
  @media screen and (max-width: 396px) {
    width: 30px;
}
  `

const ContainerMenu =styled.div`    
width: 100%;
height: 45px;
display: flex;
justify-content: center; 
align-items: center;
box-shadow: 0px 5px 20px #000;
background: #525252;

@media screen and (max-width: 600px) {
  width: 100%;
  height: 80px; 
}
  @media screen and (max-width: 396px) {
    width: 100%;
    height: 80px; 
}
`

export {
  HeaderContainer,
  ContainerUp,
  Title,
  Date,
  ContainerMenu, 

}
