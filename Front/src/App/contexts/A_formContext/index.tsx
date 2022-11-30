// [ok] Context [] Reducer [] provider [] Hook 
import { createContext, ReactNode, useContext,  useReducer } from 'react'

type StateType = {
  currentStep: number,
  name: string,
  email: string,
  fone: string,
  birthdate:string,
  password: string
}

type ActionType = {
  type: FormAction,
  payload: any

}

type ContextType = {
  state: StateType,
  dispatch: (action: ActionType ) => void
}

type ProviderType = {
children: ReactNode
}

 export enum FormAction {
   setCurrentStep,  //Qual é a etapa
  //Set... trocar os dados do state  
  setName,
  setEmail,
  setFone,
  setBirthdate,
  password
}

const initialData: StateType = {
  currentStep: 0,
  name: '',
  email: '',
  fone: '',
  birthdate:'',
  password: ''
}

//Context
const FormContext = createContext<ContextType | undefined>(undefined)


//Reducer
const formReducer = (state: StateType, action: ActionType) => {
  switch(action.type){
    case FormAction.setCurrentStep:
      return {...state, currentStep: action.payload}
    case FormAction.setName:
      return {...state, name: action.payload}
    case FormAction.setEmail:
      return {...state, email: action.payload}
    case FormAction.setFone:
      return {...state, fone: action.payload}
    case FormAction.setBirthdate:
      return {...state, birthdate: action.payload}
    case FormAction.password:
      return {...state, password: action.payload}
    default:
      return state 
  }
}

/*
Provider = Ele usa o reducer e ele que dá acesso a todos os dados acima na aplicação geral.
Ou seja, iremos importar lá no App.tsx acima do Router ele é o componente principal da aplicação
pois ele que disponibiliza os dados dos usuários para toda a aplicação
*/

export const FormProvider = ({children}: ProviderType)=> {
const[state, dispatch] = useReducer(formReducer, initialData)
const value = { state, dispatch}
  return(
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}

// context Hook
export const useForm = () => {
const context = useContext(FormContext)
if(context ===undefined){
  throw new Error("useForm precisa ser usado dentro do FormProvider")
}
return context
}
