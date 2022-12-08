import PropTypes from 'prop-types';

export default function Statistics(props) {
  const { title, items } = props;
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>
      <ul class="stat-list">
        {items.map(item => (
          <li class="item" key={item.id}>
            <span class="label">{item.label}</span>
            <span class="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.prototype = {
  title: PropTypes.string,
  items: PropTypes.array,
};