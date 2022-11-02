import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { TableContainer } from './styles';

export const Dashboard = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/entrar')
  }
  

  

  return (
    <TableContainer>      
      <div>        
        <button>Agenda Aniversariantes</button>
      </div>
      



      <div>        
        <button onClick={handleClick}>Pagina de Login</button>
      </div>
    </TableContainer>

  );
}
      // <div>
      //const counterRef = useRef({ counter: 0 })
      //<p>Contador: {counterRef.current.counter}</p>
      //  <button onClick={() => counterRef.current.counter++}>Somar</button>
      // </div>