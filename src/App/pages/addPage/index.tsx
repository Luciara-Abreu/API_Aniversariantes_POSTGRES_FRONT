//import { useRef } from 'react';
import AddUsers from '../../contexts/addUsers';
import Header from '../../components/header/index';
import { Container, Body } from '../_Styles/styles';

export const AddPage = () => {

  return (
    <Container>     
      <Header /> 
      <Body>       
      <h1> Aqui vai mostrar campos para add novos aniversariantes </h1>      
        <AddUsers />    
      </Body>
    </Container>
  );
}

export default AddPage

      // <div>
      //const counterRef = useRef({ counter: 0 })
      //<p>Contador: {counterRef.current.counter}</p>
      //  <button onClick={() => counterRef.current.counter++}>Somar</button>
      // </div>