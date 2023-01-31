import { useState, useEffect, ReactNode, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { colors, fontSize, Z_INDEX } from '@/styles';

interface IModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

function Modal({ isOpen, children, onClose }: IModalProps) {
  const [isCSR, setIsCSR] = useState<boolean>(false);

  useEffect(() => {
    setIsCSR(true);
  }, []);

  if (typeof window === 'undefined') return <></>;
  if (!isCSR || !isOpen) return <></>;

  return ReactDOM.createPortal(
    <>
      <Modal.Dimmed onClick={onClose} />
      <Modal.Container>
        <Modal.CloseBtn onClick={onClose}>
          <CloseIcon />
        </Modal.CloseBtn>
        {children}
      </Modal.Container>
    </>,
    document.getElementById('modal')!,
  );
}

export default Modal;

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${Z_INDEX.dimmed};
  background: rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${Z_INDEX.modal};
  animation: open 0.3s ease-out;

  @keyframes open {
    from {
      top: 53%;
      opacity: 0;
    }
    to {
      top: 50%;
      opacity: 1;
    }
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  padding: 10px;
  background-color: ${colors.WHITE};
  border-radius: 8px;
  border: 0;
  font-size: ${fontSize.large};
  z-index: ${Z_INDEX.modal};

  &:hover {
    background-color: ${colors.BLACK};
    transition: all 0.3s;

    div {
      background-image: url('/images/ic-close-white.png');
      transition: all 0.3s;
    }
  }
`;

const CloseIcon = styled.div`
  width: 20px;
  height: 20px;
  background-size: contain;
  background-image: url('/images/ic-close-black.png');
`;

Modal.Dimmed = Dimmed;
Modal.Container = Container;
Modal.CloseBtn = CloseBtn;
