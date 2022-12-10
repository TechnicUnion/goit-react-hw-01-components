import PropTypes from 'prop-types';

export default function FriendLit(props) {
  const { items } = props;
  return (
    <ul>
      {items.map(item => (
        <li className="item" key={item.id}>
          <span className="status">{item.isOnline}</span>
          <img
            className="avatar"
            src={item.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{item.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendLit.propTypes = {
  items: PropTypes.array.isRequired,
};
