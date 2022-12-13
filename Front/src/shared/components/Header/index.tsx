import React, { useState } from "react";
import * as S from './styles';
import ButtonsMenu from "../buttons/buttonsMenu";
// https://youtu.be/AXKc4WhgLSA - criar header com typeScript

const Header: React.FC = () => {  
    const [user] = useState();

 

  return (
<S.HeaderContainer>
  <S.ContainerUp> 
    <S.Title>     
      **AGENDA ANIVERSARIANTES **
    </S.Title>
    <p>Seja bem vindo(a) {user}!</p>
  </S.ContainerUp>   
  <S.ContainerMenu>  
    <ButtonsMenu />
  </S.ContainerMenu>  
  </S.HeaderContainer>
  )
}

export default Header

