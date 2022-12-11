import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendLit(props) {
  const { items } = props;
  return (
    <ul className={css.friends}>
      {items.map(item => (
        <li className={css.item} key={item.id}>
          <span className={`${css.status} ${css[item.isOnline]}`}></span>
          <img
            className={css.avatar}
            src={item.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendLit.propTypes = {
  items: PropTypes.array.isRequired,
};
