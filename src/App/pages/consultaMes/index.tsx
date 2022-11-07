//import { useRef } from 'react';
import CrudFireBase from '../../bd/crudFirebase';
import Header from '../../components/header/index';
import { Container, Body} from '../styles';

const ConsultaMes = () => {

  return (
    <Container>     
      <Header /> 
      <Body>       
      <h1> Aqui mostrará uma tabela de aniversariantes conforme mês selecionado </h1>      

      </Body>
    </Container>
  );
}

export default ConsultaMes