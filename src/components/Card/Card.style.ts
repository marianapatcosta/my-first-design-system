import styled from 'styled-components';
import { baseStyles, colors } from '../../styles';

export const StyledCard = styled.div`
  ${baseStyles}
  box-shadow: 0 0.125rem 0.5rem ${colors.shadow};
  border-radius: 0.375rem;
  padding: 1rem;
  overflow: hidden;
  background-color: ${colors.primary};

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;
