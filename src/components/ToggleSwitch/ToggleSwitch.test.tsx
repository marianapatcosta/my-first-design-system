import React from 'react';
import { render, getByText, fireEvent } from '@testing-library/react';
import { ToggleSwitch } from './ToggleSwitch';

describe('ToggleSwitch', () => {
  const defaultProps = {
    checked: false,
    leftLabel: 'off',
    rightLabel: 'on',
    onChange: () => null,
  };
  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<ToggleSwitch {...defaultProps} />);

    expect(firstChild).toMatchSnapshot();
  });

  test('should display label, if label prop is passed', () => {
    const { container } = render(
      <ToggleSwitch {...defaultProps} label='Toggle Switch' />
    );

    getByText(container, 'Toggle Switch');
  });

  test('should display leftLabel, if checked', () => {
    const { queryByText } = render(<ToggleSwitch {...defaultProps} checked={true}/>);

    expect(queryByText('off')).toBeTruthy();
    expect(queryByText('on')).toBeNull();
  });

  test('should display rightLabel, if not checked', () => {
    const { queryByText } = render(
      <ToggleSwitch {...defaultProps}  />
    );
    expect(queryByText('on')).toBeTruthy();
    expect(queryByText('off')).toBeNull();
  });

  test('should handle change events', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <ToggleSwitch {...defaultProps} onChange={onChangeMock} />
    );
    const toggleSwitch = getByTestId('toggle-slider') as HTMLInputElement;
    fireEvent.click(toggleSwitch);

    expect(onChangeMock).toBeCalled();
  });

  test('should return null on change if onChange prop is not passed', () => {
    const result =
      ToggleSwitch.defaultProps?.onChange &&
      ToggleSwitch.defaultProps.onChange();
    expect(result).toBeNull();
  });

  describe('Disabled ToggleSwitch', () => {
    test('should be disabled', () => {
      const {
        container: { firstChild },
      } = render(<ToggleSwitch {...defaultProps} disabled />);

      expect(firstChild).toHaveAttribute('disabled');
    });

    test('should not handle change events', () => {
      const onChangeMock = jest.fn();
      const {
        container: { firstChild },
      } = render(
        <ToggleSwitch
          {...defaultProps}
          disabled={true}
          onChange={onChangeMock}
        />
      );

      firstChild && fireEvent.click(firstChild);

      expect(onChangeMock).not.toBeCalled();
    });
  });
});
