import styled from 'styled-components';
import { baseStyles, disabledStyles, colors } from '../../styles';

export const StyledButton = styled.button<{
  primary?: boolean;
  isFullLength?: boolean;
}>`
  ${baseStyles}
  padding: 0.625rem 1.25rem;
  border: 0.063rem solid ${colors.highlight};
  border-radius: 0.2rem;
  background-color: ${colors.transparent};
  color: ${colors.highlight};
  cursor: pointer;
  font-size: 90%;
  min-width: 6.25rem;

  :hover {
    opacity: 0.75;
  }

  :disabled,
  :hover:disabled,
  :active:disabled {
    ${disabledStyles}
  }

  ${({ primary }) =>
    primary &&
    `
    color: ${colors.white};
    background-color: ${colors.highlight};
    `}

  ${({ isFullLength }) =>
    isFullLength &&
    `
      width: 100%;
    `}
`;
