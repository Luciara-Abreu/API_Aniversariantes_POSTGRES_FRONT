import styled from 'styled-components'

const ContainerRoot = styled.div`
  width: 100%;
`

const Container = styled.div`
  width: 100vw;
  min-height: 82vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 5px; 

  background: -webkit-linear-gradient(to left, #bdebf5, #dbbee9);
  background: -o-linear-gradient(to left, #bdebf5, #dbbee9);
  background: -moz-linear-gradient(to left, #bdebf5, #dbbee9);
  background: linear-gradient(to left, #bdebf5, #dbbee9);

  @media (max-width: 768px)and (min-width: 481px) {
    min-height: 84.7vh;
    padding: 5px 5px 30px 5px; 
}
  @media (max-width: 480px)and (min-width: 320px) {
    min-height: 80vh;
    padding: 5px 5px 30px 5px; 
  }

`
const Body = styled.div`
  width: 50%;
  height: 70vh;
  border-radius: 10px;
  overflow: hidden;
  padding: 20px 55px 0px 55px;  
  background: #333;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2);
  h1{
    padding: 0 0 10px 77px;
    color: #fff;
    text-shadow: 0px 0px 3px #f05be6;
    font:normal 25px "Courier New", Courier, monospace;
  }

    
  @media (max-width: 768px)and (min-width: 481px) {
  width: 75%;
  height: 70vh;
  h1{
    padding: 5px;
    color: #fff;
    text-shadow: 0px 0px 3px #f05be6;
    font:bold 20px "Courier New", Courier, monospace;
  }
}
  @media (max-width: 480px)and (min-width: 320px) {
  width: 96%;
  height: 70vh;
  h1{
    padding: 5px;
    color: #fff;
    text-shadow: 0px 0px 3px #f05be6;
    font:bold 17px "Courier New", Courier, monospace;
  }
  }
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


  @media (max-width: 768px)and (min-width: 481px) {
  padding: 20px 0 0 0;
}
  @media (max-width: 480px)and (min-width: 320px) {
    padding: 20px 0 0 0;
  }
`



const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  gap: 5px;

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
  padding: 10px 0 0 0;
}
  @media (max-width: 480px)and (min-width: 320px) {
    padding: 10px 0 0 0;
  }
`

export {
  ContainerRoot,
  Container,
  Body,
  WrapInput,
  ContainerButton,
}
