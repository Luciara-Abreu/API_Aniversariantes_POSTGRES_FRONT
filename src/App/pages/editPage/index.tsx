import EditUsers from '../../bd/crud/editUsers';
import Header from '../../components/header/index';
import { Container, Body} from '../ZStyles';

const EditPage = () => {

  return (
    <Container>     
      <Header /> 
      <Body>    
      <h1> Aqui vai mostrar campos para deletar ou editar dados </h1>    
        <EditUsers />    
      </Body>
    </Container>
  );
}

export default EditPage