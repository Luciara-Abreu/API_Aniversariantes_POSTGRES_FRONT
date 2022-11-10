import React from 'react'
import { useHistory } from 'react-router-dom'
import { ButtonGoogle } from './styles';


type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> 

const GoogleButton = (props:Props) =>{  

  return (
<ButtonGoogle>
<button {...props}  className="btn third" />
</ButtonGoogle>
  )
}

export default GoogleButton
