//import { useRef } from 'react';
import AddUsers from '../../contexts/addUsers';
import Header from '../../components/Header/index';
import { Container, BodyContainer, BodyWrap } from '../zstylesGlobal/styles';
import Theme from '../../components/Theme';

export const AddPage = () => {

  return (
<Theme>   
 <AddUsers />  
</Theme>
  );
}

export default AddPage
 