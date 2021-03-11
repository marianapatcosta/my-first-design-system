import React, {
  ChangeEvent,
  CSSProperties,
  KeyboardEvent,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import { Close, MagnifyingGlass } from '../../assets/icons';
import { isEventValid } from '../../utils/utils';
import {
  StyledSearchWrapper,
  StyledLabel,
  StyledSearchContainer,
  StyledSearch,
  StyledSearchIconWrapper,
  StyledSearchIcon,
} from './Search.style';

export interface SearchProps {
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
   * Search label
   */
  label?: string;
  /**
   * Search name
   */
  name?: string;
  /**
   * Search value
   */
  value: string;
  /**
   * Search's displaying text when no option is selected
   */
  placeholder?: string;
  /**
   * what is maxLength allowed for the search field?
   */
  maxLength?: number;
  /**
   * Is Search disabled?
   */
  disabled?: boolean;
  /**
   * Is Search expansible i.e. is search collapsed and search field is rendered after click,
   * or search field is always visible?
   */
  isExpandable?: boolean;
  /**
   * Change handler
   */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Click handler to remove the value in search field
   */
  onClear: MouseEventHandler<HTMLImageElement>;
}

export const Search: React.FC<SearchProps> = ({
  className,
  id,
  label,
  value,
  disabled,
  placeholder,
  isExpandable,
  onClear,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => setIsExpanded(isExpandable ? false : true), [isExpandable]);

  const toggleIsExpanded = () =>
    isExpandable && setIsExpanded((prevIsExpanded: boolean) => !prevIsExpanded);

  const handleClear = (event: MouseEvent<HTMLImageElement>) => {
    if (isExpandable) setIsExpanded(false);
    onClear(event);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) =>
    isEventValid(event) && isExpandable && toggleIsExpanded();

  return (
    <StyledSearchWrapper className={className}>
      {label && (
        <StyledLabel htmlFor={id} disabled={disabled}>
          {label}
        </StyledLabel>
      )}
      <StyledSearchContainer isExpanded={!isExpandable ? true : isExpanded}>
        <StyledSearch
          data-testid='search-field'
          id={id}
          type='search'
          placeholder={isExpanded ? placeholder : ''}
          disabled={disabled}
          isExpanded={!isExpandable ? true : isExpanded}
          value={isExpanded ? value : ''}
          onBlur={() => setIsExpanded(false)}
          onKeyDown={handleKeyDown}
          {...props}
        />
        <StyledSearchIconWrapper>
          <StyledSearchIcon
            data-testid='search-icon'
            alt={value && isExpanded ? 'clear-icon' : 'magnifying-glass-icon'}
            src={value && isExpanded ? Close : MagnifyingGlass}
            isExpandable={isExpandable}
            isExpanded={!isExpandable ? true : isExpanded}
            onClick={!value ? toggleIsExpanded : handleClear}
          />
        </StyledSearchIconWrapper>
      </StyledSearchContainer>
    </StyledSearchWrapper>
  );
};

Search.defaultProps = {
  id: '',
  className: '',
  style: {},
  label: '',
  name: '',
  maxLength: 150,
  placeholder: 'Search',
  disabled: false,
  isExpandable: false,
  value: '',
  onChange: () => null,
  onClear: () => null,
};
