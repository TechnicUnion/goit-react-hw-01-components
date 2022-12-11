import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendLit(props) {
  const { items } = props;
  return (
    <ul className={css.friends}>
      {items.map(item => (
        <FriendListItem item={item} key={item.id} />
      ))}
    </ul>
  );
}

FriendLit.propTypes = {
  items: PropTypes.array.isRequired,
};
