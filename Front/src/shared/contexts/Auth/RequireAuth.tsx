import { useHistory} from "react-router-dom";
import { auth } from '../../../libs/firebase'


export const RequireAuth = ({ children }: { children: JSX.Element }) => {     
    const history = useHistory();

    if (!auth) {
        history.push('Login')  
    }
    return children;
}



