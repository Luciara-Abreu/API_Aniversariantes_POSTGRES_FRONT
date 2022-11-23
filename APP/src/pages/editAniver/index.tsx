import EditUsers from '../../contexts/editUsers';
import Header from '../../components/header/index';
import { Container, BodyContainer, BodyWrap } from './styles';

const EditPage = () => {

  return (
            <Container>     
        <Header /> 
        <BodyContainer> 
          <BodyWrap>  
            <EditUsers />     
          </BodyWrap>      
        </BodyContainer>
        </Container>
    )
}

export default EditPage