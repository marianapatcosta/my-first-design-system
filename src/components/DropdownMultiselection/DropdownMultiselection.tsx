import React, {
  CSSProperties,
  KeyboardEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Chevron } from '../../assets/icons';
import { KEYBOARD_KEY } from '../../constants';
import { Checkbox } from '../Checkbox/Checkbox';
import {
  StyledDropdownMultiselection,
  StyledDropdownMultiselectionHeader,
  StyledDropdownMultiselectionArrow,
  StyledDropdownMultiselectionOptions,
  StyledDropdownMultiselectionOption,
} from './DropdownMultiselection.style';

export interface DropdownMultiselectionProps {
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
   * Dropdown's displaying text when no option is selected or if multiple options can be selected
   */
  placeholder?: string;
  /**
   * Is Dropdown disabled?
   */
  disabled?: boolean;
  /**
   * Is Dropdown songle selection?
   */
  isSingleSelection?: boolean;
  /**
   * the options that are selected
   */
  selectedOptions?: Array<any>;
  /**
   * the selected option, if dropdown only allows to select on item each time
   */
  selectedOption?: any;
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
  onOptionClick: MouseEventHandler<HTMLLIElement>;
}

export const DropdownMultiselection: React.FC<DropdownMultiselectionProps> = ({
  placeholder,
  options,
  optionKey,
  disabled,
  isSingleSelection,
  selectedOptions,
  selectedOption,
  onOptionClick,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const element = event.target as Node | null;

      if (dropdownRef.current && !dropdownRef?.current.contains(element)) {
        event.preventDefault();

        setIsExpanded(false);
      }
    };
    document.addEventListener('mouseup', handleClickOutside);

    return () => document.removeEventListener('mouseup', handleClickOutside);
  }, [dropdownRef]);

  const isOptionSelected = (option: any): boolean => {
    if (!!selectedOptions?.length) {
      const selectedOptionsLabels = optionKey
        ? selectedOptions.map((option) => option[optionKey])
        : selectedOptions;
      return selectedOptionsLabels?.includes(
        optionKey ? option[optionKey] : option
      );
    }

    return optionKey
      ? option[optionKey] === selectedOption[optionKey]
      : selectedOption === option;
  };

  const toggleDropdownExpansion = () => {
    !disabled && setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  const handleKeyEvent = (event: KeyboardEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (disabled) return;
    if (event.key === KEYBOARD_KEY.ESCAPE_KEY) {
      return setIsExpanded(false);
    }
    if (event.key === KEYBOARD_KEY.ENTER_KEY) {
      return setIsExpanded((prevIsExpanded) => !prevIsExpanded);
    }
    if (event.key === KEYBOARD_KEY.SPACE_KEY) {
      return setIsExpanded(true);
    }
  };

  const getPlaceholder = () => {
    if (!isSingleSelection) return placeholder;
    return optionKey ? selectedOption[optionKey] : selectedOption;
  };

  return (
    <StyledDropdownMultiselection {...props} ref={dropdownRef}>
      <StyledDropdownMultiselectionHeader
        disabled={disabled}
        role='button'
        tabIndex={disabled ? -1 : 0}
        aria-label={`Select ${placeholder}`}
        aria-expanded={isExpanded}
        onClick={toggleDropdownExpansion}
        onKeyDown={handleKeyEvent}
      >
        <div>{getPlaceholder() || placeholder}</div>
        <StyledDropdownMultiselectionArrow
          isExpanded={isExpanded}
          alt='chevron-icon'
          src={Chevron}
        />
      </StyledDropdownMultiselectionHeader>
      {isExpanded && (
        <StyledDropdownMultiselectionOptions data-testid='dropdown-options'>
          {options.map((option, index) => (
            <StyledDropdownMultiselectionOption key={index * Math.random()}>
              <Checkbox
                disabled={disabled}
                onChange={() => onOptionClick(option)}
                checked={isOptionSelected(option)}
                label={optionKey ? option[optionKey] : option}
              />
            </StyledDropdownMultiselectionOption>
          ))}
        </StyledDropdownMultiselectionOptions>
      )}
    </StyledDropdownMultiselection>
  );
};

DropdownMultiselection.defaultProps = {
  id: '',
  className: '',
  style: {},
  placeholder: '',
  disabled: false,
  isSingleSelection: false,
  options: [],
  selectedOptions: [],
  selectedOption: '',
  optionKey: '',
};
