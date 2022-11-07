import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles'
import { BTrird } from './styles'

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
<BTrird>
<button {...props}  className="btn third" onClick={handleClick}/>

</BTrird>
  )
}

export default AddUserButton
