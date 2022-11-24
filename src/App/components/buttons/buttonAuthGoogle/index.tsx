import React from 'react'
import { ButtonGoogle } from './styles'


type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> 

const GoogleButton = (props:Props) =>{  

  return (
<ButtonGoogle>
<button {...props}  className="btn third" />
</ButtonGoogle>
  )
}

export default GoogleButton
