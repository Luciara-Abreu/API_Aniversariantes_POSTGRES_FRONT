import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/header';
import { Body, Container } from '../ZStyles';

export const Login = () => {
  const history = useHistory();

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
}