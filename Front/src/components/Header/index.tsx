import React from "react";
import * as S from './styles';
import ButtonsMenu from "../buttons/buttonsMenu";
import { useFormContext } from '../../contexts/formContext/index'


// https://youtu.be/AXKc4WhgLSA - criar header com typeScript

const Header: React.FC = () => {  
  const { state } = useFormContext()

  return (
<S.HeaderContainer>
  <S.ContainerUp> 
    <S.Title>     
      **AGENDA ANIVERSARIANTES **
    </S.Title> 
      <p>Seja bem vindo(a)!{state.name}</p>
  </S.ContainerUp>   
  <S.ContainerMenu>  
    <ButtonsMenu />
  </S.ContainerMenu>  
  </S.HeaderContainer>
  )
}

export default Header

 /* <DashboardButton>Dashboar</DashboardButton>*/