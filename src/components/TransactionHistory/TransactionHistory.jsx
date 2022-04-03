import PropTypes from "prop-types";
import { Transactions, Thead, ColumnName, TBody, TRow, TData} from "./TransactionHistory.styled";
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
                    <TRow key={id}>
                        <TData>{type}</TData>
                        <TData>{amount}</TData>
                        <TData>{currency}</TData>
                    </TRow>))}
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