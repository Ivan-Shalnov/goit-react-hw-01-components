import PropTypes from 'prop-types';
import { Table, Type } from './TransactionHistory.styled';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { MdPayments } from 'react-icons/md';
import { GiPayMoney } from 'react-icons/gi';
import { FiPercent } from 'react-icons/fi';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <Type>
                {(() => {
                  switch (type) {
                    case 'invoice':
                      return (
                        <FaFileInvoiceDollar
                          title={type}
                          size={20}
                        ></FaFileInvoiceDollar>
                      );
                    case 'payment':
                      return <MdPayments title={type} size={20}></MdPayments>;
                    case 'withdrawal':
                      return <GiPayMoney title={type} size={20}></GiPayMoney>;
                    case 'deposit':
                      return <FiPercent title={type} size={20}></FiPercent>;
                    default:
                      return type;
                  }
                })()}
              </Type>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
