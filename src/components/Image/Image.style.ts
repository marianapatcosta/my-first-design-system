import styled, { keyframes, css } from 'styled-components';
import { baseStyles, colors } from '../../styles';

const scaleUp = keyframes`
  0% {
    width: 50vw;
  } 
  100% {
    width: 100vw;
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
  isZoomable?: boolean;
  isZoomedIn?: boolean;
}>`
  ${({ isZoomable, isZoomedIn }) =>
    isZoomable &&
    (isZoomedIn
      && `
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      left: 0;
      background-color: ${colors.shadow};
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 100;
    `)}
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
