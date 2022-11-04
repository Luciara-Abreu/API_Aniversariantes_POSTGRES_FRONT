import styled from "styled-components";

const BTrird = styled.div`
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
  cursor: pointer;

}
.btn:hover, .btn:focus {
  color: #fff;
  outline: 0;
}

.third {
  border-color: #fff;
  color: #fff;

  box-shadow: 0 0 40px 40px #af72dd  inset, 0 0 0 0 #af72dd;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
}
.third:hover {
  box-shadow: 0 0 10px 0 #af72dd inset, 0 0 10px 4px #af72dd;
}
`
export {
  BTrird
}