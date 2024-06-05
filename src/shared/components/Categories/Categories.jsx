import s from './Categories.module.scss';

const Categories = ({ children }) => {
  return <div className={s.link}>{children}</div>;
};

export default Categories;
