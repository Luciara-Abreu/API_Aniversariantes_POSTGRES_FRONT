import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles'
import { BTrird } from './styles'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  width: string;
  heigth: string;

}

const ConsultaMesButton = (props:Props) =>{  
  const history = useHistory();

  const handleClick = () => {
    history.push('/consultaMes')
  }  

  return (
<BTrird>
<button {...props}  className="btn third" onClick={handleClick}/>

</BTrird>
  )
}

export default ConsultaMesButton


