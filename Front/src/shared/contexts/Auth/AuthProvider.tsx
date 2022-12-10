import { useEffect, useState } from "react";
import { useApi } from "../../../api/useApi";
import { IUserType } from "../../interfaces/User";
import { AuthContext } from "./AuthContext";


export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<IUserType | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if (storageData) {
                const data = await api.validateToken(storageData);
                if (data.user) {
                    setUser(data.user);
                }
            }
        }
        validateToken();
    }, [api]);

    const signin = async (email: string, password: string) => {
        const data = await signin(email, password);
        if (data) {
            setUser(user);
            return true;
        }
        return false;
    }

    const signout = async () => {
        console.log("signout está sendo executada.");
        setUser(null);
        setToken('');
        await signout();
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    return (
        <AuthContext.Provider value = {{user,signin, signout}}>
            {children}
        </AuthContext.Provider>
    );
}

/**
 * import { useEffect, useState } from "react";
import { useApi } from "../../../api/useApi";
import { IUserType } from "../../interfaces/User";
import { AuthContext } from "./AuthContext";


export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<IUserType | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if (storageData) {
                const data = await api.validateToken(storageData);
                if (data.user) {
                    setUser(data.user);
                }
            }
        }
        validateToken();
    }, [api]);

    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password);
        if (data) {
            setUser(user);
            return true;
        }
        return false;
    }

    const signout = async () => {
        console.log("signout está sendo executada.");
        setUser(null);
        setToken('');
        await api.logout();
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    return (
        <AuthContext.Provider value = {{user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    );
}
 */