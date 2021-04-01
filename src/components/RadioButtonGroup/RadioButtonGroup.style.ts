import styled from 'styled-components';
import { baseStyles } from '../../styles';
import { RadioButton } from '../RadioButton/RadioButton';

export const StyledRadioButtonGroup = styled.div`
  ${baseStyles}
  display: flex;
  flex-direction: column;
`;

export const StyledRadioButtonGroupTitle = styled.h3`
  font-size: 110%;
  font-weight: normal;
  margin-bottom: 1rem;
`;

export const StyledRadioButtonsContainer = styled.div<{ isVertical?: boolean }>`
  display: flex;
  > * {
    margin-right: 1rem;
  }
  ${({ isVertical }) =>
    isVertical &&
    `flex-direction: column; > * {
     margin-bottom: 0.5rem; margin-right: 0;}`}
`;
