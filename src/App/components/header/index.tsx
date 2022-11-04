import React from "react";
import ButtonLogoAnel from "../buttons/anel";
import ButtonTrird from "../buttons/buttonMenu";
import ButtonTitle from "../buttons/buttonTitle";

import { Title, Date, ContainerMenu, HeaderContainer, ContainerUp } from "./styles";

// https://youtu.be/AXKc4WhgLSA - criar header com typeScript

const Header: React.FC = () => {  

  return (
<HeaderContainer>
<ContainerUp> 
  <Title>     
    <ButtonTitle>**AGENDA ANIVERSARIANTES **</ButtonTitle>
  </Title> 
  <Date>     
  <ButtonLogoAnel/>  
  </Date>
  </ContainerUp>   
    <ContainerMenu>  
    <ButtonTrird width={"100%"} heigth={""}>TOP 10</ButtonTrird>
    <ButtonTrird width={"100%"} heigth={""}>CONSULTA MÊS</ButtonTrird>
    <ButtonTrird width={"100%"} heigth={""}>ADD ANIVERSARIANTES</ButtonTrird>
  </ContainerMenu>  
    </HeaderContainer>
  )
}

export default Header
//<button onClick={handleClick}>Consulta por mês</button></Button>
//<h1 className="header-logo">** Agenda Aniversariantes **</h1>