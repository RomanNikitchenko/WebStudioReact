import { createPortal } from 'react-dom';
import s from './modal.module.css';
import { BtnMenu } from 'components/BtnMenu';
import { SiteNavList } from 'components/SiteNavList';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = () => {
  useEffect(() => {
    document.body.classList.toggle('modal-open');

    return () => {
      document.body.classList.toggle('modal-open');
    };
  }, []);

  return createPortal(
    <div className={s.Modal__backdrop}>
      <div className={s.Modal__content}>
        <BtnMenu />
        <SiteNavList />
      </div>
    </div>,
    modalRoot
  );
};
