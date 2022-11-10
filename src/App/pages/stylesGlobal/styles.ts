import styled from 'styled-components';
const Container = styled.div`
  height: 100vh;
  width: 100vw;
`

const Body = styled.div`
  width: 100%
  >button {
    background-color: red;
  }
  `
const ButtonGoogle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 20px 10px 20px 10px;

.btn {
  display: flex;
  width: 22vw;
  height: 6vw;
  font:normal 5px;
  padding: 20px 10px 20px 10px;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: red;
  line-height: 1;
  padding: 0.5em 3.3em 0.5em 3.3em;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-shadow:0px 0px 3px #f05be6;
  cursor: pointer;
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
  Container,
  Body,
  ButtonGoogle
}