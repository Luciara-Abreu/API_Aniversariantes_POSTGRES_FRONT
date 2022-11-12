//import { useRef } from 'react';
import AddUsers from '../../contexts/addUsers';
import Header from '../../components/header/index';
import { Container, BodyContainer, BodyWrap, BodyForm } from '../zstylesGlobal/styles';

export const AddPage = () => {

  return (

<Container>     
<Header /> 
<BodyContainer> 
  <BodyWrap>
    <BodyForm>
    <h1> Aqui vai mostrar campos para add novos aniversariantes </h1>      
        <AddUsers />  
    </BodyForm>
    </BodyWrap>      
</BodyContainer>
</Container>
  );
}

export default AddPage

      // <div>
      //const counterRef = useRef({ counter: 0 })
      //<p>Contador: {counterRef.current.counter}</p>
      //  <button onClick={() => counterRef.current.counter++}>Somar</button>
      // </div>