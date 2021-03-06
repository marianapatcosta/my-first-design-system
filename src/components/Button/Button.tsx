import React, { forwardRef, MouseEventHandler } from 'react';
import { StyledButton } from './Button.style';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;

export interface ButtonProps {
  /**
   * element id
   */
  id?: string;
  /**
   * additional class
   */
  className?: string;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What is button's type
   */
  type?: ButtonType;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Will the button occupy all the available width?
   */
  isFullLength?: boolean;
  /**
   * Button's label
   */
  label: string;
  /**
   * Is Button disabled?
   */
  disabled?: boolean;
  /**
   * Click handler
   */
  onClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Primary UI component for user interaction
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { primary, size, isFullLength, label, disabled, type, className, ...props },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        className={className}
        primary={primary}
        isFullLength={isFullLength}
        disabled={disabled}
        {...props}
      >
        {label}
      </StyledButton>
    );
  }
);

Button.defaultProps = {
  primary: false,
  size: 'medium',
  isFullLength: false,
  label: '',
  disabled: false,
  type: 'button',
  className: '',
  id: '',
  onClick: () => null,
};
