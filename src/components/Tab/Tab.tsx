import React, { CSSProperties, MouseEventHandler } from 'react';
import { isEventValid } from '../../utils/utils';
import { StyledTab } from './Tab.style';

export interface TabProps {
  /**
   * element id
   */
  id?: string;
  /**
   * additional css class
   */
  tabClassName?: string;
  /**
   * additional style
   */
  style?: CSSProperties;
  /**
  /**
   * Dropdown's label
   */
  label: string;
  /**
   * Is Tab disabled?
   */
  disabled?: boolean;
  /**
   * Is Tab active, i.e, is the one is content is being rendered?
   */
  isActive?: boolean;
  /**
   * Click handler
   */
  onClick: MouseEventHandler<HTMLLIElement>;
}

export const Tab: React.FC<TabProps> = ({
  disabled,
  isActive,
  label,
  onClick,
  tabClassName,
  ...props
}) => {
  const handleTabSelection = (event: any) =>
    isEventValid(event) && !disabled && onClick(event);

  return (
    <StyledTab
      role='tab'
      aria-selected={isActive}
      tabIndex={disabled ? -1 : 0}
      id={label}
      className={tabClassName}
      isActive={isActive}
      disabled={disabled}
      onClick={handleTabSelection}
      onKeyDown={handleTabSelection}
      {...props}
    >
      {label}
    </StyledTab>
  );
};

Tab.defaultProps = {
  id: '',
  tabClassName: '',
  style: {},
  label: '',
  disabled: false,
  isActive: false,
  onClick: () => null,
};
