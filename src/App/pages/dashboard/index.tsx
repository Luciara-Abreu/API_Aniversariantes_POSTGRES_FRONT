//import { useRef } from 'react';
import Header from '../../components/Header';
import { ContainerDash, Body } from './styles';

export const Dashboard = () => {

  return (
    <ContainerDash>     
      <Header /> 
      <Body>       
      <h3> TESSSTETESSSTE TESSSTESTE TESSSTETESSSTE </h3>
      </Body>
    </ContainerDash>
  );
}
      // <div>
      //const counterRef = useRef({ counter: 0 })
      //<p>Contador: {counterRef.current.counter}</p>
      //  <button onClick={() => counterRef.current.counter++}>Somar</button>
      // </div>