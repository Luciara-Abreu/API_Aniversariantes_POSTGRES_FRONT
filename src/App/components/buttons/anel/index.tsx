import React from  'react'
import { WrapButtonAnel, StylesButtonAnel} from "./styles";
import { useHistory } from 'react-router-dom';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {}

const ButtonLogoAnel: React.FC = (props: Props) => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  today.toLocaleDateString(); // "30/1/2022"

  const history = useHistory();
  const handleClick = () => {
    history.push('/entrar')
  }  

  return (
    <WrapButtonAnel>
      <StylesButtonAnel className="button" onClick={handleClick}>"XX/XX/XXXX"</StylesButtonAnel>
    </WrapButtonAnel>

  )
}

export default ButtonLogoAnel