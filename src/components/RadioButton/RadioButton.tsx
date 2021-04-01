import React, { CSSProperties, ChangeEvent } from 'react';
import {
  StyledRadioButtonWrapper,
  StyledRadioButton,
  StyledRadioButtonInput,
} from './RadioButton.style';

export interface RadioButtonProps {
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
   * Radio Button's label
   */
  label: string;
  /**
   * Radio Button's name
   */
  name?: string;
  /**
   * radio button' value
   */
  value: any;
  /**
   * Is Radio Button checked?
   */
  checked: boolean;
  /**
   * Is Radio Button disabled?
   */
  disabled?: boolean;
  /**
   * Change handler
   */
  onChange: (event?: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  id,
  disabled,
  checked,
  ...props
}) => {
  return (
    <StyledRadioButtonWrapper aria-checked={checked}>
      <StyledRadioButtonInput
        data-testid={id || 'radio-button'}
        type='radio'
        checked={checked}
        disabled={disabled}
        {...props}
      />
      <StyledRadioButton disabled={disabled} />
      {label}
    </StyledRadioButtonWrapper>
  );
};

RadioButton.defaultProps = {
  id: '',
  className: '',
  style: {},
  name: '',
  value: '',
  label: '',
  checked: false,
  disabled: false,
  onChange: () => null,
};
