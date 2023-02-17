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
          <Form handleBtnClick={handleBtnClick} />
        </Modal>
      )}
    </>
  );
};
