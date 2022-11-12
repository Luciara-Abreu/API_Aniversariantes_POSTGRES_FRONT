import styled from "styled-components";

const ContainerButton = styled.div`
  display: flex;

.btn {
  display: flex;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #e74c3c;
  line-height: 1;
  padding: 0.5em 3.3em 0.5em 3.3em;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-shadow:0px 0px 3px #f05be6;
  justify-content:center;
  align-items:center;
  cursor: pointer;

  @media (max-width:900px) and (min-width:700px)  {
  width: 17vw;
  font:normal 5px;
  padding: 8px 20px 5px 20px;
  justify-content: center;
}
@media (max-width:700px) and (min-width:500px)  {
  width: 19vw;
  font:normal 4px;
  padding: 8px 20px 5px 20px;
  justify-content: center;
}
@media (max-width:500px) and (min-width:200px)  {
  width: 26vw;
  font:normal 4px;
  padding: 8px 20px 5px 20px;
  justify-content: center;
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