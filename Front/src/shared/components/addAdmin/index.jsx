import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { app } from '../../api/libs/firebase';
import logo from '../../assets/Gifs/tresGatinhos.gif'
import {
  Container, ContainerLogin, WrapLogin, LoginForm, LoginFormTitle, LogoForm, WrapInput,
  ContainerLoginFormBtn, DivLogo
} from './styles';

const AddAdmin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  //https://www.youtube.com/watch?v=gqbXnYhvB5E 20:58

  const db = getFirestore(app)
  const admCollectionRef = collection(db, "admin")

  //Add novos usuários no  banco de dados
  async function creatAdmin() {
    const adm = await addDoc(admCollectionRef, {
      email, password
    })
    console.log(adm)
  }
  //Tras todos usuários da tabela
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(admCollectionRef)
      const admUser = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      console.log(admUser)
    }
    getUsers()
  }, [])

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
              <button className="login-form-btn" onClick={creatAdmin}>Cadastrar</button>
            </ContainerLoginFormBtn>
          </LoginForm>
        </WrapLogin>
      </ContainerLogin>
    </Container>

  )
}

export default AddAdmin

