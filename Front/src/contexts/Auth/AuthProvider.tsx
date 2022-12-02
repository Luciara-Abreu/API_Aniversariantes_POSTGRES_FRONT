//Provider vai usar o contexto = AuthContext

import { useState } from "react"
import { useApi } from "../../hooks/useApi"
import { User } from "../../interfaces/User"
import { AuthContext } from "./AuthContext"
// https://youtu.be/iD94avNeoXM 56:00

export const AuthProvider = ({children}: {children: JSX.Element}) =>{
  //um state para salvar o usuário 
  const [user, setUser]= useState<User | null>(null)
  const api = useApi()

  const signin = async (email: string, password: string)=> {
    //requisição ao back-end
    const data = await api.signin(email, password)
    if(data.user && data.token){
      setUser(data.user)
      return true
    }
    return false
  }

  const signout = async () => {
    console.log("signout está sendo executada.");
    await api.logout();
    setUser(null);
}

  return (
    <AuthContext.Provider value= {{user, signin, signout}}>
      {children}
    </AuthContext.Provider>

  )
}
