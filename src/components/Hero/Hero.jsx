import { useState } from 'react';
import { Section } from 'components/Section';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import { Form } from 'components/Form';
import { IconSvg } from 'components/IconSvg';
import s from './Hero.module.css';

export const Hero = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isPressed, setIsPressed] = useState(false);

  const handleBtnClick = () => {
    if (isPressed) {
      return;
    }

    setIsPressed(true);

    if (openModal === false) {
      setOpenModal(true);

      setTimeout(() => {
        setIsHidden(false);
        setIsPressed(false);
      }, 150);
    }

    if (openModal === true) {
      setIsHidden(true);

      setTimeout(() => {
        setOpenModal(false);
        setIsPressed(false);
      }, 300);
    }
  };

  //modal form
  const [userName, setUserName] = useState('');
  const [number, setNumber] = useState('');
  const [mail, setMail] = useState('');
  const [postContent, setPostContent] = useState(
    localStorage.getItem('postContent') || ''
  ); // устанавливаем начальное значение из localStorage
  const [agreed, setAgreed] = useState(false);
  const [loader, setLoader] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const formState = {
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
  };

  return (
    <>
      <Section className={s.heroSection}>
        <h1 className={s.heroTitle}>Эффективные решения для вашего бизнеса</h1>
        <Button className={s.heroBtn} handleBtnClick={handleBtnClick}>
          Заказать услугу
        </Button>
      </Section>

      {openModal && (
        <Modal className={s} isHidden={isHidden}>
          <Button className={s.btnClose} handleBtnClick={handleBtnClick}>
            <IconSvg
              className={s.icon}
              iconId="modalClose"
              width="11"
              height="11"
            />
          </Button>
          <Form formState={formState} />
        </Modal>
      )}
    </>
  );
};
