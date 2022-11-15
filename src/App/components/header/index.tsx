import React from "react";
import { Title, ContainerMenu, HeaderContainer, ContainerUp } from "./styles";
import ButtonsMenu from "../buttons/buttonsMenu";

// https://youtu.be/AXKc4WhgLSA - criar header com typeScript

const Header: React.FC = () => {  


  return (
<HeaderContainer>
<ContainerUp> 
  <Title>     
    **AGENDA ANIVERSARIANTES **
  </Title> 
</ContainerUp>   
    <ContainerMenu>  
<ButtonsMenu />
  </ContainerMenu>  
  </HeaderContainer>
  )
}

export default Header

 /* <DashboardButton>Dashboar</DashboardButton>*/