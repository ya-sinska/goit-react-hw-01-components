import PropTypes from "prop-types";
import { Transactions, Thead, ColumnName, TBody, TData} from "./TransactionHistory.styled";
export const TransactionHistory = ({ items }) => { 
    return (
 <Transactions>
  <Thead>
    <tr>
      <ColumnName>Type</ColumnName>
      <ColumnName>Amount</ColumnName>
      <ColumnName>Currency</ColumnName>
    </tr>
  </Thead>
    <TBody>
        {items.map(({ id, type, amount, currency }) => (
             <tr key={id}>
                <TData p={type}>{type}</TData>
                <TData>{amount}</TData>
                <TData>{currency}</TData>
            </tr>))}
    </TBody>
</Transactions>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency:PropTypes.string.isRequired
 }))
}