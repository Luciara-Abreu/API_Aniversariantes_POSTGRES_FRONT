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
 width: 390px;
 background-color: #333;
 border-radius: 10px;
 padding: 10px 55px 10px 55px;

//para não gerar scrow na página
 overflow: hidden;
 box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0, 2);
`

const LoginForm = styled.div`
width: 100%;
`

const LoginFormTitle = styled.div`
display:block;
flex-wrap: wrap;
font-size: 40px;
color: azure;
text-align: center;
`

const LogoForm = styled.div`
  width: 100%;
  display: block;
  margin: 0;
  font-size: 40px;
  line-height: 1%;
  text-align: center;
`
const WrapInput = styled.div`
width: 100%;
position: relative;
border-bottom: 2px solid #adadad;
margin-bottom: 37px;

.Input{
  width: 100%;
  height: 45px;
  padding: 0 5px;
  font-size: 15px;
  color: #fff;
  line-height: 1.2;
  border: none;
  display:block;
  background: transparent;
  //background: gray;

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
    left:0;
    width:0;
    height:0;
    -webkit-trasition:all 0.4s;
    -o-trasition:all 0.4s;
    -moz-transition:all 0.4s;

    background-color: -webkit-linear-gradient(to left #21d4fd, #b721ff);
    background-color: -o-linear-gradient(to left #21d4fd, #b721ff);
    background-color: -moz-linear-gradient(to left #21d4fd, #b721ff);
    background-color: linear-gradient(to left #21d4fd, #b721ff);
  }
  .FocusInput::after{
    font-size: 15px;
    color: #999;
    line-height: 1.2px;

    content: attr(data-placeholder);
    display: block;
    width: 100%;
    position: absolute;
    top:16px;
    padding-left: 5px;

    -webkit-trasition:all 0.4s;
    -o-trasition:all 0.4s;
    -moz-transition: all 0.4s;
  }

  .FocusInput:focus{
    outline:0;
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
  WrapInput  
}