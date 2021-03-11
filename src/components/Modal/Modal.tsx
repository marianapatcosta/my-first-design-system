import React, { CSSProperties } from 'react';
import { StyledModal } from './Modal.style';

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
};

export const Modal: React.FC<ModalProps>= ({ ...props}) => {
  return (
    <StyledModal  {...props}>
      
    </StyledModal>
  );
};


Modal.defaultProps = {
  id: '',
  className: '',
  style: {}
};