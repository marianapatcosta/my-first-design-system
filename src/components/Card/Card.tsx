import React, { forwardRef, ReactNode } from 'react';
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
   * element id
   */
  children?: ReactNode;
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
  className: '',
  id: '',
  children: null,
};
