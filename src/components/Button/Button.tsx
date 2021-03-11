import React, { CSSProperties, forwardRef, MouseEventHandler } from 'react';
import { StyledButton } from './Button.style';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;
type ButtonSize = 'small' | 'medium' | 'large';

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
   * additional style
   */
  style?: CSSProperties;
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
  size?: ButtonSize;
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
  id: '',
  className: '',
  style: {},
  primary: false,
  size: 'medium',
  isFullLength: false,
  label: '',
  disabled: false,
  type: 'button',
  onClick: () => null,
};
