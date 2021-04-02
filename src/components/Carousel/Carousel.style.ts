import { KeyboardEvent } from 'react';
import styled from 'styled-components';
import { baseStyles, colors } from '../../styles';
import { Image } from '../Image/Image';
import { ToggleSwitch } from '../ToggleSwitch/ToggleSwitch';

export const StyledCarousel = styled.div`
  ${baseStyles}
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledCarouselContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const StyledCarouselHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  height: 1.25;
  line-height: 1.25;
  width: 100%;
`;

export const StyledCarouselTitle = styled.h2`
  color: ${colors.highlight};
  font-size: 150%;
  font-weight: 400;
  margin: 0;
`;

export const StyledCarouselToggle = styled(ToggleSwitch)`
  align-self: flex-end;
`;

export const StyledChevron = styled.button<{ isLeftChevron?: boolean }>`
  border: none;
  background: none;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  border: 0.063rem solid ${colors.transparent};
  border-radius: 50%;
  top: 50%;
  bottom: 50%;
  margin: auto 0;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  :focus:not(:focus-visible) {
    border-color: ${colors.transparent};
  }

  ${({ isLeftChevron }) =>
    isLeftChevron
      ? `left: 0.125rem;
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);`
      : `right: 0.125rem; transform: rotate(-90deg);
      -webkit-transform: rotate(-90deg);
      -moz-transform: rotate(-90deg);
      -ms-transform: rotate(-90deg);
      -o-transform: rotate(-90deg);`};

  :hover {
    ${({ isLeftChevron }) =>
      isLeftChevron
        ? `left: 0.125rem;
      transform: rotate(90deg) scale(1.3);
      -webkit-transform: rotate(90deg) scale(1.3);
      -moz-transform: rotate(90deg)scale(1.3);
      -ms-transform: rotate(90deg)scale(1.3);
      -o-transform: rotate(90deg)scale(1.3);`
        : `right: 0.125rem; transform: rotate(-90deg)scale(1.3);
        -webkit-transform: rotate(-90deg)scale(1.3);
        -moz-transform: rotate(-90deg)scale(1.3);
        -ms-transform: rotate(-90deg)scale(1.3);
        -o-transform: rotate(-90deg);`};
  }
`;

export const StyledCarouselSelected = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImageWrapper = styled.div<{ isVertical?: boolean }>`
  position: relative;
  height: 15rem;
  width: 21.25rem;

  ${({ isVertical }) =>
    isVertical &&
    `  height: 21.25rem;
  width: 15rem;`}
`;

export const StyledImage = styled(Image)<{
  isSelected?: boolean;
  role?: string;
}>`
  border-radius: 1rem;
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  -ms-border-radius: 1rem;
  -o-border-radius: 1rem;
  padding: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 1.5s ease-in-out 0s;
  ${({ isSelected }) =>
    isSelected &&
    `
  opacity: 1;
  visibility: visible; `};
`;

export const StyledIndicatorBar = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0.5rem;
  z-index: 1;
`;

export const StyledIndicatorBarItem = styled.button<{ isFilled?: boolean }>`
  border: none;
  background: none;
  display: inline;
  border: 0.0625rem solid ${colors.primary};
  height: 0.65rem;
  width: 0.65rem;
  margin: 0 0.2rem;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:before {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    transition: width 0.5s ease-in-out;
    background-color: ${colors.primary};

    ${({ isFilled }) =>
      isFilled &&
      `
        width: 100%; 
        transition: width 0.5s ease-in-out;`};
  }
`;
export const StyledPreviews = styled.div`
  display: flex;
`;

export const StyledImagePreview = styled(Image)<{
  isVertical?: boolean;
  role?: string;
  tabIndex?: number;
  onKeyDown?: (event: KeyboardEvent<HTMLImageElement>) => void;
}>`
  width: 8.75rem;
  height: 6.25rem;
  border-radius: 1rem;
  margin: 0.5rem;
  cursor: pointer;
  opacity: 0.75;
  box-shadow: 0 0.25rem 0.625rem ${colors.shadow};
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  -ms-border-radius: 1rem;
  -o-border-radius: 1rem;
  padding: 0;

  ${({ isVertical }) =>
    isVertical &&
    `  width: 6.25rem;
    height: 8.75rem;`}

  :hover {
    opacity: 1;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
  }
`;
