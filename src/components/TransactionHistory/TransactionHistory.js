import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory(props) {
  const { items } = props;
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map((item, index) => (
        <tbody key={item.id}>
          <tr className={(index + 1) % 2 <= 0 ? `${css.even}` : `${css.odd}`}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
