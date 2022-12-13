
import { useHistory } from 'react-router-dom'
import cake from '../../assets/Gifs/cake2.gif'
import * as  S from './styles'
import { ChangeEvent, useState } from 'react'
import { auth } from '../../api/libs/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'
import AuthGoogle from '../../shared/services/authGoogle';


const Login = () => {  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    
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



const handleLogin = async () => {
  const messageError = 'E-mail ou senha invalida, Entre com seus dados'
  
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log('User Logado =>>>>',user);
    history.push('/');
  } catch (error) {
    alert(messageError)
  }}

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

            <AuthGoogle/>
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