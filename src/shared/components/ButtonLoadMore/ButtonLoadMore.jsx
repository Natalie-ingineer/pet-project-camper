import { Link } from 'react-router-dom';
import s from './ButtonLoadMore.module.scss';

const ButtonLoadMore = ({ to, children }) => {
  return (
    <Link className={s.link} to={to}>
      {children}
    </Link>
  );
};
export default ButtonLoadMore;
