import styled, { keyframes } from 'styled-components';
import { baseStyles, disabledStyles, colors } from '../../styles';

const rotate = keyframes`
  0% {
    transform: rotateX(-90deg);
  }
  70% {
    transform: rotateX(20deg);
  }
  100% {
    transform: rotateX(0deg);
  }
`;

export const StyledDropdownMultiselection = styled.div`
  ${baseStyles}
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  max-width: 10rem;
`;

export const StyledDropdownMultiselectionHeader = styled.div<{
  disabled?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.625rem;
  font-size: 95%;
  cursor: pointer;
  box-shadow: 0 0.063rem 0.25rem ${colors.shadow};

  ${({ disabled }) => !!disabled && `${disabledStyles}`}
`;

export const StyledDropdownMultiselectionArrow = styled.img<{
  isExpanded?: boolean;
}>`
  width: 0.8rem;
  ${colors.icon};
  transition: transform 0.5s ease-in-out;

  ${({ isExpanded }) =>
    !!isExpanded &&
    `transform: rotate(180deg);
  transition: transform 0.5s linear;`}
`;

export const StyledDropdownMultiselectionOptions = styled.ul`
  background-color: ${colors.primary};
  box-shadow: 0 0.063rem 0.25rem ${colors.shadow};
  border-top: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0.3rem;
  width: 100%;
  list-style: none;
  max-height: 12.5rem;
  overflow: auto;
  animation: ${rotate} 700ms ease-in forwards;
  -webkit-animation: ${rotate} 700ms ease-in forwards;
  transform-origin: top center;
  position: absolute;
  z-index: 1;
  top: 2rem;
`;

export const StyledDropdownMultiselectionOption = styled.li`
  padding: 0.3rem;
  cursor: pointer;
`;
