import React, { ChangeEvent,  CSSProperties } from 'react';
import {
  StyledTextareaWrapper,
  StyledTextarea,
  StyledLabel,
  StyledTextareaError,
} from './Textarea.style';

export interface TextareaProps {
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
  /**
   * Textarea label
   */
  label?: string;
  /**
   * Textarea name
   */
  name?: string;
  /**
   * Textarea value
   */
  value: string;
  /**
   * Textarea's displaying text when no option is selected
   */
  placeholder?: string;
  /**
   * Is Textarea disabled?
   */
  disabled?: boolean;
  /**
   * what is rows number allowed for the Textarea field?
   */
  rows?: number;
  /**
   * text to display in case of error
   */
  errorMessage?: string;
  /**
   * Change handler
   */
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * Blur handler
   */
  onBlur?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea: React.FC<TextareaProps> = ({
  id,
  label,
  disabled,
  errorMessage,
  ...props
}) => {
  return (
    <StyledTextareaWrapper>
      {label && (
        <StyledLabel htmlFor={id} disabled={disabled}>
          {label}
        </StyledLabel>
      )}
      <StyledTextarea
        data-testid='textarea-field'
        id={id}
        errorMessage={errorMessage}
        disabled={disabled}
        {...props}
      ></StyledTextarea>
      {!!errorMessage && (
        <StyledTextareaError>{errorMessage}</StyledTextareaError>
      )}
    </StyledTextareaWrapper>
  );
};

Textarea.defaultProps = {
  id: '',
  className: '',
  style: {},
  name: '',
  rows: 5,
  disabled: false,
  value: '',
  placeholder: '',
  errorMessage: '',
  onChange: () => null,
  onBlur: () => null,
};
