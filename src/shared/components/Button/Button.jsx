// import { Link } from 'react-router-dom';
import s from './Button.module.scss';

const Button = ({ children, onClick }) => {
  return (
    <button className={s.link} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
