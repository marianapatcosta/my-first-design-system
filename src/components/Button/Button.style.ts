import styled, { css } from 'styled-components';
import {
  baseStyles,
  disabledStyles,
  truncateStyles,
  colors,
} from '../../styles';
import { ButtonSize } from './Button';

const sizeStyles = {
  small: css`
    max-width: 4rem;
    font-size: 90%;
    padding: 0.3rem 0.625rem;
  `,
  medium: css`
    max-width: 8rem;
    font-size: 100%;
    padding: 0.625rem 1.25rem;
  `,
  large: css`
    max-width: 12rem;
    font-size: 100%;
    padding: 0.625rem 1.25rem;
  `,
};

export const StyledButton = styled.button<{
  primary?: boolean;
  isFullLength?: boolean;
  size?: ButtonSize;
}>`
  ${baseStyles};
  ${({ size }) => size && sizeStyles[size]};
  line-height: 1rem;
  display: flex;
  align-content: center;
  justify-content: center;
  border: 0.063rem solid ${colors.highlight};
  border-radius: 0.2rem;
  background-color: ${colors.transparent};
  color: ${colors.highlight};
  box-sizing: content-box;
  cursor: pointer;

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
    ` max-width: 100%;
      width: 100%;
      font-size: 100%;

    `}
`;

export const StyledButtonLabel = styled.span`
  ${truncateStyles};
  user-select: none;
`;

export const StyledButtonIcon = styled.img<{ label?: string }>`
  width: 1rem;
  user-select: none;

  ${({ label }) => label && `margin-right: 0.5rem;`}
`;
