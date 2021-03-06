import styled from 'styled-components';
import { baseStyles, colors, typography } from '../../styles';

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
  font-family: ${typography.type.body};

  :hover {
    opacity: 0.75;
  }

  :disabled,
  :hover:disabled,
  :active:disabled {
    opacity: 0.3;
    pointer-events: none;
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
