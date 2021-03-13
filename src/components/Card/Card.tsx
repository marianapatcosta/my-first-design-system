import React, { CSSProperties, forwardRef, ReactNode } from 'react';
import { StyledCard } from './Card.style';

export interface CardProps {
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
   * element id
   */
  children?: string | ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledCard ref={ref} {...props}>
        {children}
      </StyledCard>
    );
  }
);

Card.defaultProps = {
  id: '',
  className: '',
  style: {},
  children: null,
};
