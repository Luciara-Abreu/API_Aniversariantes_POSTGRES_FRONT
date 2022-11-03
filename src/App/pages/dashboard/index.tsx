//import { useRef } from 'react';
import Header from '../../components/header/index';
import { ContainerDash, Body } from './styles';

export const Dashboard = () => {

  return (
    <ContainerDash>     
      <Header /> 
      <Body>       
      <h3> AQUI VAI UMA TABELA </h3>
      </Body>
    </ContainerDash>
  );
}
      // <div>
      //const counterRef = useRef({ counter: 0 })
      //<p>Contador: {counterRef.current.counter}</p>
      //  <button onClick={() => counterRef.current.counter++}>Somar</button>
      // </div>