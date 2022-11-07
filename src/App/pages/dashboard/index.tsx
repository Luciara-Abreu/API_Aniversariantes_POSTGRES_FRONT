//import { useRef } from 'react';
import ListUsers from '../../bd/crud/listUsers';
import Header from '../../components/header/index';
import { Container, Body} from '../ZStyles';

export const Dashboard = () => {

  return (
    <Container>     
      <Header /> 
      <Body>       
      <h1> Aqui vai uma tabela com os aniversariantes da semana </h1>      
        <ListUsers />    
      </Body>
    </Container>
  );
}
      // <div>
      //const counterRef = useRef({ counter: 0 })
      //<p>Contador: {counterRef.current.counter}</p>
      //  <button onClick={() => counterRef.current.counter++}>Somar</button>
      // </div>