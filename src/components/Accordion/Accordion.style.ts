import styled from 'styled-components';
import { baseStyles, disabledStyles, colors } from '../../styles';

export const StyledAccordion = styled.div`
  ${baseStyles};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: 15rem;
  max-width: 15rem;
`;

export const StyledAccordionTitle = styled.div<{
  isExpanded?: boolean;
  disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primary};
  padding: 0.4rem 1rem;
  border-radius: 0.2rem;
  box-shadow: 0 0.0625rem 0.3rem ${colors.shadow};
  cursor: pointer;
  z-index: 1;
  margin: 0.125rem;

  ${({ disabled }) => disabled && ` ${disabledStyles}`}

  ${({ isExpanded }) =>
    isExpanded &&
    `border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;`}
`;

export const StyledAccordionArrow = styled.img<{ isExpanded?: boolean }>`
  width: 0.8rem;
  margin-left: 0.5rem;
  filter: ${colors.icon};
  transition: transform 0.5s ease-in-out;

  ${({ isExpanded }) =>
    isExpanded &&
    `border-bottom-left-radius: 0;
    transform: rotate(180deg);`}
`;

export const StyledAccordionContent = styled.div<{ isExpanded?: boolean }>`
  height: 0;
  max-height: 0;
  border: 0.125rem solid transparent;
  overflow: auto;
  transition: all 0.5s ease-in-out;
  visibility: hidden;
  padding: 0 1rem;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  ${({ isExpanded }) =>
    isExpanded &&
    `border-color: ${colors.primary};
      border-bottom-left-radius: 0.2rem;
      border-bottom-right-radius: 0.2rem;
      padding: 0.4rem 1rem;
      height: 100%;  
      max-height: 13rem;
      visibility: visible;
      `}
`;
