import React from 'react';
import { render, getByText, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  const defaultProps = {
    label: 'Checkbox',
    checked: false,
    onChange: () => null,
  };
  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Checkbox {...defaultProps} />);

    expect(firstChild).toMatchSnapshot();
  });

  test('should display label', () => {
    const { container } = render(<Checkbox {...defaultProps} />);

    getByText(container, 'Checkbox');
  });

  test('should handle change events', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <Checkbox {...defaultProps} onChange={onChangeMock} />
    );
    const checkbox = getByLabelText(/Checkbox/i) as HTMLInputElement;
    fireEvent.click(checkbox);

    expect(onChangeMock).toBeCalled();
    /* expect(checkbox).not.toBeChecked();
    expect(checkbox.checked).toBeTruthy();
    fireEvent.click(checkbox)
    expect(checkbox.checked).toBeFalsy(); */
  });

  test('should return null on change if onChange prop is not passed', () => {
  const result = Checkbox.defaultProps?.onChange && Checkbox.defaultProps.onChange();
    expect(result).toBeNull();
  });

  describe('Disabled Checkbox', () => {
    test('should display label', () => {
      const { container } = render(
        <Checkbox {...defaultProps} disabled={true} />
      );

      getByText(container, 'Checkbox');
    });

    test('should be disabled', () => {
      const {
        container: { firstChild },
      } = render(<Checkbox {...defaultProps} disabled />);

      expect(firstChild).toHaveAttribute('disabled');
    });

    test('should not handle change events', () => {
      const onChangeMock = jest.fn();
      const {
        container: { firstChild },
      } = render(
        <Checkbox {...defaultProps} disabled={true} onChange={onChangeMock} />
      );

      firstChild && fireEvent.click(firstChild);

      expect(onChangeMock).not.toBeCalled();
    });
  });
});
