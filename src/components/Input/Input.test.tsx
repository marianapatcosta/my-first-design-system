import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from './Input';
import { Tick as Success } from '../../assets/icons';

describe('Input', () => {
  const defaultProps = { label: 'Input', value: 'Hello', onChange: () => null };
  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Input {...defaultProps} />);

    expect(firstChild).toMatchSnapshot();
  });

  test('should handle change events', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <Input {...defaultProps} onChange={onChangeMock} />
    );
    const input = getByTestId('input-field') as HTMLInputElement;
    fireEvent.click(input, { target: { value: 'bye' } });
    expect(input.value).toBe('bye');
  });

  test('should handle blur events', () => {
    const onBlurMock = jest.fn();
    const { getByTestId } = render(
      <Input {...defaultProps} onBlur={onBlurMock} />
    );
    const input = getByTestId('input-field') as HTMLInputElement;
    fireEvent.blur(input);
    expect(onBlurMock).toBeCalled();
  });

  test('should return null on change if onChange prop is not passed', () => {
    const result =
      Input.defaultProps?.onChange && Input.defaultProps.onChange();
    expect(result).toBeNull();
  });

  test('should return null on blur if onChange prop is not passed', () => {
    const result = Input.defaultProps?.onBlur && Input.defaultProps.onBlur();
    expect(result).toBeNull();
  });

  describe('Disabled Input', () => {
    test('should not handle change events', () => {
      const onChangeMock = jest.fn();
      const {
        container: { firstChild },
      } = render(
        <Input {...defaultProps} disabled={true} onChange={onChangeMock} />
      );

      firstChild && fireEvent.click(firstChild);

      expect(onChangeMock).not.toBeCalled();
    });
  });

  describe('Input with icon', () => {
    test('should render icon if icon prop is passed', () => {
      const { getByTestId } = render(
        <Input {...defaultProps} icon={Success} />
      );

      const icon = getByTestId('input-icon');
      expect(icon).toBeTruthy();
      expect(icon).toHaveAttribute('src', Success);
    });

    test('should handle click events', () => {
      const onIconClickMock = jest.fn();
      const { getByTestId } = render(
        <Input {...defaultProps} icon={Success} onIconClick={onIconClickMock} />
      );
      const icon = getByTestId('input-icon');
      icon && fireEvent.click(icon);

      expect(onIconClickMock).toBeCalled();
    });
  });

  describe('Input with error', () => {
    test('should render error message', () => {
      const { getByText } = render(
        <Input {...defaultProps} errorMessage='There is an error' />
      );

      const input = getByText(/There is an error/i);
      expect(input).toBeTruthy();
    });
  });
});
