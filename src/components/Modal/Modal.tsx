import React, {
  CSSProperties,
  MouseEventHandler,
  useEffect,
  useRef,
} from 'react';
import { Close } from '../../assets/icons';
import {
  StyledModal,
  StyledModalOverlay,
  StyledModalContent,
  StyledModalHeader,
  StyledModalHeaderTitle,
  StyledModalHeaderClose,
  StyledModalMessage,
  StyledModalFooter,
  StyledModalFooterButton,
} from './Modal.style';

export interface ModalProps {
  /**
   * element id
   */
  id?: string;
  /**
   * additional css class
   */
  className?: string;
  /**
   * additional style
   */
  style?: CSSProperties;
  /**
   * Modal's header
   */
  header?: string;
  /**
   * Modal's message content
   */
  content: string;
  /**
   * Label to display in Modal's button
   */
  buttonLabel: string;
  /**
   * Is Modal for confirm some action? It display 2 buttons for confirm and cancel action
   */
  isConfirmationModal?: boolean;
  /**
   * Label to display in confirmation modal, if isConfirmationModal = true
   */
  confirmationButtonLabel?: string;
  /**
   * Click handler to call on close ou on cancel (if isConfirmationModal = true)
   */
  onClose: MouseEventHandler<
    HTMLButtonElement
  > /* | ((event: MouseEvent) => void) */;
  /**
   * Click handler to call on confirmation, if isConfirmationModal = true
   */
  onConfirm?: MouseEventHandler<HTMLButtonElement>;
}

export const Modal: React.FC<ModalProps> = ({
  header,
  content: message,
  buttonLabel,
  confirmationButtonLabel,
  isConfirmationModal,
  onClose,
  onConfirm: onConfirmation,
  ...props
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // !!modalButtonRef.current && modalButtonRef.current.focus();

    const handleClickOutside = (event: any /* MouseEvent */) => {
      const element = event.target as Node | null;

      if (modalRef.current && !modalRef?.current.contains(element)) {
        event.preventDefault();
        event.stopPropagation();

        !!onClose && onClose(event);
      }
    };
    document.addEventListener('click', handleClickOutside);

    return function cleanupListener() {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [modalRef, onClose]);

  return (
    <StyledModal>
      <StyledModalOverlay>
        <StyledModalContent ref={modalRef} {...props}>
          <StyledModalHeader>
            <StyledModalHeaderTitle>{header}</StyledModalHeaderTitle>
            <StyledModalHeaderClose
              aria-label='close modal'
              icon={Close}
              onClick={onClose}
            />
          </StyledModalHeader>
          <main>
            <StyledModalMessage>{message}</StyledModalMessage>
          </main>
          <StyledModalFooter>
            {isConfirmationModal &&
              confirmationButtonLabel &&
              onConfirmation && (
                <StyledModalFooterButton
                  size='small'
                  label={confirmationButtonLabel}
                  onClick={onConfirmation}
                />
              )}
            <StyledModalFooterButton
              size='small'
              isConfirmationModal={isConfirmationModal}
              ref={modalButtonRef}
              label={buttonLabel}
              onClick={onClose}
            />
          </StyledModalFooter>
        </StyledModalContent>
      </StyledModalOverlay>
    </StyledModal>
  );
};

Modal.defaultProps = {
  id: '',
  className: '',
  style: {},
  header: '',
  content: '',
  buttonLabel: '',
  confirmationButtonLabel: '',
  isConfirmationModal: false,
  onClose: () => null,
  onConfirm: () => null,
};
