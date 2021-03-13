import React, { CSSProperties, ReactNode } from 'react';
import { StyledStep } from './Step.style';

export interface StepProps {
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
   * step content
   */
  content: string | ReactNode;
  /**
   * Is this the current step?
   */
  isActive: boolean;
}

export const Step: React.FC<StepProps> = ({ content, isActive, ...props }) => {
  return (
    <StyledStep {...props} isActive={isActive}>
      {content}
    </StyledStep>
  );
};

Step.defaultProps = {
  id: '',
  className: '',
  style: {},
  content: '',
  isActive: false
};
