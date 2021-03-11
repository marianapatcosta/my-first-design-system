import styled from 'styled-components';
import { baseStyles, disabledStyles, colors, typography } from '../../styles';

export const StyledTextareaWrapper = styled.div`
  ${baseStyles}
  margin: 1rem 0;
  position: relative;
  width: 100%;
`;

export const StyledTextarea = styled.textarea<{
  errorMessage?: string;
  disabled?: boolean;
}>`
  display: block;
  color: ${colors.font};
  font-family: ${typography.type.body};
  font-size: 95%;
  width: 100%;
  width: 100%;
  background-color: ${colors.primary};
  border: 0.125rem solid ${colors.primary};
  box-shadow: 0 0.063rem 0.25rem ${colors.shadow};
  box-sizing: border-box;
  padding: 0.3rem 0.625rem;
  position: relative;
  resize: none;

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-text-fill-color: ${colors.font};
    -webkit-box-shadow: 0 0 0 2rem ${colors.primary} inset !important;
  }

  ${({ disabled }) => disabled && ` ${disabledStyles}`}

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
  font-size: 95%;
  ${({ disabled }) =>
    disabled && `${disabledStyles}; color: ${colors.disabled}`}
`;

export const StyledTextareaError = styled.p`
  color: ${colors.red};
  font-weight: bold;
  font-size: 90%;
  margin-top: 0.3rem;
`;
