import PropTypes from 'prop-types';

export default function FriendLit(props) {
  const { items } = props;
  return (
    <ul>
      {items.map(item => (
        <li class="item" key={item.id}>
          <span class="status">{item.isOnline}</span>
          <img class="avatar" src={item.avatar} alt="User avatar" width="48" />
          <p class="name">{item.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendLit.propTypes = {
  items: PropTypes.array.isRequired,
};
