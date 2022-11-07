import React from "react";
import ButtonLogoAnel from "../buttons/anelDate";
import ButtonTitle from "../buttons/buttonTitle";
import AddUserButton from "../buttons/buttonMenu/buttonAddUser";
import ConsultaMesButton from "../buttons/buttonMenu/buttonConultaMes";
import Top10Button from "../buttons/buttonMenu/buttonTop10";
import { Title, Date, ContainerMenu, HeaderContainer, ContainerUp } from "./styles";
import DashboardButton from "../buttons/buttonMenu/buttonDash";
import LoginButton from "../buttons/buttonMenu/buttonLogin";

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
    <DashboardButton width={"100%"} heigth={""}>Dashboar</DashboardButton>
    <Top10Button width={"100%"} heigth={""}>TOP 10</Top10Button>
    <ConsultaMesButton width={"100%"} heigth={""}>CONSULTA MÊS</ConsultaMesButton>
    <AddUserButton width={"100%"} heigth={""}>ADD ANIVERSARIANTES</AddUserButton>
    <LoginButton width={"100%"} heigth={""}>Login</LoginButton>
  </ContainerMenu>  
    </HeaderContainer>
  )
}

export default Header
