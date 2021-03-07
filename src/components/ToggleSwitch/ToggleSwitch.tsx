import React, { ChangeEvent } from 'react';
import {
  StyledToggleSwitch,
  StyledToggleSwitchLabel,
  StyledToggleSwitchSlider,
  StyledToggleInput,
} from './ToggleSwitch.style';

export interface ToggleSwitchProps {
  /**
   * element id
   */
  id?: string;
  /**
   * additional css class
   */
  className?: string;
  /**
   * ToggleSwitch's label
   */
  label?: string;
  /**
   * label to display inside the ToggleSwitch, on the left side
   */
  leftLabel?: string;
  /**
   * label to display inside the ToggleSwitch, on the right side
   */
  rightLabel?: string;
  /**
   * ToggleSwitch's name
   */
  name?: string;
  /**
   * Is ToggleSwitch checked?
   */
  checked: boolean;
  /**
   * Is ToggleSwitch disabled?
   */
  disabled?: boolean;
  /**
   * Change handler
   */
  onChange: (event?: ChangeEvent<HTMLInputElement>) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  className,
  name,
  label,
  leftLabel,
  rightLabel,
  checked,
  disabled,
  onChange,
}) => {
  return (
    <StyledToggleSwitch className={className} disabled={disabled}>
      <StyledToggleInput
        type='checkbox'
        name={name || label}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {!!label && label}
      <StyledToggleSwitchSlider
        checked={checked}
        disabled={disabled}
        label={label}
        data-testid='toggle-slider'
      >
        <StyledToggleSwitchLabel disabled={disabled} >
          {checked && leftLabel}
        </StyledToggleSwitchLabel>
        <StyledToggleSwitchLabel >
          {!checked && rightLabel}
        </StyledToggleSwitchLabel>
      </StyledToggleSwitchSlider>
    </StyledToggleSwitch>
  );
};

ToggleSwitch.defaultProps = {
  className: '',
  id: '',
  name: '',
  label: '',
  leftLabel: '',
  rightLabel: '',
  checked: false,
  disabled: false,
  onChange: () => null,
};
