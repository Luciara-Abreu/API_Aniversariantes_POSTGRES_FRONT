import React from "react";

import { useHistory } from 'react-router-dom';
import { Button, ButtonContainer, HeaderContainer } from "./styles";
import ButtonAnel from '../buttons/anel/index'
// https://youtu.be/AXKc4WhgLSA - criar header com typeScript

const Header: React.FC = () => {

  const history = useHistory();
  const handleClick = () => {
    history.push('/entrar')
  }  

  return (
<HeaderContainer>
  <h1 className="header-logo">** Agenda Aniversariantes **</h1>
  <ButtonContainer>  
    <ButtonAnel />     
      
        <Button><button onClick={handleClick}>Top 10</button></Button>
        <Button><button onClick={handleClick}>Consulta por mês</button></Button>
        <Button><button onClick={handleClick}>Add aniversariantes</button></Button>  

  </ButtonContainer>  
</HeaderContainer>
  )
}

export default Header