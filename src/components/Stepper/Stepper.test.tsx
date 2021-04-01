import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ORIENTATION } from '../../constants';
import { Stepper } from './Stepper';

describe('Stepper', () => {
  const defaultProps = {
    stepsMetadata: [
      {
        content: <p>Step 1 content</p>,
      },
      {
        content: <p>Step 2 content</p>,
      },
      {
        content: <p>Step 3 content</p>,
      },
    ],
    onSubmit: () => null,
  };

  test('should render without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Stepper {...defaultProps} />);

    expect(firstChild).toMatchSnapshot();
  });

  test('should render step 1 content by default', () => {
    const { getByText } = render(<Stepper {...defaultProps} />);

    getByText(/Step 1/i);
    !getByText(/Step 2/i);
    !getByText(/Step 3/i);
  });

  test('should render `next` button but not `prev` button when rendering', () => {
    const { queryByTestId } = render(<Stepper {...defaultProps} />);

    expect(queryByTestId('next-button')).toBeInTheDocument();
    expect(queryByTestId('prev-button')).not.toBeInTheDocument();
  });

  test('should render step 2 content on `next` button click', () => {
    const { getByText, getByTestId } = render(<Stepper {...defaultProps} />);

    const nextButton = getByTestId('next-button');
    nextButton && fireEvent.click(nextButton);

    getByText(/Step 2/i);
    !getByText(/Step 1/i);
    !getByText(/Step 3/i);
  });

  test('should render step 1 content after `next` button click and `prev`button click', () => {
    const { getByText, getByTestId } = render(<Stepper {...defaultProps} />);

    const nextButton = getByTestId('next-button');
    nextButton && fireEvent.click(nextButton);
    const prevButton = getByTestId('prev-button');
    prevButton && fireEvent.click(prevButton);

    getByText(/Step 1/i);
    !getByText(/Step 2/i);
    !getByText(/Step 3/i);
  });

  test('should call `onSubmit` on `submit` click', () => {
    const onSubmitMock = jest.fn();
    const { getByTestId } = render(
      <Stepper {...defaultProps} onSubmit={onSubmitMock} />
    );

    const nextButton = getByTestId('next-button');
    nextButton && fireEvent.click(nextButton);
    nextButton && fireEvent.click(nextButton);
    nextButton && fireEvent.click(nextButton);

    expect(onSubmitMock).toBeCalled();
  });

  test('should have default styles if orientation= landscape', () => {
    const {
      container: { firstChild },
      getByLabelText,
    } = render(<Stepper {...defaultProps} />);

    const stepperIndicator = getByLabelText('progress');
    const stepperStyle =
      firstChild && window.getComputedStyle(firstChild as Element);
    const stepperIndicatorStyle = window.getComputedStyle(stepperIndicator);

    expect(stepperStyle?.flexDirection).toBe('column');
    expect(stepperIndicatorStyle.flexDirection).toBe('');
  });

  test('should have `isVertical` styles if orientation = vertical', () => {
    const {
      container: { firstChild },
      getByLabelText,
    } = render(
      <Stepper {...defaultProps} orientation={ORIENTATION.VERTICAL} />
    );

    const stepperIndicator = getByLabelText('progress');

    const stepperStyle =
      firstChild && window.getComputedStyle(firstChild as Element);
    const stepperIndicatorStyle = window.getComputedStyle(stepperIndicator);

    stepperStyle && expect(stepperStyle.flexDirection).toBe('row');
    expect(stepperIndicatorStyle.flexDirection).toBe('column');
  });
});
