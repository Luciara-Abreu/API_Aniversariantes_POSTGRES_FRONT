import EditUsers from '../../contexts/editUsers';
import Header from '../../components/header/index';
import { Container, BodyContainer, BodyWrap } from '../zstylesGlobal/styles';

const EditPage = () => {

  return (
            <Container>     
        <Header /> 
        <BodyContainer> 
          <BodyWrap>
            <h1> Aqui vai mostrar campos para deletar ou editar dados </h1>    
                <EditUsers />     
            </BodyWrap>      
        </BodyContainer>
        </Container>
    )
}

export default EditPage