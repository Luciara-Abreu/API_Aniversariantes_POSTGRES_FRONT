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
}
 