import { getAuth } from "firebase/auth";
import { useHistory} from "react-router-dom";
import { app } from '../../../api/libs/firebase'


export const RequireAuth = ({ children }: { children: JSX.Element }) => {     
    const auth = getAuth(app)
    const history = useHistory();

    if (!auth) {
        history.push('/login')
    }
    return children;
}


/*
import { useContext } from "react";
import { useHistory} from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useContext(AuthContext);
    const history = useHistory();

    if (!auth.user) {
        history.push('/login')
    }
    return children;
}*/

