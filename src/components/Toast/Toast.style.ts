import styled, { keyframes } from 'styled-components';
import { baseStyles, colors } from '../../styles';

const typeClass = (type: string): string => {
  const toastTypesClasses: any = {
    alert: colors.red,
    info: colors.blue,
    success: colors.green,
    warning: colors.yellow,
  };
  return toastTypesClasses[type];
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledToast = styled.div<{
  type?: string;
}>`
 ${baseStyles}
  box-shadow: 0 0.125rem 0.5rem ${colors.shadow};
  width: 85%;
  max-width: 20rem;
  position: absolute;
  top: 35%;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 1rem;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  border-radius: 0.2rem;
  animation: ${fadeIn} 0.5s;
  -webkit-animation: ${fadeIn} 0.5s;
  background-color: ${({ type }) => !!type && typeClass(type)};

  @media (min-width: 480px) {
    width: 75%;
  }

  @media (min-width: 768px) {
   width: 50%;
  }

  @media (min-width: 1023px) {
   width: 30%;
  }
`;

export const StyledToastIcon = styled.img`
  width: 1.7rem;
  height: 1.7rem;
`;

export const StyledToastMessage = styled.div<{ type?: string }>`
  font-size: 95%;
  color: ${colors.white};
  font-weight: 700;
  padding: 0 1rem;
`;
