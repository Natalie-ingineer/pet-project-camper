import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
// import toast from 'react-hot-toast';

import Button from '../../shared/components/Button/Button';
// import { useDispatch } from 'react-redux';
// import { logIn } from '../../redux/auth/operations';

import s from './FormDate.module.scss';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 symb long')
    .max(50, 'Name to long')
    .required('Please, fill in the field!'),
  email: Yup.string().email('Invalid email').required('Required'),
  date: Yup.date().required('Required'),
});

const FormDate = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const commentFieldId = useId();
  const dateFieldId = useId();
  return (
    <Formik
      initialValues={{ name: '', email: '', comments: '', date: '' }}
      validationSchema={userSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        //     // same shape as initial values
        //     dispatch(logIn(values))
        //       .unwrap()
        //       .then(() => {
        //         toast.success('login success');
        //       })
        //       .catch(() => {
        //         toast.error('login error');
        //       });
      }}
    >
      {/* {({ isSubmitting }) => ( */}
      <Form className={s.wrapForm}>
        <p className={s.caption}>Book your campervan now</p>
        <p className={s.description}>
          Stay connected! We are always ready to help you.
        </p>
        <div className={s.formWrap}>
          <label htmlFor={nameFieldId} />

          <Field
            className={s.fieldInput}
            type="text"
            name="name"
            id={nameFieldId}
            placeholder="Name"
          ></Field>
          <ErrorMessage className={s.error} name="name" component="span" />
        </div>
        <div className={s.formWrap}>
          <label htmlFor={emailFieldId} />

          <Field
            className={s.fieldInput}
            type="email"
            name="email"
            id={emailFieldId}
            placeholder="Email"
          ></Field>
          <ErrorMessage className={s.error} name="email" component="span" />
        </div>

        <div className={s.fieldInput}>
          <label htmlFor="date">Booking date</label>
          <Field type="date" name="date" className="date-input" />
          <ErrorMessage
            name="date"
            id={dateFieldId}
            component="div"
            className="error-message"
          />
        </div>

        <div className={s.formWrap}>
          <label htmlFor={commentFieldId} />
          <Field
            as="textarea"
            name="comments"
            className={s.fieldInputComment}
            id={commentFieldId}
            placeholder="Comment"
          />
        </div>
        <Button className={s.btnSend}>Send</Button>
      </Form>
    </Formik>
  );
};

export default FormDate;
