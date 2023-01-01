import { createPortal } from 'react-dom';
import s from './modal.module.css';
import { BtnMenu } from 'components/BtnMenu';

const modalRoot = document.querySelector('#modal-root');

export const Modal = () => {
  return createPortal(
    <div className={s.Modal__backdrop}>
      <div className={s.Modal__content}>
        <BtnMenu />
      </div>
    </div>,
    modalRoot
  );
};
