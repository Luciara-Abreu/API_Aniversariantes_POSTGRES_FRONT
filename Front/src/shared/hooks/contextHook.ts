import { useContext } from "react"
import { ChangeContext } from "../contexts/Change/ChangeContext"



// context Hook
export const useChangeContext = () => {
  const context = useContext(ChangeContext)
  if(context ===undefined){
    throw new Error("useForm precisa ser usado dentro do FormProvider")
  }
  return context
  }