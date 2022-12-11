import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics(props) {
  const { title, items } = props;
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {items.map(item => (
          <li className={css.item} key={item.id}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array.isRequired,
};
