import React from 'react'
import { useHistory } from 'react-router-dom'
import { ContainerButton } from './styles';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> 

const ButtonsMenu = (props:Props) =>{  
  const history = useHistory();

  const handleClickHome = () => {
    history.push('/')
  }  
  const handleClickLogin = () => {
    history.push('/entrar')
  }  
  
  const handleClickAddAniver = () => {
    history.push('/addPage')
  }  

  const handleClickTop10 = () => {
    history.push('/Top10')
  }  

  const handleClickConsultaMes = () => {
    history.push('/consultaMes')
  }  

  return (
<ContainerButton>
<button {...props}  className="btn third" onClick={handleClickHome}>DashBoard</button>
<button {...props}  className="btn third" onClick={handleClickTop10}>Top 10</button>
<button {...props}  className="btn third" onClick={handleClickAddAniver}>Add Aniver</button>
<button {...props}  className="btn third" onClick={handleClickConsultaMes}>Consulta Mes</button>
<button {...props}  className="btn third" onClick={handleClickLogin}>Login</button>

</ContainerButton>
  )
}

export default ButtonsMenu

