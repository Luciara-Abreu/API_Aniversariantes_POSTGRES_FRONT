import React from  'react'
import { WrapButtonAnel, StylesButtonAnel} from "./styles";
import { useHistory } from 'react-router-dom';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {}

const ButtonLogoAnel: React.FC = (props: Props) => {
  var data = new Date()
  var dia = String(data.getDate()).padStart(2, '0')
  var mes = String(data.getMonth() + 1).padStart(2, '0')
  var ano = data.getFullYear()
  const dataAtual = dia + '/' + mes + '/' + ano

  const history = useHistory();
  const handleClick = () => {
    history.push('/entrar')
  }  
      //<ToDate />

  return (
    <WrapButtonAnel>
      <StylesButtonAnel className="button" onClick={handleClick}>
      {dataAtual}
      </StylesButtonAnel>
    </WrapButtonAnel>

  )
}

export default ButtonLogoAnel