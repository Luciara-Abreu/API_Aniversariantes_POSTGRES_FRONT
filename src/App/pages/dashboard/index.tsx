//import { useRef } from 'react';
import CrudFireBase from '../../bd/crudFirebase';
import Header from '../../components/header/index';
import { Container, Body} from '../styles';

export const Dashboard = () => {

  return (
    <Container>     
      <Header /> 
      <Body>       
      <h1> AQUI VAI UMA TABELA </h1>      
        <CrudFireBase />    
      </Body>
    </Container>
  );
}
      // <div>
      //const counterRef = useRef({ counter: 0 })
      //<p>Contador: {counterRef.current.counter}</p>
      //  <button onClick={() => counterRef.current.counter++}>Somar</button>
      // </div>