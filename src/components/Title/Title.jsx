import PropTypes from 'prop-types';
import css from './Title.module.scss';

const Title = ({ title, children }) => {
  return (
    <label>
      <h2 className={css.title}>{title}</h2>
      {children}
    </label>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Title;
