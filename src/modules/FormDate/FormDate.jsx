import s from './FormDate.module.scss';

const FormDate = () => {
  return (
    <form className={s.wrapForm}>
      <p className={s.caption}>Book your campervan now</p>
      <p className={s.description}>
        Stay connected! We are always ready to help you.
      </p>
      <label htmlFor="">Name</label>
      <input type="text" />
    </form>
  );
};

export default FormDate;
