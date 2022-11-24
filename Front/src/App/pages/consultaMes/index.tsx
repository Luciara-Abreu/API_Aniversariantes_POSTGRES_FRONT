//import { useRef } from 'react';
import Header from '../../components/header/index';
import { Container, BodyContainer, BodyWrap } from '../zstylesGlobal/styles';

const ConsultaMes = () => {

  return (
  <Container>     
<Header /> 
<BodyContainer> 
  <BodyWrap>
    <h1> Aqui mostrará uma tabela de aniversariantes conforme mês selecionado </h1>    
    </BodyWrap>      
</BodyContainer>
</Container>
  )
}

export default ConsultaMes