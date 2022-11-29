import EditUsers from '../../contexts/editUsers';
import Header from '../../components/Header/index';
import { Container, BodyContainer, BodyWrap } from '../zstylesGlobal/styles';
import Theme from '../../components/Theme';

const EditPage = () => {

  return (
      <Theme> 
         <EditUsers />   
       </Theme>
    )
}

export default EditPage