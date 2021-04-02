import React, { CSSProperties, forwardRef, MouseEventHandler } from 'react';
import {
  StyledButton,
  StyledButtonLabel,
  StyledButtonIcon,
} from './Button.style';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;
export type ButtonSize = 'small' | 'medium' | 'large';

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
  label?: string;
  /**
   * Is Button disabled?
   */
  disabled?: boolean;
  /**
   * Button icon
   */
  icon?: string;
  /**
   * text to describe the button icon (for accessibility purposes)
   */
  iconText?: string;
  /**
   * Click handler
   */
  onClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Primary UI component for user interaction
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, icon, iconText, ...props }, ref) => {
    return (
      <StyledButton ref={ref} {...props}>
        {icon && (
          <StyledButtonIcon
            data-testid='button-icon'
            src={icon}
            alt={iconText}
            label={label}
          />
        )}
        {label && (
          <StyledButtonLabel hasIcon={!!icon}>{label}</StyledButtonLabel>
        )}
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
  icon: '',
  iconText: '',
};
