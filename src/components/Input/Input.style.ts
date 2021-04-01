import styled from 'styled-components';
import { baseStyles, disabledStyles, colors, typography } from '../../styles';

export const StyledInputWrapper = styled.div`
  ${baseStyles}
  margin: 1rem 0;
  width: 100%;
  max-width: 15rem;
`;

export const StyledInputField = styled.div<{ disabled?: boolean }>`
  position: relative;
  ${({ disabled }) => disabled && ` ${disabledStyles}`};
`;

export const StyledInput = styled.input<{ errorMessage?: string }>`
  ${baseStyles}
  display: block;
  color: ${colors.font};
  font-family: ${typography.type.body};
  font-size: 95%;
  width: 100%;
  border: 0.0625rem solid ${colors.transparent};
  background-color: ${colors.primary};
  box-shadow: 0 0.063rem 0.25rem ${colors.shadow};
  box-sizing: border-box;
  padding: 0.3rem 2rem 0.3rem 0.625rem;
  height: 2rem;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-text-fill-color: ${colors.font};
    -webkit-box-shadow: 0 0 0 2rem ${colors.primary} inset !important;
  }

  ${({ errorMessage }) =>
    !!errorMessage &&
    `border-color: ${colors.red};
    box-shadow: none;
    `}
`;

export const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: block;
  color: ${colors.highlight};
  margin-bottom: 0.3rem;
  margin-left: 0.3rem;
  ${({ disabled }) =>
    disabled && `${disabledStyles}; color: ${colors.disabled}`}
`;

export const StyledInputIcon = styled.img`
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 0.625rem;
  ${colors.icon};
`;

export const StyledInputError = styled.p`
  color: ${colors.red};
  font-size: 95%;
  margin-top: 0.3rem;
`;
