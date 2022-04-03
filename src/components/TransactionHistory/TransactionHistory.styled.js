import styled from '@emotion/styled';

export const Transactions = styled.table`
border: 1px solid #414445;
margin: 15px;
width: 500px
`
export const Thead = styled.thead`
background-color: #30a5b0;
color: #434545;
font-size: 18px;
`
export const ColumnName = styled.th`
padding: 10px;
`
export const TBody = styled.tbody`
text-align: center;
`
export const TRow = styled.tr`
&:nth-of-type(2n) {
  background: #ecf1f3;
}
`
export const TData = styled.td`
padding: 7px;
font-size: 14px;
border: 1px solid #c3c8c9;
color: #414445;
text-transform: capitalize;
`