import styled from 'styled-components';
import { baseStyles, disabledStyles, colors } from '../../styles';

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

  img {
    width: 0.8rem;
    position: absolute;
    top: 50%;
    bottom: 50%;
    right: 0.6rem;
    margin: auto 0;
    z-index: 1;
    filter: ${colors.icon};
    -webkit-transition: transform 0.5s linear;
    transition: transform 0.5s linear;

    ${({ isExpanded }) => isExpanded && `transform: rotate(180deg);`}

    ${({ disabled }) =>
      disabled &&
      ` border-bottom-color: ${disabled && colors.disabled};
      border-right-color: ${disabled && colors.disabled};
      `}
  }

  /* :after {
    position: absolute;
    top: 50%;
    bottom: 50%;
    right: 0.8rem;
    margin: auto 0;
    content: '';
    pointer-events: none;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.125rem solid ${colors.highlight};
    border-bottom: 0.125rem solid ${colors.highlight};
    transform: rotate(45deg);
    -webkit-transition: transform 0.5s linear;
    transition: transform 0.5s linear;

    ${({ isExpanded }) => isExpanded && `transform: rotate(225deg);`}
  }*/
`;

export const StyledDropdownLabel = styled.label<{ disabled?: boolean }>`
  color: ${colors.highlight};
  margin: 0 0.8rem 0.3rem 0.3rem;
  font-size: 95%;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${({ disabled }) => disabled && `${disabledStyles}`}
`;

export const StyledDropdownHeader = styled.select`
  // reset of styles, including removing the default dropdown arrow
  appearance: none;
  border: none;
  margin: 0;
  width: 100%;
  font-family: inherit;
  line-height: inherit;
  ${baseStyles}
  background-color: ${colors.primary};
  box-shadow: 0 0.063rem 0.25rem ${colors.shadow};
  padding: 0.3rem 2rem 0.3rem 0.8rem;
  font-size: 95%;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  cursor: pointer;

  ::-ms-expand {
    display: none;
  }

  ${({ disabled }) => disabled && `${disabledStyles}`}
`;

export const StyledDropdownOption = styled.option`
  padding: 0.625rem 0.3rem;
  line-height: 4rem;
  box-sizing: border-box;
  cursor: pointer;

  :hover {
    background-color: ${colors.secondary} !important;
  }

  :checked {
    font-weight: bold;
  }
`;
