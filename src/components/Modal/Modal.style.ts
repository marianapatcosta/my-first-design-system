import { MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { baseStyles, colors } from '../../styles';
import { hexToRGB } from '../../utils/utils';
import { Button } from '../Button/Button';
import { ModalSize } from './Modal';

const sizeStyles = {
  small: css`
    width: 20rem;
  `,
  medium: css`
    width: 35rem;
  `,
  large: css`
    width: 50rem;
  `,
};

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

export const StyledModalContent = styled.div<{ size?: ModalSize }>`
  position: fixed;
  top: 50%;
  left: 50%;
  ${({ size }) => size && sizeStyles[size]};
  background-color: ${colors.primary};
  box-shadow: 0 0.125rem 0.5rem ${colors.shadow};
  border-radius: 0.5rem;
  transform: translate(-50%, -50%);
`;

export const StyledModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem;
  background-color: ${colors.secondary};
  color: ${colors.highlight};
  z-index: 10;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

export const StyledModalHeaderTitle = styled.h2`
  margin: 0.5rem;
  font-weight: 700;
  font-size: 100%;
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
