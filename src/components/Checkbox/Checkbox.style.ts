import styled from 'styled-components';
import {
  baseStyles,
  disabledStyles,
  colors,
  truncateStyles,
} from '../../styles';

export const StyledCheckbox = styled.label<{ disabled?: boolean }>`
  ${baseStyles};
  ${truncateStyles};
  display: flex;
  width: 100%;
  font-size: 95%;
  color: ${colors.highlight};

  ${({ disabled }) => disabled && `color: ${colors.disabled};`}
`;

export const StyledCheckboxToggleTick = styled.img`
  width: 1rem;
  height: 1rem;
  filter: ${colors.iconHighlight};
`;

export const StyledCheckboxToggle = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  width: 1rem;
  height: 1rem;
  margin: 0.125rem;
  margin-right: 0.5rem;
  box-shadow: 0 0.063rem 0.25rem ${colors.shadow};
  border-radius: 0.2rem;
  background-color: ${colors.primary};
  transition: background-color 0.5s ease-in-out;
  cursor: pointer;

  :hover {
    opacity: 0.75;
  }

  ${({ disabled }) =>
    disabled &&
    `
      background-color: ${colors.disabled};
      ${disabledStyles}
    `}
`;

export const StyledCheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  :checked + ${StyledCheckboxToggle} {
    background-color: ${colors.highlight};
  }

  // when focus, adds a border to its sibling StyledCheckboxToggle
  :focus-visible + ${StyledCheckboxToggle} {
    outline: 0.125rem solid ${colors.highlight};
  }

  :focus:not(:focus-visible) + ${StyledCheckboxToggle} {
    outline: none;
  }
`;
