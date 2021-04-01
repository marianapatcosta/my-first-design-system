import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  const defaultProps = {
    label: 'option 1',
    checked: false,
    onChange: () => null,
  };
  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<RadioButton {...defaultProps} />);

    expect(firstChild).toMatchSnapshot();
  });

  test('should display label', () => {
    const { getByText } = render(<RadioButton {...defaultProps} />);

    getByText('option 1');
  });

  test('should handle change events', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <RadioButton {...defaultProps} onChange={onChangeMock} />
    );
    const radioButton = getByLabelText(/option 1/i) as HTMLInputElement;
    fireEvent.click(radioButton);

    expect(onChangeMock).toBeCalled();
  });

  test('should return null on change if onChange prop is not passed', () => {
    const result =
      RadioButton.defaultProps?.onChange && RadioButton.defaultProps.onChange();
    expect(result).toBeNull();
  });

  describe('Disabled RadioButton', () => {
    test('should display label', () => {
      const { getByText } = render(
        <RadioButton {...defaultProps} disabled={true} />
      );

      getByText('option 1');
    });

    test('should be disabled', () => {
      const { getByTestId } = render(
        <RadioButton {...defaultProps} disabled />
      );
      const radioButton = getByTestId('radio-button');
      expect(radioButton).toHaveAttribute('disabled');
    });
  });
});
