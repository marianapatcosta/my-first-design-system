import { css } from 'styled-components';
import { colors } from './colors';
import { typography } from './typography';

export const baseStyles = css`
  font-family: ${typography.type.body};
  font-size: 0.9rem;
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
