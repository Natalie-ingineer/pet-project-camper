import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId, useState } from 'react';
// import toast from 'react-hot-toast';

import Button from '../../shared/components/Button/Button';
// import { useDispatch } from 'react-redux';
// import { logIn } from '../../redux/auth/operations';

import s from './FormDate.module.scss';
import { sprite } from '../../shared/icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 symb long')
    .max(50, 'Name to long')
    .required('Please, fill in the field!'),
  email: Yup.string().email('Invalid email').required('Required'),
  date: Yup.date().required('Required'),
});

const FormDate = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const commentFieldId = useId();
  // const dateFieldId = useId();
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
      {({ isSubmitting }) => (
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
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              className={s.dateInput}
            />
            <svg
              width="20"
              height="20"
              // className="date-icon"
              onClick={() =>
                document
                  .querySelector('.react-datepicker-wrapper input')
                  .click()
              }
            >
              <use xlinkHref={`${sprite}#icon-calendar`}></use>
            </svg>
            <ErrorMessage
              className={s.errorDate}
              name="date"
              component="span"
            />
          </div>
          {/* <div className={s.fieldInput}>
            <label htmlFor={dateFieldId}>
              Booking date
              <svg
                width="20"
                height="20"
                onClick={() => document.querySelector(`${s.dateInput}`).click()}
              >
                <use xlinkHref={`${sprite}#icon-calendar`}></use>
              </svg>
            </label>

            <Field
              type="date"
              name="date"
              id={dateFieldId}
              className={s.dateInput}
              value={selectedDate}
              onChange={handleDateChange}
            />

            <ErrorMessage
              name="date"
              component="div"
              className={s.errorMessage}
            />
          </div> */}

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
          <Button className={s.btnSend} disabled={isSubmitting}>
            Send
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormDate;
