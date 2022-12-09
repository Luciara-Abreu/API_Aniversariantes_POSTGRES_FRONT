import { createContext } from 'react';
import { IUserType } from '../../interfaces/User';


export type AuthContextType = {
    user: IUserType | null;
    signin: (email: string, password: string) => Promise<boolean>;   
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);