import { Z_INDEX } from '@/styles';
import { useState, useEffect, ReactNode, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface IModalProps {
  children: ReactNode;
  onClose: () => void;
}

function Modal({ children, onClose }: IModalProps) {
  const [isCSR, setIsCSR] = useState<boolean>(false);
  const portalRef = useRef<HTMLDivElement>(document.createElement('div'));

  useEffect(() => {
    setIsCSR(true);
  }, []);

  useEffect(() => {
    portalRef.current.id = 'modal';

    const makePortal = () => {
      document.body.style.overflow = 'hidden';
      document.body.appendChild(portalRef.current);
    };

    const removePortal = () => {
      document.body.style.overflow = '';
      document.body.removeChild(portalRef.current);
    };

    makePortal();
    return () => removePortal();
  }, []);

  if (typeof window === 'undefined') return <></>;
  if (!isCSR) return <></>;

  const Portal = ReactDOM.createPortal(
    <>
      <Dimmed onClick={onClose} />
      <Container>
        <CloseBtn onClick={onClose}>
          <div>X</div>
        </CloseBtn>
        {children}
      </Container>
    </>,
    document.body,
  );

  return Portal;
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
