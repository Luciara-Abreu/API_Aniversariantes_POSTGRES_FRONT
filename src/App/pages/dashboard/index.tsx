//import { useRef } from 'react';
import ListUsers from '../../contexts/listUsers';
import Header from '../../components/header/index';
import { Container, BodyContainer, BodyWrap, BodyForm } from '../zstylesGlobal/styles';
import Carrocel from '../../components/carrocel';

export const Dashboard = () => {

  return (
    <Container>     
      <Header /> 
      <BodyContainer> 
        <BodyWrap>
          <BodyForm>
      <h1> Aqui vai uma tabela com os aniversariantes da semana </h1>      
        <Carrocel/>   
          </BodyForm>
          </BodyWrap>      
      </BodyContainer>
    </Container>
  );
}
// <div>
//<ListUsers /> 
      //const counterRef = useRef({ counter: 0 })
      //<p>Contador: {counterRef.current.counter}</p>
      //  <button onClick={() => counterRef.current.counter++}>Somar</button>
      // </div>