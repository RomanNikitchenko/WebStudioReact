import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { IconSvg } from 'components/IconSvg';
import { Button } from 'components/Button';
import icon from 'assets/symbol-defs.svg';
import { ColorRing } from 'react-loader-spinner';
import { object, string, number } from 'yup';
import s from './FormOrderService.module.css';

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={massage => <p className={s.ErrorMessage}>{massage}</p>}
    />
  );
};

const userSchema = object({
  name: string().min(3).required(),
  tel: number().required(),
  email: string().email().required(),
});

const initialValues = { name: '', tel: '', email: '' };

export const FormOrderService = () => {
  const [postContent, setPostContent] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [loader, setLoader] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleChange = evt => {
    const { name, value, checked } = evt.target;

    switch (name) {
      case 'comment':
        setPostContent(value);
        break;

      case 'agreed':
        setAgreed(checked);
        break;

      default:
        return;
    }
  };

  const handleSubmit = ({ name, tel, email }, { resetForm }) => {
    setLoader(true);
    setDisabled(true);
    formSubmitHandler(name, tel, email, resetForm);
  };

  //modal fun form
  const formSubmitHandler = (name, tel, email, resetForm) => {
    setTimeout(() => {
      console.log(
        `name: ${name}, tel: ${tel}, email: ${email}, comment: ${postContent}, Agreed: ${agreed}`
      );
      resetForm();
      setResetForm();
    }, 3000);
  };

  const setResetForm = () => {
    setPostContent('');
    setAgreed(false);
    setLoader(false);
    setDisabled(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <b className={s.formHeader}>Оставьте свои данные, мы вам перезвоним</b>

        <label className={s.formLabel}>
          <span className={s.labelSpan}>Имя</span>
          <Field
            className={s.modalFormInput}
            type="text"
            name="name"
            placeholder=" "
          />

          <IconSvg
            className={s.modalFormIcon}
            iconId="person"
            width="18"
            height="18"
          />
          <FormError name="name" />
        </label>

        <label className={s.formLabel}>
          <span className={s.labelSpan}>Телефон</span>
          <Field
            className={s.modalFormInput}
            type="tel"
            name="tel"
            placeholder=" "
          />
          <IconSvg
            className={s.modalFormIcon}
            iconId="phone"
            width="18"
            height="18"
          />
          <FormError name="tel" />
        </label>

        <label className={s.formLabel}>
          <span className={s.labelSpan}>Почта</span>
          <Field
            className={s.modalFormInput}
            type="email"
            name="email"
            placeholder=" "
          />
          <IconSvg
            className={s.modalFormIcon}
            iconId="email"
            width="18"
            height="18"
          />
          <FormError name="email" />
        </label>

        <label className={`${s.formLabel} ${s.labelComment}`}>
          <span className={s.labelSpan}>Комментарий</span>
          <textarea
            className={`${s.textarea} ${s.hoverFocus}`}
            name="comment"
            placeholder="Введите текст"
            value={postContent}
            onChange={handleChange}
          />
        </label>

        <input
          id="agreement"
          className={s.inputСheckbox}
          type="checkbox"
          name="agreed"
          checked={agreed}
          onChange={handleChange}
        />
        <label className={s.labelCheckbox} htmlFor="agreement">
          <svg className={s.iconСheckbox} width="15" height="16">
            <use
              className={`${s.iconUse} ${!agreed ? s.blankCheckBox : ''}`}
              href={`${icon}#blank-check-box`}
            ></use>
            <use
              className={`${s.iconUse} ${agreed ? s.checkBox : ''}`}
              href={`${icon}#check-box`}
            ></use>
          </svg>

          <span className={s.labelSpan}>
            Соглашаюсь с рассылкой и принимаю{' '}
            <span className={s.spanContract}>Условия договора</span>
          </span>
        </label>

        <Button
          type="submit"
          disabled={!agreed || disabled}
          className={`${s.ButtonSubmit} ${
            !agreed || disabled ? s.buttonDisabled : ''
          }`}
        >
          {loader ? (
            <ColorRing
              visible={true}
              height="50"
              width="50"
              ariaLabel="blocks-loading"
              wrapperClass="blocks-wrapper"
              colors={['#b7d1e6', '#6eb1e7', '#2196f3', '#6eb1e7', '#b7d1e6']}
            />
          ) : (
            'Отправить'
          )}
        </Button>
      </Form>
    </Formik>
  );
};
