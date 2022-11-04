import styled from "styled-components";

const StylesTile = styled.div`
  display: flex;
  cursor: none;

.btn {  
  display: flex;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #e74c3c;
  line-height: 1;
  padding: 1.2em 3.6em 1.2em 3.6em;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
}
//Mudao texto que está dentro do botão ao passar o mouse
.btn:hover, .btn:focus { 
  color: #fff;
  outline: 0.05;
}

.fourth {
  border-color: #fff;
  color: #fff;
  font-size:145%;
  box-shadow: 0 0 40px 40px #af72dd  inset, 0 0 0 0 #af72dd;
  transition: all 150ms ease-in-out;  
}
.fourth:hover {
  box-shadow: 0 0 10px 0 #af72dd inset, 0 0 10px 4px #af72dd;
}
`

export {
  StylesTile
}


/**
@media screen and (max-width: 600px) {
  h1 {
    font-size: 3rem;
  }
}
 */
