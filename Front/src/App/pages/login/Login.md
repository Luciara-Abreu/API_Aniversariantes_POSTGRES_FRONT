import AuthGoogle from '../../services/authGoogle/index'
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import cake from '../../assets/Gifs/cake2.gif'
import {
  Container, ContainerLogin, WrapLogin, LoginForm, LoginFormTitle, LogoForm, WrapInput,
  ContainerInput, ContainerLoginFormBtn, DivLogo
} from './styles';



export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const history = useHistory();
  const handleClick = () => {
    history.push('/criarConta')
  }

  return (
    <Container>
      <ContainerLogin>
        <WrapLogin>
          <form action="exemplo.html">
            <LoginForm >
              <LoginFormTitle>Bem vindo ao App de Aniversariantes</LoginFormTitle>
              <DivLogo>
                <LogoForm><img src={cake} alt="CakeNiver" /></LogoForm>
              </DivLogo>

              <ContainerInput>
                <WrapInput>
                  <input
                    className={email !== "" ? 'has-val input' : 'input'}
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <span className='FocusInput' data-placeholder='Email'></span>
                </WrapInput>

                <WrapInput>
                  <input
                    className={password !== "" ? 'has-val input' : 'input'}
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <span className='FocusInput' data-placeholder='Password'></span>
                </WrapInput>
              </ContainerInput>

              <ContainerLoginFormBtn>
                <button type="submit" className="login-form-btn">Entrar</button>
              </ContainerLoginFormBtn>
              <AuthGoogle />
              <div className="text-criarConta"></div>
              <spn className="txt1">Não possui conta?</spn>
              <a href="#" onClick={handleClick} className="txt2">Criar Conta</a>
            </LoginForm>
          </form>
        </WrapLogin>
      </ContainerLogin>
    </Container>

  )
}
