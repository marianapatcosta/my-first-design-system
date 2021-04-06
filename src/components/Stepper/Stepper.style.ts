import styled from 'styled-components';
import { baseStyles, colors } from '../../styles';
import { Button } from '../Button/Button';

export const StyledStepper = styled.div<{ isVertical?: boolean }>`
  ${baseStyles};
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: ${colors.primary};

  ${({ isVertical }) =>
    isVertical &&
    `display: flex;
  flex-direction: row;
  justify-content: space-between;`};
`;

export const StyledStepperIndicator = styled.ul<{ isVertical?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  list-style: none;
  background-color: inherit;

  ${({ isVertical }) =>
    isVertical &&
    `  flex-direction: column;
    margin: 2rem;
    margin-bottom: 0;
    `}
`;

export const StyledStepperIndicatorItem = styled.li<{ isFilled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: inherit;
  border: 0.125rem solid ${colors.secondary};
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  z-index: 1;
  transition: background-color 0.5s ease-in;
  -webkit-transition: background-color 0.5s ease-in;
  -moz-transition: background-color 0.5s ease-in;
  -ms-transition: background-color 0.5s ease-in;
  -o-transition: background-color 0.5s ease-in;

  ${({ isFilled }) =>
    isFilled &&
    ` background-color: ${colors.secondary};  transition: all 0.5s ease-in;
  -webkit-transition: all 0.5s ease-in;
  -moz-transition: all 0.5s ease-in;
  -ms-transition: background-color 0.5s ease-in;
  -o-transition: background-color 0.5s ease-in;
}`}
`;

export const StyledStepperProgressBar = styled.progress<{
  isVertical?: boolean;
}>`
  position: absolute;
  left: 0;
  height: 0.125rem;
  width: 100%;

  ${({ isVertical }) =>
    isVertical &&
    `left: revert;
    bottom: 0;
    top: 0;
    margin: auto 0;
    width: revert;
    transform: rotate(90deg);`}

  &::-webkit-progress-bar {
    background-color: ${colors.white};
  }

  &::-webkit-progress-value {
    background-color: ${colors.secondary};
    transition: width 0.3s ease-in, height 0.3s ease-in;
    -webkit-transition: width 0.3s ease-in, height 0.3s ease-in;
    -moz-transition: width 0.3s ease-in, height 0.3s ease-in;
    -ms-transition: width 0.3s ease-in, height 0.3s ease-in;
    -o-transition: width 0.3s ease-in, height 0.3s ease-in;
  }

  &[value] {
    appearance: none;
    border: 0;
    color: ${colors.secondary};
    transition: width 0.3s ease-in, height 0.3s ease-in;
    -webkit-transition: width 0.3s ease-in, height 0.3s ease-in;
    -moz-transition: width 0.3s ease-in, height 0.3s ease-in;
    -ms-transition: width 0.3s ease-in, height 0.3s ease-in;
    -o-transition: width 0.3s ease-in, height 0.3s ease-in;
  }
`;

export const StyledStepperContainer = styled.div<{ isVertical?: boolean }>`
  ${({ isVertical }) => isVertical && ` width: 100%;`}
`;

export const StyledStepperContent = styled.div<{ isFilled?: boolean }>`
  margin: 1rem auto;
  width: 100%;
`;

export const StyledStepperFooter = styled.footer<{ isFilled?: boolean }>`
  display: flex;
  align-items: center;
`;

export const StyledStepperButton = styled(Button).attrs({ size: 'small' })`
  margin-right: auto;
  flex-direction: column;
  img {
    filter: ${colors.icon};
    padding: 0.15rem;
    transform: rotate(90deg);
  }
`;

export const StyledStepperButtonRight = styled(StyledStepperButton)`
  margin-right: 0;
  margin-left: auto;
  img {
    transform: rotate(-90deg);
  }
`;
