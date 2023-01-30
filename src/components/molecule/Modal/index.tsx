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

  const handleCloseBtnClick = () => {
    onClose();
  };

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
      <Dimmed />
      <Container>
        <CloseBtn onClick={handleCloseBtnClick}>
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
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;
