//Provider vai usar o contexto = AuthContext

import { ReactNode, useReducer } from "react"
import { initialData } from "../../interfaces/User"
import { ChangeContext } from "./ChangeContext"
import { formReducer } from "./ChangeReducer"


type ProviderType = {
  children: ReactNode
  }  

export const ChangeProvider = ({children}:ProviderType) =>{
  const[state, dispatch] = useReducer(formReducer, initialData)
  const value = { state, dispatch}

return (
  <ChangeContext.Provider value= {value}>
    {children}
  </ChangeContext.Provider>
)}

