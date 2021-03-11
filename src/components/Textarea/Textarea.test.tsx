import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  const defaultProps = { label: 'textarea', value: 'Hello', onChange: () => null };
   test('renders without errors and matches snapshot', () => {
     const { container: { firstChild }  } = render(<Textarea  {...defaultProps}/>); 

     expect(firstChild).toMatchSnapshot();
   });

   test('should handle change events', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <Textarea {...defaultProps} onChange={onChangeMock} />
    );
    const textarea = getByTestId('textarea-field') as HTMLInputElement;
    fireEvent.click(textarea, { target: { value: 'bye' } });
    expect(textarea.value).toBe('bye');
  });

  test('should handle blur events', () => {
    const onBlurMock = jest.fn();
    const { getByTestId } = render(
      <Textarea {...defaultProps} onBlur={onBlurMock} />
    );
    const textarea = getByTestId('textarea-field') as HTMLInputElement;
    fireEvent.blur(textarea);
    expect(onBlurMock).toBeCalled();
  });

  test('should return null on change if onChange prop is not passed', () => {
    const result =
    Textarea.defaultProps?.onChange && Textarea.defaultProps.onChange();
    expect(result).toBeNull();
  });

  test('should return null on blur if onChange prop is not passed', () => {
    const result = Textarea.defaultProps?.onBlur && Textarea.defaultProps.onBlur();
    expect(result).toBeNull();
  });

  describe('Disabled Textarea', () => {
    test('should not handle change events', () => {
      const onChangeMock = jest.fn();
      const {
        container: { firstChild },
      } = render(
        <Textarea {...defaultProps} disabled={true} onChange={onChangeMock} />
      );

      firstChild && fireEvent.click(firstChild);

      expect(onChangeMock).not.toBeCalled();
    });
  });

  describe('Textarea with error', () => {
    test('should render error message', () => {
      const { getByText } = render(
        <Textarea {...defaultProps} errorMessage='There is an error' />
      );

      const textarea = getByText(/There is an error/i);
      expect(textarea).toBeTruthy();
    });
  });
});