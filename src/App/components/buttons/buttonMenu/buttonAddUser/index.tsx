import React from 'react'
import { useHistory } from 'react-router-dom'
import { ContainerButton } from '../stlyles';

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  width: string;
  heigth: string;
}

const AddUserButton = (props:Props) =>{  
  const history = useHistory();

  const handleClick = () => {
    history.push('/addUsers')
  }  

  return (
<ContainerButton>
<button {...props}  className="btn third" onClick={handleClick}/>
</ContainerButton>
  )
}

export default AddUserButton
