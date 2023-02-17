import { useState } from 'react';
import { IconSvg } from 'components/IconSvg';
import { Button } from 'components/Button';
import icon from 'assets/symbol-defs.svg';
import s from './Form.module.css';

export const Form = ({ handleBtnClick }) => {
  const [userName, setUserName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [mail, setMail] = useState('');
  const [postContent, setPostContent] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [loader, setLoader] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleChange = evt => {
    const { name, value, checked } = evt.target;

    switch (name) {
      case 'name':
        setUserName(value);
        break;

      case 'tel':
        setTelephone(value);
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
    reset();
  };

  const reset = () => {
    setTimeout(() => {
      console.log(
        `name: ${userName}, tel: ${telephone}, email: ${mail}, comment: ${postContent}, Agreed: ${agreed}`
      );
      setUserName('');
      setTelephone('');
      setMail('');
      setPostContent('');
      setAgreed(false);
      setLoader(false);
      setDisabled(false);
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.formLabel}>
        <span className={s.labelSpan}>Имя</span>
        <input
          className={`${s.modalFormInput} ${
            userName ? s.placeholderShown : ''
          }`}
          type="text"
          name="name"
          value={userName}
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
        <input
          className={`${s.modalFormInput} ${
            telephone ? s.placeholderShown : ''
          }`}
          type="tel"
          name="tel"
          value={telephone}
          onChange={handleChange}
        />
        <IconSvg
          className={s.modalFormIcon}
          iconId="phone"
          width="18"
          height="18"
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

      <Button type="submit" disabled={!agreed || disabled}>
        {loader ? 'загрузка...' : 'Отправить'}
      </Button>
    </form>
  );
};
