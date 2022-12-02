import { useContext } from "react"
import Login from '../../pages/login/index'
import { AuthContext } from "./AuthContext"

export const RequireAuth = ({children}: {children: JSX.Element}) => {
//validar se tem usuário logado
const auth = useContext(AuthContext)

if(!auth.user){
  return <Login />
}

return children
}