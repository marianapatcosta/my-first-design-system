import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Toast } from './Toast';

describe('Toast', () => {
  const defaultProps = { message: 'info toast', onClear: () => null };
  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Toast {...defaultProps} />);

    expect(firstChild).toMatchSnapshot();
  });

  test('should display message', () => {
    const { getByText } = render(<Toast {...defaultProps} />);

    getByText(/Toast/i);
  });

  test('should handle onClear events when message is truthy', () => {
    jest.useFakeTimers();
    const onClearMock = jest.fn();
    const { container } = render(
      <Toast {...defaultProps} onClear={onClearMock} />
    );
    act(() => {
      jest.runAllTimers();
    });
    jest.useRealTimers();
    expect(onClearMock).toBeCalled();
  });

  test('should not handle onClear events when message is falsy', () => {
    jest.useFakeTimers();
    const onClearMock = jest.fn();
    const { container } = render(
      <Toast {...defaultProps} message='' onClear={onClearMock} />
    );
    act(() => {
      jest.runAllTimers();
    });
    jest.useRealTimers();
    expect(onClearMock).not.toBeCalled();
  });

  test('should return null on change if onClear prop is not passed', () => {
    const result = Toast.defaultProps?.onClear && Toast.defaultProps.onClear();
    expect(result).toBeNull();
  });
});
