import Header from '../../components/header';
import AuthGoogle from '../../services/Api/index'
import cake from '../../assets/Imag/cake2.gif'
import {
  ContainerRoot, Container, ContainerLogin, WrapLogin, LoginFormTitle, LogoForm, WrapInput,
  ContainerLoginFormBtn
} from './styles';
import { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  //<Header />  https://youtu.be/Bm50j2CqCXg
  return (
    <ContainerRoot>
      <Container>
        <ContainerLogin>
          <WrapLogin>
            <form className='login-form'>
              <LoginFormTitle>Bem vindo ao App de Aniversariantes</LoginFormTitle>
              <LogoForm><img src={cake} alt="CakeNiver" /></LogoForm>

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
                <button className="login-form-btn">Login</button>
              </ContainerLoginFormBtn>

              <div className="text-criarConta"></div>
              <spn className="txt1">Não possui conta?</spn>
              <a href="#" className="txt2">Criar Conta</a>
            </form>
            <AuthGoogle />
          </WrapLogin>
        </ContainerLogin>
      </Container>
    </ContainerRoot>
  )
}

// https://www.youtube.com/watch?v=Bm50j2CqCXg    ==>11:24
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write:if request.auth.uid != null;          
    }
  }
}*/

/**
 * import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
  import { useHistory } from 'react-router-dom';
  import Header from '../../components/header';
  import { Body, Container } from '../ZStyles';


 * const history = useHistory();

  const inputPasswordRef = useRef<HTMLInputElement>(null);

  //pegar a senha e e-mails digitados no input. 
  //Essa linha 29 vai salvar o que digitarmos no campo input e-mail -> onChange={e => setEmail(e.target.value)}
  //Essa linha 34 vai salvar o que digitarmos no campo input password -> onChange={e => setPassword(e.target.value)}
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEntrar = useCallback(() => {
    console.log(email)
    console.log(password)
  }, [email, password]);

  useEffect(() => {
    if (window.confirm('Você deseja logar?')) {
      console.log('Sim')
    } else {
      console.log('Não')
    }
  }, [])

  useEffect(() => {
    console.log(email, password)
  }, [email, password])


  const emailLength = useMemo(() => {
    console.log('Executou')
    return email.length;
  }, [email.length])

  const handleClick = () => {
    history.push('/')
  }

  return (
    
    <Container>     
      <Header /> 
      <Body>       
      <h1> Área de Login </h1>     

            <div>
        <form action="">

          <label htmlFor="">
            <span>Email </span>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined}
            />
          </label>

          <label htmlFor="">
            <span>Senha </span>
            <input
              type="password"
              value={password}
              ref={inputPasswordRef}
              onChange={e => setPassword(e.target.value)} />
          </label>

          <button
            type="button"
            onClick={handleEntrar}
          >
            Entrar
          </button>
          <p>Quantidade de caracteres no e-mail é: {emailLength}</p>
        </form>
      </div>



      <p>Login</p>
      <div>
        <button onClick={handleClick}>Pagina inicial</button>
      </div> 
      </Body>
    </Container>

  )
 */