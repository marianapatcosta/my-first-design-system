import styled from 'styled-components';
import {
  baseStyles,
  disabledStyles,
  truncateStyles,
  colors,
} from '../../styles';

export const StyledToggleSwitch = styled.label<{ disabled?: boolean }>`
  ${baseStyles}
  display: flex;
  align-items: center;
  height: auto;
  width: auto;
  font-size: 95%;
  color: ${colors.highlight};
  font-style: italic;
  ${truncateStyles};

  ${({ disabled }) => disabled && `${disabledStyles} color: ${colors.disabled}`}
`;

export const StyledToggleSwitchLabel = styled.span<{ disabled?: boolean }>`
  line-height: 0.75rem;
  padding: 0 0.125rem;
  align-self: center;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  font-size: 90%;
  font-weight: 700;

  ${({ disabled }) => disabled && `${disabledStyles}`}
`;

export const StyledToggleSwitchSlider = styled.span<{
  checked: boolean;
  disabled?: boolean;
  label?: string;
}>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-radius: 2rem;
  border: 0.063rem solid ${colors.highlight};
  cursor: pointer;
  height: 1rem;
  width: 2.4rem;
  line-height: 85%;
  position: relative;
  padding: 0.125rem;
  margin: 0.125rem;
  transition: 0.4s;
  -webkit-transition: 0.4s;

  :hover {
    opacity: 0.75;
  }

  :before {
    background-color: ${colors.highlight};
    opacity: 0.5;
    border-radius: 50%;
    content: '';
    height: 1.25rem;
    width: 1.25rem;
    left: -0.063rem;
    bottom: 0.015rem;
    position: absolute;
    transition: 0.4s;
    -webkit-transition: 0.4s;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
  }

  ${({ label }) => label && `margin-left: 0.5rem;`}

  ${({ checked }) =>
    checked &&
    `
      background-color: ${colors.secondary};

      :before {
        opacity: 1;
        transform: translateX(1.5rem);
      }
    `}
`;

export const StyledToggleInput = styled.input`
  position: absolute;
  opacity: 0;
  z-index: 1;

  // when focus, adds a border to its sibling StyledToggleSwitchSlider
  :focus-visible + ${StyledToggleSwitchSlider} {
    outline: 0.125rem solid ${colors.highlight};
  }

  :focus:not(:focus-visible) + ${StyledToggleSwitchSlider} {
    outline: none;
  }
`;
