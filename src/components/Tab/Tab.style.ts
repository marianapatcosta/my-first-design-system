import styled from 'styled-components';
import { baseStyles, disabledStyles, colors } from '../../styles';

export const StyledTab = styled.li<{ isActive?: boolean; disabled?: boolean }>`
  ${baseStyles};
  min-width: 3.125rem;
  max-width: 4rem;
  color: ${colors.highlight};
  padding: 0.3rem 0.625rem;
  text-align: center;
  position: relative;
  user-select: none;
  cursor: pointer;

  :hover {
    opacity: 0.75;
  }

  ${({ disabled }) =>
    disabled &&
    `
    ${disabledStyles}
    `}

  ${({ isActive }) =>
    isActive &&
    `font-weight: 700; 
        background-color: ${colors.primary};
        box-shadow: 0 0 0.125rem ${colors.shadow};
        border-top-left-radius: 0.625rem;
        border-top-right-radius: 0.625rem;

        :before {
          content: "";
          position: absolute;
          width: 100%;
          height: 0.3rem;
          bottom: -0.3rem;
          left: 0;
          background-color: ${colors.primary};
        }
      `}
`;
