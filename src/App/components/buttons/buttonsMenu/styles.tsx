import styled from "styled-components";

const ContainerButton = styled.div`
  margin:0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap:1.5px;
  height: 70%;

.btn {  
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #e74c3c;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  text-shadow:0px 0px 3px #f05be6;
  cursor: pointer;
  padding: 0.5em 3.3em 0.5em 3.3em;
  font-weight: 600;

  @media screen and (max-width: 396px) {
    padding: 0.1em 1em 0.1em 1em;
    justify-content: center;
}
@media screen and (max-width: 600px) {
  padding: 0.4em 1.3em 0.4em 1.3em;
  font: 20px;
}

}
.btn:hover, .btn:focus {
  color: #fff;
  outline: 0;
}

.third {
  border-color: #fff;
  color: #fff;

  box-shadow: 0 0 40px 40px #af72dd  inset, 0 0 0 0 #af72dd;
  transition: all 150ms ease-in-out;
}
.third:hover {
  box-shadow: 0 0 10px 0 #af72dd inset, 0 0 10px 4px #af72dd;
}
`

const ButtonGoogle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 15px 1px 20px 1px;

.btn {
  font-size: 15px;
  border: none;
  border-radius: 10px;
  color: #fff;
  line-height: 1.2;
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
}

.btn:hover, .btn:focus {
  color: #fff;
  outline: 0;
}

.third {
  border-color: #fff;
  color: #fff;

  box-shadow: 0 0 40px 40px #cd060c   inset, 0 0 0 0 #cd060c ;
  transition: all 150ms ease-in-out;
}
.third:hover {
  box-shadow: 0 0 10px 0 #cd060c inset, 0 0 10px 4px #cd060c ;
}
`
export {
  ContainerButton,
  ButtonGoogle
}