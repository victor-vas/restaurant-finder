import { ReactNode, useEffect } from 'react';

import Portal from './Portal';

import { Overlay, Dialog } from './styled';

interface ModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal = ({ children, open, onClose }: ModalProps) => {
  useEffect(() => {
    const onEsc = (e) => {
      if (e.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  }, [onClose]);

  if (!open) return null;

  const onOverlayClick = () => {
    onClose();
  };

  const onDialogClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={onDialogClick}>{children}</Dialog>
      </Overlay>
    </Portal>
  );
};

export default Modal;
