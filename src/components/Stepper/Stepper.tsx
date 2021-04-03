import React, {
  CSSProperties,
  MouseEventHandler,
  ReactNode,
  useState,
} from 'react';
import { ORIENTATION } from '../../constants';
import { Step } from '../Step/Step';
import { DoubleChevron } from '../../assets/icons';
import {
  StyledStepper,
  StyledStepperContainer,
  StyledStepperIndicator,
  StyledStepperIndicatorItem,
  StyledStepperProgressBar,
  StyledStepperContent,
  StyledStepperFooter,
  StyledStepperButton,
  StyledStepperButtonRight,
} from './Stepper.style';

type orientationTypes = ORIENTATION;

export interface StepperProps {
  /**
   * element id
   */
  id?: string;
  /**
   * additional css class
   */
  className?: string;
  /**
   * additional style
   */
  style?: CSSProperties;
  /**
   * stepper's orientation
   */
  orientation?: orientationTypes;
  /**
   * label of stepper's button in the last step
   */
  buttonLabel?: string;
  /**
   * Array of objects defining the metadata for each stepper's steps
   */
  stepsMetadata: Array<{
    content: ReactNode;
    isValid?: boolean;
  }>;
  /**
   * Click handler to call on finish the fulfill/visualization of all steps
   */
  onSubmit: MouseEventHandler<HTMLButtonElement>;
}

export const Stepper: React.FC<StepperProps> = ({
  orientation,
  stepsMetadata,
  buttonLabel,
  onSubmit,
  ...props
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const progressPerStep = 100 / (stepsMetadata.length - 1);
  const isVertical: boolean = orientation === ORIENTATION.VERTICAL;

  const handleNextStepClick = (): void => {
    if (activeStepIndex === stepsMetadata.length - 1) return;
    setActiveStepIndex((prevActiveStepIndex) => prevActiveStepIndex + 1);
  };

  const handlePreviousStepClick = (): void => {
    if (activeStepIndex === 0) return;
    setActiveStepIndex((prevActiveStepIndex) => prevActiveStepIndex - 1);
  };

  const getProgressBarPercentage = (): number =>
    activeStepIndex * progressPerStep;
    
  return (
    <StyledStepper
      data-steps={stepsMetadata.length}
      isVertical={isVertical}
      {...props}
    >
      <StyledStepperIndicator
        role='list'
        aria-label='progress'
        isVertical={isVertical}
      >
        <StyledStepperProgressBar
          value={getProgressBarPercentage()}
          max='100'
          isVertical={isVertical}
        />
        {stepsMetadata.map((step: string | ReactNode, index: number) => (
          <StyledStepperIndicatorItem
            key={`step-indicator-${index + Math.random()}`}
            aria-current={'step'}
            isFilled={index <= activeStepIndex}
          >
            {index + 1}
          </StyledStepperIndicatorItem>
        ))}
      </StyledStepperIndicator>
      <StyledStepperContainer isVertical={isVertical}>
        <StyledStepperContent>
          {stepsMetadata.map(({ content }, index) => (
            <Step
              key={`step-${index + Math.random()}`}
              content={content}
              isActive={index === activeStepIndex}
            />
          ))}
        </StyledStepperContent>
        <StyledStepperFooter>
          {activeStepIndex > 0 && (
            <StyledStepperButton
              data-testid='prev-button'
              aria-label='previous button'
              icon={DoubleChevron}
              onClick={handlePreviousStepClick}
            />
          )}
          <StyledStepperButtonRight
            data-testid='next-button'
            aria-label={
              activeStepIndex === stepsMetadata.length - 1
                ? `${buttonLabel} button`
                : 'next button'
            }
            label={activeStepIndex === stepsMetadata.length - 1 ? buttonLabel : ''}
            icon={`${
              activeStepIndex !== stepsMetadata.length - 1 ? DoubleChevron : ''
            }`}
            disabled={!(stepsMetadata[activeStepIndex].isValid ?? true)}
            onClick={
              activeStepIndex === stepsMetadata.length - 1
                ? onSubmit
                : handleNextStepClick
            }
          />
        </StyledStepperFooter>
      </StyledStepperContainer>
    </StyledStepper>
  );
};

Stepper.defaultProps = {
  id: '',
  className: '',
  style: {},
  orientation: ORIENTATION.LANDSCAPE,
  stepsMetadata: [],
  buttonLabel: 'submit',
  onSubmit: () => null,
};
