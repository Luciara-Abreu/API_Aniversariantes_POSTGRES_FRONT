import { useState } from 'react';
import logo from '../../../assets/Gifs/tresGatinhos.gif'
import { auth } from '../../../api/libs/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth"
import {
  Container, ContainerLogin, WrapLogin, LoginForm, LoginFormTitle, LogoForm, WrapInput,
  ContainerLoginFormBtn, DivLogo
} from './styles';
import { useHistory } from 'react-router-dom';

const AddAdmin = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()


  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
      history.push('/');
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <Container>
      <ContainerLogin>
        <WrapLogin>
          <LoginForm>
            <LoginFormTitle>Faça um gatinho feliz! Se cadastre no App!</LoginFormTitle>
            <DivLogo>
              <LogoForm><img src={logo} alt="CakeNiver" /></LogoForm>
            </DivLogo>

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

            <ContainerLoginFormBtn>
              <button className="login-form-btn" onClick={register}>Cadastrar</button>
            </ContainerLoginFormBtn>
          </LoginForm>
        </WrapLogin>
      </ContainerLogin>
    </Container>

  )
}

export default AddAdmin
