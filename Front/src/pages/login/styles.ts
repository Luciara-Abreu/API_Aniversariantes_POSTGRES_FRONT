import styled from 'styled-components'


const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
`
const ContainerLogin = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background: #111;
`
const WrapLogin = styled.div`
  width: 390px;
  height: auto;
  //height: 94vh;
  background-color: #333;
  border-radius: 10px;
  padding: 10px 24px 10px 28px;

//para não gerar scrow na página
  overflow: hidden;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0, 2);

  .text-criarConta {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 768px)and (min-width: 481px) {
    width: 340px;
    height: auto;
}
  @media (max-width: 480px)and (min-width: 320px) {
    width: 320px;
    height: auto;
  }
}

.txt1 {
  font-size: 14px;
  color: #adadad;
  line-height: 1;
  padding-right: 5px;
}

.txt2 {
  font-size: 14px;
  color: #6a7dfe;
  line-height: 1;
  text-decoration: none;
}
`

const CriarConta = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

const LoginForm = styled.div`
width: 100%;
//padding-bottom: 1px;


@media (max-width: 768px)and (min-width: 481px) {
    width: 340px;
  //  height: 67vh;
}
  @media (max-width: 480px)and (min-width: 320px) {
 //   height: 67vh;
  }
`

const LoginFormTitle = styled.div`
  font-family: Nunito, sans-serif;
  display: block;
  font-size: 30px;
  color: azure;
  text-align: center;
`

const DivLogo = styled.div`
  width: 85px;
  margin-left: 35px;
  padding-bottom: 120px;

  @media (max-width: 768px)and (min-width: 481px) {
    margin-left: 35px;
    padding-bottom: 20px;
}
  @media (max-width: 480px)and (min-width: 320px) {
    margin-left: 35px;
    padding-bottom: 20px;
  }
`
const LogoForm = styled.div`
  width: 15vw;
  height: 15vh;

  
  @media (max-width: 768px)and (min-width: 481px) {
    width: 10vw;
    height: 30vh;
}
  @media (max-width: 480px)and (min-width: 320px) {
    width: 10vw;
    height: 30vh;
  }
`
const ContainerInput = styled.div`
width: 100%;
`

const WrapInput = styled.div`
width: 100%;
position: relative;
border-bottom: 2px solid #adadad;
margin-bottom: 17px;

.input{
  width: 100%;
  height: 40px;
  padding: 0 5px;
  font-size: 15px;
  color: #fff;
  line-height: 1;
  border: none;
  display:block;
  background: transparent;
}
.FocusInput{
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;

    top: 0;
    left:0;

    pointer-events: none;
    color: #adadad;    
  }
  .FocusInput::before{
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    background: #6a7dfe;
    background: -webkit-linear-gradient(to left, #21d4fd, #b721ff);
    background: -o-linear-gradient(to left, #21d4fd, #b721ff);
    background: -moz-linear-gradient(to left, #21d4fd, #b721ff);
    background: linear-gradient(to left, #21d4fd, #b721ff);
  }
  .FocusInput::after{
    font-family: Nunito, sans-serif;
    font-size: 15px;
    color: #999999;
    line-height: 1;
    content: attr(data-placeholder); 
    display: block;
    width: 100%;
    position: absolute;
    top: 16px;
    left: 0px;
    padding-left: 5px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  .input:focus {
  outline: 0;
}
  .input:focus + .FocusInput::after{
    top: -15px;
  }
  .input:focus + .FocusInput::before{
    width: 100%;
  }
  .has-val + .FocusInput::after{
    top: -15px;
  }
  .has-val + .FocusInput::before{
    width: 100%;
  }
`

const ContainerLoginFormBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 19px 0 0 0;

  .login-form-btn{
    width: 100%;
    height: 50px;
    font-size: 15px;
    border: none;
    border-radius: 10px;
    color: #fff;
    line-height: 1;
    text-transform: uppercase;
    background: -webkit-linear-gradient(to left, #21d4fd, #b721ff);
    background: -o-linear-gradient(to left, #21d4fd, #b721ff);
    background: -moz-linear-gradient(to left, #21d4fd, #b721ff);
    background: linear-gradient(to left, #21d4fd, #b721ff);

  :hover{
cursor: pointer;
  }
  
}

@media (max-width: 768px)and (min-width: 481px) {
  padding: 20px 0 0 0;
}
  @media (max-width: 480px)and (min-width: 320px) {
    padding: 20px 0 0 0;
  }

`


export {
  Container,
  ContainerLogin,
  WrapLogin,
  LoginForm,
  LoginFormTitle,
  DivLogo,
  LogoForm,
  CriarConta,
  WrapInput,
  ContainerInput,
  ContainerLoginFormBtn  
}