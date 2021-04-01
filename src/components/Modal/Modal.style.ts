import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { baseStyles, colors } from '../../styles';
import { hexToRGB } from '../../utils/utils';
import { Button } from '../Button/Button';

export const StyledModal = styled.div`
  ${baseStyles}
`;

export const StyledModalOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${hexToRGB(colors.shadow, 0.9)};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const StyledModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  background-color: ${colors.secondary};
  box-shadow: 0 0.125rem 0.5rem ${colors.shadow};
  border-radius: 0.5rem;
  transform: translate(-50%, -50%);
  z-index: 10;
  font-weight: 700;
`;

export const StyledModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem;
  background: ${colors.primary};
  color: ${colors.secondary};
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

export const StyledModalHeaderTitle = styled.h2`
  margin: 0.5rem;
  font-size: 100%;
  font-weight: 700;
`;

export const StyledModalHeaderClose = styled(Button)<{
  icon?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}>`
  border: none;
  img {
    ${colors.icon};
    transform: rotate(0deg);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: rotate(90deg);
    }
  }
`;

export const StyledModalMessage = styled.p`
  padding: 1rem;
  text-align: center;
  color: ${colors.highlight};
`;

export const StyledModalFooter = styled.footer`
  padding: 1.25rem 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledModalFooterButton = styled(Button)<{
  label?: string;
  isConfirmationModal?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}>`
  background-color: ${colors.transparent};
  margin: 0 0.625rem;

  ${({ isConfirmationModal }) =>
    isConfirmationModal &&
    `
    border-color: ${colors.red};
    color: ${colors.red};
  `}
`;
