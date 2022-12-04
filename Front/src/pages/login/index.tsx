
import { useHistory } from 'react-router-dom'
import cake from '../../assets/Gifs/cake2.gif'
import * as  S from './styles'

import { ChangeEvent, useContext } from 'react'
import AuthGoogle from '../../services/authGoogle'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { FormAction } from '../../interfaces/User'
import { useFormAuthContext } from '../../hooks/contextHook'



const Login = () => {
  
  const auth = useContext(AuthContext)
  const history = useHistory();
  const handleClick = () => {
    history.push('/criarConta')
  }

  const { value } = useFormAuthContext()
  //Mudar email
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    value.dispatch({
      type:FormAction.setEmail,
      payload: e.target.value
    })
  }
  //Mudar senha
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    value.dispatch({
      type:FormAction.password,
      payload: e.target.value
    })
  }
  /*
  const handleLogin = async () =>{
    if(value.state.email && value.state.password){
      const isLogged = await auth?.signin(value.state.email, value.state.password)
        if(isLogged) {
          history.push('/')
        }
    }else {
      alert("Digite seus dados para entrar")
    }
  }
  */

  const handleLogin = () =>{
    if(value.state.email && value.state.password){
      const isLogged = auth?.signin(value.state.email, value.state.password)
        if(isLogged) {
          history.push('/')
        }
    }else {
      alert("Digite seus dados para entrar")
    }
  }
  
//    <S.LoginFormTitle>Bem vindo ao App de Aniversariantes</S.LoginFormTitle>
  return (
    <S.Container>
      <S.ContainerLogin>
        <S.WrapLogin>
          <S.LoginForm>        
          <S.LoginFormTitle>{value.state.email}</S.LoginFormTitle>
            <S.DivLogo>
              <S.LogoForm><img src={cake} alt="CakeNiver" /></S.LogoForm>
            </S.DivLogo>

            <S.ContainerInput>
              <S.WrapInput>
                <input
                  className={value.state.email !== "" ? 'has-val input' : 'input'}
                  type='email'
                  value={value.state.email}
                  onChange={handleEmailChange}
                />
                <span className='FocusInput' data-placeholder='Email'></span>
              </S.WrapInput>

              <S.WrapInput>
                <input
                  className={value.state.password !== "" ? 'has-val input' : 'input'}
                  type='password'
                  value={value.state.password}
                  onChange={handlePasswordChange}
                />
                <span className='FocusInput' data-placeholder='Password'></span>
              </S.WrapInput>
            </S.ContainerInput>

            <S.ContainerLoginFormBtn>
              <button type="submit" onClick={handleLogin}className="login-form-btn">Login</button>
            </S.ContainerLoginFormBtn>
            <AuthGoogle />
            <div className="text-criarConta"></div>
            <div className="txt1">Não possui conta?</div>
            <a href="#" onClick={handleClick} className="txt2">Criar Conta</a>
          </S.LoginForm>
        </S.WrapLogin>
      </S.ContainerLogin>
    </S.Container>

  )
}

export default Login