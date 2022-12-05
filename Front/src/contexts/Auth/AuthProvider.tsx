//Provider vai usar o contexto = AuthContext

import { ReactNode, useEffect, useReducer, useState } from "react"
import { useApi } from "../../hooks/useApi"
import { initialData, IUserType } from "../../interfaces/User"
import { AuthContext } from "./AuthContext"
import { formReducer } from "./AuthReducer"
// https://youtu.be/iD94avNeoXM 01:23

type ProviderType = {
  children: ReactNode
  }  

export const AuthProvider = ({children}:ProviderType) =>{
  //um state para salvar o usuário 
  const [user, setUser]= useState<IUserType | null>(null)
  const api = useApi()

  const[state, dispatch] = useReducer(formReducer, initialData)
  const value = { state, dispatch}

  const signin = async (email: string, password: string)=> {
    const data = await api.signin(email, password)
    if(data.user && data.token){
      setUser(data.user)
      setToken(data.token)
      return true
    }
    return false
  }

  const signout = async () => {
    console.log("signout está sendo executada.");
    await api.logout();
    setUser(null);
    setToken('')
}

const setToken = (token:string) =>{
  localStorage.setItem('authToken', token)
} 

useEffect(() => {
  const validateToken = async()=> {
    const storageData = localStorage.getItem('authToken')
    if(storageData){
      const data = await api.validateToken(storageData)
      if(data.user){
        setUser(data.user)
      }
    }
  }
  validateToken()
}, [api])

return (
  <AuthContext.Provider value= {{user, signout, signin, value}}>
    {children}
  </AuthContext.Provider>

)
}
