import styled from 'styled-components';
import { baseStyles, colors  } from '../../styles';

export const StyledDropdownContainer = styled.div`
  ${baseStyles}
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 10rem;
  position: relative;
`;

export const StyledDropdown = styled.div<{
  isExpanded: boolean;
  disabled?: boolean;
}>`
  display: flex;
  width: 100%;
  position: relative;

  :after {
    position: absolute;
    top: 50%;
    bottom: 50%;
    right: 0.8rem;
    margin: auto 0;
    content: '';
    pointer-events: none;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.2em solid ${colors.highlight};
    border-bottom: 0.2em solid ${colors.highlight};
    transform: rotate(45deg);
    -webkit-transition: all 0.5s linear;
    transition: all 0.5s linear;

    ${({ isExpanded }) =>
      isExpanded
        ? `
          transform: rotate(225deg);
        `
        : ''}

    ${({ disabled }) =>
      `  border-bottom-color: ${disabled && colors.disabled};
        border-right-color: ${disabled && colors.disabled};
        `}
  }
`;

export const StyledDropdownLabel = styled.label<{ disabled?: boolean }>`
  display: block;
  color: ${colors.highlight};
  margin: 0 0.8rem 0.3rem 0.3rem;
  font-size: 95%;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${({ disabled }) =>
    `   color: ${disabled ? colors.disabled : ''};
    `}
`;

export const StyledDropdownHeader = styled.select`
  // reset of styles, including removing the default dropdown arrow
  appearance: none;
  border: none;
  margin: 0;
  width: 100%;
  font-family: inherit;
  cursor: inherit;
  line-height: inherit;
  ${baseStyles}
  background-color: ${colors.primary};
  box-shadow: 0 0.063rem 0.25rem ${colors.shadow};
  padding: 0.3rem 2rem 0.3rem 0.8rem;
  font-size: 95%;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;

  ::-ms-expand {
    display: none;
  }

  :hover {
    cursor: pointer;
  }

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.75;
    pointer-events: none;
    &:hover {  
      cursor: default;
    }
    `}
`;

export const StyledDropdownOption = styled.option`
  padding: 0.625rem 0.3rem;
  line-height: 4rem;
  box-sizing: border-box;

  :hover {
    cursor: pointer;
    background-color: ${colors.secondary} !important;
  }

  :checked {
    font-weight: bold;
  }
`;
