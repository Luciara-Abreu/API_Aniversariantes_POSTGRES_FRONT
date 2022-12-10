import React, { useContext } from "react";
import * as S from './styles';
import ButtonsMenu from "../buttons/buttonsMenu";
import { AuthContext } from "../../contexts/Auth/AuthContext";


// https://youtu.be/AXKc4WhgLSA - criar header com typeScript

const Header: React.FC = () => {  
  const auth = useContext(AuthContext)

  return (
<S.HeaderContainer>
  <S.ContainerUp> 
    <S.Title>     
      **AGENDA ANIVERSARIANTES **
    </S.Title>
    <p>Seja bem vindo(a) {auth?.user?.name}!</p>
  </S.ContainerUp>   
  <S.ContainerMenu>  
    <ButtonsMenu />
  </S.ContainerMenu>  
  </S.HeaderContainer>
  )
}

export default Header

 /* <DashboardButton>Dashboar</DashboardButton>*/