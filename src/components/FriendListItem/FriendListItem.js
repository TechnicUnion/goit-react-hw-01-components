import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem(props) {
  const { item } = props;
  return (
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
  );
}

FriendListItem.propTypes = {
  items: PropTypes.object,
};
