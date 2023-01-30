import { useState, useEffect, ReactNode, useRef, Suspense } from 'react';
import styled from 'styled-components';

import Portal from '@mui/base/Portal';

import { colors, fontSize, Z_INDEX } from '@/styles';

interface IModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

function Modal({ isOpen, children, onClose }: IModalProps) {
  const [isCSR, setIsCSR] = useState<boolean>(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsCSR(true);
  }, []);

  if (typeof window === 'undefined') return <></>;
  if (!isCSR || !isOpen) return <></>;

  return (
    <>
      <Dimmed onClick={onClose} />
      <Portal container={container.current}>
        <Container ref={container}>
          <CloseBtn onClick={onClose}>X</CloseBtn>
          {children}
        </Container>
      </Portal>
    </>
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
  animation: fadein 1s;

  @keyframes fadein {
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
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 15px 25px 17px;
  background: ${colors.WHITE};
  border-radius: 8px;
  border: 0;
  color: ${colors.BLACK};
  font-size: ${fontSize.large};

  &:hover {
    color: ${colors.WHITE};
    background: ${colors.BLACK};
    transition: all 0.5s;
  }
`;
