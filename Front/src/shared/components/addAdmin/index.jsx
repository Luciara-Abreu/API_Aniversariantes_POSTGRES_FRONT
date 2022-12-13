import { useState } from 'react';
import logo from '../../../assets/Gifs/tresGatinhos.gif'
import { auth } from '../../../libs/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth"
import * as S from './styles';
import { useHistory } from 'react-router-dom';

const AddAdmin = () => {
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
    <S.Container>
      <S.ContainerLogin>
        <S.WrapLogin>
          <S.LoginForm>
            <S.LoginFormTitle>Faça um gatinho feliz! Se cadastre no App!</S.LoginFormTitle>
            <S.DivLogo>
              <S.LogoForm><img src={logo} alt="CakeNiver" /></S.LogoForm>
            </S.DivLogo>

            <S.WrapInput>
              <input
                className={email !== "" ? 'has-val input' : 'input'}
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span className='FocusInput' data-placeholder='Email'></span>
            </S.WrapInput>

            <S.WrapInput>
              <input
                className={password !== "" ? 'has-val input' : 'input'}
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span className='FocusInput' data-placeholder='Password'></span>
            </S.WrapInput>

            <S.ContainerLoginFormBtn>
              <button className="login-form-btn" onClick={register}>Cadastrar</button>
            </S.ContainerLoginFormBtn>
          </S.LoginForm>
        </S.WrapLogin>
      </S.ContainerLogin>
    </S.Container>

  )
}

export default AddAdmin
