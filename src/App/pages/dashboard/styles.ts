import styled from 'styled-components'

const TableContainer = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 8px;
  width: 100%;

  @media (max-width: 620px) {
    overflow: scroll;
  }
`

const StyledTable = styled.table<{ layout?: string }>`
  width: 100%;  
  border-collapse: separate;
  td {
    padding: 8px;
    vertical-align: middle;
    &:first-child {
      padding-left: 20px;
      text-transform: uppercase;
    }
  }
`
export {
  TableContainer,
  StyledTable
}