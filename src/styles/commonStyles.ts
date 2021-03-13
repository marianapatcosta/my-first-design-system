import { css } from 'styled-components';
import { colors } from './colors';
import { typography } from './typography';

export const baseStyles = css`
  font-family: ${typography.type.body};
  font-size: 1rem;
  line-height: 1.2rem;

  margin: 0;
  padding: 0;

  &:focus {
    outline: 0.125rem solid ${colors.highlight};
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export const disabledStyles = css`
  opacity: 0.3;
  pointer-events: none;
  user-select: none;
  cursor: default;
`;

export const truncateStyles = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
