import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, className, isHidden }) => {
  useEffect(() => {
    document.body.classList.toggle('modal-open');

    return () => {
      document.body.classList.toggle('modal-open');
    };
  }, []);

  return createPortal(
    <div
      className={`${className.modal__backdrop} ${
        isHidden ? className.beckdropIsHidden : ''
      }`}
    >
      <div className={className.modal__content}>{children}</div>
    </div>,
    modalRoot
  );
};
