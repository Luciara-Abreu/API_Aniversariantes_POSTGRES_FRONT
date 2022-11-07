import styled from "styled-components";

const StylesTile = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
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
