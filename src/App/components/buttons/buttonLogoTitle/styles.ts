import styled from "styled-components";

const StylesTile = styled.div`
  display: flex;
  cursor: none;

  .btn{
  display: flex;
  font:normal 24px "Courier New", Courier, monospace;
  width: 50vw;
  padding:20px 100px;
  margin: auto;
  font-style:normal;
  background:#ffffff;
  border:2px hidden #ffffff;
  text-shadow:0px 0px 3px #f05be6;
  box-shadow:0px 4px 21px #000000;
  border-radius:0px 25px 0px 25px;

@media (max-width:900px) and (min-width:700px)  {
  width: 70vw;
  font:normal 20px;
  padding: 15px 60px;
}
@media (max-width:700px) and (min-width:500px)  {
  width: 75vw;
  font:normal 20px;
  padding: 15px 60px;
}
@media (max-width:500px) and (min-width:200px)  {
  width: 110vw;
  font:normal 20px;
  padding: 15px 60px;
}


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
