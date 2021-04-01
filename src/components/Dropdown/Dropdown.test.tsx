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

  test('should display the field of `optionKey` as option element label, if objects are passed in `options array', () => {
    const { getByText } = render(
      <Dropdown
        {...defaultProps}
        label='Dropdown'
        options={[
          { label: 'option 1' },
          { label: 'option 2' },
          { label: 'option 3' },
        ]}
        optionKey='label'
      />
    );
    getByText('option 1');
  });

  test('should return null on choose option if onChooseOption prop is not passed', () => {
    const result =
      Dropdown.defaultProps?.onChooseOption &&
      Dropdown.defaultProps.onChooseOption();
    expect(result).toBeNull();
  });

  test('should handle change events and simulate selection', async () => {
    const onChooseOptionMock = jest.fn();
    const { getByLabelText } = render(
      <Dropdown {...defaultProps} onChooseOption={onChooseOptionMock} />
    );

    const select = getByLabelText(/select/i) as HTMLSelectElement;
    fireEvent.change(select);
    expect(onChooseOptionMock).toBeCalled();

    /*  const select = getByLabelText(/select/i) as HTMLSelectElement;
    userEvent.selectOptions(select, ['option 2']);
    let options = (getAllByTestId(
      'select-option'
    ) as unknown) as HTMLOptionsCollection;
    expect(options[0].selected).toBe(false);
    expect(options[1].selected).toBe(true);
    expect(options[2].selected).toBeFalsy(); */
  });

  test('should set isExpanded = true onclick', () => {
    const { getByLabelText, getByAltText } = render(
      <Dropdown {...defaultProps} />
    );
    const select = getByLabelText(/select/i) as HTMLSelectElement;
    const chevron = getByAltText('chevron-icon');
    fireEvent.click(select);
    const style = window.getComputedStyle(chevron);
    expect(style.transform).toBe('rotate(180deg)');
  });

  test('should handle blur events and sets isExpanded = false', () => {
    const { getByLabelText, getByAltText } = render(
      <Dropdown {...defaultProps} />
    );
    const select = getByLabelText(/select/i) as HTMLSelectElement;
    const chevron = getByAltText('chevron-icon');
    fireEvent.change(select);
    fireEvent.blur(select);
    const style = window.getComputedStyle(chevron);
    expect(style.transform).toBe('');
  });

  describe('Keyboard events handling', () => {
    let select: HTMLSelectElement;
    let chevron: HTMLImageElement;
    beforeEach(() => {
      const { getByLabelText, getByAltText } = render(
        <Dropdown {...defaultProps} />
      );
      select = getByLabelText(/select/i) as HTMLSelectElement;
      chevron = getByAltText('chevron-icon') as HTMLImageElement;
    });
    test('should set isExpanded = true on `enter`', () => {
      fireEvent.keyDown(select, { key: 'Enter' });
      const style = window.getComputedStyle(chevron);
      expect(style.transform).toBe('rotate(180deg)');
    });

    test('should set isExpanded = true on `space`', () => {
      fireEvent.keyUp(select, { key: ' ' });
      const style = window.getComputedStyle(chevron);
      expect(style.transform).toBe('rotate(180deg)');
    });

    test('should set isExpanded = true on `escape`', () => {
      fireEvent.keyUp(select, { key: 'Escape' });
      const style = window.getComputedStyle(chevron);
      expect(style.transform).toBe('');
    });
  });

  describe('Disabled Dropdown', () => {
    test('should be disabled', () => {
      const { container } = render(<Dropdown {...defaultProps} disabled />);

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
