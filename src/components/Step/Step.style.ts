import styled from 'styled-components';
import { baseStyles } from '../../styles';

export const StyledStep = styled.div<{ isActive?: boolean }>`
  ${baseStyles};
  width: 100%;

  ${({isActive}) => !isActive && `display: none`};
`;
