//Provider vai usar o contexto = AuthContext
import { ActionType, FormAction, IUserType } from "../../interfaces/User"

//Reducer
export const formReducer = (state: IUserType, action: ActionType) => {

  switch(action.type){
    case FormAction.setName:
      return {...state, name: action.payload}
    case FormAction.setEmail:
      return {...state, email: action.payload}
    case FormAction.setFone:
      return {...state, fone: action.payload}
    case FormAction.setBirthdate:
      return {...state, birthdate: action.payload}
    case FormAction.setPassword:
      return {...state, password: action.payload}
    default:
      return state 
  }
}


