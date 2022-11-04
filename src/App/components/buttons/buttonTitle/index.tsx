import { StylesTile } from './styles'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {}

  const ButtonTitle = (props:Props) =>{  

  return(
    <StylesTile>
    <button {...props}  className="btn fourth"/>
    </StylesTile>
  )
}

export default ButtonTitle