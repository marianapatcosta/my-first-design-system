import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tab } from './Tab';

describe('Tab', () => {
  const defaultProps = {
    label: 'Tab 1',
    onClick: () => null,
  };

  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Tab {...defaultProps} />);

    expect(firstChild).toMatchSnapshot();
  });

  test('should handle click events', () => {
    const onClickMock = jest.fn();
    const {
      container: { firstChild },
    } = render(<Tab {...defaultProps} onClick={onClickMock} />);

    firstChild && fireEvent.click(firstChild);

    expect(onClickMock).toBeCalled();
  });

  describe('Disabled Tab', () => {
    test('should display label', () => {
      const { getByText } = render(<Tab {...defaultProps} disabled />);

      getByText('Tab 1');
    });

    test('should be disabled', () => {
      const {
        container: { firstChild },
      } = render(<Tab {...defaultProps} disabled={true} />);

      expect(firstChild).toHaveAttribute('disabled');
    });

    test('should not handle click events', () => {
      const onClickMock = jest.fn();
      const {
        container: { firstChild },
      } = render(
        <Tab {...defaultProps} disabled={true} onClick={onClickMock} />
      );

      firstChild && fireEvent.click(firstChild);

      expect(onClickMock).not.toBeCalled();
    });
  });
});
