
import { useHistory } from 'react-router-dom'
import cake from '../../assets/Gifs/cake2.gif'
import * as  S from './styles'
import { useFormContext, FormAction } from '../../contexts/formContext/index'
import { ChangeEvent } from 'react'
import AuthGoogle from '../../services/authGoogle'


const Login = () => {

  const history = useHistory();
  const handleClick = () => {
    history.push('/criarConta')
  }

  const { state, dispatch } = useFormContext()
  //Mudar email
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type:FormAction.setEmail,
      payload: e.target.value
    })
  }
  //Mudar senha
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type:FormAction.password,
      payload: e.target.value
    })
  }
  const handleNextStep = ()=>{
    if(state.email !== ''){
      history.push('/')
    }else {
      alert("Digite seus dados para entrar")
    }
  }

  return (
    <S.Container>
      <S.ContainerLogin>
        <S.WrapLogin>
          <S.LoginForm>        
          <S.LoginFormTitle>Bem vindo ao App de Aniversariantes</S.LoginFormTitle>
            <S.DivLogo>
              <S.LogoForm><img src={cake} alt="CakeNiver" /></S.LogoForm>
            </S.DivLogo>

            <S.ContainerInput>
              <S.WrapInput>
                <input
                  className={state.email !== "" ? 'has-val input' : 'input'}
                  type='email'
                  value={state.email}
                  onChange={handleEmailChange}
                />
                <span className='FocusInput' data-placeholder='Email'></span>
              </S.WrapInput>

              <S.WrapInput>
                <input
                  className={state.password !== "" ? 'has-val input' : 'input'}
                  type='password'
                  value={state.password}
                  onChange={handlePasswordChange}
                />
                <span className='FocusInput' data-placeholder='Password'></span>
              </S.WrapInput>
            </S.ContainerInput>

            <S.ContainerLoginFormBtn>
              <button type="submit" onClick={handleNextStep}className="login-form-btn">Login</button>
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