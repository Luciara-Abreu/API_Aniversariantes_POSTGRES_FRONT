import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles'
import { BTrird } from './styles'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  width: string;
  heigth: string;

}

const ButtonTrird = (props:Props) =>{  
  const history = useHistory();

  const handleClick = () => {
    history.push('/entrar')
  }  

  return (
<BTrird>
<button {...props}  className="btn third" onClick={handleClick}/>

</BTrird>
  )
}

export default ButtonTrird

/*

<button {...props}  className="btn third" onClick={handleTop10}/>
<button {...props}  className="btn third" onClick={handleAddUsers}/>
<button {...props}  className="btn third" onClick={handleEditar}/>

  const handleTop10 = () => {
    history.push('/Top10')
  }  
  const handleAddUsers = () => {
    history.push('/addUsers')
  }  
  const handleEditar = () => {
    history.push('/editar')
  } 
  */