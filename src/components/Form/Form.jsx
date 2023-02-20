import { IconSvg } from 'components/IconSvg';
import { Button } from 'components/Button';
import icon from 'assets/symbol-defs.svg';
import { ColorRing } from 'react-loader-spinner';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import s from './Form.module.css';

export const Form = ({ formState, onSubmit }) => {
  const {
    userName,
    setUserName,
    number,
    setNumber,
    mail,
    setMail,
    postContent,
    setPostContent,
    agreed,
    setAgreed,
    loader,
    setLoader,
    disabled,
    setDisabled,
  } = formState;

  const handleChange = evt => {
    const { name, value, checked } = evt.target;

    switch (name) {
      case 'name':
        setUserName(value);
        break;

      case 'email':
        setMail(value);
        break;

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

  const handleSubmit = e => {
    e.preventDefault();
    setLoader(true);
    setDisabled(true);
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <b className={s.formHeader}>Оставьте свои данные, мы вам перезвоним</b>

      <label className={s.formLabel}>
        <span className={s.labelSpan}>Имя</span>
        <input
          className={`${s.modalFormInput} ${
            userName ? s.placeholderShown : ''
          }`}
          type="text"
          name="name"
          value={userName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={handleChange}
        />
        <IconSvg
          className={s.modalFormIcon}
          iconId="person"
          width="18"
          height="18"
        />
      </label>

      <label className={s.formLabel}>
        <span className={s.labelSpan}>Телефон</span>
        <PhoneInput
          className={s.PhoneInput}
          defaultCountry="UA"
          onChange={number => {
            setNumber(number);
          }}
          region="Europe"
          type="tel"
          name="number"
          value={number}
          autoComplete="off"
          international
          required
          maxLength="16"
        />
      </label>

      <label className={s.formLabel}>
        <span className={s.labelSpan}>Почта</span>
        <input
          className={`${s.modalFormInput} ${mail ? s.placeholderShown : ''}`}
          type="email"
          name="email"
          value={mail}
          onChange={handleChange}
          required
        />
        <IconSvg
          className={s.modalFormIcon}
          iconId="email"
          width="18"
          height="18"
        />
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
        disabled={!agreed || !number || disabled}
        className={`${s.ButtonSubmit} ${
          !agreed || !number || disabled ? s.buttonDisabled : ''
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
    </form>
  );
};
