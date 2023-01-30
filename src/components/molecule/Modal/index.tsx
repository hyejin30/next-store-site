import { useState, useEffect, ReactNode, useRef } from 'react';
import styled from 'styled-components';

import Portal from '@mui/base/Portal';
import { Box } from '@mui/system';

import { Z_INDEX } from '@/styles';

interface IModalProps {
  children: ReactNode;
  onClose: () => void;
}

function Modal({ children, onClose }: IModalProps) {
  const [isCSR, setIsCSR] = useState<boolean>(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsCSR(true);
  }, []);

  if (typeof window === 'undefined') return <></>;
  if (!isCSR) return <></>;

  return (
    <>
      <Dimmed onClick={onClose} />
      <Container>
        <Portal container={container.current}>
          <CloseBtn onClick={onClose}>X</CloseBtn>
          {children}
        </Portal>
        <Box sx={{ p: 1, my: 1 }} ref={container} />
      </Container>
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
  background: rgba(0, 0, 0, 0.5);
  z-index: ${Z_INDEX.dimmed};
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
`;
