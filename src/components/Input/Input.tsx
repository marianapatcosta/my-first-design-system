import React, { ChangeEvent, CSSProperties, MouseEventHandler } from 'react';
import {
  StyledInputWrapper,
  StyledInput,
  StyledInputField,
  StyledLabel,
  StyledInputIcon,
  StyledInputError,
} from './Input.style';

type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | undefined;

export interface InputProps {
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
   * Input label
   */
  label?: string;
  /**
   * Input name
   */
  name?: string;
  /**
   * Input value
   */
  value: string;
  /**
   * Input type
   */
  type?: InputType;
  /**
   * Input's displaying text when no option is selected
   */
  placeholder?: string;
  /**
   * Is Input disabled?
   */
  disabled?: boolean;
  /**
   * what is maxLength allowed for the input field?
   */
  maxLength?: number;
  /**
   * is autoComplete functionality available?
   */
  autoComplete?: string;
  /**
   * is autoFocus functionality available?
   */
  autoFocus?: boolean;
  /**
   * text to display in case of error
   */
  errorMessage?: string;
  /**
   * icon to display in input field
   */
  icon?: string;
  /**
   * text to describe the input icon (for accessibility purposes)
   */
  iconText?: string;
  /**
   * Change handler
   */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Blur handler
   */
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Click handler on icon click
   */
  onIconClick?: MouseEventHandler<HTMLImageElement>;
}

export const Input: React.FC<InputProps> = ({
  id,
  className,
  label,
  disabled,
  placeholder,
  errorMessage,
  icon,
  iconText,
  onIconClick,
  ...props
}) => {
  return (
    <StyledInputWrapper>
      {!!label && (
        <StyledLabel htmlFor={id} disabled={disabled}>
          {label}
        </StyledLabel>
      )}
      <StyledInputField className={className} disabled={disabled}>
        <StyledInput
          data-testid='input-field'
          aria-label={!!label ? label : placeholder}
          id={id}
          disabled={disabled}
          errorMessage={errorMessage}
          placeholder={placeholder}
          {...props}
        />
        {icon && (
          <StyledInputIcon
            data-testid='input-icon'
            aria-label={!!onIconClick ? 'click me' : 'image'}
            alt={iconText}
            src={icon}
            onClick={onIconClick}
            tabIndex={onIconClick ? 0 : -1}
          />
        )}
      </StyledInputField>
      {!!errorMessage && <StyledInputError>{errorMessage}</StyledInputError>}
    </StyledInputWrapper>
  );
};

Input.defaultProps = {
  id: '',
  className: '',
  style: {},
  label: '',
  name: '',
  disabled: false,
  maxLength: 150,
  type: 'text',
  autoComplete: 'off',
  autoFocus: false,
  value: '',
  placeholder: '',
  errorMessage: '',
  icon: '',
  iconText: '',
  onChange: () => null,
};
