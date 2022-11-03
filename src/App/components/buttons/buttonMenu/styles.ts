import styled from "styled-components";

const BTrird = styled.div`
width: 18.3%;
body {
    display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  lign-content: center;

@media screen and (max-width: 600px) {
  h1 {
    font-size: 3rem;
  }
}
}
.btn {
  width: 100%;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  font-size: 0.6rem;
  font-weight: 100;
  line-height: 1;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
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