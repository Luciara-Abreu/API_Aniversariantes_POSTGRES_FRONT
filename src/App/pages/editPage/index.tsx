import EditUsers from '../../bd/crud/editUsers';
import Header from '../../components/header/index';
import { Container, Body} from '../ZStyles';

const EditPage = () => {

  return (
    <Container>     
      <Header /> 
      <Body>    
        <EditUsers />    
      </Body>
    </Container>
  );
}

export default EditPage