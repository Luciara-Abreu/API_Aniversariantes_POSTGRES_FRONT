//import { useRef } from 'react';
import Header from '../../components/header/index';
import { Container, BodyContainer, BodyWrap, BodyForm } from '../zstylesGlobal/styles';

const ConsultaMes = () => {

  return (
  <Container>     
<Header /> 
<BodyContainer> 
  <BodyWrap>
    <BodyForm>
    <h1> Aqui mostrará uma tabela de aniversariantes conforme mês selecionado </h1>    
    </BodyForm>
    </BodyWrap>      
</BodyContainer>
</Container>
  )
}

export default ConsultaMes