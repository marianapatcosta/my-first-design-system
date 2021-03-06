import React from 'react';
import { render, getByText, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  const defaultProps = {
    options: ['option 1', 'option 2', 'option 3'],
    selectedOption: '',
    placeholder: 'select an option',
    onChooseOption: () => null,
  };
  test('renders without errors and matches snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Dropdown {...defaultProps} />);

    expect(firstChild).toMatchSnapshot();
  });

  test('should display label if label prop is passed', () => {
    const { container } = render(
      <Dropdown {...defaultProps} label='Dropdown' />
    );

    getByText(container, 'Dropdown');
  });

  test('should return null on choose option if onChooseOption prop is not passed', () => {
    const result =
      Dropdown.defaultProps?.onChooseOption &&
      Dropdown.defaultProps.onChooseOption();
    expect(result).toBeNull();
  });

  describe('Disabled Dropdown', () => {
    test('should be disabled', () => {
      const {
        container,
      } = render(<Dropdown {...defaultProps} disabled />);

      const dropdown = container.querySelector('select');
      expect(dropdown).toHaveAttribute('disabled');
    });

    test('should not handle change events', () => {
      const onChooseOptionMock = jest.fn();
      const {
        container: { firstChild },
      } = render(
        <Dropdown
          {...defaultProps}
          disabled={true}
          onChooseOption={onChooseOptionMock}
        />
      );

      firstChild && fireEvent.click(firstChild);

      expect(onChooseOptionMock).not.toBeCalled();
    });
  });
});
