//import { useRef } from 'react';
import AddUsers from '../addUsers';
import Header from '../../components/header/index';
import { Container, BodyContainer, BodyWrap } from './styles';

export const AddPage = () => {

  return (

<Container>     
<Header />   
<BodyContainer> 
  <BodyWrap>
        <AddUsers />  
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