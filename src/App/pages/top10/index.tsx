//import { useRef } from 'react';
import Header from '../../components/header/index';
import { Container, BodyContainer, BodyWrap, BodyForm } from '../zstylesGlobal/styles';


const Top10 = () => {

  return (    
<Container>     
<Header /> 
<BodyContainer> 
  <BodyWrap>
    <BodyForm>
    <h1> Aqui mostrará os 10 proximos aniversariantes do mês </h1>    
  
    </BodyForm>
    </BodyWrap>      
</BodyContainer>
</Container>
  )
}

export default Top10
