import React, { ChangeEvent, CSSProperties } from 'react';
import { Tick } from '../../assets/icons';
import {
  StyledCheckbox,
  StyledCheckboxToggle,
  StyledCheckboxInput,
  StyledCheckboxToggleTick,
} from './Checkbox.style';

export interface CheckboxProps {
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
   * Checkbox's label
   */
  label: string;
  /**
   * Checkbox's name
   */
  name?: string;
  /**
   * Is Checkbox checked?
   */
  checked: boolean;
  /**
   * Is Checkbox disabled?
   */
  disabled?: boolean;
  /**
   * Change handler
   */
  onChange: (event?: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  name,
  disabled,
  label,
  className,
  onChange,
  ...props
}) => {
  return (
    <StyledCheckbox className={className} disabled={disabled} {...props}>
      <StyledCheckboxInput
        type='checkbox'
        name={name || label}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <StyledCheckboxToggle disabled={disabled}>
        {checked && <StyledCheckboxToggleTick alt='checkbox tick' src={Tick} />}
      </StyledCheckboxToggle>
      {label}
    </StyledCheckbox>
  );
};

Checkbox.defaultProps = {
  id: '',
  className: '',
  style: {},
  name: '',
  label: '',
  checked: false,
  disabled: false,
  onChange: () => null,
};
