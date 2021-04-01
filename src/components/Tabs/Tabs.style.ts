import styled from 'styled-components';
import { baseStyles, colors } from '../../styles';

export const StyledTabs = styled.div`
  ${baseStyles}
`;

export const StyledTabsListWrapper = styled.div`
  position: fixed;
  z-index: 1;
  background-color: ${colors.primary};
  width: 100%;
  height: 4rem;
`;

export const StyledTabsList = styled.ul`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  list-style: none;
  margin: 1.25rem 0;
  padding: 0.625rem 1.25rem 0;
  box-shadow: 0 0.25rem 0.5rem -0.5rem ${colors.shadow};
`;

export const StyledTabsContent = styled.div``;

export const StyledTabsSpacer = styled.div`
  height: 4rem;
  margin-bottom: 1rem;
`;
