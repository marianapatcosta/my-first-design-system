import styled from 'styled-components';
import { baseStyles, disabledStyles, colors, typography } from '../../styles';

export const StyledSearchWrapper = styled.div`
  ${baseStyles}
  margin: 1rem 0;
  width: 100%;
  max-width: 15rem;
`;

export const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: block;
  color: ${colors.highlight};
  margin-bottom: 0.3rem;
  margin-left: 0.3rem;
  ${({ disabled }) =>
    disabled && `${disabledStyles}; color: ${colors.disabled}`}
`;

export const StyledSearchContainer = styled.div<{ isExpanded?: boolean }>`
  display: flex;
  margin-left: auto;
  box-shadow: 0 0.063rem 0.25rem ${colors.shadow};
  transition: width 0.3s ease-in-out;
  box-shadow: 0 0.063rem 0.25rem ${colors.shadow};
  width: 100%;
  margin-left: auto;
  background-color: ${colors.primary};

  ${({ isExpanded }) => !isExpanded && `width: 2rem !important;`}
`;

export const StyledSearch = styled.input<{
  disabled?: boolean;
  isExpanded?: boolean;
}>`
  color: ${colors.font};
  font-family: ${typography.type.body};
  font-size: 95%;
  width: 100%;
  border: none;
  box-sizing: border-box;
  padding: 0.3rem 0.625rem;
  position: relative;
  display: block;
  height: 2rem;
  background-color: ${colors.primary};

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-text-fill-color: ${colors.font};
    -webkit-box-shadow: 0 0 0 2rem ${colors.primary} inset !important;
  }

  /* clears the default 'X' from Internet Explorer */
  ::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  ::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  /* clears the default 'X' from Chrome */
  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }

  ${({ disabled }) => disabled && ` ${disabledStyles}`};

  ${({ isExpanded }) =>
    !isExpanded ? `display: none; caret-color: transparent;` : ''};
`;

export const StyledSearchIconWrapper = styled.div<{
  isExpanded?: boolean;
  isExpandable?: boolean;
}>`
  position: relative;
  width: 2rem;
  height: 2rem;
  background-color: ${colors.primary};
  ${({ isExpandable, isExpanded }) =>
    isExpandable && !isExpanded && `cursor: pointer;`}
`;

export const StyledSearchIcon = styled.img<{
  isExpanded?: boolean;
  isExpandable?: boolean;
  hasValue?: boolean;
}>`
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: 0.5rem;
  right: 0.625rem;
  ${colors.icon};

  ${({ hasValue }) => hasValue && `cursor: pointer;`}
  ${({ isExpandable }) => isExpandable && `cursor: pointer;`}

  ${({ isExpanded }) =>
    !isExpanded &&
    `top: 0;
      bottom: 0;
      margin: auto;`}
`;
