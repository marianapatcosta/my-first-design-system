import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { KEYBOARD_KEYS } from '../../constants';
import {
  StyledDropdown,
  StyledDropdownContainer,
  StyledDropdownLabel,
  StyledDropdownHeader,
  StyledDropdownOption,
} from './Dropdown.style';

export interface DropdownProps {
  /**
   * element id
   */
  id?: string;
  /**
   * additional css class
   */
  className?: string;
  /**
   * Dropdown's label
   */
  label?: string;
  /**
   * Dropdown's name
   */
  name?: string;
  /**
   * Dropdown's displaying text when no option is selected
   */
  placeholder?: string;
  /**
   * Is Dropdown disabled?
   */
  disabled?: boolean;
  /**
   * the option that is selected
   */
  selectedOption: any;
  /**
   * name of the field to be displayed in the list of dropdown's options, when options prop is an array of objects
   */
  optionKey?: string;
  /**
   * options to display in the dropdown content
   */
  options: Array<any>;
  /**
   * Change handler
   */
  onChooseOption: (event?: ChangeEvent<HTMLSelectElement>) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  className,
  name,
  placeholder,
  options,
  selectedOption,
  label,
  disabled,
  optionKey,
  onChooseOption,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.stopPropagation();
    onChooseOption(event);
  };

  const handleKeyEvent = (event: KeyboardEvent<HTMLSelectElement>) => {
    event.stopPropagation();
    if (event.key === KEYBOARD_KEYS.ESCAPE_KEY) {
      return setIsExpanded(false);
    }
    if (event.key === KEYBOARD_KEYS.ENTER_KEY) {
      return setIsExpanded((prevIsExpanded) => !prevIsExpanded);
    }
    if (event.key === KEYBOARD_KEYS.SPACE_KEY) {
      return setIsExpanded(true);
    }
  };

  return (
    <StyledDropdownContainer className={className}>
      {!!label && (
        <StyledDropdownLabel htmlFor={name || label} disabled={disabled}>
          {label}
        </StyledDropdownLabel>
      )}
      <StyledDropdown isExpanded={isExpanded} disabled={disabled}>
        <StyledDropdownHeader
          aria-label={`Select ${name || label}`}
          name={name || label}
          disabled={disabled}
          value={selectedOption}
          onChange={handleOptionChange}
          onClick={() => setIsExpanded((prevIsExpanded) => !prevIsExpanded)}
          onBlur={() => setIsExpanded(false)}
          onKeyUp={handleKeyEvent}
          onKeyDown={handleKeyEvent}
        >
          {!!placeholder && (
            <StyledDropdownOption value='' hidden>
              {placeholder}
            </StyledDropdownOption>
          )}
          {options.map((option: any, index: number) => {
            const optionLabel = optionKey ? option[optionKey] : option;
            return (
              <StyledDropdownOption
                key={`dropdown-option-${index + Math.random()}`}
                value={option}
              >
                {optionLabel}
              </StyledDropdownOption>
            );
          })}
        </StyledDropdownHeader>
      </StyledDropdown>
    </StyledDropdownContainer>
  );
};

Dropdown.defaultProps = {
  className: '',
  id: '',
  name: '',
  label: '',
  placeholder: '',
  disabled: false,
  options: [],
  selectedOption: null,
  optionKey: '',
  onChooseOption: () => null,
};
