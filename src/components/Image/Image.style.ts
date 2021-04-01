import styled, { keyframes, css } from 'styled-components';
import { baseStyles, colors } from '../../styles';
import { hexToRGB } from '../../utils/utils';

const scaleUp = keyframes`
  0% {
    width: 50vw;
  } 
  100% {
    width: 95vw;
  }
`;

const scaleDown = keyframes`
   0% {
    width: 100vw;
  } 
  100% {
    width: 100%;
  }
`;

export const StyledImageOverlay = styled.div<{
  isZoomedIn?: boolean;
}>`
  ${({ isZoomedIn }) =>
    isZoomedIn &&
    `
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
    `}
`;

export const StyledImage = styled.img<{
  isClickable?: boolean;
  isLoaded?: boolean;
  isZoomedIn?: boolean;
  isZoomable?: boolean;
  wasImageClicked?: boolean;
}>`
  ${baseStyles}
  width: 100%;
  box-shadow: 0 0.125rem 0.5rem ${colors.shadow};
  cursor: default;

  ${({ isLoaded }) => !isLoaded && `visibility: hidden;`}

  ${({ isZoomedIn, isZoomable }) =>
    isZoomable &&
    (isZoomedIn
      ? css`
          animation: ${scaleUp} 1s forwards;
          -webkit-animation: ${scaleUp} 1s forwards;
          cursor: zoom-out;
        `
      : `cursor: zoom-in;`)}
  
  ${({ wasImageClicked, isZoomedIn }) =>
    wasImageClicked &&
    !isZoomedIn &&
    css`
      animation: ${scaleDown} 0.3s forwards;
      -webkit-animation: ${scaleDown} 0.3s forwards;
    `}
      
  ${({ isClickable, isZoomable }) =>
    isClickable && !isZoomable && `cursor: pointer;`}
`;

export const StyledImagePlaceholder = styled.div`
  background-color: ${colors.secondary};
  position: relative;
  overflow: hidden;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  box-shadow: 0 0.125rem 0.5rem ${colors.shadow};
`;
