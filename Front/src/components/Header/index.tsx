import React from "react";
import * as S from './styles';
import ButtonsMenu from "../buttons/buttonsMenu";
import { useFormAuthContext } from "../../hooks/contextHook";


// https://youtu.be/AXKc4WhgLSA - criar header com typeScript

const Header: React.FC = () => {  
  const { value } = useFormAuthContext()



  return (
<S.HeaderContainer>
  <S.ContainerUp> 
    <S.Title>     
      **AGENDA ANIVERSARIANTES **
    </S.Title>
    <p>Seja bem vindo(a)! {value.state.name}</p>
  </S.ContainerUp>   
  <S.ContainerMenu>  
    <ButtonsMenu />
  </S.ContainerMenu>  
  </S.HeaderContainer>
  )
}

export default Header

 /* <DashboardButton>Dashboar</DashboardButton>*/