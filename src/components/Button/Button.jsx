import PropTypes from 'prop-types';
import css from './Button.module.scss';

const Button = ({ title }) => {
  return (
    <div className={css.container}>
      <button type="submit" className={css.btn}>
        {title}
      </button>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string,
};
export default Button;
