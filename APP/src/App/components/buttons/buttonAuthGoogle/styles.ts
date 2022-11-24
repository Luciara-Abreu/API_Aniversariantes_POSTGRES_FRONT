import styled from "styled-components";

const ButtonGoogle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 8px 1px 8px 1px;

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
  ButtonGoogle
}