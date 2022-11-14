//import { useRef } from 'react';
import Header from '../../components/header/index';
import { Container, BodyContainer, BodyWrap } from '../zstylesGlobal/styles';


const Top10 = () => {

  return (    
<Container>     
<Header /> 
<BodyContainer> 
  <BodyWrap>
    <h1> Aqui mostrará os 10 proximos aniversariantes do mês </h1>    
    </BodyWrap>      
</BodyContainer>
</Container>
  )
}

export default Top10
