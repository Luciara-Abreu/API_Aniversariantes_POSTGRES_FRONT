//import { useRef } from 'react';
import AddUsers from '../../components/addUsers';
import Theme from '../../components/Theme';
import { RequireAuth } from '../../contexts/Auth/RequireAuth';

 const AddAniver = () => {

  return (
    <RequireAuth>
      <Theme>   
        <AddUsers />  
      </Theme>
    </RequireAuth>
  );
}

export default AddAniver


