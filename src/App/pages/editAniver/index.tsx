import EditUsers from '../../contexts/editUsers';
import Header from '../../components/header/index';
import { Container, BodyContainer, BodyWrap, BodyForm } from '../zstylesGlobal/styles';

const EditPage = () => {

  return (
            <Container>     
        <Header /> 
        <BodyContainer> 
          <BodyWrap>
            <BodyForm>
            <h1> Aqui vai mostrar campos para deletar ou editar dados </h1>    
                <EditUsers />     
            </BodyForm>
            </BodyWrap>      
        </BodyContainer>
        </Container>
    )
}

export default EditPage