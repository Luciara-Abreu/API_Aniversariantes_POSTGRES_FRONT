import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../../contexts/Auth/AuthContext';

import { ContainerButton } from './styles';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> 

const ButtonsMenu = (props:Props) =>{  
  const auth = useContext(AuthContext);
  const history = useHistory();

  const handleClickHome = () => {
    history.push('/')
  }  
  
  const handleClickAddAniver = () => {
    history.push('/addAniver')
  }  

  const handleClickTop10 = () => {
    history.push('/Top10')
  }  

  const handleClickConsultaMes = () => {
    history.push('/consultaMes')
  }  


  const handleLogout = async () => {
    await auth.signout();
    //window.location.href = window.location.href;
    window.location.reload()
  }

  return (
<ContainerButton>
<button {...props}  className="btn third" onClick={handleClickHome}>DashBoard</button>
<button {...props}  className="btn third" onClick={handleClickTop10}>Top 10</button>
<button {...props}  className="btn third" onClick={handleClickConsultaMes}>Consulta Mes</button>
<button {...props}  className="btn third" onClick={handleClickAddAniver}>Add Aniver</button>
{auth.user && (
<button {...props}  className="btn third" onClick={handleLogout}>Sair</button>) 
}
</ContainerButton>
  )
}

export default ButtonsMenu

