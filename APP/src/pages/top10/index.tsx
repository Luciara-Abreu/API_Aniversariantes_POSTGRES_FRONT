//import { useRef } from 'react';
import Header from '../../components/header/index';
import ListTOP10 from '../../contexts/listTop10';
import { Container, BodyContainer, BodyWrap } from './styles';


const Top10 = () => {

  return (    
<Container>     
<Header /> 
<BodyContainer> 
  <BodyWrap>
    <ListTOP10 />   
    </BodyWrap>      
</BodyContainer>
</Container>
  )
}

export default Top10
