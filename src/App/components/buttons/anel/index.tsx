import React from  'react'
import { WrapButtonAnel, StylesButtonAnel} from "./styles";
import { useHistory } from 'react-router-dom';

const ButtonAnel: React.FC = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/entrar')
  }  

  return (
    <WrapButtonAnel>
      <StylesButtonAnel className="button" onClick={handleClick}>Submit</StylesButtonAnel>
    </WrapButtonAnel>

  )
}

export default ButtonAnel