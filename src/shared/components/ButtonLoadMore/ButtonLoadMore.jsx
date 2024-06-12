import PropTypes from 'prop-types';
import s from './ButtonLoadMore.module.scss';

const ButtonLoadMore = ({ onClick, children }) => (
  <button className={s.button} onClick={onClick}>
    {children}
  </button>
);

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default ButtonLoadMore;
