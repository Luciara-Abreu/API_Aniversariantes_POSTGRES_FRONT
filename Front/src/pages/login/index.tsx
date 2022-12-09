
import { useHistory } from 'react-router-dom'
import cake from '../../assets/Gifs/cake2.gif'
import * as  S from './styles'
import { ChangeEvent, useContext, useState } from 'react'
import AuthGoogle from '../../services/authGoogle'
import { AuthContext } from '../../contexts/Auth/AuthContext'
//import { AuthContext } from '../../contexts/Auth/AuthContext'

const Login = () => {  
  //const auth = useContext(AuthContext);  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useContext(AuthContext)
  
  const history = useHistory();
  const handleClick = () => {
    history.push('/criarConta')
  }

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
}

const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
}

/*const handleLogin = async () => {
    if (email && password) {
        const isLogged = await auth.signin(email, password);
        if (isLogged) {
            history.push('/');
        } else {
            alert("Não deu certo.");
        }
        console.log(isLogged)
    }
}*/

const handleLogin = () => {
    if (email && password) {
      history.push('/');
    } else {
          alert("Faça o login com seu e-mail e sua senha.");
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
                  className={email !== "" ? 'has-val input' : 'input'}
                  type="text"
                  value={email}
                  onChange={handleEmailInput}
                />
                <span className='FocusInput' data-placeholder='Email'></span>
              </S.WrapInput>

              <S.WrapInput>
                <input
                  className={password !== "" ? 'has-val input' : 'input'}
                  type="password"
                  value={password}
                  onChange={handlePasswordInput}
                />
                <span className='FocusInput' data-placeholder='Password'></span>
              </S.WrapInput>
            </S.ContainerInput>

            <S.ContainerLoginFormBtn>
              <button onClick={handleLogin}className="login-form-btn">Login</button>
            </S.ContainerLoginFormBtn>

            <AuthGoogle />
            <S.CriarConta className="text-criarConta">
            <div className="txt1">Não possui conta?</div>
            <button onClick={handleClick} className="txt2">Criar Conta</button>
            </S.CriarConta>
          </S.LoginForm>
        </S.WrapLogin>
      </S.ContainerLogin>
    </S.Container>

  )
}

export default Login