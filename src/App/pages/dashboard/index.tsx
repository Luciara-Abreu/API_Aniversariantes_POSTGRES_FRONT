//import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import { Container, Body } from './styles';

export const Dashboard = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/entrar')
  }  

  return (
    <Container>     
      <Header /> 

      <Body>        
      <div>     
      <h3> TESSSTETESSSTE
      TESSSTE
      TESSSTE TESSSTETESSSTE
      TESSSTE TESSSTETESSSTETESSSTE
      TESSSTE TESSSTETESSSTETESSSTETESSSTE
      TESSSTE
      TESSSTETESSSTETESSSTETESSSTETESSSTETESSSTETESSSTE
      TESSSTETESSSTETESSSTETESSSTETESSSTETESSSTETESSSTETESSSTE </h3>
      </div>  
        
      <div>        
        <button onClick={handleClick}>Pagina de Login</button>
      </div>
      </Body>
    </Container>
  );
}
      // <div>
      //const counterRef = useRef({ counter: 0 })
      //<p>Contador: {counterRef.current.counter}</p>
      //  <button onClick={() => counterRef.current.counter++}>Somar</button>
      // </div>