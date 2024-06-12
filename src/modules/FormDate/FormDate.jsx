import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId, useRef, useState } from 'react';

import Button from '../../shared/components/Button/Button';

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
  const datePickerRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleInputClick = () => {
    datePickerRef.current.setOpen(true);
  };
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
          <div className={s.datePickerContainer}>
            {/* Поле вводу для відображення вибраної дати */}
            <input
              type="text"
              className={s.dateInput}
              onClick={handleInputClick}
              value={selectedDate ? selectedDate.toLocaleDateString() : ''}
              readOnly
            />
            {/* Компонент DatePicker, прихований, але викликається при кліку на поле вводу */}
            <label htmlFor={dateFieldId}></label>
            <DatePicker
              id={dateFieldId}
              className={s.fieldInput}
              selected={selectedDate}
              onChange={handleDateChange}
              ref={datePickerRef}
              dateFormat="dd/MM/yyyy"
              showYearDropdown
              showMonthDropdown
              dropdownMode="select"
              popperPlacement="bottom-start"
              style={{ display: 'none' }}
              placeholderText="Booking date"
            />
            <svg width="20" height="20" className={s.iconDate}>
              <use xlinkHref={`${sprite}#icon-calendar`}></use>
            </svg>
            <ErrorMessage className={s.error} name="date" component="span" />
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
          <Button className={s.btnSend} disabled={isSubmitting}>
            Send
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormDate;
