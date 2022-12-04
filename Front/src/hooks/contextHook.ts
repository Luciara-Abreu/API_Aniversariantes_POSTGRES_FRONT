import { useContext } from "react"
import { AuthContext } from "../contexts/Auth/AuthContext"


// context Hook
export const useFormAuthContext = () => {
  const context = useContext(AuthContext)
  if(context ===undefined){
    throw new Error("useForm precisa ser usado dentro do FormProvider")
  }
  return context
  }