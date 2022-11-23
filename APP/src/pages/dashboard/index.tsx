//import { useRef } from 'react';
import Header from '../../components/header/index';
import { Container, BodyWrap } from './styles';
import Carrocel from '../../components/carrocel';

export const Dashboard = () => {

  return (
    <Container>     
      <Header /> 
        <BodyWrap>
        <Carrocel/> 
        </BodyWrap>
    </Container>
  );
}
// <div>
//<ListUsers /> 
      //const counterRef = useRef({ counter: 0 })
      //<p>Contador: {counterRef.current.counter}</p>
      //  <button onClick={() => counterRef.current.counter++}>Somar</button>
      // </div>