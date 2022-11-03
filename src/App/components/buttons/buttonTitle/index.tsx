import { useHistory } from 'react-router-dom';
import { StylesButton } from './styles'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {}

  const ButtonTitle = (props:Props) =>{  
    const history = useHistory();
    const handleClick = () => {
      history.push('/entrar')
    }  
  return(
    <StylesButton>
    <button {...props}  className="btn fourth" onClick={handleClick}/>
    </StylesButton>
  )
}

export default ButtonTitle