import { useState } from 'react';
import { Section } from 'components/Section';
import { BtnMenu } from 'components/BtnMenu';
import { Modal } from 'components/Modal';
import { IconCloseAndOpen } from 'components/IconCloseAndOpen';
import s from './Hero.module.css';

// import heroMobile480 from 'assets/images/hero-mobile480.jpg';
// import heroMobile480F2x from 'assets/images/hero-mobile480@2x.jpg';
// import heroTablet768 from 'assets/images/hero-tablet768.jpg';
// import heroTablet768F2x from 'assets/images/hero-tablet768@2x.jpg';
// import heroDesktop1600 from 'assets/images/hero-desktop1600.jpg';
// import heroDesktop1600F2x from 'assets/images/hero-desktop1600@2x.jpg';

export const Hero = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isPressed, setIsPressed] = useState(false);
  // const [bgImg, setBgImg] = useState(false);

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
        <BtnMenu className={s.heroBtn} handleBtnClick={handleBtnClick}>
          Заказать услугу
        </BtnMenu>
      </Section>

      {openModal && (
        <Modal className={s} isHidden={isHidden}>
          <BtnMenu className={s.btnMenu} handleBtnClick={handleBtnClick}>
            <IconCloseAndOpen className={s} iconBtn="menuClose" />
          </BtnMenu>
        </Modal>
      )}
    </>
  );
};
