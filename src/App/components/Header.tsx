import React from "react";
import { ButtonContainer, HeaderContainer, Button } from "./styles";
import { useHistory } from 'react-router-dom';
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
        <Button><button onClick={handleClick}>Top 10</button></Button>
        <Button><button onClick={handleClick}>Consulta por Mes</button></Button>
        <Button><button onClick={handleClick}>Add Aniversariantes</button></Button>  
  </ButtonContainer>  
</HeaderContainer>
  )
}

export default Header