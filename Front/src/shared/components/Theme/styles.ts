import styled from 'styled-components'

const  Container = styled.div`
color: #fff;
min-height: 100vh;
 background: -webkit-linear-gradient(to left, #bdebf5, #dbbee9);
 background: -o-linear-gradient(to left, #bdebf5, #dbbee9);
 background: -moz-linear-gradient(to left, #bdebf5, #dbbee9);
 background: linear-gradient(to left, #bdebf5, #dbbee9); 
`

const  Area = styled.div`
margin: auto;
max-width: 980px;
min-height: 100vh;
display: flex;
flex-direction: column;
`

const  Steps = styled.div`
flex: 1;
display: flex;
`

const  Sidebar = styled.div`
width: 250px;
border-right: 1px solid #16195c;
`

const  Pages = styled.div`
flex: 1;
padding-left: 40px;
padding-top: 40px;
`



export {
  Container,
  Area,
  Steps,
  Sidebar,
  Pages
}
