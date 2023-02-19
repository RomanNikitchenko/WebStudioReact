import { useState } from 'react';
import { Section } from 'components/Section';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
// import { Form } from 'components/Form';
import { FormOrderService } from 'components/FormOrderService';
import { IconSvg } from 'components/IconSvg';
import s from './Hero.module.css';

export const Hero = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isPressed, setIsPressed] = useState(false);

  //modal form props
  // const [userName, setUserName] = useState('');
  // const [telephone, setTelephone] = useState('');
  // const [mail, setMail] = useState('');
  // const [postContent, setPostContent] = useState('');
  // const [agreed, setAgreed] = useState(false);
  // const [loader, setLoader] = useState(false);
  // const [disabled, setDisabled] = useState(false);

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

  //modal fun form
  // const formSubmitHandler = () => {
  //   setTimeout(() => {
  //     console.log(
  //       `name: ${userName}, tel: ${telephone}, email: ${mail}, comment: ${postContent}, Agreed: ${agreed}`
  //     );
  //     resetForm();
  //   }, 10000);
  // };

  // const resetForm = () => {
  //   setUserName('');
  //   setTelephone('');
  //   setMail('');
  //   setPostContent('');
  //   setAgreed(false);
  //   setLoader(false);
  //   setDisabled(false);
  // };

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
          {/* <Form
            userName={userName}
            setUserName={setUserName}
            telephone={telephone}
            setTelephone={setTelephone}
            mail={mail}
            setMail={setMail}
            postContent={postContent}
            setPostContent={setPostContent}
            agreed={agreed}
            setAgreed={setAgreed}
            loader={loader}
            setLoader={setLoader}
            disabled={disabled}
            setDisabled={setDisabled}
            onSubmit={formSubmitHandler}
          /> */}
          <FormOrderService />
        </Modal>
      )}
    </>
  );
};
