import { createContext } from 'react'
import { ActionType, IUserType } from '../../interfaces/User'


export type AuthContextType = {
  user: IUserType | null,
  value:{
    state: IUserType,
    dispatch: (action: ActionType ) => void
  }
  signin: (email:string, password:string)=> Promise<boolean>,
  signout: ()=> void
  }


//const FormContext = createContext<ContextType | undefined>(undefined)
export const AuthContext = createContext<AuthContextType | undefined >(null!);

