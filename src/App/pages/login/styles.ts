import styled from 'styled-components'

const ContainerRoot = styled.div`
margin: 0;
padding: 0;
height:0;
box-sizing: border-box;
`
const Container = styled.div`
 width: 100%;
 margin: 0; 
`
const ContainerLogin = styled.div`
 display: flex;
 flex-wrap: wrap;
 align-items: center;
 justify-content: center;
 padding: 15px;
 background: #111;
`
const WrapLogin = styled.div`
 //width: 390px;
 width: 290px;
 background-color: #333;
 border-radius: 10px;
 padding: 10px 55px 10px 55px;

//para não gerar scrow na página
 overflow: hidden;
 box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0, 2);

 .text-center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
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

const LoginForm = styled.div`
width: 100%;
`

const LoginFormTitle = styled.div`
display:block;
flex-wrap: wrap;
font-size: 20px;
color: azure;
text-align: center;
`

const LogoForm = styled.div`
  width: 18vw;
  display: block;
  margin: 2% 0 10% 9%;
  line-height: 1;
  text-align: center;
`
const WrapInput = styled.div`
width: 100%;
position: relative;
border-bottom: 2px solid #adadad;
margin-bottom: 17px;

.input{
  width: 100%;
  height: 45px;
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
  padding-bottom: 13px;

  .login-form-btn{
  font-size: 15px;
  border: none;
  border-radius: 10px;
  color: #fff;
  line-height: 1;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #6a7dfe;
  background: -webkit-linear-gradient(to left, #21d4fd, #b721ff);
  background: -o-linear-gradient(to left, #21d4fd, #b721ff);
  background: -moz-linear-gradient(to left, #21d4fd, #b721ff);
  background: linear-gradient(to left, #21d4fd, #b721ff);

  :hover{
cursor: pointer;
  }
  
}
`


export {
  ContainerRoot,
  Container,
  ContainerLogin,
  WrapLogin,
  LoginForm,
  LoginFormTitle,
  LogoForm,
  WrapInput,
  ContainerLoginFormBtn  
}