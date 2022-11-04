import styled from "styled-components";

const StylesTile = styled.div`
  display: flex;
  cursor: none;


  .btn{
font:normal 24px "Courier New", Courier, monospace;
font-style:normal;
color:#000000;
background:#ffffff;
border:2px hidden #ffffff;
text-shadow:0px 0px 3px #f05be6;
box-shadow:0px 4px 21px #000000;
-moz-box-shadow:0px 4px 21px #000000;
-webkit-box-shadow:0px 4px 21px #000000;
border-radius:0px 25px 0px 25px;
-moz-border-radius:0px 25px 0px 25px;
-webkit-border-radius:0px 25px 0px 25px;
width:100%;
padding:20px 100px;
margin:0 auto;
}
.btn:active{
  position:relative;
  top:2px;
  box-shadow: 0 0 10px 0 #af72dd inset, 0 0 10px 4px #af72dd;
}

  /*

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
*/


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
