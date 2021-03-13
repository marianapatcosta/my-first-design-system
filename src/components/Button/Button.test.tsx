import React from 'react';
import { render, getByText, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { Success } from '../../assets/icons';
import { colors } from '../../styles';
import { hexToRGB } from '../../utils/utils';

describe('Button', () => {
  const defaultProps = {
    label: 'Button',
    onClick: () => null,
  };
  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Button {...defaultProps} />);

    expect(firstChild).toMatchSnapshot();
  });

  test('should display label', () => {
    const { container } = render(<Button {...defaultProps} />);
    getByText(container, 'Button');
  });

  test('should handle click events', () => {
    const onClickMock = jest.fn();
    const {
      container: { firstChild },
    } = render(<Button {...defaultProps} onClick={onClickMock} />);

    firstChild && fireEvent.click(firstChild);

    expect(onClickMock).toBeCalled();
  });

  test('should return null on click if onClick prop is not passed', () => {
    const result = Button.defaultProps?.onClick && Button.defaultProps.onClick();
    expect(result).toBeNull();
  });

  describe('Primary button', () => {
    test('should be rendered', () => {
      const { getByRole } = render(<Button {...defaultProps} primary />);
      const button = getByRole('button');
      const style = window.getComputedStyle(button);
      expect(style.backgroundColor).toBe(hexToRGB(colors.highlight));
    });
  });

  describe('Full length button', () => {
    test('should be rendered', () => {
      const { getByRole } = render(<Button {...defaultProps} isFullLength />);
      const button = getByRole('button');
      const style = window.getComputedStyle(button);
      expect(style.maxWidth).toBe('100%');
    });
  });

  describe('Button with icon', () => {
    test('should render icon if icon prop is passed', () => {
      const { getByTestId } = render(
        <Button {...defaultProps} icon={Success} />
      );
      const icon = getByTestId('button-icon');
      expect(icon).toBeTruthy();
      expect(icon).toHaveAttribute('src', Success);
    });
  });

  describe('Disabled Button', () => {
    test('should display text', () => {
      const { container } = render(
        <Button {...defaultProps} disabled={true} />
      );
      getByText(container, 'Button');
    });

    test('should be disabled', () => {
      const {
        container: { firstChild },
      } = render(<Button {...defaultProps} disabled={true} />);

      // expect(firstChild).toBeDisabled();
      expect(firstChild).toHaveAttribute('disabled');
    });

    test('should not handle click events', () => {
      const onClickMock = jest.fn();
      const {
        container: { firstChild },
      } = render(<Button {...defaultProps} disabled onClick={onClickMock} />);

      // fireEvent.click(component);
      firstChild && fireEvent.click(firstChild);

      expect(onClickMock).not.toBeCalled();
    });
  });
});
