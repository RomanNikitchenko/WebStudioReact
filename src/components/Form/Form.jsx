import { useState } from 'react';
import s from './Form.module.css';

export const Form = () => {
  const [userName, setUserName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [mail, setMail] = useState('');
  const [postContent, setPostContent] = useState('');
  const [agreed, setAgreed] = useState(false);

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
    console.log(
      `name: ${userName}, tel: ${telephone}, email: ${mail}, comment: ${postContent}, Agreed: ${agreed}`
    );
    reset();
  };

  const reset = () => {
    setUserName('');
    setTelephone('');
    setMail('');
    setPostContent('');
    setAgreed(false);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={`${s.formName}`}>
        <span className={s.labelSpan}>Имя</span>
        <input
          type="text"
          name="name"
          value={userName}
          onChange={handleChange}
        />
      </label>

      <label className={`${s.formTel}`}>
        <span className={s.labelSpan}>Телефон</span>
        <input
          type="tel"
          name="tel"
          value={telephone}
          onChange={handleChange}
        />
      </label>

      <label className={`${s.formEmail}`}>
        <span className={s.labelSpan}>Почта</span>
        <input type="email" name="email" value={mail} onChange={handleChange} />
      </label>

      <label className={`${s.formComment}`}>
        <span className={s.labelSpan}>Комментарий</span>
        <textarea
          name="comment"
          placeholder="Введите текст"
          value={postContent}
          onChange={handleChange}
        />
      </label>

      <label>
        <input
          type="checkbox"
          name="agreed"
          checked={agreed}
          onChange={handleChange}
        />
        <span>Соглашаюсь с рассылкой и принимаю Условия договора</span>
      </label>

      <button type="submit" disabled={!agreed}>
        Sign up as {userName}
      </button>
    </form>
  );
};
