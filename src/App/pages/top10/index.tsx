//import { useRef } from 'react';
import Header from '../../components/header/index';
import { Container, Body} from '../styles';

const Top10 = () => {

  return (
    <Container>     
      <Header /> 
      <Body>       
      <h1> Aqui mostrará os 10 proximos aniversariantes do mês </h1>      
      </Body>
    </Container>
  );
}

export default Top10
