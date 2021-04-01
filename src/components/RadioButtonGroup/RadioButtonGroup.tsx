import React, { CSSProperties, ChangeEvent } from 'react';
import { ORIENTATION } from '../../constants';
import { RadioButton } from '../RadioButton/RadioButton';
import {
  StyledRadioButtonGroup,
  StyledRadioButtonGroupTitle,
  StyledRadioButtonsContainer,
} from './RadioButtonGroup.style';

type orientationTypes = ORIENTATION;

interface RadioButtonItem {
  label: string;
  id?: string;
  name?: string;
}

export interface RadioButtonGroupProps {
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
   * radio button group's title
   */
  title?: string;
  /**
   * Are radio buttons disabled?
   */
  disabled?: boolean;
  /**
   * radio button group items' orientation
   */
  orientation?: orientationTypes;
  /**
   * additional css class
   */
  radioButtonClassName?: string;
  /**
   * items to diaplay in radiobutton
   */
  items: Array<RadioButtonItem> | Array<string>;
  /**
   * items to diaplay in radiobutton
   */
  selectedItem: string | Array<RadioButtonItem>;
  /**
   * Change handler
   */
  onChange: (event?: ChangeEvent<HTMLInputElement>) => void;
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  items,
  title,
  disabled,
  radioButtonClassName,
  selectedItem,
  orientation,
  onChange,
  ...props
}) => {
  return (
    <StyledRadioButtonGroup {...props} role='radiogroup'>
      {title && (
        <StyledRadioButtonGroupTitle>{title}</StyledRadioButtonGroupTitle>
      )}
      <StyledRadioButtonsContainer
        isVertical={orientation === ORIENTATION.VERTICAL}
      >
        {items.map((item: any) => (
          <RadioButton
            key={`radio-button-${item.label || item}`}
            disabled={disabled}
            id={item.id}
            name={item.name}
            className={radioButtonClassName}
            checked={
              !!item.label ? selectedItem === item.label : selectedItem === item
            }
            value={item.label || item}
            label={item.label || item}
            onChange={onChange}
          />
        ))}
      </StyledRadioButtonsContainer>
    </StyledRadioButtonGroup>
  );
};

RadioButtonGroup.defaultProps = {
  id: '',
  className: '',
  style: {},
  title: '',
  orientation: ORIENTATION.LANDSCAPE,
  radioButtonClassName: '',
  items: [],
  selectedItem: '',
  onChange: () => null,
};
